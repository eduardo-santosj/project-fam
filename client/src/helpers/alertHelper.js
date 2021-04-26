import React, { Component, useState } from 'react'
import { Alert } from 'react-bootstrap'

class ShowAlert extends Component {
  ShowAlerts() {
    let Title = ''
    let Text = ''

    if(this.props.type === 'danger') {
      Title = 'Erro no servidor'
      Text = 'Tente novamente mais tarde!'
    }
    if (this.props.show) {
      return (
        <Alert variant={this.props.type} className="fade-alert">
          <Alert.Heading>{Title}</Alert.Heading>
          <p className="mb-0">
            {Text}
          </p>
        </Alert>
      );
    }
  }
  render() {
    console.log(this.state, this.props)
    return (
      this.ShowAlerts()
    )
  }
}

export default ShowAlert