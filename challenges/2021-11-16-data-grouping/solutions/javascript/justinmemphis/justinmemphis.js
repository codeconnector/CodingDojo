/* 

# Data Grouping in a Large Text File

Given a tab delimited text file with two columns with a header: `['HighSchool Year', 'ACT Score']`, complete the following tasks:
1. Group the data by `HighSchool Year` and return the mean and median `ACT Score` of each year.
2. return the number of scores greater than 25.
3. return the number of sophomore scores greater than 25 and less than 30.
4. return the mean of only the sophomore and junior scores.

As a bonus, plot the mean score as a function high school year and determine if there is a correlation between test scores and high school year.

## Business Rules/Errata

- You will be provided a file in the challenge setup with the data.
- Use of external libraries, specifically data analysis libraries is encouraged.
- The data output can be a dictionary or a dataframe (hint hint).
- The data will be much larger than the example.
- Stretch: plot the data in a meaningful way.

## Examples

Here is an example of the data file (tab delimited text):
```
HighSchool Year    ACT Score
Sophomore          22
Junior             28
Freshman           21
Freshman           19
Junior             24
Senior             25
Senior             31
Sophomore          31
```
Outputs of grouping (dataframe example):

```
HighSchool Year  Mean     Median
Freshman         20       20
Sophomore        26.5     26.5
Junior           26       26
Senior           28       28
```

###
# outputs of:

#return the number of scores greater than 25.
3

#return the number of sophomore scores greater than 25 and less than 30.
0

#return the mean of only the sophomore and junior scores.
26.25

## Tackling This Challenge

1. Make sure you've got the required software on your machine: python 3.7+, pandas >= 1.0
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
4. The challenge will be live-coded in our weekly Tusday meetup in the `solution.py` file.
6. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

*/

function mean(input) {
	var sum = 0;
	for (var i = 0; i < input.length; i++) {
		sum += +input[i][1];
	};
	var result = sum / input.length;
	return +result.toFixed(2);
};

function median(input) {
	var numbers = [];
	for (var i = 0; i < input.length; i++) {
		numbers.push(+input[i][1]);
	};

	const sorted = Array.from(numbers).sort((a,b) => a - b);
	const middle = Math.floor(sorted.length / 2);

	if (sorted.length % 2 === 0) {
		return (sorted[middle -1] + sorted[middle]) / 2;
	}

	return sorted[middle];
};

function higherThan25(input) {
	let count = 0;
	for (var i = 0; i < input.length; i++) {
		if (+input[i][1] > 25) {
			count++;
		};
	};
	return count;
};

function twentyFiveToTwentyNine(input) {
	let count = 0;
	for (var i = 0; i < input.length; i++) {
		if (+input[i][1] > 25 && +input[i][1] < 30) {
			count++;
		};
	};
	return count;
};

function sortData(inputData, schoolYear, schoolYear2 = 'blah') {
	let result = inputData.filter(element => element[0] == schoolYear || element[0] == schoolYear2);
	return result;
};

function groupData() {
	// type your solution here
	fetch('http://justincarter.tech/HS_ACT_Data.txt')
		.then(response => response.text())
		.then((responseData) => {
			const data = responseData.split('\r\n').map((line) => line.split('\t'));
			//console.log(data);

			let freshmen = sortData(data, 'Freshman');
			let sophomores = sortData(data, 'Sophomore');
			let juniors = sortData(data, 'Junior');
			let seniors = sortData(data, 'Senior');
			/*
			console.log('Freshmen: ',freshmen.length,', ',
				'Sophomores: ',sophomores.length,', ',
				'Juniors: ',juniors.length,', ',
				'Seniors: ',seniors.length,', ',
				'Total: ',data.length);
			*/

			let sophomoresAndJuniors = sortData(data, 'Sophomore', 'Junior');
			//console.log('Sophomores and Juniors: ',sophomoresAndJuniors.length);

			console.log(`
HighSchool Year         Mean        	      Median
Freshman                ${mean(freshmen)}			${median(freshmen)}
Sophomores              ${mean(sophomores)}			${median(sophomores)}
Juniors  		${mean(juniors)}			${median(juniors)}
Seniors  		${mean(seniors)}			${median(seniors)}
			`);

			console.log('return the number of scores greater than 25: ',higherThan25(data));
			console.log('return the number of sophomore scores greater than 25 and less than 30: ',twentyFiveToTwentyNine(sophomores));
			console.log('return the mean of only the sophomore and junior scores: ',mean(sophomoresAndJuniors));
		});
};

groupData();

// module.exports = { groupData };

