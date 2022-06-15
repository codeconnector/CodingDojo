const { to_spreadsheet_colname } = require('./solution');

test('Return A if number is 1', () => {
    expect(to_spreadsheet_colname(1)).toStrictEqual("A");
})

test('Return AA if number is 27', () => {
    expect(to_spreadsheet_colname(27)).toStrictEqual("AA");
})

test('Return AZ if number is 52', () => {
    expect(to_spreadsheet_colname(52)).toStrictEqual("AZ");
})

test('Return KA if number is 287', () => {
    expect(to_spreadsheet_colname(287)).toStrictEqual("KA");
})

test('Return YYZ if number is 17576', () => {
    expect(to_spreadsheet_colname(17576)).toStrictEqual("YYZ");
})

test('Return DOJO if number is 80719', () => {
    expect(to_spreadsheet_colname(80719)).toStrictEqual("DOJO");
})

test('Return BECKY if number is 1004171', () => {
    expect(to_spreadsheet_colname(1004171)).toStrictEqual("BECKY");
})

test('Return TOOPS if number is 9413735', () => {
    expect(to_spreadsheet_colname(9413735)).toStrictEqual("TOOPS");
})
