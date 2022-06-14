"""
# Dictionary Decompression

Given a nested dictionary, flatten the dictionary such that the keys of the final result are namespaced with a period between the original keys leading to the value.

## Business Rules/Errata

- ***Data Structure Required: Dictionary/Map/HashMap*** This challenge requires a language that supports a version of a Dictionary.
- Your function should be able to flatten dictionaries nested arbitrarily deeply.
- You can assume that none of the dictionary keys contain a period.
- The type of the dictionary values is not important to this exercise. Assume they will always be unsigned integers.
"""

from unittest import TestCase


def flatten_dict(input_dict):
    output_dict = {}
    # Do something
    return output_dict


class TestFlattenDict(TestCase):

    def test_flat(self):
        flat = {'fu': 1}
        assert flatten_dict(flat) == flat
        flat['bar'] = 2
        assert flatten_dict(flat) == flat

    def test_nested(self):
        nested = {
            'fu': {
                'bar': 'baz',
            },
        }
        flat = {
            'fu.bar': 'baz',
        }
        assert flatten_dict(nested) == flat
        nested['fu']['thing'] = {'other': 'value'}
        flat['fu.thing.other'] = 'value'
        assert flatten_dict(nested) == flat

    def test_example(self):
        nested_dict = {
            'key': 3,
            'foo': {
                'a': 5,
                'bar': {
                    'baz': 8,
                }
            }
        }
        flat_dict = {
            "key": 3,
            "foo.a": 5,
            "foo.bar.baz": 8,
        }
        assert flatten_dict(nested_dict) == flat_dict

