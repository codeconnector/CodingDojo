"""
For use in puzzles
I would like to implement a stack that will allow for the following

stack += 'element' will append the element
stack -= 1 will "pop" 1 element from the end without returning it.
str(stack) will return a string concat of the elements in the stack from bottom (first) to top (most recent)
"""
from unittest import TestCase


class AbuseStack:

    def __init__(self, elements=[]):
        self.values = list(elements)

    def push(self, element):
        self.values.append(element)

    def pop(self, count=1):
        results = AbuseStack()
        for _ in range(count):
            results.push(self.values[-1])
            del self.values[-1]
        return results

    def __str__(self):
        return '.'.join(self.values)

    def __add__(self, element):
        """
        This is an abuse of this operator
        It's design is to borrow increment syntax
        stack += element is the same as stack.push(element)
        :param element: this will be pushed onto the stack
        :return: self
        """
        self.push(element)
        return self

    def __sub__(self, count):
        """
        This is an abuse of this operator
        It's design is to borrow decrement as a means of removing elements
        stack -=1  is the same as _ = stack.pop()
        :param count: number of elements to remove from stack
        :return: Self
        """
        self.pop(count)
        return self


class TestAbuseStack(TestCase):

    def test_init(self):
        stack = AbuseStack()
        print(stack)
        assert str(stack) == ''
        stack = AbuseStack(['fu', 'bar', 'baz'])
        assert str(stack) == 'fu.bar.baz'

    def test_push(self):
        stack = AbuseStack()
        stack.push('fu')
        assert str(stack) == 'fu'
        stack.push('bar')
        assert str(stack) == 'fu.bar'
        stack.push('baz')
        assert str(stack) == 'fu.bar.baz'

    def test_pop(self):
        stack = AbuseStack(['fu', 'bar', 'baz'])
        assert str(stack) == 'fu.bar.baz'
        stack.pop(1)
        assert str(stack) == 'fu.bar'
        stack.pop(2)
        assert str(stack) == ''

    def test_increment(self):
        stack = AbuseStack([])
        print(stack)
        assert str(stack) == ''
        stack += 'fu'
        assert str(stack) == 'fu'
        stack.push('bar')
        assert str(stack) == 'fu.bar'
        stack.push('baz')
        assert str(stack) == 'fu.bar.baz'

    def test_decrement(self):
        stack = AbuseStack(['fu', 'bar', 'baz'])
        stack -= 1
        assert str(stack) == 'fu.bar'
        stack -= 2
        assert str(stack) == ''

