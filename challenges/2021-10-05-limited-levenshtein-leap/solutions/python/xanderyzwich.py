"""
Limited Levenshtein Leap

Given a `start` word, and `end` word, and a "dictionary" of valid words, 
find the shortest transformation sequence from `start` to `end` 
such that only one letter is changed at each step of the sequence, 
and each transformed word exists in the dictionary. 
If there is no possible transformation, return NULL.

Business Rules/Errata

- The "dictionary" is simply an unordered array of strings.
- The `start`, `stop`, and "dictionary" words will all be the same length and all lowercase.
- Your function should return the sequence of words that represent the transformations from start to end.

"""
from unittest import TestCase


class WordNode:
    def __init__(self, word):
        self.word = word
        self.children = []

    def paths_to_descendent(self, descendent_word):
        paths = []
        if descendent_word == self.word:
            return [[self.word]]
        for child in self.children:
            child_paths = child.paths_to_descendent(descendent_word)
            for child_path in child_paths:
                paths.append([self.word, *child_path])
        return paths


    def __repr__(self, level=0):
        output = f'{self.word}'
        indent = '\t'*(level+1)
        output += ': {' if self.children else ''
        for child in self.children:
            output += f'\n{indent}{child.__repr__(level+1)}'
        output += '\n' + indent[:-1] + '}' if self.children else ''    
        return output


class WordTree:
    def __init__(self, start, stop, word_list):
        self.root = WordNode(start)
        queue, visited = [self.root], []
        while len(queue)>0:
            current_node = queue[0]
            del queue[0]
            if current_node.word not in [*visited, stop]:
                next_words = [w for w in word_list if is_one_off(current_node.word, w)]
                current_node.children = [WordNode(w) for w in next_words]
                queue.extend(current_node.children)     
                visited.append(current_node.word)

    def paths_to_leaf(self, leaf_word):
        return self.root.paths_to_descendent(leaf_word)


    def shortest_path_to_leaf(self, leaf_word):
        paths = [path for path in self.paths_to_leaf(leaf_word)]
        paths.sort(key=len)
        return None if 0 == len(paths) else paths[0]

    def __repr__(self):
        return self.root.__repr__()


def is_one_off(word1, word2):
    if len(word1) != len(word2):
        return False
    Levenshtein_distance = 0
    for a, b in zip(word1, word2):
        Levenshtein_distance += 1 if a!=b else 0
    return 1 == Levenshtein_distance


class TestOneOff(TestCase):
    # python3 -m unittest xanderyzwich.TestOneOff
    def test_true(self):
        data = [('aaa', 'baa'), ('bbb', 'bab'), ('ccc', 'cca')]
        for one, two in data:
            assert True == is_one_off(one, two)

    def test_length_mismatch(self):
        data = [
            ('a', 'aa'),
            ('bb', 'b')
        ]
        for one, two in data:
            assert False == is_one_off(one, two)

    def test_false(self):
        data = [
            ('aaa', 'aaa'),
            ('bbb', 'aaa'),
            ('ccc', 'aac')
        ]
        for one, two in data:
            assert False == is_one_off(one, two)


def get_shortest_path(start, stop, dictionary):
    return  WordTree(start, stop, dictionary).shortest_path_to_leaf(stop)


class TestShortestPath(TestCase):
    # can be run from this directory with "python3 -m unittest xanderyzwich.TestShortestPath"

    def test_one(self):
        args = 'dog', 'cat', ['dot', 'dop', 'dat', 'cat']
        expected = ['dog', 'dot', 'dat', 'cat']
        assert get_shortest_path(*args) == expected

    def test_two(self):
        args = 'dog', 'cat', ['dot', 'tod', 'dat', 'dar']
        expected = None
        assert get_shortest_path(*args) == expected
