#!/usr/bin/env python3

import sys
import random

num_randoms = int(sys.argv[1])

years = ["Freshman", "Sophomore", "Junior", "Senior"]

weighted_list = random.choices(years, weights=(10, 20, 40, 30), k=num_randoms)
act_scores = random.choices(range(18, 37), weights=(2, 3, 5, 10, 12, 12, 10, 10, 8, 7, 6, 5, 4, 3, 2, 2, 1, 1, 1), k=num_randoms)


f = open('HS_ACT_Data.txt', 'w')
f.write("HighSchool Year\tACT Score\n")
for year, score in zip(weighted_list, act_scores):
    f.write(year + '\t' + str(score) + '\n')

f.close()
