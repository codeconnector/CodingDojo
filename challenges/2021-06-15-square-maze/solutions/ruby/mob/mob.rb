# frozen_string_literal: true

# Appends the `position`'s neighbors to @positions_to_check
# In order to be appended, the neighbor must (a) exists and (b) hold `0`
def append_neighbors(position)
  # Append neighbor below if available
  neighbor_below = [position.first + 1, position.last]
  neighbor_available = @array[neighbor_below.first][neighbor_below.last] == 0
  if can_move_down?(position) && neighbor_available
    @positions_to_check << neighbor_below
  end

  # Append neighbor to the right if available 
  neighbor_right = [position.first, position.last + 1]
  neighbor_available = @array[neighbor_right.first][neighbor_right.last] == 0
  if can_move_right?(position) && neighbor_available 
    @positions_to_check << neighbor_right
  end
end


def at_the_end?(position)
  position == @final_position
end


def can_move_down?(position)
  position.first < @final_row_index
end


def can_move_right?(position)
  position.last < @final_col_index
end


def count_paths(array)
  @array = array
  @final_row_index = array.length - 1
  @final_col_index = array.first.length - 1
  @final_position = [@final_row_index, @final_col_index]
  paths_found = 0

  @positions_to_check = [[0, 0]]
  while @positions_to_check.any?
    current_position = @positions_to_check.shift
    if at_the_end?(current_position)
      paths_found += 1
    else
      append_neighbors(current_position) # Appends neighbors to @positions_to_check
    end
  end

  paths_found
end
