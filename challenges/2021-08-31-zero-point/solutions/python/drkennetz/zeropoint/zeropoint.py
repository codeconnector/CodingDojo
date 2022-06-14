def remove_zero_sequences_inplace(doubly_linked_list):
    start = doubly_linked_list.head
    current = doubly_linked_list.head.next

    while start is not None:
        
        running_sum = start.value
        
        if start.value == 0:
            # we don't need to add this or even keep track of it, we just need to remove it
            start = start.next
            doubly_linked_list.remove(start.prev)
            
        iterations_to_remove = 1
        if start.next is not None:
            current = start.next
        else:
            break
        while current is not None:
            running_sum += current.value
            iterations_to_remove += 1
            if running_sum == 0:
                if current.next is not None:
                    while iterations_to_remove:
                        start = start.next
                        doubly_linked_list.remove(start.prev)
                        iterations_to_remove -= 1
                else:
                    while iterations_to_remove:
                        if start.next is not None:
                            start = start.next
                            doubly_linked_list.remove(start.prev)
                            iterations_to_remove -= 1
                        else: # is tail
                            doubly_linked_list.remove(start)
                            iterations_to_remove -= 1
            current = current.next

        start = start.next
        
    return doubly_linked_list
