import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import useFetch from '../hooks/useFetch';
import { Link, useParams } from 'react-router-dom';

function CategoryList() {
    const { categoryId } = useParams();

  const data = useFetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`)
  console.log(data);
  return (
    <>
    
    <Navbar/>
    <Row className='ms-5 me-3' style={{marginTop:'150px'}}>
      { data?.length>0?
      data?.map((item)=>( <Col className='mb-5' sm={12} md={6} lg={4} xl={3}> 
       <Link style={{textDecoration:'none'}} to={`/productpage/${item.id}`}>
      <Card className='rounded-4' style={{ width: '18rem' , boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0 , 0 ,0,0.19)' }}>
      <Card.Img className='rounded-4 border-2' variant="top" src={item.images} style={{height:'210px'}} />
      <Card.Body>
        <Card.Title>{item.title.slice(0,30)}</Card.Title>
        <Card.Text>
        
         <p>Price: <span className='text-warning fw-bold '>₹ {item.price}.00</span></p>
        </Card.Text>
        <div className='d-flex align-items-center justify-content-center'>
         <Button className='rounded-3'  variant="outline-success"><i class="fa-solid fa-cart-plus"></i> Add to cart</Button>
        </div>

      </Card.Body>
    </Card>
    </Link>

      </Col>))

       :<p>Nothing to display</p>
      }
       <div className='d-flex align-items-center justify-content-center mb-4'>
        <Link to={'/'}> <Button className='rounded-3'  variant="outline-success"> Back to <i class="fa-solid fa-house"></i></Button></Link>
        </div>
      
  
    </Row>


    </>
    
  )
}

export default CategoryList