// import React, { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import * as S from './ContactForm.styled';
// import { Form, Input, Label, Button } from './ContactForm.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <S.ErrorText>{message}</S.ErrorText>}
    />
  );
};

const validatePattern = {
  name: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
  number:
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
};

const errorMessage = {
  name: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  number:
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(validatePattern.name, errorMessage.name)
    .required(),
  number: yup
    .string()
    .matches(validatePattern.number, errorMessage.number)
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <S.ContactForm autoComplete="off">
        <S.Label>
          Name
          <S.Input type="text" name="name" />
          <FormError name="name" />
        </S.Label>

        <S.Label>
          Number
          <S.Input type="tel" name="number" />
          <FormError name="number" />
        </S.Label>

        <S.Button type="submit">Add contact</S.Button>
      </S.ContactForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// export class ContactForm extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   handleChange = e => {
//     const { name, value } = e.target;

//     this.setState({ [name]: value });
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
// <Form autoComplete="off" onSubmit={this.handleSubmit}>
//   <Label>
//     Name
//     <Input
//       onChange={this.handleChange}
//       value={name}
//       type="text"
//       name="name"
//       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//       required
//     />
//   </Label>

//   <Label>
//     Number
//     <Input
//       onChange={this.handleChange}
//       value={number}
//       type="tel"
//       name="number"
//       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//       required
//     />
//   </Label>

//   <Button type="submit">Add contact</Button>
// </Form>
//     );
//   }
// }
