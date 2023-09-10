import React, { useRef } from "react";
import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Register = () => {
  // const signupNameRef = useRef();
  // const signupPasswordRef = useRef();
  // const signupEmailRef = useRef();

  // const submitHandler = (e) => {
  //   e.preventDefault();
  // };

  // const [name,setName] = useState();
  // const [email,setEmail] = useState();
  // const [password,setPassword] = useState();
  // const [confirmPassword, setConfirmPassword] = useState();
  // const navigate = useNavigate();

  // const submitHandler = (e) => {
  //     e.preventDefault();
  //     axios.post('http://localhost:8081/signup',{name,email,password,confirmPassword})
  //     .then(result=>{console.log(result)
  //     navigate('/login')
  //     })
  //     .catch(error=>console.log(error))
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const URL = process.env.REACT_APP_URL;

  async function handleSignUp(e) {
    e.preventDefault(); // event.preventDefault() method to prevent the default behavior of an HTML form submission

    setLoading(true);
    try {
      const response = await axios({
        method: "post",
        url: URL + "/api/auth/signup",
        withCredentials: true,
        data: userData
      });

      // the withCredentials property to 'true'. This tells the browser to include any cookies associated with the current domain in the request.
      if (response.data.success) {
        navigate("/signin");
      }
      setLoading(false);
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
    }
  
  }

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={(e) => handleSignUp(e)}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="User Name"
                    required
                    value={userData.name}
                    onChange={(e)=>setUserData({ ...userData, name: e.target.value })}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="name@company.com"
                    required
                    value={userData.email}
                    onChange={(e)=>setUserData({ ...userData, email: e.target.value })}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="••••••••"
                    required
                    value={userData.password}
                    onChange={(e)=>setUserData({ ...userData, password: e.target.value })}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="••••••••"
                    required
                    value={userData.confirmPassword}
                    onChange={(e)=>setUserData({ ...userData, confirmPassword: e.target.value })}
                  />
                </div>
                <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
          {loading ? (
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-3 text-white animate-spin ml-2"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
          ) : null}
        </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
