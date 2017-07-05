import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import Style from 'components/Style.jsx';

import './Main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
    }

    render() {
        return (
            <Router>
                <div className={`main bg-faded ${this.state.group}`}>
                    <div className='container'>
                        <Navbar color="faded" light toggleable>
                            <NavbarToggler right onClick={this.handleNavbarToggle}/>
                            <NavbarBrand className='text-info' href="/">App & Web Intelligence</NavbarBrand>
                            <Collapse isOpen={this.state.navbarToggle} navbar>
                                <Nav navbar>
                                  <NavItem>
                                      <NavLink tag={Link} to='/'>Style Transfer</NavLink>
                                  </NavItem>
                                </Nav>
                                <span className='navbar-text ml-auto'>DataLab</span>
                            </Collapse>
                        </Navbar>
                    </div>

                    <Route exact path="/" render={() => (
                        <Style/>
                    )}/>

                </div>
            </Router>
        );
    }

    handleNavbarToggle() {
        this.setState((prevState, props) => ({
            navbarToggle: !prevState.navbarToggle
        }));
    }
}
