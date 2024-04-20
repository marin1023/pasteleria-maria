import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import tortachoco from "./imgs/torta-choco.png"
import chocorectangular from "./imgs/torta-chocolate-rectangular.png"
import minigirl from "./imgs/torta-mini-girl.png"
import corazoncumpleaños from "./imgs/torta-corazon-cumpleaños.png"
import tresleches from "./imgs/torta-tresleches.png"
import tortapelota from "./imgs/torta-pelota.png"

const About = () => {
  return (
    <> 
    <div className='h1-producto'>
      <h1>Productos Destacados</h1>
    </div>
    <div className='lista-productos'>
    <Card style={{ width: '18rem' }}>
      <Card.Img className='img-producto' variant="top" src={tortachoco} />
      <Card.Body>
        <Card.Title>Torta de Chocolate</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://www.facebook.com/" target='_blank'><Button variant="primary">Ordena Ahora</Button></a>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img className='img-producto' variant="top" src={tresleches} />
      <Card.Body>
        <Card.Title>Torta Tres Leches</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Ordena Ahora</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img className='img-producto' variant="top" src={chocorectangular} />
      <Card.Body>
        <Card.Title>Chocolate Rectangular</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='boton-orden' variant="primary">Ordena Ahora</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img className='img-producto' variant="top" src={tortapelota} />
      <Card.Body>
        <Card.Title>Torta Pelota de Futbol</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='boton-orden' variant="primary">Ordena Ahora</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img className='img-producto' variant="top" src={minigirl} />
      <Card.Body>
        <Card.Title>Torta Mini Girl</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Ordena Ahora</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img className='img-producto' variant="top" src={corazoncumpleaños} />
      <Card.Body>
        <Card.Title>Corazon Rojo de Cumpleaños</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='boton-orden' variant="primary">Ordena Ahora</Button>
      </Card.Body>
    </Card>
    
    </div>
   
    </>
  )
}

export default About
