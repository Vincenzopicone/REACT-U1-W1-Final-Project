import Card from 'react-bootstrap/Card';
import { Component } from 'react';

class CardEpiNetflix extends Component {
  render () {
    return (
    <Card className='CardFilm mx-2 my-3 rounded' style={{ width: '9rem' }}>
      <Card.Img variant="top" style={{ height: '10rem' }} src={this.props.img} />
      <Card.Body className='CardBody'>
        <Card.Text>{this.props.title}</Card.Text>
        <Card.Text>{this.props.year}</Card.Text>
      </Card.Body>
    </Card>
    )
  }
}

export default CardEpiNetflix;