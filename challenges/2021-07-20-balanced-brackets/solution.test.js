const balancedBrackets = require('./solution');

test('Can identify a balanced string', () => {
    expect(balancedBrackets("[[]]({}[])")).toBe(true);
})

test('Can identify an unbalanced string', () => {
    expect(balancedBrackets("[[({}[])")).toBe(false);
})

test('Can correctly handle empty strings as input', () => {
    expect(balancedBrackets("")).toBe(true);
})

test('Ignores non-brackets', () => {
    expect(balancedBrackets("(5 * 3) + [10 / {2}]")).toBe(true);
})

test('Handles sequences of single bracket types', () => {
    expect(balancedBrackets(")]})]}")).toBe(false);
    expect(balancedBrackets("([{(((")).toBe(false);
})

test('Handles strings with characters but no brackets', () => {
    expect(balancedBrackets("no brackets at all")).toBe(true);
})

test('Handles strings containing special characters', () => {
    expect(balancedBrackets(">>> (<> are not brackets) >>>")).toBe(true);
    expect(balancedBrackets("[///\\|||]")).toBe(true);
    expect(balancedBrackets("!@#$%%^&*(;',.<>?/\|~`'")).toBe(false);
})

test('Can handle brackets "balanced" the wrong way', () => {
    expect(balancedBrackets(")}][{(")).toBe(false);
})

