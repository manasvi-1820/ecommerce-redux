import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userRegister } from "../redux/action";

const UserList = () => {
  // const history = useNavigate();
  // const [data, setData] = useState([]);
  // const userRegister = useSelector((state) => state);
  // console.log("userRegister==>", userRegister);

  // const getData = () => {
  //   setData(userRegister);
  //   console.log("data==>", data);
  // };

  // useEffect(() => {
  //   getData();
  // });

  return (
    <div className="container my-2 py-5">
      <div className="row">
        <h2 className="text-center">User Registered Details</h2>
        {userRegister.map((element) => {
          console.log("element", element);
          return (
            <>
              <Container>
                <Row>
                  <h4>First name:{element.firstName}</h4>
                  <h4>Last name:{element.lastName}</h4>
                  <h4>Email:{element.email}</h4>
                  <h4>Password:{element.password}</h4>
                  <h4>Address:{element.address}</h4>
                  <h4>Telephone:{element.telephone}</h4>
                  <h4>Hobbies:{element.hobbies}</h4>
                  <h4>Gender:{element.gender}</h4>
                  <h4>City:{element.city}</h4>
                  <h4>State:{element.state}</h4>
                  <h4>Pincode:{element.pincode}</h4>
                </Row>
              </Container>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;

// import React from "react";

// const UserList = () => {
//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   );
// };

// export default UserList;
