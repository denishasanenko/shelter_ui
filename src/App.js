import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { Home } from './home';
import { About } from './about';
import {Pets} from "./pets";
import {Stories} from "./stories";


class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/pets">Pets</Link>
                    </li>
                    <li>
                        <Link to="/stories">Stories</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <Route exact path='/' component={Home}/>
                <Route path='/about'   component={About}/>
                <Route path='/pets'   component={Pets}/>
                <Route path='/stories'   component={Stories}/>
            </div>
        </Router>
    );
  }
}

export default App;
