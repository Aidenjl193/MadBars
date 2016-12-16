# Mad Bars

Mad Bars is a desktop application designed for visualizing test data in various programming languages

> Mad bars is designed to be simple to implement into an existing project
> and easy to work with due to the multiple pre-written bindings

### Tech

Mad Bars relies on multiple technologies:

* [node.js] - Where the bulk of the application runs
* [Express] - Used for streamlining the routes for post reuquests
* [electron] - Used to create cross-platform desktop applications with node
* [amcharts] - Used to create the chart visuals

### Interface

Interfacing with amcharts from a language that has no official binding yet is a walk in the park. This is due to the fact that the interface is done through local HTTP requests meaning that any language that supports them will be able to utilize Mad Bars
#### Requests

### Installation

### Development

Feel free to make any pull requests that you feel help to improve the project in any way

### Todos

 - Replace Pug with HTML (pug isn't really needed, I just used it because I'm used to it) 
 - Replace Amcharts with D3js charts - allows more flexibility with the graphs
 - Add more graph types
 
### License

MIT


   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [electron]: <http://electron.atom.io/>
   [amcharts]: <https://www.amcharts.com/>
