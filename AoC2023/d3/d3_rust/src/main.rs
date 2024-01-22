use std::collections::HashSet;
use std::fs::File;
use std::io::{self, BufRead};
use std::path::Path;
use std::time::Instant;

fn main() {
    let now = Instant::now();
    if let Ok(lines) = read_lines("./data.txt") {
        let mut schematic: Vec<Vec<char>> = Vec::new();
        let mut processed_locations: &mut HashSet<(usize, usize)> = &mut HashSet::new();
        let mut processed_locations_gear: &mut HashSet<(usize, usize)> = &mut HashSet::new();
        for line in lines.flatten() {
            schematic.push(line.chars().collect());
        }

        let sum = calculate_sum_of_part_numbers(
            schematic,
            &mut processed_locations,
            &mut processed_locations_gear,
        );
    }
    let elapsed = now.elapsed();
    println!(
        "Elapsed: {} ms",
        elapsed.as_secs() * 1000 + u64::from(elapsed.subsec_millis())
    );
}

const DIRECTIONS: [(i8, i8); 8] = [
    (-1, -1), // NW
    (-1, 0),  // N
    (-1, 1),  // NE
    (0, -1),  // W
    (0, 1),   // E
    (1, -1),  // SW
    (1, 0),   // S
    (1, 1),   // SE
];

fn is_valid_symbol(symbol: char) -> bool {
    !(symbol.is_digit(10) || symbol == '.')
}

fn calculate_sum_of_part_numbers(
    schematic: Vec<Vec<char>>,
    processed_locations: &mut HashSet<(usize, usize)>,
    processed_locations_gear: &mut HashSet<(usize, usize)>,
) -> i32 {
    let mut total_sum = 0;
    let mut ratio = 0;

    for i in 0..schematic.len() {
        let mut j = 0;

        while j < schematic[i].len() {
            if is_valid_symbol(schematic[i][j]) {
                total_sum += find_adjacent_numbers(&schematic, (i, j), processed_locations);
            }

            j += 1;
        }
    }

    println!("Ratio is {}", ratio);
    println!("Sum is {}", total_sum);

    total_sum
}

fn find_adjacent_numbers(
    schematic: &Vec<Vec<char>>,
    location: (usize, usize),
    processed_locations: &mut HashSet<(usize, usize)>,
) -> i32 {
    let mut total_sum: i32 = 0;

    for (i, j) in DIRECTIONS.iter() {
        let new_location = (
            location.0 as isize + *i as isize,
            location.1 as isize + *j as isize,
        );

        if new_location.0 < 0
            || new_location.1 < 0
            || new_location.0 >= schematic.len() as isize
            || new_location.1 >= schematic[0].len() as isize
            || !schematic[new_location.0 as usize][new_location.1 as usize].is_digit(10)
            || processed_locations.contains(&(new_location.0 as usize, new_location.1 as usize))
        {
            continue;
        }

        let mut tmp_number =
            schematic[new_location.0 as usize][new_location.1 as usize].to_string();
        let mut init_i = new_location.0 as usize;
        let mut init_j = new_location.1 as usize + 1;

        while init_j < schematic[0].len() && schematic[init_i][init_j].is_digit(10) {
            tmp_number.push(schematic[init_i][init_j]);
            processed_locations.insert((init_i, init_j));
            init_j += 1;
        }

        init_j = new_location.1 as usize;

        while init_j > 0 && schematic[init_i][init_j - 1].is_digit(10) {
            tmp_number.insert(0, schematic[init_i][init_j - 1]);
            processed_locations.insert((init_i, init_j - 1));
            init_j -= 1;
        }

        total_sum += tmp_number.parse::<i32>().unwrap();
    }

    total_sum
}

fn read_lines<P>(filename: P) -> io::Result<io::Lines<io::BufReader<File>>>
where
    P: AsRef<Path>,
{
    let file = File::open(filename)?;
    Ok(io::BufReader::new(file).lines())
}
