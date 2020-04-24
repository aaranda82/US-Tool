import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

const { lightGrey, red, salmon } = ColorScheme;
const ContactForm = styled.div`
  color: ${lightGrey};
  border: ${lightGrey} 3px solid;
  width: 25%;
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
  &:active {
    transform: scale(1.2, 1.2);
  }
  &:hover {
    background-color: ${red};
  }
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
  }

  handleRender() {
    return (
      <ContactForm>
        <Form onSubmit={this.handleSubmit}>
          <fieldset>
            <label htmlFor="firstName">First Name:</label>
            <Input
              id="firstName"
              type="text"
              onChange={this.handleOnChangeFirstName}
              value={this.state.firstName}
            />
            <Error>{this.state.errors.firstNameError}</Error>
            <label htmlFor="lastName">Last Name:</label>
            <Input
              id="lastName"
              type="text"
              onChange={this.handleOnChangeLastName}
              value={this.state.lastName}
            />
            <Error>{this.state.errors.lastNameError}</Error>
            <label htmlFor="email">Email:</label>
            <Input
              id="email"
              type="text"
              onChange={this.handleOnChangeEmail}
              value={this.state.email}
            />
            <Error>{this.state.errors.emailError}</Error>
            <label htmlFor="message">Message:</label>
            <Text
              id="message"
              onChange={this.handleOnChangeText}
              value={this.state.text}
              cols="30"
              rows="10"
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

  handleSubmit(e) {
    e.preventDefault();
    let errors = { ...this.state.errors };
    const { firstName, lastName, email, text } = this.state;
    // eslint-disable-next-line
    const reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!firstName) {
      errors.firstNameError = 'Please enter a first name';
    } else {
      errors.firstNameError = '';
    }

    if (!lastName) {
      errors.lastNameError = 'Please enter a last name';
    } else {
      errors.lastNameError = '';
    }

    if (!email) {
      errors.emailError = 'Please enter an email';
    } else if (!reg.test(email)) {
      errors.emailError = 'Please enter a valid email address';
    } else {
      errors.emailError = '';
    }
    if (!text) {
      errors.textError = 'Please enter a message';
    } else {
      errors.textError = '';
    }

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
