const { printZigZag } = require('./solution');

test('Should produce desired result from "bismarcks", 3', () => {
    let result = printZigZag("bismarcks", 3)
    let expected = "b   a   s\n i m r k \n  s   c  "
    expect(result).toEqual(expected)
})

test('Should produce desired result from "thisisazigzag", 4', () => {
    let result = printZigZag("thisisazigzag", 4)
    let expected = "t     a     g\n h   s z   a \n  i i   i z  \n   s     g   "
    let expected = "b   a   s\n i m r k \n  s   c  "
    expect(result).toEqual(expected)
})

test('Should produce desired result from "ilovechickenandwaffles", 3', () => {
    let result = printZigZag("ilovechickenandwaffles", 3)
    let expected = "i   e   c   a   a   e \n l v c i k n n w f l s\n  o   h   e   d   f   "
    expect(result).toEqual(expected);
})

test('Should produce desired result from "h e l l o", 2', () => {
    let result = printZigZag("h e l l o", 2);
    let expected = "h e l l o\n         "
    expect(result).toEqual(expected);
})
