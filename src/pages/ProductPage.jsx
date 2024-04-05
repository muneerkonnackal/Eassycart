import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function ProductPage() {
  const { productId } = useParams();

  const data = useFetch(
    `https://api.escuelajs.co/api/v1/products/${productId}`
  );
  console.log(data);

  const addToCartAlert = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successfully Added To Cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const backToHomeAlert = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Back To Home!",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
      }
    });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: "linear-gradient(135deg, #ABDCFF 30%, #0396FF 100%)",
      }}
      className="w-100 d-flex  align-items-center justify-content-center"
    >
      <div className="productpage shadow shadow-5 border rounded-3  w-50  d-flex  align-items-center justify-content-center">
        <div>
          <img
            className="rounded-3"
            style={{ width: "350px", height: "420px" }}
            src={data?.images}
            alt=""
          />
        </div>

        <div className="ms-2 p-3">
          <h2 style={{ fontWeight: "600" }}>{data?.title}</h2>
          <h6>{data?.description}</h6>
          <h2>
            Price :{" "}
            <span className="fw-bold text-dark">₹ {data?.price}.00</span>
          </h2>

          <div className="d-flex ">
            <Button
              onClick={addToCartAlert}
              className="rounded-3 text-dark"
              variant="outline-success"
            >
              <i class="fa-solid fa-cart-plus"></i> Add to cart
            </Button>
            <Button
              className="rounded-3 ms-4 text-dark"
              variant="outline-warning "
            >
              <i class="fa-solid fa-cart-plus"></i> Make payment
            </Button>
          </div>
          <div>
           
              {" "}
              <Button
                onClick={backToHomeAlert}
                className="rounded-3 mt-3"
                variant="outline-primary"
              >
                {" "}
                Back to <i class="fa-solid fa-house"></i>
              </Button>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
