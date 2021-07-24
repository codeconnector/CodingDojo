fun coinCounter(coins: Int): Int {
    var numberOfRounds = 0
    var newNumberCoins: Double = coins.toDouble()
    while (true) {
        newNumberCoins = newNumberCoins / 2
        numberOfRounds++
        if (newNumberCoins <= 1) {
            print(numberOfRounds)
            return numberOfRounds
        }
    }
    return 0
}