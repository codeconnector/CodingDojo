The Maya civilization used a 365 day long year, called Haab, which had 19 months. Each of the first 18 months was 20 days long, and the names of the months were pop, no, zip, zotz, tzec, xul, yoxkin, mol, chen, yax, zac, ceh, mac, kankin, muan, pax, koyab, cumhu. Instead of having names, the days of the months were denoted by the numbers 0 through 19. The last month of Haab was called uayet and had 5 days denoted by the numbers 0 through 4.

For religious purposes, the Maya used another calendar in which the year was called Tzolkin (holy year). The year was divided into thirteen periods, each 20 days long. Each day was denoted by a pair consisting of a number and the name of the day. They used 13 numbers, and 20 day names: imix, ik, akbal, kan, chicchan, cimi, manik, lamat, muluk, ok, chuen, eb, ben, ix, mem, cib, caban, eznab, canac, ahau. Both the numbers and the names go in independent cycles.

Notice that each day has an unambiguous description. For example, at the beginning of the year the days were described as follows:

```
1 imix, 2 ik, 3 akbal, 4 kan, 5 chicchan, 6 cimi, 7 manik, 8 lamat, 9 muluk, 10 ok, 11 chuen, 12 eb,
13 ben, 1 ix, 2 mem, 3 cib, 4 caban, 5 eznab, 6 canac, 7 ahau
```

and again in the next period

```
8 imix, 9 ik, 10 akbal...
```

Years (both Haab and Tzolkin) were denoted by numbers 0, 1, ..., where the number 0 was the beginning of the world. Thus, the first day was:

```
Haab: 0. pop 0
Tzolkin: 1 imix 0
```

Write a function to convert the dates from the Haab calendar to the Tzolkin calendar.

The signature of your function should be:

```python
def solve(haab_date: str) -> str
```

You may implement other functions called by your `solve` function if you wish.

## Input Spec

The function should take one argument: the date in Haab which is a string in the following format:

```
NumberOfTheDay. Month Year
```

The year should be less than 5000. If the year is 5000 or more or is negative, empty string should be returned. Empty string should also be returned if the input is an impossible date (for example, `5. uayet 0`).

## Output Spec

The return value is the date in Tzolkin which is a string in the following format:

```
Number NameOfTheDay Year
```

## Sample Input & Output

| Sample number | Input            | Output          |
| ------------- | ---------------- | --------------- |
| 1             | `"10. zac 0"`    | `"3 chuen 0"`   |
| 2             | `"0. pop 0"`     | `"1 imix 0"`    |
| 3             | `"10. zac 1995"` | `"9 cimi 2801"` |

## Tackling This Challenge
1. Make sure you've got the required software on your machine: python 3.7.0+ and pytest<7,>=5.
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Navigate to this directory and run `pip3 install` to ensure required libraries.
4. The challenge will be live-coded in our weekly Tuesday meetup in the `solution.py` file.
5. Run the tests to check your solution by navigating to this directory and running `python3 setup.py test`.
6. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to
tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements:

- python 3.7.0+
- pytest >=5, <=7
