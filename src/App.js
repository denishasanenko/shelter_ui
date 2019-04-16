import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { Home } from './home';
import { About } from './about';


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
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <Route exact path='/' component={Home}/>
                <Route path='/about'   component={About}/>
                {/* Add all your remaining routes here, like /trending, /about, etc. */}
            </div>
        </Router>
    );
  }
}

export default App;
