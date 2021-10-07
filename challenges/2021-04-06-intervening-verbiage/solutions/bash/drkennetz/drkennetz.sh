#!/bin/bash

print_help() {
    >&2 echo "Usage: drkennetz.sh -t TEST_SENTENCE -s START_WORD -e END_WORD"
}

TEST_SENTENCE=""
START_WORD=""
END_WORD=""

while [[ ! -z "$1" ]]; do
    case $1 in
	-t) TEST_SENTENCE=$2; shift;;
	-s) START_WORD=$2; shift;;
	-e) END_WORD=$2; shift;;
	-h) print_help && exit 1;;
	*) >&2 echo "Unrecognized option $1" && print_help && exit 1;;
    esac
    shift
done
if [[ -z "$TEST_SENTENCE" ]] || [[ -z "$START_WORD" ]] || [[ -z "$END_WORD" ]]; then
    echo "Missing an argument" && print_help && exit 1
fi

result=$(echo "$TEST_SENTENCE" | grep -oiP '(?<='$START_WORD').*?(?='$END_WORD')')
echo $result | wc -w
