import React from "react";
import { Link } from "react-router-dom";
import { Form, Field, withFormik, ErrorMessage } from "formik";
import * as Yup from "yup";

import { SignInBtn } from "../styles/Buttons";
import { BtnDiv } from "../styles/Divs";
import { SignInH1 } from "../styles/AppStyles";

const CreateAccount = ({ errors, touched, values, status }) => {
  return (
    <div>
      <SignInH1>Create Account</SignInH1>
      
      <Form >
        <BtnDiv >
          <br></br>
          <Field type="text" name="userName" placeholder="User Name" style={{ fontSize: "1.5rem" }} />
          {touched.userName && errors.userName && (
            <p className="error">{errors.userName}</p>
          )}
          <br></br>
          <Field type="email" name="email" placeholder="Email" style={{ fontSize: "1.5rem" }} />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
          <br></br>
          <Field type="password" name="password" placeholder="Password" style={{ fontSize: "1.5rem" }}/>
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          <br></br>
          <Field type="password" name="password2" placeholder="Verify Password" style={{ fontSize: "1.5rem" }}/>
          {touched.password2 && errors.password2 && (
            <p className="error">{errors.password2}</p>
          )}

          <Link>
            <SignInBtn>Create</SignInBtn>
          </Link>
          <Link to={'/'}><p style={{ color: "white" }}>Never mind</p></Link>
        </BtnDiv>
      </Form>
    </div>
  );
};

const FormikCreateAcc = withFormik({
  mapPropsToValues({ userName, email, password, password2 }) {
    return {
      username: userName || "",
      email: email || "",
      password: password || "",
      password2: password2 || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("A name is required"),
    email: Yup.string().required("Please enter and Email"),
    password: Yup.string().required("Enter a password"),
    password2: Yup.string()
      .oneOf([Yup.ref('password'), 'Passwords do not match'])
      .required("Enter a password")
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
})(CreateAccount);

export default FormikCreateAcc;
