class Block {
  constructor(startPosition) {
    this.startPosition = startPosition
    this.gridPosition = startPosition
    this.isDownVertically = null
    this.isDownHorizontally = null
    this.isDown = null
    this.moveHistory = []
    this.destination = null
    this.xDistance = null
    this.yDistance = null
    this.updateOrientation()
  }

  moveUp() {
    const y = this.gridPosition[0][0]
    const x = this.gridPosition[0][1]

    if (!this.isDown) {
      this.gridPosition = [
        [y - 2, x],
        [y - 1, x],
      ]
    }

    if (this.isDown) {
      if (this.isDownVertically) {
        this.gridPosition = [[y - 1, x]]
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
    const y = this.gridPosition[0][0]
    const x = this.gridPosition[0][1]

    if (!this.isDown) {
      this.gridPosition = [
        [y + 1, x],
        [y + 2, x],
      ]
    }

    if (this.isDown) {
      const y = this.gridPosition[0][0]
      const x = this.gridPosition[0][1]

      if (this.isDownVertically) {
        this.gridPosition = [[y + 2, x]]
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
    const y = this.gridPosition[0][0]
    const x = this.gridPosition[0][1]

    if (!this.isDown) {
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
        this.gridPosition = [[y, x + 2]]
      }
    }

    this.moveHistory.push("R")
    this.updateOrientation()
  }

  moveLeft() {
    const y = this.gridPosition[0][0]
    const x = this.gridPosition[0][1]
    if (!this.isDown) {
      this.gridPosition = [
        [y, x - 2],
        [y, x - 1],
      ]
    }

    if (this.isDown) {
      if (this.isDownVertically) {
        this.gridPosition = [
          [y, x - 1],
          [y + 1, x - 1],
        ]
      }

      if (this.isDownHorizontally) {
        this.gridPosition = [[y, x - 1]]
      }
    }

    this.moveHistory.push("L")
    this.updateOrientation()
  }

  updateOrientation() {
    const hasMultipleGridValues = this.gridPosition.length === 2 ? true : false

    this.isDown = hasMultipleGridValues ? true : false

    let xValuesMatch = false
    let yValuesMatch = false

    if (hasMultipleGridValues) {
      xValuesMatch =
        this.gridPosition[0][1] === this.gridPosition[1][1] ? true : false

      yValuesMatch =
        this.gridPosition[0][0] === this.gridPosition[1][0] ? true : false
    }

    this.isDownVertically = xValuesMatch
    this.isDownHorizontally = yValuesMatch

    if (this.destination) {
      this.xDistance = this.destination[1] - this.gridPosition[0][1]
      this.yDistance = this.destination[0] - this.gridPosition[0][0]
    }
  }

  makeMove(direction) {
    switch (direction) {
      case "U":
        this.moveUp()
        break
      case "D":
        this.moveDown()
        break
      case "R":
        this.moveRight()
        break
      case "L":
        this.moveLeft()
        break
    }
  }

  standUp() {
    if (!this.isDown) {
      return
    }
    if (this.isDownVertically) {
      //check distance to move first step up or down
      if (this.gridPosition[1][0] <= this.destination[0]) {
        this.moveUp()
      } else {
        this.moveDown()
      }
    }

    if (this.isDownHorizontally) {
      if (this.gridPosition[1][1] <= this.destination[1]) {
        this.moveRight()
      } else {
        this.moveLeft()
      }
    }
  }

  moveRightOne() {
    this.moveDown()
    this.moveRight()
    this.moveUp()
  }

  moveLeftOne() {
    this.moveUp()
    this.moveLeft()
    this.moveDown()
  }

  moveUpOne() {
    this.moveLeft()
    this.moveUp()
    this.moveRight()
  }

  moveDownOne() {
    this.moveRight()
    this.moveDown()
    this.moveLeft()
  }

  moveOneStepToDestination() {
    const xMove = () => {
      this.xDistance > 0 ? this.moveRightOne() : this.moveLeftOne()
    }
    const yMove = () => {
      this.yDistance > 0 ? this.moveDownOne() : this.moveUpOne()
    }

    while (Math.abs(this.xDistance) > 0) {
      xMove()
    }
    while (Math.abs(this.yDistance) > 0) {
      yMove()
    }
  }

  moveToDestination() {
    const xMove = () => {
      this.xDistance > 0 ? this.moveRight() : this.moveLeft()
    }
    const yMove = () => {
      this.yDistance > 0 ? this.moveDown() : this.moveUp()
    }

    while (Math.abs(this.xDistance) > 1) {
      xMove()
      while (Math.abs(this.yDistance % 3) > 0) {
        yMove()
      }
      xMove()
    }

    while (Math.abs(this.yDistance) > 1) {
      yMove()
      while (Math.abs(this.xDistance % 3) > 0) {
        xMove()
      }
      yMove()
    }

    this.moveOneStepToDestination()
  }

  level1(direction) {
    this.makeMove(direction)
    return this.gridPosition
  }

  level2(directionsArr) {
    this.moveHistory = []
    this.gridPosition = this.startPosition
    this.updateOrientation()

    directionsArr.forEach((direction) => {
      this.makeMove(direction)
    })
    return this.gridPosition
  }

  level3(endPosition) {
    this.destination = endPosition[0]
    this.gridPosition = this.startPosition
    this.moveHistory = []

    this.updateOrientation()
    this.moveToDestination()

    return this.moveHistory
  }

  level4(endPosition) {
    this.moveHistory = []
    this.destination = endPosition[0]
    this.gridPosition = this.startPosition

    this.updateOrientation()
    this.standUp()
    this.moveToDestination()

    return this.moveHistory
  }
}

module.exports = { Block }
