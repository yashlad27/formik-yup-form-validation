import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = () => {
  console.log("Form Submitted");
};

const BasicForm = () => {
  const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
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
      className={errors.email ? "input-error": ""}
      placeholder="Enter your email" />
      

      <label htmlFor="age">Age</label>
      <input 
      value={values.age} 
      onChange={handleChange}
      onBlur={handleBlur}
      id="age" 
      type="number" 
      placeholder="Enter your age" />

      <label htmlFor="password">Password</label>
      <input 
      value={values.password} 
      onChange={handleChange}
      onBlur={handleBlur}
      id="password" 
      type="password" 
      placeholder="Enter your Password" />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input 
      value={values.password} 
      onChange={handleChange}
      onBlur={handleBlur}
      id="confirmPassword" 
      type="password" 
      placeholder="Confirm Password" />

      <button type="submit">Submit</button>
      
    </form>
  );
};

export default BasicForm;