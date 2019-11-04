import React from "react";
import { Link } from "react-router-dom";
import { Form, Field, withFormik, ErrorMessage } from "formik";
import * as Yup from "yup";

import { SignInBtn } from "../styles/Buttons";
import { BtnDiv } from "../styles/Divs";
import { FbIcon, GoogleIcon, vectorStyle } from "../vectors/Vectors";
import { SignInH1 } from "../styles/AppStyles";

const SignIn = ({ errors, touched, values, status }) => {
  return (
    <div>
      <SignInH1>Sign In</SignInH1>
      

      <Form>
        <BtnDiv>
          <br></br>
          <Field
            type="email"
            name="email"
            placeholder="Email"
            style={{ fontSize: "1.5rem" }}
          />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
          <br></br>
          <Field
            type="password"
            name="password"
            placeholder="Password"
            style={{ fontSize: "1.5rem" }}
          />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          <br></br>
          <Link to={""}>
            <SignInBtn>Sign In</SignInBtn>
          </Link>
          <br></br>
          <Link to={'/createAccount'} style={{ color: "white", textDecoration: 'none' }}><p>Forgot Password?</p></Link>
        </BtnDiv>
      </Form>
    </div>
  );
};

const FormikSignIn = withFormik({
  mapPropsToValues({email, password}) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().required("Please enter and Email"),
    password: Yup.string().required("Enter a password")
  })

  // handleSubmit(values, {setStatus}){
  //   axios
  //     .post('https://reqres.in/api/users', values)
  //     .then(res =>{
  //       setStatus(res.data);
  //       console.log(res);
  //     })
  //     .catch(err=> console.log(err.response));
  // }
})(SignIn);

export default FormikSignIn;
