# Dictionary Decompression

Given a nested dictionary, flatten the dictionary such that the keys of the final result are namespaced with a period between the original keys leading to the value.

## Business Rules/Errata

- ***Data Structure Required: Dictionary/Map/HashMap*** This challenge requires a language that supports a version of a Dictionary.
- Your function should be able to flatten dictionaries nested arbitrarily deeply.
- You can assume that none of the dictionary keys contain a period.
- The type of the dictionary values is not important to this exercise. Assume they will always be unsigned integers.

## Example

```
nested_dict = {
  "key": 3,
  "foo": {
    "a": 5,
    "bar": {
      "baz": 8
    }
  }
}

result = flattenDictionary(nested_dict)
print(result)

{
  "key": 3,
  "foo.a": 5,
  "foo.bar.baz": 8
}
```
