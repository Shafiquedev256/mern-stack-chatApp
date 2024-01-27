import { Formik, Form, Field, ErrorMessage } from 'formik';

type Initial = {
  email: string;
  password: string;
  name: string;
};

const initial: Initial = { email: '', password: '', name: '' };

const SignupPage = () => (
  <div className="max-w-lg mx-auto mt-8 p-8 bg-white shadow-md rounded-md">
    <h1 className="text-3xl text-gray-800 mb-6 font-semibold">Sign up</h1>
    <Formik
      initialValues={initial}
      validate={(values: Initial) => {
        const errors: Initial = {} as Initial;
        if (!values.name) {
          errors.name = 'Required';
        }
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <Field
            type="text"
            name="name"
            placeholder="Enter your username..."
            className="w-full px-2 py-3 placeholder-blue-600 border-0 bg-blue-100 bg-opacity-60 outline-blue-800 rounded-md"
          />
          <ErrorMessage name="name" component="div" className="text-red-500 text-sm font-bold" />
          <Field
            type="text"
            name="email"
            placeholder="Enter your email..."
            className="w-full px-2 py-3 placeholder-blue-600 border-0 bg-blue-100 bg-opacity-60 outline-blue-800 rounded-md"
          />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm font-bold" />
          <Field
            type="password"
            name="password"
            placeholder="Set your password..."
            className="w-full px-2 py-3 placeholder-blue-600 border-0 bg-blue-100 bg-opacity-60 outline-blue-800 rounded-md"
          />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm font-bold" />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-800 transition duration-300 border-0 font-bold"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignupPage;
