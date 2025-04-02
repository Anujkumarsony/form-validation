import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmpass: "",
};

const Forms = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Name</p>
            <input
              type="text"
              autoComplete="off"
              name="name"
              id="name"
              placeholder="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? <p>{errors.name}</p> : null}
          </div>
          <div>
            <p>Email</p>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? <p>{errors.email}</p> : null}
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p>{errors.password}</p>
            ) : null}
          </div>
          <div>
            <p>Confirm Password</p>
            <input
              type="password"
              autoComplete="off"
              name="confirmpass"
              id="confirmpass"
              placeholder="confirm password"
              value={values.confirmpass}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmpass && touched.confirmpass ? (
              <p>{errors.confirmpass}</p>
            ) : null}
          </div>
          <div>
            <button>sign up</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forms;
