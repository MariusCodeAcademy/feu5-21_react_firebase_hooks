import React from 'react';
import { useFormik } from 'formik';

function LoginForm({ onLogin }) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('Form values:', values);
      onLogin(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          className="form-control"
          id="email"
          type="text"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          className="form-control"
          id="password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>
      <button className="btn btn-outline-dark mt-4" type="submit">
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
