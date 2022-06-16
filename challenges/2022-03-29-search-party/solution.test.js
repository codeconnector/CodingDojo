const { currentLocation } = require('./solution')

test("Should return original location when square === 1", () => {
  expect(currentLocation([0, 0], 1)).toEqual([0, 0])
  expect(currentLocation([0, 1], 1)).toEqual([0, 1])
  expect(currentLocation([1, 0], 1)).toEqual([1, 0])
  expect(currentLocation([1, 1], 1)).toEqual([1, 1])
})

test("Should return location one to the right when square === 2", () => {
  expect(currentLocation([0, 0], 2)).toEqual([0, 1])
  expect(currentLocation([0, 1], 2)).toEqual([0, 2])
  expect(currentLocation([1, 0], 2)).toEqual([1, 1])
  expect(currentLocation([1, 1], 2)).toEqual([1, 2])
})

test("Should return location one to the left when square === 6", () => {
  expect(currentLocation([0, 0], 6)).toEqual([0, -1])
  expect(currentLocation([0, 1], 6)).toEqual([0,  0])
  expect(currentLocation([1, 0], 6)).toEqual([1, -1])
  expect(currentLocation([1, 1], 6)).toEqual([1,  0])
})

test("Should throw an error when square < 1", () => {
  expect(() => currentLocation([0, 0],    0)).toThrow()
  expect(() => currentLocation([0, 0],   -1)).toThrow()
  expect(() => currentLocation([0, 0],  -10)).toThrow()
  expect(() => currentLocation([0, 0], -999)).toThrow()
})

test("Should return correct location on diagonals", () => {
  expect(currentLocation([0, 0], 17)).toEqual([-2, -2])
  expect(currentLocation([0, 0], 13)).toEqual([-2,  2])
  expect(currentLocation([0, 0], 21)).toEqual([ 2, -2])
  expect(currentLocation([0, 0], 25)).toEqual([ 2,  2])
})

test("Should return correct location MANY squares away", () => {
  expect(currentLocation([0, 0], 3251000)).toEqual([711, 902])
})
