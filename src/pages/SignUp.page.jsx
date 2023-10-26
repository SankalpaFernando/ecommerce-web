import { Field, Form, Formik } from "formik";
import { signUp } from "../api/Login";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function SignUp() {
  
  const  navigate  = useNavigate();

  const SignUpSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
      repeatPassword: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required")
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      ,
  })

  return (
    <div className="justify-center flex items-center h-screen">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-5/4 md:w-1/2">
        
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            repeatPassword: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={async (values) => {
            await signUp(values.name, values.email, values.password,()=>navigate("/login"));
          }}
        >
          {
            ({errors,touched})=> (
              <Form>
            <div className="w-full flex justify-center">
              <h2 className="text-3xl text-gray-900 font-bold dark:text-white mb-4">
                SignUp
              </h2>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="John Doe"
                required
              />
              {
                errors.name && touched.name ? (
                  <div className="text-red-500">{errors.name}</div>
                ) : null
              }
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="john@something.com"
                required
              />
              {
                errors.email && touched.email ? (
                  <div className="text-red-500">{errors.email}</div>
                ) : null
              }
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
              {
                errors.password && touched.password ? (
                  <div className="text-red-500">{errors.password}</div>
                ) : null
              }
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Repeat password
              </label>
              <Field
                type="password"
                id="repeat-password"
                name="repeatPassword"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
              {
                errors.repeatPassword && touched.repeatPassword ? (
                  <div className="text-red-500">{errors.repeatPassword}</div>
                ) : null
              }
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <Field
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register new account
            </button>
            <p className="mt-2">
              Already have an Account?{" "}
              <a
                href="/login"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                SignIn
              </a>
            </p>
          </Form>
            )
          }
        </Formik>
      </div>
    </div>
  );
}
