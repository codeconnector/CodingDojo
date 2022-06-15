module julia

export topplebyforce, topplebyboundary

function topplebyforce(dominoes::String)::String
    force_on_idx = fill(0, length(dominoes))

    # Calculate the 'leftward' force on each domino by iterating backwards over the
    # string, setting the current force to an arbitrarily large number when an 'L' is
    # encountered, to 0 when an 'R' is encountered (stops the momentum), and to one 
    # less than the previous force when an '.' is encountered. This simulates the force
    # falling off over distance from the 'L' domino that started the chain reaction.
    current_force = 0
    for idx in length(dominoes):-1:1
        if dominoes[idx] == 'R'; current_force = 0; end
        if dominoes[idx] == 'L'; current_force = typemax(Int64); end
        force_on_idx[idx] = current_force
        current_force -= current_force > 0 ? 1 : 0
    end

    # Now calculate the 'rightward' force in much the same was as above, except this
    # time, we determine which character to place into the output string by comparing
    # the 'leftward' force to the 'rightward' force at each position. If the 'leftward'
    # force is greater, the domino falls left. If the 'rightward' force is greater, it
    # falls right. If they're equal, they cancel out and the domino remains standing.
    current_force = 0
    result_string = ""
    for idx in 1:length(dominoes)
        if dominoes[idx] == 'R'; current_force = typemax(Int64); end
        if dominoes[idx] == 'L'; current_force = 0; end
        if force_on_idx[idx] == current_force; result_string *= '.'; end
        if force_on_idx[idx] > current_force;  result_string *= 'L'; end
        if force_on_idx[idx] < current_force;  result_string *= 'R'; end
        current_force -= current_force > 0 ? 1 : 0
    end

    return result_string
end


function topplebyboundary(dominoes::String)::String
    # Build an array of tuples, where each tuple contains the index for the first and
    # last element of the current 'region', where each region is a sequence of
    # characters with either an 'R' or an 'L' at either end.
    boundaries = []
    (low, high) = (1, 1)

    for (idx, tile) in enumerate(dominoes)
        high = copy(idx)
        if tile != '.'
            push!(boundaries, (low, high))
            low = copy(high)
        end
    end

    if last(boundaries)[2] != length(dominoes)
        push!(boundaries, (low, high))
    end

    # Armed with the knowledge of where the different 'regions' lie, we can determine
    # what happens at each index based on the following criteria:
    # - If the region begins on the left and goes to an 'L', all dominoes will be 'L'
    # - If the region starts with 'R' an goes to the edge, all dominoes will be 'R'
    # - If the region starts and ends with the same value, all dominoes will be that value
    # - If the region starts with 'R' and ends with 'L', all dominoes will fall towards
    #   the center of the region
    # By replacing characters in the original string, characters that are unaffected,
    # such as those in a region that starts with 'L' and ends with 'R', are retained
    # in the final output.
    dominoes = collect(dominoes)
    for (first, last) in boundaries
        if dominoes[first] == '.' && dominoes[last] == 'L'
            dominoes[first:last] .= 'L'
        end

        if dominoes[first] == 'R' && dominoes[last] == '.'
            dominoes[first:last] .= 'R'
        end

        if dominoes[first] == dominoes[last]
            dominoes[first:last] .= dominoes[first]
        end

        if dominoes[first] == 'R' && dominoes[last] == 'L'
            while first + 1 < last - 1
                dominoes[first + 1] = dominoes[first]
                dominoes[last - 1] = dominoes[last]
                first += 1; last -= 1
            end
        end
    end

    return join(dominoes)
end

end # module
