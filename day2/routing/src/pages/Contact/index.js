import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";

function Contact() {
  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      message: "",
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000));

      if (values.email === "test@test.com") {
        const response = {
          error: {
            email: "This email already taken",
          },
        };

        return bag.setErrors(response.error);
      }

      bag.resetForm();
    },
    validationSchema,
  });

  return (
    <div className="contact">
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <div>Full Name</div>
          <input
            value={values.fullname}
            onChange={handleChange("fullname")}
            onBlur={handleBlur("fullname")}
            disabled={isSubmitting}
          />
          {errors.fullname && touched.fullname && (
            <div className="error">{errors.fullname}</div>
          )}
        </div>

        <div>
          <div>Email</div>
          <input
            value={values.email}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            disabled={isSubmitting}
          />
          {errors.email && touched.email && (
            <div className="error">{errors.email}</div>
          )}
        </div>

        <div>
          <div>Message</div>
          <textarea
            value={values.message}
            onChange={handleChange("message")}
            onBlur={handleBlur("message")}
            disabled={isSubmitting}
          />
          {errors.message && touched.message && (
            <div className="error">{errors.message}</div>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
