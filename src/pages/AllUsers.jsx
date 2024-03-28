import React from "react";
import useFetch from "../hooks/useFetch";
import Navbar from "../components/Navbar";

function AllUsers() {
  const data = useFetch("https://api.escuelajs.co/api/v1/users");
  console.log(data);

  if (!data) {
    return;
    <div>Loading...</div>;
  }

  return (
    <>
     <Navbar />
      <div
        style={{
          width: "100%",
          height: "100% ",
          backgroundImage: "linear-gradient(135deg, #ABDCFF 30%, #0396FF 100%)",
        
        }}
      >
       
        
        <div className="p-5 d-flex align-items-center justify-content-center">
          <table
            style={{ border: "12px", marginTop: "100px" }}
            className="table table-bordered  w-75"
          >
            <thead>
              <tr>
                <th colSpan={4} className="text-center"><h2 className="fw-bold fs-2"><u>All Users</u></h2></th>
              </tr>
              <tr className="text-center">
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={user.id} className="text-center">
                  <td className="align-middle">{index + 1}</td>
                  <td>
                    <img
                      style={{ borderRadius: "50%" }}
                      src={`${user.avatar}`}
                      width={"100px"}
                      height={"100px"}
                      className=" border shadow"
                      alt=""
                    />
                  </td>
                  <td className="align-middle">
                    <h5 className="">{user.name}</h5>
                  </td>
                  <td className="align-middle">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AllUsers;
