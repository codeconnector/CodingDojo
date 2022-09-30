def find_crossroads(input):
    rowsDict = {}
    columnsDict = {}
    cross_roads = []

    
    for point in input:
        row = point[0]
        column = point[1]
        
        #count and increment recurring longitude and latitude values
        rowsDict[row] = rowsDict[row] + 1 if(row in rowsDict.keys()) else 1
        columnsDict[column] = columnsDict[column] + 1 if(column in columnsDict.keys()) else 1
    
    #find and return intersections 
    for _row in rowsDict:
        if(rowsDict[_row] > 1):
            for _column in columnsDict:
                if(columnsDict[_column] > 1):
                    cross_roads.append(tuple((_row,_column)))
                else:
                    continue
        else: 
            continue

    return cross_roads

