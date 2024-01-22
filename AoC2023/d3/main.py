import time

DIRECTIONS: list = [
    (-1, -1),  # Top-left
    (-1, 0),  # Up
    (-1, 1),  # Top-right
    (0, -1),  # Left
    (0, 1),  # Right
    (1, -1),  # Bottom-left
    (1, 0),  # Down
    (1, 1),  # Bottom-right
]


def is_valid_symbol(char: str) -> bool:
    return not (char.isdigit() or char == ".")


def is_gear(char: str) -> bool:
    return char == "*"


def find_gear_ratio(
    row: int, col: int, schematic: list, processed_locations: list
) -> float:
    gears: list = []
    for dx, dy in DIRECTIONS:
        new_row, new_col = row + dx, col + dy

        if (
            0 <= new_row < len(schematic)
            and 0 <= new_col < len(schematic[new_row])
            and schematic[new_row][new_col].isdigit()
            and (new_row, new_col) not in processed_locations
        ):
            tmp_number = f"{schematic[new_row][new_col]}"
            init_i, init_j = new_row, new_col + 1
            processed_locations.add((new_row, new_col))

            while (
                init_j < len(schematic[new_row]) and schematic[init_i][init_j].isdigit()
            ):
                tmp_number += schematic[init_i][init_j]
                processed_locations.add((init_i, init_j))
                init_j += 1

            init_j = new_col - 1

            while 0 <= init_j and schematic[init_i][init_j].isdigit():
                tmp_number = f"{schematic[init_i][init_j]}" + tmp_number
                processed_locations.add((init_i, init_j))
                init_j -= 1

            gears.append(int(tmp_number))
    print(gears)
    if len(gears) == 2:
        return gears[0] * gears[1]
    return 0


def find_adjacent_numbers(row, col, schematic, processed_locations):
    sum: int = 0
    for dx, dy in DIRECTIONS:
        new_row, new_col = row + dx, col + dy

        if (
            0 <= new_row < len(schematic)
            and 0 <= new_col < len(schematic[new_row])
            and (new_row, new_col) not in processed_locations
            and schematic[new_row][new_col].isdigit()
        ):
            processed_locations.add((new_row, new_col))
            tmp_number = f"{schematic[new_row][new_col]}"
            init_i, init_j = new_row, new_col + 1

            while (
                init_j < len(schematic[new_row]) and schematic[init_i][init_j].isdigit()
            ):
                tmp_number += schematic[init_i][init_j]
                processed_locations.add((init_i, init_j))
                init_j += 1

            init_j = new_col - 1

            while 0 <= init_j and schematic[init_i][init_j].isdigit():
                tmp_number = f"{schematic[init_i][init_j]}" + tmp_number
                processed_locations.add((init_i, init_j))
                init_j -= 1

            sum += int(tmp_number)

    return sum


def calculate_sum_of_part_numbers(
    schematic, processed_locations, processed_locations_gears
):
    total_sum = 0
    ratio = 0
    for i, row in enumerate(schematic):
        j = 0
        while j < len(row):
            if is_gear(row[j]):
                ratio += find_gear_ratio(i, j, schematic, processed_locations_gears)

            if is_valid_symbol(row[j]):
                total_sum += find_adjacent_numbers(i, j, schematic, processed_locations)
            j += 1
    return total_sum, ratio


def main():
    start_time = time.time()
    with open("data.txt") as file:
        engine_schematic = file.read()

    schematic = [list(line) for line in engine_schematic.split("\n")]
    processed_locations = set()
    processed_locations_gears = set()

    total_sum, ratio = calculate_sum_of_part_numbers(
        schematic, processed_locations, processed_locations_gears
    )
    print(f"Sum of part numbers is {total_sum}")
    print(f"Gear ratio is {ratio}")
    print(f"Execution time: {time.time() - start_time}")


if __name__ == "__main__":
    main()
