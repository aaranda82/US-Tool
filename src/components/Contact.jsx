import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

const { black, lightGrey, red, salmon, green } = ColorScheme;
const ContactForm = styled.div`
  color: ${lightGrey};
  border: ${lightGrey} 3px solid;
  width: 25%;
  min-height: 660px;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const Form = styled.form`
  font-size: 30px;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  @media (max-width: 400px) {
    text-align: center;
  }
`;
const Label = styled.label`
  width: 100%;
  padding: 20px 10px 20px 10px;
  margin: 0;
`;
const Input = styled.input`
  color: ${lightGrey}
  margin: 0;
  font-size: 20px;
  color: ${lightGrey};
  background-color: ${black};
  border: none;
  border-bottom: 3px ${props => props.color || lightGrey} solid;
  width: 100%;
  &:focus {
    outline: none;
    background-color: ${props => props.color || lightGrey};
    opacity: 0.4;
  }
`;
const Error = styled.div`
  color: ${red};
  font-size: 15px;
`;
const Text = styled.textarea`
  width: 100%;
  font-size: 20px;
  color: ${lightGrey};
  background-color: ${black};
  border: none;
  border-bottom: 3px ${props => props.color || lightGrey} solid;
  &:focus {
    outline: none;
    background-color: ${props => props.color || lightGrey};
    opacity: 0.4;
  }
`;
const Button = styled.button`
  font-size: 20px;
  border: 2px solid ${lightGrey};
  font-weight: bold;
  padding: 15px 30px 15px 30px;
  outline: none;
  background-color: ${props => props.color || salmon};
  &:active {
    transform: ${props => props.isActiveClick || ''};
  }
  &:hover {
    outline: none;
  }
  @media (max-width: 400px) {
    margin: auto;
  }
`;

// function FormInput() {
//   return;
// }

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
      isValid: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateText = this.validateText.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
  }

  componentDidMount() {
    // this.isFormValid();
    console.log(this.state.isValid);
  }

  isFormValid() {
    const { nameError, emailError, textError } = this.state.errors;
    const { name, email, text } = this.state;
    let isValid = false;
    if (!nameError && !emailError && !textError && name && email && text) {
      isValid = true;
    }
    this.setState({ isValid });
  }

  validateName() {
    let errors = { ...this.state.errors };
    const { name } = this.state;
    if (!name) {
      errors.nameError = 'Please enter a name';
    } else {
      errors.nameError = '';
    }
    this.isFormValid();
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
    this.isFormValid();
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
    this.isFormValid();
    this.setState({ errors });
  }

  validateInputs(e) {
    e.preventDefault();
    let errors = { ...this.state.errors };
    const { name, email, text } = this.state;
    if (!name) {
      errors.nameError = 'Please enter a name';
    } else {
      errors.nameError = '';
    }
    // eslint-disable-next-line
    const reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email) {
      errors.emailError = 'Please enter an email address';
    } else if (!reg.test(email)) {
      errors.emailError = 'Email address not valid';
    } else {
      errors.emailError = '';
    }

    if (!text) {
      errors.textError = 'Please enter a message';
    } else {
      errors.textError = '';
    }
    this.isFormValid();
    this.setState({ errors });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('I submit!');
  }

  render() {
    return (
      <ContactForm>
        <Form
          onSubmit={
            this.state.isValid ? this.handleSubmit : this.validateInputs
          }
        >
          <Label htmlFor="name">
            Name
            <Input
              color={this.state.errors.nameError ? salmon : green}
              id="name"
              type="text"
              onChange={e => {
                this.setState({ name: e.target.value });
                this.validateName();
              }}
              value={this.state.name}
              onBlur={this.validateName}
            />
            <Error>{this.state.errors.nameError}</Error>
          </Label>
          <Label htmlFor="email">
            Email
            <Input
              color={this.state.errors.emailError ? salmon : green}
              id="email"
              type="text"
              onChange={e => {
                this.setState({ email: e.target.value });
                this.validateEmail();
              }}
              value={this.state.email}
              onBlur={this.validateEmail}
            />
            <Error>{this.state.errors.emailError}</Error>
          </Label>
          <Label htmlFor="message">
            Message
            <Text
              color={this.state.errors.textError ? salmon : green}
              id="message"
              onChange={e => {
                this.setState({ text: e.target.value });
                this.validateText();
              }}
              value={this.state.text}
              cols="30"
              rows="10"
              onBlur={this.validateText}
            ></Text>
            <Error>{this.state.errors.textError}</Error>
          </Label>
          <Button
            type="submit"
            color={this.state.isValid ? green : salmon}
            isActiveClick={this.state.isValid ? 'scale(1.2, 1.2)' : ''}
          >
            Submit
          </Button>
        </Form>
      </ContactForm>
    );
  }
}

export default Contact;
