# frozen_string_literal: true

def sum_array(array, new_array = [])
  array.each do |elem|
    if elem.is_a? Array
      sum_array(elem, new_array)
    else
      new_array << elem
    end
  end
  new_array.sum
end
