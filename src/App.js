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
            <header className="container">
                <div className="logo"><b>Shelter</b>Sub</div>
                <ul>
                    <li>
                        <Link to="/">Головна</Link>
                    </li>
                    <li>
                        <Link to="/pets">Тварини</Link>
                    </li>
                    <li>
                        <Link to="/stories">Iсторiї</Link>
                    </li>
                    <li>
                        <Link to="/about">Про проект</Link>
                    </li>
                </ul>
            </header>
            <Route exact path='/' component={Home}/>
            <Route path='/about'   component={About}/>
            <Route path='/pets'   component={Pets}/>
            <Route path='/stories'   component={Stories}/>
        </Router>
    );
  }
}

export default App;
