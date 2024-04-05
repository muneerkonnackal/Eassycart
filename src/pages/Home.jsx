import React from "react";
import Navbar from "../components/Navbar";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Home() {
  const data = useFetch("https://api.escuelajs.co/api/v1/products");
  console.log(data);
  const homeCatagory = useFetch("https://api.escuelajs.co/api/v1/categories");
  console.log(homeCatagory);

  return (
    <>
      <Navbar />
      <Row className="ms-5 me-3" style={{ marginTop: "110px" }}>
        <div>
          <h3>Categories</h3>
          <marquee scrollAmount={10} className="mt-1 mb-5 bg-warning rounded-3 me-3 p-3">
            <div className="d-flex gap-2">
              {homeCatagory?.length > 0
                ? homeCatagory.map((item) => (
                    <div className="ms-2" style={{ width: "200px" }}>
                      <Card
                        className="rounded-4"
                        style={{
                          width: "8rem",
                          height: "11rem",
                          boxShadow:
                            "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0 , 0 ,0,0.19)",
                        }}
                      >
                        <Card.Img
                          className="rounded-4 border-2"
                          variant="top"
                          src={item.image}
                          style={{ height: "100px" }}
                        />
                        <Card.Body>
                          <Card.Title><h6 className="text-center" style={{marginTop:'-10px'}}>{item.name}</h6></Card.Title>

                          <div className="d-flex align-items-center justify-content-center">
                           <Link to={`/categorylist/${item.id}`}>
                              <Button
                              style={{height:'30px'}}
                                className="rounded-3"
                                variant="outline-primary"
                              >
                                View All
                              </Button>
                           </Link>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))
                : null}
            </div>
          </marquee>
        </div>
          <h2 className="mb-2">All Products</h2>
        {data?.length > 0 ? (
          data?.map((item) => (
            
            <Col className="mb-5 " sm={12} md={6} lg={4} xl={3}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/productpage/${item.id}`}
              >
                <Card
                  className="rounded-4"
                  style={{
                    width: "18rem",
                    boxShadow:
                      "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0 , 0 ,0,0.19)",
                  }}
                >
                  <Card.Img
                    className="rounded-4 border-2"
                    variant="top"
                    src={item.images}
                    style={{ height: "210px" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 30)}</Card.Title>
                    <Card.Text>
                      <p>
                        Price:{" "}
                        <span className="text-warning fw-bold ">
                          ₹ {item.price}.00
                        </span>
                      </p>
                    </Card.Text>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button className="rounded-3" variant="outline-success">
                        <i class="fa-solid fa-cart-plus"></i> Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
        ) : (
          <p>Nothing to display</p>
        )}
      </Row>
    </>
  );
}

export default Home;
