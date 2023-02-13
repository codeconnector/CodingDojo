import unittest

def valid_starting_city(distances, fuel, mpg):
    pass

class TestValidStartingCity(unittest.TestCase):
    """ test cases are setup such that you don't need to actually look at the tests. Each case is structured as a dict with test name
        with a dict containing the inputs "distances", "fuel", "mpg", and expected output "output".
        tests can be run with:
        python3 -m unittest solution.py
        A good first test to ensure it is working is to just add return 4 to the function valid_starting_city to see which tests pass
    """
    def setUp(self):
        self.tc = {"example": {"distances": [5, 25, 15, 10, 15],
                               "fuel": [1, 2, 1, 0, 3],
                               "mpg": 10,
                               "output": 4},
                   "close_nums": {"distances": [10, 20, 10, 15, 5, 15, 25],
                                  "fuel": [0, 2, 1, 0, 0, 1, 1],
                                  "mpg": 20,
                                  "output": 1},
                   "large_outlier": {"distances": [30, 25, 5, 100, 40],
                                     "fuel": [3, 2, 1, 0, 4],
                                     "mpg": 20,
                                     "output": 4},
                   "1g": {"distances": [1, 3, 10, 6, 7, 7, 3, 4],
                          "fuel": [1, 1, 1, 1, 1, 1, 1, 1],
                          "mpg": 5,
                          "output": 6},
                   "small_set": {"distances": [5, 2, 3],
                                 "fuel": [1, 0, 1],
                                 "mpg": 5,
                                 "output": 2},
                   "min_array_size": {"distances": [4, 6],
                                      "fuel": [1, 9],
                                      "mpg": 1,
                                      "output": 1},
                   "big_spread": {"distances": [30, 40, 10, 10, 17, 13, 50, 30, 10, 40],
                                  "fuel": [1, 2, 0, 1, 1, 0, 3, 1, 0, 1],
                                  "mpg": 25,
                                  "output": 1},
                   "first_index": {"distances": [30, 40, 10, 10, 17, 13, 50, 30, 10, 40],
                                   "fuel": [10, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                                   "mpg": 25,
                                   "output": 0},
                   "last_index": {"distances": [15, 20, 25, 30, 35, 5],
                                  "fuel": [0, 3, 0, 0, 1, 1],
                                  "mpg": 26,
                                  "output": 5},
                   "same_distances": {"distances": [10, 10, 10, 10],
                                      "fuel": [1, 2, 3, 4],
                                      "mpg": 4,
                                      "output": 2},
        }
                           
                           

    def test_example(self):
        self.assertEqual(valid_starting_city(self.tc["example"]["distances"], self.tc["example"]["fuel"], self.tc["example"]["mpg"]),
                         self.tc["example"]["output"])

    def test_close_nums(self):
        self.assertEqual(valid_starting_city(self.tc["close_nums"]["distances"], self.tc["close_nums"]["fuel"], self.tc["close_nums"]["mpg"]),
                         self.tc["close_nums"]["output"])

    def test_large_outlier(self):
        self.assertEqual(valid_starting_city(self.tc["large_outlier"]["distances"], self.tc["large_outlier"]["fuel"], self.tc["large_outlier"]["mpg"]),
                         self.tc["large_outlier"]["output"])

    def test_1g(self):
        self.assertEqual(valid_starting_city(self.tc["1g"]["distances"], self.tc["1g"]["fuel"], self.tc["1g"]["mpg"]),
                         self.tc["1g"]["output"])

    def test_small_set(self):
        self.assertEqual(valid_starting_city(self.tc["small_set"]["distances"], self.tc["small_set"]["fuel"], self.tc["small_set"]["mpg"]),
                         self.tc["small_set"]["output"])

    def test_min_array_size(self):
        self.assertEqual(valid_starting_city(self.tc["min_array_size"]["distances"], self.tc["min_array_size"]["fuel"], self.tc["min_array_size"]["mpg"]),
                         self.tc["min_array_size"]["output"])

    def test_big_spread(self):
        self.assertEqual(valid_starting_city(self.tc["big_spread"]["distances"], self.tc["big_spread"]["fuel"], self.tc["big_spread"]["mpg"]),
                         self.tc["big_spread"]["output"])

    def test_first_index(self):
        self.assertEqual(valid_starting_city(self.tc["first_index"]["distances"], self.tc["first_index"]["fuel"], self.tc["first_index"]["mpg"]),
                         self.tc["first_index"]["output"])

    def test_last_index(self):
        self.assertEqual(valid_starting_city(self.tc["last_index"]["distances"], self.tc["last_index"]["fuel"], self.tc["last_index"]["mpg"]),
                         self.tc["last_index"]["output"])

    def test_same_distances(self):
        self.assertEqual(valid_starting_city(self.tc["same_distances"]["distances"], self.tc["same_distances"]["fuel"], self.tc["same_distances"]["mpg"]),
                         self.tc["same_distances"]["output"])
                                             
    
    def tearDown(self):
        pass
