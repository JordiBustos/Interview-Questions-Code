use std::collections::HashMap;
use std::fs::File;
use std::io::{self, BufRead, BufReader, Lines};
use std::path::Path;
use std::time::Instant;

fn main() {
    if let Ok(lines) = read_lines("./data.txt") {
        let mut total: u32 = 0;
        let mut cards: Vec<u32> = vec![1; 199];

        for (i, line) in lines.flatten().enumerate() {
            let splitted_line: Vec<&str> = line.split_whitespace().collect();
            let winners_in_line = get_card_points(splitted_line);

            if winners_in_line == 0 {
                continue;
            }
            // part 2
            for j in 0..winners_in_line {
                let k = i as usize;
                let n = j as usize;
                cards[k + n + 1] += cards[k]
            }

            // part 1
            total += u32::pow(2, winners_in_line - 1);
        }
        println!("Total points: {}", total);
        println!("Total cards: {}", cards.iter().sum::<u32>());
    }
}

fn get_card_points(words: Vec<&str>) -> u32 {
    let mut winner_numbers = HashMap::new();
    let mut flag = false;
    let mut winners: u32 = 0;

    for i in 2..words.len() {
        if words[i] == "|" {
            flag = true;
            continue;
        }
        if !flag {
            winner_numbers.insert(words[i].parse::<u32>().unwrap(), 0);
        } else if winner_numbers.contains_key(&words[i].parse::<u32>().unwrap()) {
            winners += 1;
        }
    }
    if winners == 0 {
        return 0;
    }

    winners
}

fn read_lines<P>(filename: P) -> io::Result<Lines<BufReader<File>>>
where
    P: AsRef<Path>,
{
    let file = File::open(filename)?;
    Ok(io::BufReader::new(file).lines())
}
