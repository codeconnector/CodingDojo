# Names of the months in the Haab calendar
HAAB_MONTHS  = [
    "pop",    "no",     "zip",  "zotz", "tzec",  "xul",
    "yoxkin", "mol",    "chen", "yax",  "zac",   "ceh",
    "mac",    "kankin", "muan", "pax",  "koyab", "cumhu",
    "uayet"
]

# Names of the days in the Tzolkin calendar
TZOLKIN_DAYS = [
    "imix",  "ik",    "akbal", "kan",   "chicchan",
    "cimi",  "manik", "lamat", "muluk", "ok", 
    "chuen", "eb",    "ben",   "ix",    "mem",
    "cib",   "caban", "eznab", "canac", "ahau"
]

# Each day in the Tzolkin calendar has a unique name formed from the numbers
# 1-13 and the day names. Produces a list of the 260 names of days in the 
# Tzolkin year.
TZOLKIN_CYCLE = list(zip(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] * 20,
    TZOLKIN_DAYS * 13
))

# Step 1a: Parse Haab date
# Step 1b: Convert Haab date to days elapsed from calendar start
def haab_to_days(haab_date: str) -> int:
    # Parsing the Haab date into values
    day_number_dirty, month_name, year_number_str = haab_date.split()
    year_number = int(year_number_str)
    day_number_clean = int(day_number_dirty[:-1])

    # Only year values from 0 - 4999 (inclusive) are valid
    if not 0 <= year_number < 5000:
        raise Exception("Try again!")


    # Calculate the number of days in whole years elapsed
    days_so_far = year_number * 365

    # Add the number of days elapsed so far in the current year up to the
    # beginning of the current month.
    num_months_passed = HAAB_MONTHS.index(month_name)
    days_so_far += num_months_passed * 20

    # A valid day value will be in the range 0-19 (inclusive) for all months
    # except 'uayet', where the value is in the range 0-4 (inclusive).
    if not 0 <= day_number_clean < 20:
        raise Exception("Ya dun goofed")
    if day_number_clean > 4 and num_months_passed > 17:
        raise Exception("Ya dun goofed again!")

    # Add number of days elapsed in the current month
    days_so_far += day_number_clean

    return days_so_far


# Step 2: Convert days elapsed to Tzolkin date
def days_to_tzolkin(days: int) -> str:
    # Divide by 260 days for the number of whole years elapsed.
    years_elapsed, days_elapsed = divmod(days, 260)

    # Lookup the day number/name combination based on the number of days
    # elapsed in the current Tzolkin year.
    day_num, day_name = TZOLKIN_CYCLE[days_elapsed]

    return f"{day_num} {day_name} {years_elapsed}"




# Convert dates in the Haab format to dates in the Tzolkin format. Invalid
# inputs return an empty string.
def solve(haab_date: str) -> str:
    try:
        days_elapsed = haab_to_days(haab_date)
        return days_to_tzolkin(days_elapsed)
    except:
        return ""
