import { Field, Form, Formik } from "formik";
import { signIn } from "../api/Login";
import * as Yup from "yup";

export default function SignIn() {
  
    
    const SignInSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    })

    return (
    <div className="justify-center flex items-center h-screen">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-5/4 md:w-1/2">
        
        <Formik
          initialValues={{
            email: "",
            password: "",
            repeatPassword: "",
          }}
        validationSchema={SignInSchema}
          onSubmit={async (values) => {
            await signIn(values.email, values.password,()=>console.log("success"));
          }}
        >
         {
            ({errors,touched})=>(
                <Form>
                <div className="w-full flex justify-center">
                  <h2 className="text-3xl text-gray-900 font-bold dark:text-white mb-4">
                    SignIn
                  </h2>
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
                        errors.email && touched.email ? <div className="text-red-600">{errors.email}</div> : null
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
                        errors.password && touched.password ? <div className="text-red-600">{errors.password}</div> : null
                  }
                </div>
    
                <button
                  type="submit"
                  className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
                <p className="mt-2">
                    Don&apos;t have an Account?{" "}
                    <a
                        href="/register"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                        SignUp
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