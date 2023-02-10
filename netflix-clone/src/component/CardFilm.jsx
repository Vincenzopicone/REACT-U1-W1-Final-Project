import Card from 'react-bootstrap/Card';
import { Component } from 'react';

class CardEpiNetflix extends Component {
  render () {
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
    )
  }
}

export default CardEpiNetflix;