import React, { Component } from 'react'
import { clientActions } from "../actions/clientAction"
import {
    Row,
    Container,
    Col,
    Form,
    Button
} from 'react-bootstrap'

//Alert
import ShowAlert from '../helpers/alertHelper'

class LoginPage extends Component {
  constructor(props) {
      super(props)

      this.state = {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          showAlertMessage: false
      }
  }

  handleChangeInput = (event, type) => {
    const valueMapped = event.target.value
    console.log('passei aqui', valueMapped, type)
    this.setState({[type]: valueMapped})
  }

  handleIncludeClient = async (e) => {
    e.preventDefault()
    const { name, email, password, confirmPassword } = this.state
    let finalizeRegistration = true
    if(password !== confirmPassword) return
    const payload = { name, email, password, finalizeRegistration}

    await clientActions.createClient(payload, this.callbackClientSuccess, this.callbackClientError)
  }

  callbackClientError = (response) => {
    this.setState({showAlertMessage: true, typeMessage: "danger"})
    setTimeout(
      () => this.setState({ showAlertMessage: false }), 
      10000
    );
    console.log(response)
  }

  callbackClientSuccess = (response) => {
    console.log(response)
  }
  render() {
    const { name, email, password, confirmPassword, showAlertMessage, typeMessage } = this.state
    console.log(this.state)
    return (
      <React.Fragment>
        {showAlertMessage && 
        <ShowAlert ref="child" type={typeMessage} show={showAlertMessage}/>}
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12}>
              <h4 className="text-uppercase text-center pt-3 pb-4">Login</h4>
            </Col>

            <Col xs={12} md={6}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="Senha" />
                </Form.Group>
                <Button variant="link">
                  Esqueceu a senha?
                </Button>
                <Button variant="primary" type="submit">
                  Entrar
                </Button>
              </Form>
            </Col>
          </Row>

          <Row className="justify-content-md-center mt-6">
            <Col xs={12}>
              <h4 className="text-uppercase text-center pt-3 pb-2">Não tem Login?</h4>
              <h4 className="text-uppercase text-center pt-1 pb-4">Cadastre-se</h4>
            </Col>

            <Col xs={12} md={6}>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" placeholder="Nome" onChange={(event) => this.handleChangeInput(event, "name")}/>
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" onChange={(event) => this.handleChangeInput(event, "email")}/>
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label htmlFor="inputPassword">Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="inputPassword"
                    aria-describedby="passwordHelpInline"
                    onChange={(event) => this.handleChangeInput(event, "password")}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPasswordConfirm">
                  <Form.Label htmlFor="inputPasswordConfirm">Confirmar Senha</Form.Label>
                  <Form.Control
                    type="password"
                    id="inputPasswordConfirm"
                    aria-describedby="passwordHelpInline"
                    onChange={(event) => this.handleChangeInput(event, "confirmPassword")}
                  />
                </Form.Group>
                <Button variant="link">
                  Esqueceu a senha?
                </Button>
                <Button variant="primary" type="submit" onClick={e => this.handleIncludeClient(e)}>
                  Entrar
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default LoginPage