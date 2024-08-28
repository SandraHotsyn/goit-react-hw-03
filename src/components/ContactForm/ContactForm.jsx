import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "min - 3")
    .max(50, "max - 50")
    .required("required!"),
  number: Yup.string()
    .min(3, "min - 3")
    .max(50, "max - 50")
    .required("required!"),
});

export default function ContactForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values.name, values.number);
        resetForm();
      }}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" style={{ color: "red" }} />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" />
          <ErrorMessage
            name="number"
            component="div"
            style={{ color: "red" }}
          />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
