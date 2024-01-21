// part two of day two of AoC 2023

use std::fs::File;
use std::io::{self, BufRead};
use std::path::Path;

const RED: u8 = 12;
const GREEN: u8 = 13;
const BLUE: u8 = 14;

struct Game {
    id: u32,
    valid: bool,
}

fn main() {
    if let Ok(lines) = read_lines("./data.txt") {
        let mut sum = 0;
        for line in lines.flatten() {
            let game = parse_game_two(&line);
            if game.valid {
                sum += game.id
            }
        }
        println!("Sum of valid games: {}", sum);
    }
}

fn parse_game(line: &str) -> Game {
    // Game 1: 2 red, 2 green; 6 red, 3 green; 2 red, 1 green, 2 blue; 1 red
    let words: Vec<&str> = line.split_whitespace().collect();
    let game_id = words[1].replace(":", "").parse::<u32>().unwrap();

    let mut red = 0;
    let mut green = 0;
    let mut blue = 0;
    let mut valid = true;

    for i in 2..words.len() - 1 {
        match words[i + 1] {
            s if s.contains("red") => red += words[i].parse::<u8>().unwrap(),
            s if s.contains("green") => green += words[i].parse::<u8>().unwrap(),
            s if s.contains("blue") => blue += words[i].parse::<u8>().unwrap(),
            _ => (),
        }

        if red > RED || green > GREEN || blue > BLUE {
            valid = false;
            break;
        }

        if words[i + 1].contains(';') {
            red = 0;
            green = 0;
            blue = 0;
        }
    }

    Game { id: game_id, valid }
}

fn parse_game_two(line: &str) -> Game {
    // Game 1: 2 red, 2 green; 6 red, 3 green; 2 red, 1 green, 2 blue; 1 red
    let words: Vec<&str> = line.split_whitespace().collect();
    let game_id = words[1].replace(":", "").parse::<u32>().unwrap();

    let mut red = 0;
    let mut green = 0;
    let mut blue = 0;

    for i in 2..words.len() - 1 {
        match words[i + 1] {
            s if s.contains("red") => {
                let quantity = words[i].parse::<u32>().unwrap();
                if quantity > red {
                    red = quantity
                }
            }
            s if s.contains("green") => {
                let quantity = words[i].parse::<u32>().unwrap();
                if quantity > green {
                    green = quantity
                }
            }
            s if s.contains("blue") => {
                let quantity = words[i].parse::<u32>().unwrap();
                if quantity > blue {
                    blue = quantity
                }
            }
            _ => (),
        }
    }

    Game {
        id: blue * red * green,
        valid: true,
    }
}

fn read_lines<P>(filename: P) -> io::Result<io::Lines<io::BufReader<File>>>
where
    P: AsRef<Path>,
{
    let file = File::open(filename)?;
    Ok(io::BufReader::new(file).lines())
}
