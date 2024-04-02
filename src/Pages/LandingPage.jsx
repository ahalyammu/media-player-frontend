import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByURL = useNavigate()
  return (
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={5}>
        <h1 style={{fontSize:'40px'}}>Welcome to <span className='text-warning'> Media-Player</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi est eaque dicta totam beatae necessitatibus itaque ad quaerat minus officiis, dignissimos dolore magnam, repudiandae eveniet! Quo unde consequuntur porro?</p>
        <button onClick={()=>navigateByURL('./home')} className='btn btn-info mt-4'>Get Started</button>
      </Col>
      <Col lg={5}>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
      </Col>
      <Col></Col>
    </Row>
    
    <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
      <h3>Features</h3>
      <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
      <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      </div>
    </div>

    <div className="container border rounded p-5 border-light mb-5 d-flex align-items-center jutify-content-between w-100">
      <div className="col-lg-5">
        <h4 className='text-warning'>Simple, Powerful & Fast</h4>
        <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, harum veritatis cupiditate doloribus tempore pariatur commodi nostrum, deleniti iste laudantium ratione blanditiis debitis. Ducimus placeat, laborum ipsum amet voluptas perspiciatis?</h6>

        <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, harum veritatis cupiditate doloribus tempore pariatur commodi nostrum, deleniti iste laudantium ratione blanditiis debitis. Ducimus placeat, laborum ipsum amet voluptas perspiciatis?</h6>

        <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Managing Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, harum veritatis cupiditate doloribus tempore pariatur commodi nostrum, deleniti iste laudantium ratione blanditiis debitis. Ducimus placeat, laborum ipsum amet voluptas perspiciatis?</h6>
      </div>
      <div className="col-lg-1"></div>
      <div className="video col-lg-5">
      <iframe width="100%" height="400" src="https://www.youtube.com/embed/ccpVpcP8m44" title="Best of Sushin Shyam 2023 | Audio Jukebox | Hits of Sushin Shyam | OST" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
      </div>
    </div>
    </>
  )  
}

export default LandingPage