# Sum Arrays

Given an array of values, return the sum of the values.

## Business Rules/Errata

- Input must be an array.
- The array may be nested more than one level.
- All values must be integers.
- Solutions shall not use built in methods to flatten the array to one-dimension.

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

## System Requirements

If you're on a mac, ruby is installed. On windows it's possible through a couple of ways. 
[Ruby Installer](https://www.ruby-lang.org/en/documentation/installation/#rubyinstaller)
or [other options] (https://www.ruby-lang.org/en/documentation/installation/)


If you want to use `bundler` to install the test runner dependencies, [more info can be found here](https://bundler.io/)


You will need 'rspec' if you want to run the tests. From the project `src/` folder run either:
```
gem install rspec
```

or if you have bundler installed

```
bundle install
```

- Then to run the tests from the `src/` folder, to see the output simply type 
```
rspec spec --format doc
``` 