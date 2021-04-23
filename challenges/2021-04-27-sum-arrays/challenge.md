# Sum Arrays

Given an array of values, return the sum of the values.

## Business Rules/Errata

- Input must be an array.
- The array may be nested more than one level.
- All values must be integers.
- Solutions shall not use built in methods to flatten the array to one-dimension.
- You will need 'rspec' if you want to run the tests. From the project, in your terminal, run `gem install rspec` to get going. Then to run the tests from the `src/` folder, simply type:

```
rspec spec --format doc
```
- As always, Ruby may be new for folks. Don't hesitate to reach out to Lee or the #code channel to ask for help with your environment!

## Examples

One dimension:
```
sum_of_array([1,2,3,4,5]) => 15
```

Two dimensions:
```
sum_of_array([1,2,[1,2,3],4,5]) => 18
```

n dimensions: 

```
sum_of_array([1,[1,2,[3,4],5],[6,7]]) => 29
```
