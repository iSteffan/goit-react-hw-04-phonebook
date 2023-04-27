import { Form, Label, Btn, Field, ErrorMessage } from './ContactForm.styled';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Required field!'),
  number: Yup.number().positive('Must be > 0!').required('Required field!'),
});

export const ContactForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={FormSchema}
      onSubmit={(values, actions) => {
        onSave({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <Label>
          Name
          <br />
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
        </Label>
        <Label>
          Number
          <br />
          <Field type="number" name="number" />
          <ErrorMessage name="number" component="div" />
        </Label>
        <Btn type="submit">Add contact</Btn>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
