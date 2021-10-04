def min_impossible_coins(coins):
    # checks to see if all the coins are the same
    same_coins = all(x == coins[0] for x in coins)

    # if len is 1 and coin is equal to 1
    if len(coins) == 1 and coins[0] == 1:
        return coins[0] + 1

    # if all coins are the same sum them + 1
    elif same_coins:
        same_coins_sum = sum(coins)
        return same_coins_sum + 1

    # else do this
    else:
        running_total = 1
        for cur, nxt in zip(coins, coins[1:]):
            running_total += cur
            if running_total == nxt - 1:
                # print(running_total)
                break
    return running_total
