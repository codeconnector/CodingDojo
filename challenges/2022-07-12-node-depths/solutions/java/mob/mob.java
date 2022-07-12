package solutions.java.mob;// Node Depths
//The distance between a node in a Binary Tree and the tree's root is called the node's depth. Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.
//
//Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be a BinaryTree nodes themselves or None / null.
//
//Example (visual) Input:
//
//  tree =      1                     depth = 0 (0*1)
//           /						\
//          2        3                depth = 1 (1*2)
//        /   \     /					\
//       4     5   6    7             depth = 2 (4*2)
//     /						\
//    8    9                          depth = 3 (2*3)
// Example output:
//
// 16
// Business Rules/Errata
// You will be given a Binary Tree Root Node as input (which will either be a language implementation or a custom class).
// The Binary Tree will consist of Nodes (another language implementation or custom class), with attributes value , left child node, and a right child node.
// Children nodes can either be Binary Tree Nodes themselves or None or null.
// Examples
// input = {
//   "nodes": [
//    {"id": "1", "left": "2", "right": "3", "value": 1},
//    {"id": "2", "left": "4", "right": "5", "value": 2},
//    {"id": "3", "left": "6", "right": "7", "value": 3},
//    {"id": "4", "left": "8", "right": "9", "value": 4},
//    {"id": "5", "left": null, "right": null, "value": 5},
//    {"id": "6", "left": null, "right": null, "value": 6},
//    {"id": "7", "left": null, "right": null, "value": 7},
//    {"id": "8", "left": null, "right": null, "value": 8},
//    {"id": "9", "left": null, "right": null, "value": 9}
//  ],
//  "root": "1"
// }
//output
//
//node_depths(input) -> 16
//
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class Solution {
    static int nodeDepths(BinaryTree root) {
	// insert your solution here
		List<BinaryTree> currentLayer = new ArrayList<>();
		currentLayer.add(root);

		List<BinaryTree> nextLayer = new ArrayList<>();

		int totalDepth = 0;
		int currentDepth = 0;

		while(!currentLayer.isEmpty()) {
			for(BinaryTree node : currentLayer) {
				if(node.left != null) {
					nextLayer.add(node.left);
				}
				if(node.right != null){
					nextLayer.add(node.right);
				}

				totalDepth += currentDepth;
			}
			currentLayer = nextLayer;
			nextLayer = new ArrayList<>();
			currentDepth++;
		}

		return totalDepth;
    }

    static class BinaryTree {
	int value;
	BinaryTree left;
	BinaryTree right;

	public BinaryTree(int value) {
	    this.value = value;
	    left = null;
	    right = null;
	}
    }

    @Test
    public void testCaseOne() {
	var root = new BinaryTree(1);
	root.left = new BinaryTree(2);
	root.left.left = new BinaryTree(4);
	root.left.left.left = new BinaryTree(8);
	root.left.left.right = new BinaryTree(9);
	root.left.right = new BinaryTree(5);
	root.right = new BinaryTree(3);
	root.right.left = new BinaryTree(6);
	root.right.right = new BinaryTree(7);
	int actual = nodeDepths(root);
	assertEquals(16, actual);
    }	    
}
		
		
