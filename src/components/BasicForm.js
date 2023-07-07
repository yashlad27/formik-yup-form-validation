import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = () => {
  console.log("Form Submitted");
};

const BasicForm = () => {
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  // console.log(formik.values);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">

      <label htmlFor="email">Email</label>
      <input 
      value={values.email} 
      onChange={handleChange}
      onBlur={handleBlur}
      id="email" 
      type="email" 
      className={errors.email && touched.email ? "input-error": ""}
      placeholder="Enter your email" />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}

      <label htmlFor="age">Age</label>
      <input 
      value={values.age} 
      onChange={handleChange}
      onBlur={handleBlur}
      id="age" 
      type="number" 
      className={errors.age && touched.age ? "input-error": ""}
      placeholder="Enter your age" />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}

      <label htmlFor="password">Password</label>
      <input 
      value={values.password} 
      onChange={handleChange}
      onBlur={handleBlur}
      className={errors.password && touched.password ? "input-error": ""}
      id="password" 
      type="password" 
      placeholder="Enter your Password" />
      {errors.password && touched.password && <p className="error">{errors.password}</p>}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input 
      value={values.confirmPassword} 
      onChange={handleChange}
      onBlur={handleBlur}
      className={errors.confirmPassword && touched.confirmPassword ? "input-error": ""}
      id="confirmPassword" 
      type="password" 
      placeholder="Confirm Password" />
      {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

      <button type="submit">Submit</button>

    </form>
  );
};

export default BasicForm;