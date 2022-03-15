const { longestCommonPrefix } = require('./solution')

test("Should return any single letter as-is", () => {
  expect(longestCommonPrefix(["a"])).toEqual("a")
  expect(longestCommonPrefix(["b"])).toEqual("b")
  expect(longestCommonPrefix(["z"])).toEqual("z")
})

test("Should identify single-letter prefixes", () => {
  let actual1 = longestCommonPrefix(["apple", "aardvark"])
  expect(actual1).toEqual("a")

  let actual2 = longestCommonPrefix(["garbage", "graendal", "gift"])
  expect(actual2).toEqual("g")

  let actual3 = longestCommonPrefix(["eagle", "easter", "easy", "egg"])
  expect(actual3).toEqual("e")
})

test("Should identify multiple-letter prefixes", () => {
  let actual1 = longestCommonPrefix(["apple", "apricot"])
  expect(actual1).toEqual("ap")

  let actual2 = longestCommonPrefix(["garbage", "garden", "gargantuan"])
  expect(actual2).toEqual("gar")

  let actual3 = longestCommonPrefix(["castle", "casting", "castanet", "castor"])
  expect(actual3).toEqual("cast")
})

test("Should identify when there is no common prefix", () => {
  let actual1 = longestCommonPrefix(["apple", "banana"])
  expect(actual1).toEqual("")

  let actual2 = longestCommonPrefix(["garbage", "garden", "helicopter"])
  expect(actual2).toEqual("")

  let actual3 = longestCommonPrefix(["castle", "antimony", "castanet", "antiquity"])
  expect(actual3).toEqual("")
})
