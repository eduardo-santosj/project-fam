import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Item>
                    <Link to="/animals/list" className="nav-link">
                        Animais
                    </Link>
                </Item>
                <Item>
                    <Link to="/about-adoption" className="nav-link">
                        Sobre Adoção
                    </Link>
                </Item>
                <Item>
                    <Link to="/donation" className="nav-link">
                        Doação
                    </Link>
                </Item>
                <Item>
                    <Link to="/who-are" className="nav-link">
                        Quem somos
                    </Link>
                </Item>
                <Item>
                    <Link to="/contact" className="nav-link">
                        Contato
                    </Link>
                </Item>
                <Item>
                    <Link to="/clients/list" className="nav-link">
                        Listar Clientes
                    </Link>
                </Item>
                <Item>
                    <Link to="/clients/create" className="nav-link">
                        Criar Clientes
                    </Link>
                </Item>
                <Item>
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </Item>
            </React.Fragment>
        )
    }
}

export default Links