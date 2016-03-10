//Takes own cell state and neighbor cell states and returns the new cell state;

function applyRules(ownCellState, arrayOfNeighborCellStates) {

  var sumLivingNeighbors = arrayOfNeighborCellStates.reduce(function (a, b) {return a + b;});
  var e = document.getElementById("selectRules");
  var newCellState = false;

  if (e.selectedIndex === 0) {

    if (ownCellState) {
      if (sumLivingNeighbors === 2 || sumLivingNeighbors === 3) {
        newCellState = true;
      }
    } else if (sumLivingNeighbors === 3) {
      newCellState = true;
    }

  } else if (e.selectedIndex === 1) {

    if (ownCellState) {
      if (sumLivingNeighbors === 1 || sumLivingNeighbors === 3 ||
        sumLivingNeighbors === 5 || sumLivingNeighbors === 7) {
        newCellState = true;
      }
    } else if (sumLivingNeighbors === 1 || sumLivingNeighbors === 3 ||
      sumLivingNeighbors === 5 || sumLivingNeighbors === 7) {
      newCellState = true;
    }

  } else if (e.selectedIndex === 2) {

    if (ownCellState) {
      // Every live cell immediately dies.
    } else if (sumLivingNeighbors === 2) {
      newCellState = true;
    }

  } else if (e.selectedIndex === 3) {

    if (ownCellState) {
      if (sumLivingNeighbors === 5 || sumLivingNeighbors === 6 ||
        sumLivingNeighbors === 7 || sumLivingNeighbors === 8) {
        newCellState = true;
      }
    } else if (sumLivingNeighbors === 3 || sumLivingNeighbors === 5 ||
      sumLivingNeighbors === 6 || sumLivingNeighbors === 7 ||
      sumLivingNeighbors === 8) {
      newCellState = true;
    }

  } else if (e.selectedIndex === 4) {

    if (ownCellState) {
      if (sumLivingNeighbors === 1 || sumLivingNeighbors === 2 ||
        sumLivingNeighbors === 5) {
        newCellState = true;
      }
    } else if (sumLivingNeighbors === 3 || sumLivingNeighbors === 6) {
      newCellState = true;
    }

  } else if (e.selectedIndex === 5) {

    if (ownCellState) {
      if (sumLivingNeighbors === 3 || sumLivingNeighbors === 4 ||
        sumLivingNeighbors === 6 || sumLivingNeighbors === 7 ||
        sumLivingNeighbors === 8) {
        newCellState = true;
      }
    } else if (sumLivingNeighbors === 3 || sumLivingNeighbors === 6 ||
      sumLivingNeighbors === 7 || sumLivingNeighbors === 8) {
      newCellState = true;
    }

  } else if (e.selectedIndex === 6) {

    if (ownCellState) {
      if (sumLivingNeighbors === 2 || sumLivingNeighbors === 4 ||
        sumLivingNeighbors === 5) {
        newCellState = true;
      }
    } else if (sumLivingNeighbors === 3 || sumLivingNeighbors === 6 ||
      sumLivingNeighbors === 8) {
      newCellState = true;
    }

  } else if (e.selectedIndex === 7) {

    if (ownCellState) {
      if (sumLivingNeighbors === 3 || sumLivingNeighbors === 5 ||
        sumLivingNeighbors === 6 || sumLivingNeighbors === 7 ||
        sumLivingNeighbors === 8) {
        newCellState = true;
      }
    } else if (sumLivingNeighbors === 4 || sumLivingNeighbors === 6 ||
      sumLivingNeighbors === 7 || sumLivingNeighbors === 8) {
      newCellState = true;
    }

  }

  return newCellState;

}
