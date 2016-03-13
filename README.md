# Life-like Cellular Automaton

  * Live version [here](http://sameerank.github.io/cellularAutomaton/)

## An explanation

The cellular automaton engine performs its calculations on an infinite two-dimensional grid of square cells, each of which is in one of two possible states, alive or dead. Every cell's mortality in the subsequent generation is determined by its Moore neighborhood, which are the eight cells that are horizontally, vertically, or diagonally adjacent. The rules that determine whether a cell is born, remains alive, or dies cause cellular automaton to evolve in interesting ways. A popular example of these rules is [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), also known simply as Life. Since Life's inception, new similar cellular automata have been developed. The standard Game of Life is symbolised as "B3/S23": A cell is "Born" if it has exactly 3 neighbours, "Stays alive" if it has 2 or 3 living neighbours; it dies otherwise. Try different sets of rules to see how the patterns that emerge differ.

## Instructions on how to use the cellular automaton engine

Life-like Cellular Automaton simulates a variety of cellular automaton models from user-specified initial conditions. This gives users a chance to explore how simple rules can give rise to different self-organizing behaviors.

Click start to run a cellular automaton simulation. Click stop to pause the simulation. Click on the box next to "Rules: " to select and apply a different set of rules to the cellular automaton animation. The slider controller changes the probabilty for initially seeding live cells. If you change this, click reset for the new seeding probability to take effect.

## List of ingredients

The cellular automaton engine is made with Javascript and visualized as an SVG rendered using [D3.js](https://d3js.org/). The modal for explaining the rules underlying cellular automaton was made using [fancyBox](http://fancyapps.com/fancybox/).
