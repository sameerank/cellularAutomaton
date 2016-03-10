var Game = function () {
  this.cellSideLength = 6;
  this.cellCountAlongRow = 80;
  this.cellCountAlongColumn = 80;
  this.scaleRowLength = d3.scale.linear()
  .domain([0, this.cellCountAlongRow])
  .range([0, this.cellCountAlongRow * this.cellSideLength]);
  this.scaleColumnLength = d3.scale.linear()
  .domain([0, this.cellCountAlongColumn])
  .range([0, this.cellCountAlongColumn * this.cellSideLength]);
}

Game.prototype.assignRandomStates = function (probability) {
  this.cellStates = [];
  for (var rowIndex = 0; rowIndex < this.cellCountAlongColumn; rowIndex++) {
    this.cellStates.push([]);
    for (var colIndex = 0; colIndex < this.cellCountAlongRow; colIndex++) {
      var randomState = Math.random() < probability ? true : false;
      this.cellStates[rowIndex].push(randomState);
    }
  }

};

Game.prototype.makeGridFromCurrentStates = function () {

  var grid = [];
  for (var rowIndex = 0; rowIndex < this.cellCountAlongColumn; rowIndex++) {
    for (var colIndex = 0; colIndex < this.cellCountAlongRow; colIndex++) {
      grid.push({
        "row": rowIndex,
        "col": colIndex,
        "cellState": this.cellStates[rowIndex][colIndex]
      })
    }
  }

  return grid;
};

Game.prototype.computeNextGeneration = function () {
  var newGeneration = [];
  for (var rowIndex = 0; rowIndex < this.cellCountAlongColumn; rowIndex++) {
    newGeneration.push([]);
    for (var colIndex = 0; colIndex < this.cellCountAlongRow; colIndex++) {

      var indexOfCellOnTop = rowIndex - 1;
      var indexOfCellBelow = rowIndex + 1;
      var indexOfRightCell = colIndex + 1;
      var indexOfLeftCell = colIndex - 1;

      // Corrections for edge cases
      if (indexOfCellOnTop < 0)
        { indexOfCellOnTop = this.cellCountAlongColumn - 1 };
      if (indexOfCellBelow === this.cellCountAlongColumn)
        { indexOfCellBelow = 0 };
      if (indexOfRightCell === this.cellCountAlongRow)
        { indexOfRightCell = 0 };
      if (indexOfLeftCell < 0)
        { indexOfLeftCell = this.cellCountAlongRow - 1 };

      //Check Moore neighborhood
      var neighborsArray = [
        this.cellStates[rowIndex][indexOfLeftCell],
        this.cellStates[rowIndex][indexOfRightCell],
        this.cellStates[indexOfCellOnTop][indexOfLeftCell],
        this.cellStates[indexOfCellOnTop][colIndex],
        this.cellStates[indexOfCellOnTop][indexOfRightCell],
        this.cellStates[indexOfCellBelow][indexOfLeftCell],
        this.cellStates[indexOfCellBelow][colIndex],
        this.cellStates[indexOfCellBelow][indexOfRightCell]
      ];

      var newCellState = applyRules(this.cellStates[rowIndex][colIndex], neighborsArray);

      newGeneration[rowIndex][colIndex] = newCellState;
    }
  }
  this.cellStates = newGeneration;
};
