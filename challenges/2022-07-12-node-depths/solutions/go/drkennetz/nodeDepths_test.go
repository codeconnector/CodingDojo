package drkennetz

import (
	"github.com/stretchr/testify/require"
	"testing"
)

type Result struct {
	tree          *BinaryTree
	expectedValue int
}

func TestNodeDepths(t *testing.T) {
	testCaseOne := BinaryTree{1, nil, nil}
	testCaseOne.left = &BinaryTree{2, nil, nil}
	testCaseOne.left.left = &BinaryTree{4, nil, nil}
	testCaseOne.left.left.left = &BinaryTree{8, nil, nil}
	testCaseOne.left.left.right = &BinaryTree{9, nil, nil}
	testCaseOne.left.right = &BinaryTree{5, nil, nil}
	testCaseOne.right = &BinaryTree{3, nil, nil}
	testCaseOne.right.left = &BinaryTree{6, nil, nil}
	testCaseOne.right.right = &BinaryTree{7, nil, nil}

	testCaseTwo := BinaryTree{1, nil, nil}

	testCaseThree := BinaryTree{1, nil, nil}
	testCaseThree.left = &BinaryTree{2, nil, nil}

	testCaseFour := BinaryTree{1, nil, nil}
	testCaseFour.left = &BinaryTree{2, nil, nil}
	testCaseFour.right = &BinaryTree{3, nil, nil}

	testCaseFive := BinaryTree{1, nil, nil}
	testCaseFive.left = &BinaryTree{2, nil, nil}
	testCaseFive.right = &BinaryTree{3, nil, nil}
	testCaseFive.left.left = &BinaryTree{4, nil, nil}

	testCaseSix := BinaryTree{1, nil, nil}
	testCaseSix.left = &BinaryTree{2, nil, nil}
	testCaseSix.left.left = &BinaryTree{3, nil, nil}
	testCaseSix.left.left.left = &BinaryTree{4, nil, nil}
	testCaseSix.left.left.left.left = &BinaryTree{5, nil, nil}
	testCaseSix.left.left.left.left.left = &BinaryTree{6, nil, nil}
	testCaseSix.left.left.left.left.left.right = &BinaryTree{7, nil, nil}

	tables := []Result{
		{
			&testCaseOne,
			16,
		},
		{
			&testCaseTwo,
			0,
		},
		{
			&testCaseThree,
			1,
		},
		{
			&testCaseFour,
			2,
		},
		{
			&testCaseFive,
			4,
		},
		{
			&testCaseSix,
			21,
		},
	}

	for _, v := range tables {
		actual := NodeDepths(v.tree)
		require.Equal(t, actual, v.expectedValue)
	}
}
