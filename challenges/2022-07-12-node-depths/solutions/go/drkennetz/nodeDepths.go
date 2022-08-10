package drkennetz

type BinaryTree struct {
	value int
	left  *BinaryTree
	right *BinaryTree
}

func NodeDepths(root *BinaryTree) int {
	return nodeDepthsHelper(root, 0)
}

func nodeDepthsHelper(root *BinaryTree, depth int) int {
	if root == nil {
		return 0
	}
	return depth + nodeDepthsHelper(root.left, depth+1) + nodeDepthsHelper(root.right, depth+1)
}
