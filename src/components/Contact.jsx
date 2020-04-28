import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

const { black, lightGrey, red, salmon } = ColorScheme;
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
  font-size: 30px;
`;
const Input = styled.input`
  font-size: 20px;
  width: 90%;
  background-color: ${black};
  border: none;
  border-bottom: 3px ${salmon} solid;

  &:focus {
    outline: none;
  }
`;
const Text = styled.textarea`
  font-size: 20px;
  width: 100%;
  background-color: ${black};
  border: none;
  border-bottom: 3px ${salmon} solid;
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

function FormInput() {
  return;
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      text: '',
      errors: {
        nameError: '',
        emailError: '',
        textError: '',
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateText = this.validateText.bind(this);
  }

  validateName() {
    let errors = { ...this.state.errors };
    const { name } = this.state;
    console.log(!name);
    if (!name) {
      errors.nameError = 'Please enter a name';
    } else {
      errors.nameError = '';
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
    this.validateName();
    this.validateEmail();
    this.validateText();
    let errors = { ...this.state.errors };
    const { name, email, text } = this.state;
    if (name && email && text) {
      console.log('I submit!');
      errors = {
        nameError: '',
        emailError: '',
        textError: '',
      };
    }
    this.setState({ errors });
  }

  render() {
    return (
      <ContactForm>
        <Form onSubmit={this.handleSubmit}>
          <fieldset>
            <Legend>Contact Us</Legend>
            <Input
              id="name"
              type="text"
              onChange={e => this.setState({ name: e.target.value })}
              value={this.state.name}
              onBlur={this.validateName}
            />
            <label htmlFor="name">Name:</label>
            <Error>{this.state.errors.nameError}</Error>
            <Input
              id="email"
              type="text"
              onChange={e => this.setState({ email: e.target.value })}
              value={this.state.email}
              onBlur={this.validateEmail}
            />
            <label htmlFor="email">Email:</label>
            <Error>{this.state.errors.emailError}</Error>
            <Text
              id="message"
              onChange={e => this.setState({ text: e.target.value })}
              value={this.state.text}
              cols="30"
              rows="10"
              onBlur={this.validateText}
            ></Text>
            <label htmlFor="message">Message:</label>
            <Error>{this.state.errors.textError}</Error>
            <Button type="submit">Submit</Button>
          </fieldset>
        </Form>
      </ContactForm>
    );
  }
}

export default Contact;
