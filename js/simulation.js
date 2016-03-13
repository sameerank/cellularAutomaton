var newGame = new Game();
var delayTime = 300;
var seedPercent = parseInt(document.getElementById("seed-probability-control").value);
var seedProbability = seedPercent / 100;
var generationCount = 0;
var runState = false;
var mouseToggle = false;
document.getElementById("generation-count").innerHTML = generationCount;

newGame.assignRandomStates(seedProbability);

var viz = d3.select(".display")
.append("svg:svg")
.attr("class", "viz")
.attr("width", newGame.cellCountAlongRow * newGame.cellSideLength + "px")
.attr("height", newGame.cellCountAlongColumn * newGame.cellSideLength + "px");

viz.selectAll("rect")
  .data(function() { return newGame.makeGridFromCurrentStates() })
  .enter().append("svg:rect")
  .attr("stroke", "none")
  .attr("fill", function(cellObj) { return cellObj.cellState ? "#f16c20" : "#0d3c55" })
  .attr("x", function(cellObj) { return newGame.scaleRowLength(cellObj.row) })
  .attr("y", function(cellObj) { return newGame.scaleColumnLength(cellObj.col) })
  .attr("width", newGame.cellSideLength)
  .attr("height", newGame.cellSideLength)
  .on('mouseup', function() { mouseToggle = false; })
  .on('mousedown', function() { mouseToggle = true; })
  .on("mousemove", function(d) {
    if (mouseToggle) {
      newGame.cellStates[d.row][d.col] = !d.cellState;
      render();
    }
  });


function render() {
  d3.selectAll("rect")
  .data(function() { return newGame.makeGridFromCurrentStates() })
  .attr("fill", function(cellObj) { return cellObj.cellState ? "#f16c20" : "#0d3c55" });
}


function resetSimulation() {
  newGame.assignRandomStates(seedProbability);
  generationCount = 0;
  runState = false;
  document.getElementById("generation-count").innerHTML = generationCount;
  render();
}

function startSimulation() {
  runState = true;
}

function stopSimulation() {
  runState = false;
}


setInterval(function () {

  if (runState === true) {

    newGame.computeNextGeneration();

    generationCount += 1;
    document.getElementById("generation-count").innerHTML = generationCount;

    render();

  }

}, delayTime);
