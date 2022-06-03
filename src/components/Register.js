import React, { useState } from "react";
import { Form, Row, Col, Card, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userRegister } from "../redux/action";

const Register = () => {
  // const userRegister = useSelector((state) => state);
  // console.log("userRegister==>", state);
  //   const [register, setRegister] = useState([]);

  const [firstname, setFirstName] = useState("");
  const [firstnameerror, setFirstNameError] = useState("");

  const [lastname, setLastName] = useState("");
  const [lastnameerror, setLastNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailerror, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passworderror, setPasswordError] = useState("");

  const [address, setAddress] = useState("");
  const [addresserror, setAddressError] = useState("");

  const [mobile, setMobile] = useState("");
  const [mobileerror, setMobileError] = useState("");

  const [hobbies, setHobbies] = useState("");
  const [hobbieserror, setHobbiesError] = useState("");

  const [gender, setGender] = useState("");
  const [gendererror, setGenderError] = useState("");

  const [city, setCity] = useState("");
  const [cityerror, setCityError] = useState("");

  const [state, setState] = useState("");
  const [stateerror, setStateError] = useState("");

  const [pincode, setPincode] = useState("");
  const [pincodeerror, setPincodeError] = useState("");

  const dispatch = useDispatch();
  const registerUser = (register) => {
    console.log("register==>", register);
    dispatch(userRegister(register));
  };

  const handleFirstName = (e) => {
    // console.log("firstname==>", e.target.value);
    setFirstName(e.target.value);
    setFirstNameError("");
  };

  const handleLastName = (e) => {
    // console.log("lastname==>", e.target.value);
    setLastName(e.target.value);
    setLastNameError("");
  };

  const handleEmail = (e) => {
    // console.log("email==>", e.target.value);
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePassword = (e) => {
    // console.log("password==>", e.target.value);
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleAddress = (e) => {
    // console.log("address==>", e.target.value);
    setAddress(e.target.value);
    setAddressError("");
  };

  const handleMobile = (e) => {
    // console.log("mobile==>", e.target.value);
    setMobile(e.target.value);
    setMobileError("");
  };

  const handleHobbies = (e) => {
    // console.log("hobbies==>", e.target.value);
    setHobbies(e.target.value);
    setHobbiesError("");
  };

  const handleGender = (e) => {
    // console.log("gender==>", e.target.value);
    setGender(e.target.value);
    setGenderError("");
  };

  const handleCity = (e) => {
    // console.log("city==>", e.target.value);
    setCity(e.target.value);
    setCityError("");
  };

  const handleState = (e) => {
    // console.log("state==>", e.target.value);
    setState(e.target.value);
    setStateError("");
  };

  const handlePincode = (e) => {
    // console.log("pincode==>", e.target.value);
    setPincode(e.target.value);
    setPincodeError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const regexName = /^[A-Za-z]+$/;
    // const regexNum = /^[6-9]\d{9}$/;
    const regexEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    let errorOccur = false;

    if (firstname == "") {
      errorOccur = true;
      setFirstNameError("Name is Required !");
    } else if (!regexName.test(firstname)) {
      errorOccur = true;
      setFirstNameError("Name must be in alphabets only !");
    } else {
      setFirstNameError("");
    }

    if (lastname == "") {
      errorOccur = true;
      setLastNameError("Name is Required !");
    } else if (!regexName.test(lastname)) {
      errorOccur = true;
      setLastNameError("Name must be in alphabets only !");
    } else {
      setLastNameError("");
    }

    if (email == "") {
      errorOccur = true;
      setEmailError("Email is required !");
    } else if (!regexEmail.test(email)) {
      errorOccur = true;
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }

    if (password == "") {
      errorOccur = true;
      setPasswordError("Password is required !");
    } else {
      setPasswordError("");
    }

    if (address == "") {
      errorOccur = true;
      setAddressError("Address is required !");
    } else {
      setAddressError("");
    }

    if (mobile == "") {
      errorOccur = true;
      setMobileError("Mobile number is required !");
    } else if (isNaN(mobile)) {
      errorOccur = true;
      setMobileError("Mobile number must be in digits only !");
    } else if (mobile.length < 10) {
      errorOccur = true;
      setMobileError("Mobile number must be of 10 Digits !");
    } else {
      setMobileError("");
    }

    if (hobbies == "") {
      errorOccur = true;
      setHobbiesError("Hobbies is required !");
    } else {
      setHobbiesError("");
    }

    if (gender == "") {
      errorOccur = true;
      setGenderError("Please select gender !");
    } else {
      setGenderError("");
    }

    if (city == "") {
      errorOccur = true;
      setCityError("City is Required !");
    } else if (!regexName.test(city)) {
      errorOccur = true;
      setCityError("City must be in alphabets only !");
    } else {
      setCityError("");
    }

    if (state == "") {
      errorOccur = true;
      setStateError("Please select state !");
    } else {
      setStateError("");
    }

    if (pincode == "") {
      errorOccur = true;
      setPincodeError("Pincode is required !");
    } else if (isNaN(pincode)) {
      errorOccur = true;
      setPincodeError("Pincode must be in digits only !");
    } else if (pincode.length < 6) {
      errorOccur = true;
      setPincodeError("Pincode must be of 6 Digits !");
    } else {
      setPincodeError("");
    }

    if (!errorOccur) {
      registerUser();
    }
  };

  return (
    <div>
      <Container className="px-3 py-3 mt-3">
        <h5 className="text-center fw-bold">Registration Form</h5>
        <Card className="mt-4 border- border- border-3">
          <Card.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="email"
                    value={firstname}
                    placeholder="Enter First Name"
                    onChange={handleFirstName}
                  />
                  {firstnameerror && (
                    <span id="error" style={{ color: "red" }}>
                      {firstnameerror}
                    </span>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Last Name </Form.Label>
                  <Form.Control
                    type="email"
                    value={lastname}
                    placeholder="Enter Last Name"
                    onChange={handleLastName}
                  />
                  {lastnameerror && (
                    <span id="error" style={{ color: "red" }}>
                      {lastnameerror}
                    </span>
                  )}
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleEmail}
                  />
                  {emailerror && (
                    <span id="error" style={{ color: "red" }}>
                      {emailerror}
                    </span>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword}
                  />
                  {passworderror && (
                    <span id="error" style={{ color: "red" }}>
                      {passworderror}
                    </span>
                  )}
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress1"
                >
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    placeholder="Apartment, or floor"
                    value={address}
                    onChange={handleAddress}
                  />
                  {addresserror && (
                    <span id="error" style={{ color: "red" }}>
                      {addresserror}
                    </span>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridMobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    maxLength={10}
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={handleMobile}
                  />
                  {mobileerror && (
                    <span id="error" style={{ color: "red" }}>
                      {mobileerror}
                    </span>
                  )}
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Hobbies</Form.Label>
                  <Form.Control value={hobbies} onChange={handleHobbies} />
                  {hobbieserror && (
                    <span id="error" style={{ color: "red" }}>
                      {hobbieserror}
                    </span>
                  )}
                </Form.Group>

                <Form.Group as={Col} className="" controlId="formGridAddress1">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    select={gender}
                    onChange={handleGender}
                  >
                    <option>Select Gender</option>
                    <option value="1">Female</option>
                    <option value="2">Male</option>
                  </Form.Select>
                  {gendererror && (
                    <span id="error" style={{ color: "red" }}>
                      {gendererror}
                    </span>
                  )}
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control value={city} onChange={handleCity} />
                  {cityerror && (
                    <span id="error" style={{ color: "red" }}>
                      {cityerror}
                    </span>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select
                    defaultValue="Choose..."
                    select={state}
                    onChange={handleState}
                  >
                    <option>Choose...</option>
                    <option>Gujarat</option>
                    <option>Rajasthan</option>
                    <option>Madhya Pradesh</option>
                    <option>Uttar Pradesh</option>
                  </Form.Select>
                  {stateerror && (
                    <span id="error" style={{ color: "red" }}>
                      {stateerror}
                    </span>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Pincode</Form.Label>
                  <Form.Control
                    value={pincode}
                    onChange={handlePincode}
                    maxLength={6}
                  />
                  {pincodeerror && (
                    <span id="error" style={{ color: "red" }}>
                      {pincodeerror}
                    </span>
                  )}
                </Form.Group>
              </Row>
              {/* <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}

              <div className="text-center">
                <Button
                  //   to="/userList"
                  className="btn btn-dark ms-2 px-3 py-2"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
