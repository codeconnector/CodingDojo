class Block {
  constructor(gridPosition) {
    this.gridPosition = gridPosition
    this.isDownVertically = null
    this.isDownHorizontally = null
    this.isDown = null
    this.moveHistory = []

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

    this.moveHistory.push("U")
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

    this.moveHistory.push("D")
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

    this.moveHistory.push("R")
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

    this.moveHistory.push("L")
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

const moveBlockToDestination = (currentPosition, destination) => {
  let block = new Block(currentPosition)

  const alignVertically = () => {
    if (block.isDown && block.isDownVertically) {
      //check distance to move first step up or down
      if (block.gridPosition[1][0] <= destination[0]) {
        block.moveUp()
      } else {
        block.moveDown()
      }
    }

    if (block.isDown && block.isDownHorizontally) {
      if (block.gridPosition[1][1] <= destination[1]) {
        block.moveRight()
      } else {
        block.moveLeft()
      }
    }
  }

  const moveRightToDestination = () => {
    // move right
    while (!block.isDown && block.gridPosition[1] + 2 < destination[1]) {
      block.moveRight()
      block.moveRight()
    }

    // move one step
    while (!block.isDown && block.gridPosition[1] < destination[1]) {
      block.moveDown()
      block.moveRight()
      block.moveUp()
    }
  }

  const moveLefttoDestination = () => {
    //move two steps
    while (!block.isDown && block.gridPosition[1] - 2 > destination[1]) {
      block.moveLeft()
      block.moveLeft()
    }

    //move one step
    while (!block.isDown && block.gridPosition[1] > destination[1]) {
      block.moveUp()
      block.moveLeft()
      block.moveDown()
    }
  }

  const moveDownToDestination = () => {
    // move two steps
    while (!block.isDown && block.gridPosition[0] + 2 < destination[0]) {
      block.moveDown()
      block.moveDown()
    }

    // move one step
    while (!block.isDown && block.gridPosition[0] < destination[0]) {
      block.moveRight()
      block.moveDown()
      block.moveLeft()
    }
  }

  const moveUptoDestination = () => {
    // move two steps
    while (!block.isDown && block.gridPosition[0] - 2 > destination[0]) {
      block.moveUp()
      block.moveUp()
    }

    // move one step
    while (!block.isDown && block.gridPosition[0] > destination[0]) {
      block.moveLeft()
      block.moveUp()
      block.moveRight()
    }
  }

  alignVertically()
  moveRightToDestination()
  moveUptoDestination()
  moveLefttoDestination()
  moveDownToDestination()

  return block.moveHistory
}

moveBlockToDestination([0, 0], [3, 3])
