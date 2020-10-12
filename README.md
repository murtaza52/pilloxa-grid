# pilloxa

This project demonstrates using sets to efficiently perform grid operations on the server. It also compares 2 approaches, onee where the raw data is sent to the client, and the client does the calculations, second where the calculated dta is seent to the client and the client only does the plotting.

The first part of the project is to parse the input data to determine how many locations on the grid that are currently active. The input data is
found in the file input-data.txt. 

The input file contains commands that specify if the locations in a given sub-grid should be activated, deactivated or toggled. At the beginning all
locations were deactivated. Toggling a location means that it goes from deactivated to activated or from activated to deactivated. 

For example: 
The command activate 0,0 to 2,2 will activate the 9 locations of the specified subgrid. The coordinates are hence inclusive. 
The output of this part of the assignment should be a function that returns a number that indicates, after all the commands have been run, how
many locations are currently active. 

Since this is a coordinate system we would like to be able to visualize it.


FIXME

## Prerequisites

You will need [Leiningen][1] 2.0 or above installed.

[1]: https://github.com/technomancy/leiningen

## Running

To start a web server for the application, run:

    lein run 

## License

Copyright © 2020 FIXME
