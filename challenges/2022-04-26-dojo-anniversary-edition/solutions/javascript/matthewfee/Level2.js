class Block {
  constructor(gridPosition) {
    this.gridPosition = gridPosition
    this.isDownVertically = null
    this.isDownHorizontally = null
    this.isDown = null

    this.updateOrientation()
  }

  moveUp() {
    if (!this.isDown) {
      const y = this.gridPosition[0]
      const x = this.gridPosition[1]
      this.gridPosition = [
        [y - 2, x],
        [y - 1, x],
      ]
    }

    if (this.isDown) {
      const y = this.gridPosition[0][0]
      const x = this.gridPosition[0][1]

      if (this.isDownVertically) {
        this.gridPosition = [y - 1, x]
      }

      if (this.isDownHorizontally) {
        this.gridPosition = [
          [y - 1, x],
          [y - 1, x + 1],
        ]
      }
    }

    this.updateOrientation()
  }

  moveDown() {
    if (!this.isDown) {
      const y = this.gridPosition[0]
      const x = this.gridPosition[1]
      this.gridPosition = [
        [y + 1, x],
        [y + 2, x],
      ]
    }

    if (this.isDown) {
      const y = this.gridPosition[0][0]
      const x = this.gridPosition[0][1]

      if (this.isDownVertically) {
        this.gridPosition = [y + 2, x]
      }

      if (this.isDownHorizontally) {
        this.gridPosition = [
          [y + 1, x],
          [y + 1, x + 1],
        ]
      }
    }

    this.updateOrientation()
  }

  moveRight() {
    if (!this.isDown) {
      const y = this.gridPosition[0]
      const x = this.gridPosition[1]
      this.gridPosition = [
        [y, x + 1],
        [y, x + 2],
      ]
    }

    if (this.isDown) {
      const y = this.gridPosition[0][0]
      const x = this.gridPosition[0][1]

      if (this.isDownVertically) {
        this.gridPosition = [
          [y, x + 1],
          [y + 1, x + 1],
        ]
      }

      if (this.isDownHorizontally) {
        this.gridPosition = [y, x + 2]
      }
    }

    this.updateOrientation()
  }

  moveLeft() {
    if (!this.isDown) {
      const y = this.gridPosition[0]
      const x = this.gridPosition[1]
      this.gridPosition = [
        [y, x - 2],
        [y, x - 1],
      ]
    }

    if (this.isDown) {
      const y = this.gridPosition[0][0]
      const x = this.gridPosition[0][1]

      if (this.isDownVertically) {
        this.gridPosition = [
          [y, x - 1],
          [y + 1, x - 1],
        ]
      }

      if (this.isDownHorizontally) {
        this.gridPosition = [y, x - 1]
      }
    }

    this.updateOrientation()
  }

  updateOrientation() {
    const hasMultipleGridValues =
      this.gridPosition[0].length === 2 ? true : false

    this.isDown = hasMultipleGridValues ? true : false

    const xValuesMatch =
      this.gridPosition[0][1] === this.gridPosition[1][1] ? true : false
    const yValuesMatch =
      this.gridPosition[0][0] === this.gridPosition[1][0] ? true : false

    if (hasMultipleGridValues) {
      this.isDownVertically = xValuesMatch
      this.isDownHorizontally = yValuesMatch
    }

    if (!hasMultipleGridValues) {
      this.isDownVertically = false
      this.isDownHorizontally = false
    }

    this.printStatus()
  }

  printStatus() {
    console.log(
      this.gridPosition,
      "down",
      this.isDown,
      "vertical",
      this.isDownVertically,
      "horizontal",
      this.isDownHorizontally,
    )
  }
}
//
//function to make Block moves

function makeBlockMoves(startingPosition, moveList) {
  block = new Block(startingPosition)

  block.updateOrientation()

  function makeMove(direction) {
    switch (direction) {
      case "U":
        block.moveUp()
        break
      case "D":
        block.moveDown()
        break
      case "R":
        block.moveRight()
        break
      case "L":
        block.moveLeft()
        break
    }
  }

  moveList.forEach((move) => {
    makeMove(move)
  })

  return block.gridPosition
}

makeBlockMoves([0, 0], ["U", "U", "D", "D"])
