import React, { Component } from 'react';
import './styles/main.css';
import Movie from './components/movie';
import data from './components/data';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
/*
function Index() {
  return <h2>asa</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export function AppRouter() {
  return (
    
    <Router className="links">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}



 graphBFS =(graph, start) => {
		let queue = new Queue(); // 1
		let visited = new Set(); // 1
		let current;             // 1
		let neighbors;           // 1
	
		queue.enqueue(start);    // 1
		visited.add(start);      // 1
	
	  // while loop will run a total of V times
		while (queue.length > 0) {                       // 1 (for break condition)
			current = queue.dequeue();                   // 1
			neighbors = graph.neighbors(current);        // 1 (for adjacency list)
			// the for loop will run based on d (degree) on average is E/V
			for (let i = 0; i < neighbors.length; i++) {    // 1
				if (!visited.has(neighbors[i]) ){            // 1
				queue.enqueue(neighbors[i]);                // 1
				visited.add(neighbors[i]);                  // 1
			}
			// <-- operating on the current vertex will add additional time
		}
	  }
	}






*/



















 export class App extends Component {
	state = {
		query: ''
	}


	searchText = (event) => {
		this.setState({
			query: event.target.value
		})
	}

  	render() {

		let name = [];
		let year = [];

		Object.keys(data).forEach( key => {
			name.push(data[key].title);
			year.push(data[key].year);

		})

		let newName = name.filter((movie) => {
			return movie.toLowerCase().indexOf(this.state.query) !== -1;
		})

		

    	return (
			<div className="container">
        
				<div className="input-container">
        
					<label>Search for a Movie</label>
					<input type="text" onKeyUp={this.searchText} />
				</div>

				<div className="movies-container">
					
					{
						newName.map( (movie, i) => {
							return <Movie name={movie} title={name[i]} year={year[i]} key={i} />
						})
					}
					
				</div>

				
			</div>
    	);
  	}
}

export default App;