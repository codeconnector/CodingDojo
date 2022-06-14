import { Node, boustrophedon } from './solution';

describe("Testing my solution", () => {

    test('Can correctly read out sample tree one', () => {
        var tree = new Node(
            'a',
            new Node('b', new Node('d'), new Node('e')),
            new Node('c', new Node('f'), new Node('g'))
        );
        var expected = "acbdefg".split("");
        expect(boustrophedon(tree)).toStrictEqual(expected);
    })


    test('Can correctly read out sample tree two', () => {
        var tree = new Node(
            'p',
            new Node(
                'o',
                new Node('g', new Node('n'), new Node('o')),
                new Node('n', new Node('i'), new Node('t'))
            ),
            new Node(
                'r',
                new Node('o', new Node('a'), new Node('c')),
                new Node('s', new Node('i'), new Node('t'))
            )
        );
        var expected = "prognostication".split("");
        expect(boustrophedon(tree)).toStrictEqual(expected);
    })
})