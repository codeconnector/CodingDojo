// 2D Array Itreator

import java.util.Iterator;
import java.util.NoSuchElementException;

class NestedIterator<T> implements Iterator<T> {
    private T[][] array;
    private int row;
    private int col;

    public NestedIterator(T[][] array) {
        this.array = array;
        row = 0;
        col = 0;
    }

    public boolean hasNext() {
        return row < array.length && col < array[row].length;
    }

    public T next() {
        if (!hasNext()) {
            throw new NoSuchElementException();
        }
        T result = array[row][col];
        col++;
        if (col == array[row].length) {
            row++;
            col = 0;
        }
        return result;
    }
}

public class Codingis4noobs2 {
    public static void main(String[] args) {
        Integer[][] array = new Integer[][] {
                { 1, 2, 3 },
                { 4, 5, 6 },
                { 7, 8, 9 }
        };
        NestedIterator<Integer> iterator = new NestedIterator<Integer>(array);
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}
