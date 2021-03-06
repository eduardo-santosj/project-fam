import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from "react-redux";

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    handleclick = () => {
        let nav = document.getElementById('responsive-navbar-nav')
        let button = document.getElementById('button-open-menu')
        nav.classList.toggle('show')
        button.classList.toggle('collapsed')
    }
    render() {
        console.log(this.props.LoginReducer.LogginReducerParams.client.isLogged)
        return (
            <React.Fragment>
                <Item>
                    <Link to="/animals/list" className="nav-link" onClick={this.handleclick}>
                        Animais
                    </Link>
                </Item>
                <Item>
                    <Link to="/about-adoption" className="nav-link" onClick={this.handleclick}>
                        Sobre Adoção
                    </Link>
                </Item>
                <Item>
                    <Link to="/donation" className="nav-link" onClick={this.handleclick}>
                        Doação
                    </Link>
                </Item>
                <Item>
                    <Link to="/who-are" className="nav-link" onClick={this.handleclick}>
                        Quem somos
                    </Link>
                </Item>
                <Item>
                    <Link to="/contact" className="nav-link" onClick={this.handleclick}>
                        Contato
                    </Link>
                </Item>
                <Item>
                    <Link to="/clients/list" className="nav-link" onClick={this.handleclick}>
                        Listar Clientes
                    </Link>
                </Item>
                <Item>
                    <Link to="/clients/create" className="nav-link" onClick={this.handleclick}>
                        Criar Clientes
                    </Link>
                </Item>
                {!this.props.LoginReducer.LogginReducerParams.client.isLogged && 
                    <Item>
                        <Link to="/login" className="nav-link" onClick={this.handleclick}>
                            Login
                        </Link>
                    </Item>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    const { LoginReducer } = state;
    return {
      LoginReducer
    }
  };
  
export default connect(mapStateToProps)(Links);