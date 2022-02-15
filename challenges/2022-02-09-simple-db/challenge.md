# Simple Database Challenge

In the Simple Database problem, you'll implement an in-memory key/value
database similar to Redis. For simplicity's sake, instead of dealing with IO
you only need to implement the internal functionality as if it were a database
library.

## Guidelines

* You have 45 minutes to work on the implementation. Get as far as you can and
  be prepared to discuss your approach and how you would complete the exercise
  afterward.
* A suggested approach is to copy and paste a single unit test function at a
  time and get it to pass.
 
## Data Commands

The database accepts the following commands to operate on keys:

* `SET name value` – Set the variable `name` to the value `value`. For
  simplicity `value` may be an integer.
* `GET name` – Print out the value of the variable `name`, or `NULL` if that
  variable is not set.
* `UNSET name` – Unset the variable `name`, making it just like that variable
  was never set.

```
INPUT	            OUTPUT
--------------------------
SET ex 10
GET ex              10
UNSET ex
GET ex              NULL


INPUT	            OUTPUT
--------------------------
SET b 10
SET b 30
GET b               30
```

## Transaction Commands

In addition to the above data commands, your program should also support
database transactions by also implementing these commands:

* `BEGIN` – Open a new transaction block. **Transactions can be nested;** a
  `BEGIN` can be issued inside of an existing block.
* `ROLLBACK` – Undo commands issued in the current transaction, and closes it
  Returns an error if no transaction is in progress.
* `COMMIT` – Close **all** open transactions, permanently applying the changes
  made in them. Returns an error if no transaction is in progress.

Any data command that is run outside of a transaction should commit
immediately. Here are some example command sequences:

```
INPUT	          OUTPUT
------------------------
BEGIN
SET a 10
GET a             10
BEGIN
SET a 20
GET a             20
ROLLBACK
GET a             10
ROLLBACK
GET a             NULL
END

INPUT	          OUTPUT
------------------------
BEGIN
SET a 30
BEGIN
SET a 40
COMMIT
GET a             40
ROLLBACK          NO TRANSACTION
END


INPUT	          OUTPUT
------------------------
SET a 50
BEGIN
GET a             50
SET a 60
BEGIN
UNSET a
GET a             NULL
ROLLBACK
GET a             60
COMMIT
GET a             60
END
```

## Tackling This Challenge
1. Make sure you've got the required software on your machine: python3.6+ and a text editor.
1. The challenge will be live-coded in our weekly Tusday meetup in the `solution.py` file.
1. Run the tests to check your solution by navigating to this directory and running `./run-tests`.
1. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- python 3.6.0+
