import React, { Component } from 'react'
import styled from 'styled-components'

// const NavBarStyle = styled.nav

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a href="" 
                    className="navbar-brand col-sn-3 col-md-2 mr-0 align-items-center"
                    >PokemonCard</a>
                </nav>
            </div>
        )
    }
}
