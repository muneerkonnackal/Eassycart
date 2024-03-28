import React from 'react'
import Navbar from '../components/Navbar'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

function Category() {
    const data = useFetch('https://api.escuelajs.co/api/v1/categories')
    console.log(data);
  return (
    <>
    <Navbar/>
    <Row className='ms-5 me-3' style={{marginTop:'150px'}}>
      { data?.length>0?
      data?.map((item)=>( <Col className='mb-5' sm={12} md={6} lg={4} xl={3}> 
       <Link style={{textDecoration:'none'}} to={`/categorylist/${item.id}`}>
      <Card className='rounded-4' style={{ width: '18rem' , boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0 , 0 ,0,0.19)' }}>
      <Card.Img className='rounded-4 border-2' variant="top" src={item.image} style={{height:'210px'}} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
    
        <div className='d-flex align-items-center justify-content-center'>
         <Button className='rounded-3'  variant="outline-primary">View All</Button>
        </div>

      </Card.Body>
    </Card>
    </Link>

      </Col>))

       :<p>Nothing to display</p>
      }
    </Row>


    </>
  )
}

export default Category