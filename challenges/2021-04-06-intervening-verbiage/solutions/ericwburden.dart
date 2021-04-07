// Requires the 'test' package to run tests
import 'package:test/test.dart';

int countWordsBetween(String start, String stop, String words) {
  var wordList = words.split(' ');
  var increment = 0;
  var wordsBetween = 0;

  for (var word in wordList) {
    if (word == stop && increment == 1) {
      return wordsBetween;
    }
    wordsBetween += increment; // Add the increment to the total
    if (word == start) {
      increment = 1;
    }
  }

  throw ArgumentError('One of ($start, $stop) not in word list: "$words"');
}

void main() {
  test('Correctly count words between', () {
    var words = 'I can see clearly now the rain is clearly gone';
    expect(countWordsBetween('I', 'clearly', words), 2);
    expect(countWordsBetween('I', 'gone', words), 8);
    expect(countWordsBetween('clearly', 'gone', words), 5);
    expect(countWordsBetween('clearly', 'clearly', words), 4);
  });

  test('Throws an exception if a start/stop word is not in the list', () {
    var words = "It's a beautiful day in the neighborhood";
    expect(() => countWordsBetween('a', 'night', words), throwsArgumentError);
    expect(() => countWordsBetween('awful', 'day', words), throwsArgumentError);
    expect(() => countWordsBetween('no', 'words', words), throwsArgumentError);
  });
}
