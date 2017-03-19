# MadBars

MadBars is a standalone desktop application designed for visualizing data from various programming languages

> MadBars is designed to be simple to implement into an existing project and easy to work with due to the multiple pre-written bindings.
> The core philosophies of this project are extensibility and flexibility, this means that it's written with modification in mind

## Tech

MadBars relies on multiple technologies:

* [electron] - Used to create cross-platform desktop applications with node
* [node.js] - Where the bulk of the application is written
* [Express] - Used for streamlining the routes for post reuquests
* [amcharts] - Used to create the chart visuals

## Bindings

### Official
* [MadBars-Go] - The official Golang binding for MadBars
* [MadBars-CS] - The official C# binding for MadBars

## Interface

Interfacing with MadBars from a language that has no official binding yet is a walk in the park. This is due to the fact that the interface is done through local HTTP requests meaning that any language that supports them will be able to utilize MadBars
[MadBars-Protocol]

## Installation

## Contributing

Feel free to make any pull requests that you feel help to improve the project in any way

## Todos

 - Replace Pug with HTML (pug isn't really needed, I just used it because I'm used to it) 
 - Replace Amcharts with D3js charts - allows more flexibility with the graphs
 - Add more graph types
 
## License

MIT


   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [electron]: <http://electron.atom.io/>
   [amcharts]: <https://www.amcharts.com/>
   [MadBars-Go]: <https://github.com/Aidenjl193/MadBars-Go>
   [MadBars-CS]: <https://github.com/Aidenjl193/MadBars-CS>
   [MadBars-Protocol]: <https://github.com/Aidenjl193/MadBars/wiki/Protocol>
