// React
import React from 'react'

// MDB
import {
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer,
} from 'mdbreact';

// Components
import Branding from './branding'

class SignedInNavItems extends React.Component{
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }


    render(){
        return(
            <MDBNavbar color="success-color" dark expand="md" fixed="top" scrolling>
                <MDBContainer>
                    <Branding/>
                    <MDBNavbarToggler
                    onClick={this.toggleCollapse}
                    />
                    <MDBCollapse
                    id="navbarCollapse3"
                    isOpen={this.state.isOpen}
                    navbar
                    >
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink to="/">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/signout">Logout</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        )
    }
}

export default SignedInNavItems;
