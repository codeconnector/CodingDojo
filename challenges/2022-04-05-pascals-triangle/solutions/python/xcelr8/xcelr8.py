'''
Each row in Pascal Triangle can be calculated using the "nCr = n! / (n-r)! * r!" formula
          0C0                           1
       1C0   1C1          ->         1     1
    2C0   2C1   2C2               1     2     1 
 3C0   3C1   3C2   3C3         1     3     3     1       
and so on...
'''
from math import factorial

# Returns the particular row from the Pascal Triangle
def pascalRow(row : int):
    arr = []    
    # every row index has row + 1 elements in pascal triangle, 0 <= row <= 30(both inclusive)
    for i in range(row + 1):
        # nCr = n! / ((n-r)! * r!)
        arr.append(factorial(row) // (factorial(row - i) * factorial(i)))
    return arr


# Returns the Pascal Triangle as a 2D array
def pascalTriangle(row : int):
    arr2D = []
    # every row index has row + 1 elements in pascal triangle, 0 <= row <= 30(both inclusive)
    for i in range(row + 1):
        arr = []
        for j in range(i + 1):
            # nCr = n! / ((n-r)! * r!)
            arr.append(factorial(i) // (factorial(i - j) * factorial(j)))
        arr2D.append(arr)
    return arr2D


# Returns the whole Pascal Triangle as is
def makePascalTriangle(row : int):
    triangle = ''
    for i in range(row + 1):
        # left margin which decreases with each row
        triangle += f' '  * (row - i)
        
        for j in range(i + 1):
            # nCr = n! / ((n-r)! * r!)
            triangle += f'{factorial(i) // (factorial(i - j) * factorial(j))} '
        
        # new line at the end of each row
        triangle += f'\n'
    # use rstrip to remove the newline after the last row
    return triangle.rstrip()