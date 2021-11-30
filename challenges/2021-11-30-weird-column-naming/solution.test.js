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
