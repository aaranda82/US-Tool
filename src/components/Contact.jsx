import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

const { lightGrey, red, salmon } = ColorScheme;
const ContactForm = styled.div`
  color: ${lightGrey};
  border: ${lightGrey} 3px solid;
  width: 25%;
  min-height: 660px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  @media (max-width: 400px) {
    width: 75%;
  }
`;
const Form = styled.form`
  text-align: left;
  font-size: 30px;
`;
const Input = styled.input`
  font-size: 20px;
  width: 90%;
`;
const Text = styled.textarea`
  font-size: 20px;
  width: 100%;
`;
const Error = styled.div`
  color: ${red};
  font-size: 15px;
`;
const Button = styled.button`
  font-size: 20px;
  border: none;
  background-color: ${salmon};
  font-weight: bold;
  padding: 10px 20px 10px 20px;
  &:active {
    transform: scale(1.2, 1.2);
  }
  &:hover {
    background-color: ${red};
  }
`;
const Legend = styled.legend`
  text-align: center;
`;

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      text: '',
      errors: {
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        textError: '',
      },
    };
    this.handleOnChangeFirstName = this.handleOnChangeFirstName.bind(this);
    this.handleOnChangeLastName = this.handleOnChangeLastName.bind(this);
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
    this.handleOnChangeText = this.handleOnChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFirstName = this.validateFirstName.bind(this);
    this.validateLastName = this.validateLastName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateText = this.validateText.bind(this);
  }

  handleRender() {
    return (
      <ContactForm>
        <Form onSubmit={this.handleSubmit}>
          <fieldset>
            <Legend>Contact Us</Legend>
            <label htmlFor="firstName">First Name:</label>
            <Input
              id="firstName"
              type="text"
              onChange={this.handleOnChangeFirstName}
              value={this.state.firstName}
              onBlur={this.validateFirstName}
            />
            <Error>{this.state.errors.firstNameError}</Error>
            <label htmlFor="lastName">Last Name:</label>
            <Input
              id="lastName"
              type="text"
              onChange={this.handleOnChangeLastName}
              value={this.state.lastName}
              onBlur={this.validateLastName}
            />
            <Error>{this.state.errors.lastNameError}</Error>
            <label htmlFor="email">Email:</label>
            <Input
              id="email"
              type="text"
              onChange={this.handleOnChangeEmail}
              value={this.state.email}
              onBlur={this.validateEmail}
            />
            <Error>{this.state.errors.emailError}</Error>
            <label htmlFor="message">Message:</label>
            <Text
              id="message"
              onChange={this.handleOnChangeText}
              value={this.state.text}
              cols="30"
              rows="10"
              onBlur={this.validateText}
            ></Text>
            <Error>{this.state.errors.textError}</Error>
            <Button type="submit">Submit</Button>
          </fieldset>
        </Form>
      </ContactForm>
    );
  }

  handleOnChangeFirstName(e) {
    this.setState({ firstName: e.target.value });
  }

  handleOnChangeLastName(e) {
    this.setState({ lastName: e.target.value });
  }

  handleOnChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleOnChangeText(e) {
    this.setState({ text: e.target.value });
  }

  validateFirstName() {
    let errors = { ...this.state.errors };
    const { firstName } = this.state;
    if (!firstName) {
      errors.firstNameError = 'Please enter a first name';
    } else {
      errors.firstNameError = '';
    }
    this.setState({ errors });
  }

  validateLastName() {
    let errors = { ...this.state.errors };
    const { lastName } = this.state;
    if (!lastName) {
      errors.lastNameError = 'Please enter a last name';
    } else {
      errors.lastNameError = '';
    }
    this.setState({ errors });
  }

  validateEmail() {
    let errors = { ...this.state.errors };
    const { email } = this.state;
    // eslint-disable-next-line
    const reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email) {
      errors.emailError = 'Please enter an email address';
    } else if (!reg.test(email)) {
      errors.emailError = 'Email address not valid';
    } else {
      errors.emailError = '';
    }
    this.setState({ errors });
  }

  validateText() {
    let errors = { ...this.state.errors };
    const { text } = this.state;
    if (!text) {
      errors.textError = 'Please enter a message';
    } else {
      errors.textError = '';
    }
    this.setState({ errors });
  }

  handleSubmit(e) {
    e.preventDefault();
    let errors = { ...this.state.errors };
    const { firstName, lastName, email, text } = this.state;
    if (firstName && lastName && email && text) {
      console.log('I submit!');
      errors = {
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        textError: '',
      };
    }
    this.setState({ errors });
  }

  render() {
    return this.handleRender();
  }
}

export default Contact;
