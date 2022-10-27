const { groupData } = require("./justinmemphis");

test("Freshman Mean and Median", () => {
  const result = groupData();
  expect(result["Freshman Mean"]).toEqual(24.4);
  expect(result["Freshman Median"]).toEqual(23);
});

test("Sophomore Mean and Median", () => {
  const result = groupData();
  expect(result["Sophomore Mean"]).toEqual(25.0);
  expect(result["Sophomore Median"]).toEqual(24);
});

test("Junior Mean and Median", () => {
  const result = groupData();
  expect(result["Junior Mean"]).toEqual(24.6);
  expect(result["Junior Median"]).toEqual(24);
});

test("Senior Mean and Median", () => {
  const result = groupData();
  expect(result["Senior Mean"]).toEqual(25.2);
  expect(result["Senior Median"]).toEqual(25);
});

test("Scores Over 25", () => {
  const result = groupData();
  expect(result["Scores Over 25"]).toEqual(730);
});

test("Sophomore Scores Between 25 and 30", () => {
  const result = groupData();
  expect(result["Sophomore Scores Between 25 and 30"]).toEqual(84);
});

test("Sophomore and Junior Mean", () => {
  const result = groupData();
  expect(result["Sophomore and Junior Mean"]).toEqual(24.7);
});
