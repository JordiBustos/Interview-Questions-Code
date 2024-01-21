use std::fs::File;
use std::io::{self, BufRead};
use std::path::Path;

fn main() {
    let is_part_two = true;
    // File data.txt must exist in the current path
    if let Ok(lines) = read_lines("./data.txt") {
        let mut sum: u64 = 0;

        for mut line in lines.flatten() {
            let mut first_char: Option<char> = None;
            let mut last_char: Option<char> = None;

            let patterns_to_replace = vec![
                "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
            ];
            let replacement_patterns = vec![
                "o1e", "t2o", "t3e", "f4r", "f5e", "s6x", "s7n", "e8t", "n9e",
            ];

            if is_part_two {
                for (pattern, replacement) in
                    patterns_to_replace.iter().zip(replacement_patterns.iter())
                {
                    line = line.replace(pattern, replacement);
                }
            }

            for ch in line.chars() {
                if ch.is_numeric() {
                    if first_char.is_none() {
                        first_char = Some(ch);
                    }
                    last_char = Some(ch);
                }
            }

            let concatenated_digits = match (first_char, last_char) {
                (Some(first), Some(last)) => format!("{}{}", first, last),
                (Some(single), None) => format!("{}{}", single, single),
                _ => continue, // Skip lines without numeric characters
            };

            if let Ok(digit_sum) = concatenated_digits.parse::<u64>() {
                sum += digit_sum;
            }
        }

        println!("Sum is {}", sum);
    }
}

fn read_lines<P>(filename: P) -> io::Result<io::Lines<io::BufReader<File>>>
where
    P: AsRef<Path>,
{
    let file = File::open(filename)?;
    Ok(io::BufReader::new(file).lines())
}
