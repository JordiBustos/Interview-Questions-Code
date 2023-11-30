"""
    Elo rating system
    ~~~

    This module contains the Elo rating system. Based on the implementation given by Klinkenberg in
    https://www.researchgate.net/publication/220140733_Computer_adaptive_practice_of_Maths_ability_using_a_new_item_response_model_for_on_the_fly_ability_and_difficulty_estimation
    The recommended exercises are the ones that the user is expected to answer correctly with a probability of 0.75.
    If the exercise is timed we have to take in consideration the time spent by the user in the exercise, even if the student is able to 
    answer a hard exercise correctly, if he takes too long to answer it, the student will gain fewer points.
"""
import math


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
        print(diff)
        return 1 / (1 + 10 ** (diff / 400))

    def _compute_uncertainties(self, p):
        """
        Computes the uncertainties of the player.
        :param p: Player object representing the user
        """
        return p.U - 1 / 40 + 1 / 30 * p.days_since_last_answered

    def _compute_k_factor(self, p):
        """
        Computes the k factor of the player.
        :param p: Player object representing the user
        """
        U = self._compute_uncertainties(p)
        return self.k_factor * (1 + self.k_plus * U - self.k_minus * U)

    def _expected_timed(self, user, exercise):
        """
        Computes the expected score of the user in the exercise if the exercise is timed.
        :param user: elo rating of the user
        :param exercise: elo rating of the exercise
        :return: Expected score of the user in the exercise
        """
        diff = float(user) - float(exercise)
        if diff == 0:
            return 0.5  # draw and avoid division by zero
        exp_term = math.exp(2 * diff)
        first_term = (exp_term + 1) / (exp_term - 1)

        return float(first_term) - 1 / diff

    def update(
        self, user, exercise, score=1, is_timed=False, time_limit=None, time_spent=None
    ):
        """
        Updates the Elo rating of the user and the exercise.
        :param user: Player object representing the user
        :param exercise: Player object representing the exercise
        :param score: Score of the user in the exercise. 1 if correct, 0 if incorrect
        :param is_timed: Boolean indicating if the exercise is timed
        :param time_limit: Time limit of the exercise in seconds
        :param time_spent: Time spent by the user in the exercise in seconds
        :return: Tuple containing the new Elo rating of the user and the exercise
        """
        expected_a = self._expected(user.elo, exercise.elo)
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


if __name__ == "__main__":
    test_cases()
