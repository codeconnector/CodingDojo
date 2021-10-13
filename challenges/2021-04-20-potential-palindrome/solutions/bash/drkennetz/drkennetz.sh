#!/bin/bash

input=$1
output="false"

# If no output then return
if [ -z "$input" ]; then
    echo $output && exit 0
fi

oddcount=0
for (( i=0; i <${#input}; i++ )); do
    # extracts the number of times char is present in string such as cc, aa, rr, e
    res="${input//[^${input:$i:1}]}"
    # ${#res} returns the count of the string after the extraction and then ensures that it is greater than or equal to 1 (if there is only 1 occurrence, division by 2 will equal 0, meaning it is an odd)
    if [ ! $((${#res} / 2)) -ge 1 ]; then
	((oddcount++))
    fi
done

if [ "$oddcount" -gt 1 ]; then
    echo "false"
else
    echo "true"
fi

