"""
    Elo rating system
    ~~~

    This module contains the Elo rating system. Based on the implementation given by Klinkenberg in
    https://www.researchgate.net/publication/220140733_Computer_adaptive_practice_of_Maths_ability_using_a_new_item_response_model_for_on_the_fly_ability_and_difficulty_estimation
    The recommended exercises are the ones that the user is expected to answer correctly with a probability of 0.75.
    If the exercise is timed we have to take in consideration the time spent by the user in the exercise, even if the student is able to 
    answer a hard exercise correctly, if he takes too long to answer it, the student will gain fewer points.
"""
import random
import matplotlib.pyplot as plt


class Player:
    def __init__(self, elo, U, days_since_last_answered):
        self.elo = elo
        self.U = U
        self.days_since_last_answered = days_since_last_answered


class Elo:
    def __init__(self, k_factor=10, k_plus=4, k_minus=0.5):
        self.k_factor = k_factor
        self.k_plus = k_plus
        self.k_minus = k_minus

    def _expected(self, a, b):
        """
        Computes the expected score of the user in the exercise.
        :param a: Elo rating of the user
        :param b: Elo rating of the exercise
        :return: Expected score of the user in the exercise
        """
        diff = float(b) - float(a)
        return 1 / (1 + 10 ** (diff / 400))

    def _expected_shifted(self, a, b, n):
        """
        Computes the expected score of the user in the exercise.
        :param a: Elo rating of the user
        :param b: Elo rating of the exercise
        :param n: number of answers in multiple choice
        :return: Expected score of the user in the exercise
        """
        diff = float(b) - float(a)
        return 1 / n + (1 - 1 / n) / (1 + 10 ** (diff / 400))

    def _compute_uncertainty(self, p):
        """
        Computes the uncertainties of the player.
        :param p: Player object representing the user
        """
        return p.U - 1 / 40 + 1 / 30 * p.days_since_last_answered

    def _compute_k_factor(self, p):
        """
        Computes the k factor of the player.
        :param p: Player object representing the user or exercise
        """
        U = self._compute_uncertainty(p)
        return self.k_factor * (1 + self.k_plus * U - self.k_minus * U)

    def update(
        self,
        user,
        exercise,
        score=1,
        is_timed=False,
        time_limit=None,
        time_spent=None,
        is_multiple_choice=False,
        n=None,
    ):
        """
        Updates the Elo rating of the user and the exercise.
        :param user: Player object representing the user
        :param exercise: Player object representing the exercise
        :param score: Score of the user in the exercise. 1 if correct, 0 if incorrect
        :param is_timed: Boolean indicating if the exercise is timed
        :param time_limit: Time limit of the exercise in seconds
        :param time_spent: Time spent by the user in the exercise in seconds
        :param is_multiple_choice: Boolean indicating if the exercise is multiple choice
        :return: Tuple containing the new Elo rating of the user and the exercise
        """
        expected_a = (
            self._expected(user.elo, exercise.elo)
            if not is_multiple_choice
            else self._expected_shifted(user.elo, exercise.elo, n)
        )
        expected_b = 1 - expected_a

        if is_timed:
            if time_limit == 0:
                raise ZeroDivisionError(
                    "time_limit cannot be zero if exercise is timed"
                )

            a = 1 / time_limit
            score = (2 * score - 1) * a * (time_limit - time_spent)

        new_a = user.elo + (self._compute_k_factor(user)) * (score - expected_a)
        new_b = exercise.elo + (self._compute_k_factor(exercise)) * (
            (1 - score) - expected_b
        )

        return new_a, new_b


def test_cases():
    """
    Runs the test cases for the Elo rating system.
    """
    # Test Case 1: Basic Elo Update
    user1 = Player(elo=1200, U=0.05, days_since_last_answered=10)
    exercise1 = Player(elo=1000, U=0.03, days_since_last_answered=15)

    elo = Elo()
    new_elo_user1, new_elo_exercise1 = elo.update(user1, exercise1, score=0)

    print("Test Case 1:")
    print(f"New Elo for User 1: {new_elo_user1}")
    print(f"New Elo for Exercise 1: {new_elo_exercise1}")
    print()

    # Test Case 2: Timed Elo Update
    user2 = Player(elo=1400, U=0.08, days_since_last_answered=5)
    exercise2 = Player(elo=1200, U=0.04, days_since_last_answered=12)

    new_elo_user2, new_elo_exercise2 = elo.update(
        user2, exercise2, score=0, is_timed=True, time_limit=10, time_spent=8
    )

    print("Test Case 2:")
    print(f"New Elo for User 2: {new_elo_user2}")
    print(f"New Elo for Exercise 2: {new_elo_exercise2}")
    print()

    # Test Case 3: Exercise is too hard for the student but the student answers it correctly
    user3 = Player(elo=1000, U=0.6, days_since_last_answered=0)
    exercise3 = Player(elo=2000, U=0.02, days_since_last_answered=20)

    new_elo_user3, new_elo_exercise3 = elo.update(
        user3, exercise3, score=1, is_timed=True, time_limit=3600, time_spent=1200
    )

    print("Test Case 3:")
    print(f"New Elo for User 3: {new_elo_user3}")
    print(f"New Elo for Exercise 3: {new_elo_exercise3}")
    print()

    # Test Case 4: Exercise is too easy for the student but the student answers it incorrectly
    user4 = Player(elo=2000, U=0.2, days_since_last_answered=7)
    exercise4 = Player(elo=1000, U=0.6, days_since_last_answered=0)

    new_elo_user4, new_elo_exercise4 = elo.update(
        user4, exercise4, score=1, is_timed=True, time_limit=3600, time_spent=3600
    )

    print("Test Case 4:")
    print(f"New Elo for User 4: {new_elo_user4}")
    print(f"New Elo for Exercise 4: {new_elo_exercise4}")
    print()


def plot_elo_over_time(users, exercises, is_timed, time_limit, num_steps=100):
    num_matches = min(len(users), len(exercises))
    elo_values = [[] for _ in range(num_matches)]
    time_values = [[] for _ in range(num_matches)]
    initial_elo_labels = []

    elo = Elo()

    for i in range(num_matches):
        initial_elo_labels.append(f"Player {i+1} (Elo: {users[i].elo})")
        initial_elo_labels.append(f"Exercise {i+1} (Elo: {exercises[i].elo})")

    for step in range(num_steps + 1):
        current_time_spent = step / num_steps * time_limit

        for i in range(num_matches):
            elo_gain = elo.update(
                users[i],
                exercises[i],
                is_timed=is_timed,
                time_limit=time_limit,
                time_spent=current_time_spent,
            )[0]

            elo_values[i].append(elo_gain)
            time_values[i].append(current_time_spent)

    for i in range(num_matches):
        plt.plot(time_values[i], elo_values[i], marker="o", label=f"Match {i+1}")

    plt.title("Elo Gain Over Time for Multiple Matches")
    plt.xlabel("Time Spent (s)")
    plt.ylabel("Elo Gain")
    plt.legend(initial_elo_labels, loc="upper left", bbox_to_anchor=(1, 1))
    plt.grid(True)
    plt.show()


def generate_players_and_exercises(num_players, num_exercises):
    players = [
        Player(
            elo=random.randint(1000, 2000),
            U=random.uniform(0.01, 1),
            days_since_last_answered=random.randint(1, 30),
        )
        for _ in range(num_players)
    ]
    exercises = [
        Player(
            elo=random.randint(1000, 3000),
            U=random.uniform(0.01, 1),
            days_since_last_answered=random.randint(1, 30),
        )
        for _ in range(num_exercises)
    ]
    return players, exercises


if __name__ == "__main__":
    num_players = 5
    num_exercises = 5

    users, exercises = generate_players_and_exercises(num_players, num_exercises)

    for user in users:
        print(f"User Elo: {user.elo}, User Uncertainties: {user.U}")

    for exercise in exercises:
        print(
            f"Exercise Elo: {exercise.elo}, Exercise Uncertainties: {exercise.U}, Days Since Last Answered: {exercise.days_since_last_answered}"
        )

    print()

    plot_elo_over_time(users, exercises, is_timed=True, time_limit=1000)
