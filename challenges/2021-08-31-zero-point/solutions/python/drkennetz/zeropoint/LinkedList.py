class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        
    def set_head(self, node):
        if self.head is None:
            self.head = node
            self.tail = node
            return
        self.insert_before(self.head, node)

    def set_tail(self, node):
        if self.tail is None:
            self.set_head(node)
        self.insert_after(self.tail, node)

    def insert_before(self, node, node_to_insert):
        # no op case
        if node_to_insert == self.head and node_to_insert == self.tail:
            return
        self.remove(node_to_insert)
        node_to_insert.prev = node.prev
        node_to_insert.next = node
        if node.prev is None:
            self.head = node_to_insert
        else:
            node.prev.next = node_to_insert
        node.prev = node_to_insert

    def insert_after(self, node, node_to_insert):
        if node_to_insert == self.head and node_to_insert == self.tail:
            return
        self.remove(node_to_insert)
        node_to_insert.prev = node
        node_to_insert.next = node.next
        if node.next is None:
            self.tail = node_to_insert
        else:
            node.next.prev = node_to_insert
        node.next = node_to_insert

    def remove(self, node):
        if node == self.head:
            self.head = self.head.next
        if node == self.tail:
            self.tail = self.tail.prev
        self.remove_node_bindings(node)

    def remove_node_bindings(self, node):
        if node.prev is not None:
            node.prev.next = node.next
        if node.next is not None:
            node.next.prev = node.prev
        node.prev = None
        node.next = None

    def print_list(self):
        current = self.head
        output = ""
        while(current):
            output += str(current.value)
            output += " -> "
            #print(current.value, " -> ",  end='')
            current = current.next
        #print('\n')
        return output

def construct_dll_from_list(array):
    head = Node(array[0])
    dll = DoublyLinkedList()
    dll.set_head(head)
    i = 1
    current = dll.head
    while i < len(array):
        new_node = Node(array[i])
        dll.insert_after(current, new_node)
        current = current.next
        i += 1
    return dll
            
