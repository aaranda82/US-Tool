import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

const { black, lightGrey, red, salmon, green, lightBlue } = ColorScheme;
const ContactForm = styled.div`
  color: ${lightGrey};
  width: 25%;
  min-height: 660px;
  border: 1px solid ${lightGrey};
  @media (max-width: 1100px) {
    width: 75%;
  }
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
const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
  width: 100%;
  text-align: center;
  margin: 20px 0px 20px 0px;
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
  border-bottom: 3px ${props => props.bgcolor || lightGrey} solid;
  width: 100%;
  transition: background-color 0.5s ease-in;
  &:focus {
    color: ${black};
    outline: none;
    background-color: ${props => props.bgcolor || lightGrey};
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
  transition: background-color 0.5s ease-in;
  border-bottom: 3px ${props => props.bgcolor || lightGrey} solid;
  &:focus {
    outline: none;
    color: ${black};
    background-color: ${props => props.bgcolor || lightGrey};
    opacity: 0.4;
  }
`;
const Button = styled.button`
  font-size: 20px;
  border: 2px solid ${lightGrey};
  font-weight: bold;
  padding: 15px 30px 15px 30px;
  outline: none;
  background-color: ${props => props.bgcolor};
  transition: background-color 0.5s ease-in;
  cursor: pointer;
  &:active {
    transform: ${props => props.isActiveClick};
  }
  &:hover {
    outline: none;
    color: ${lightGrey};
  }
  @media (max-width: 400px) {
    margin: auto;
  }
`;

function FormInput(props) {
  if (props.inputType === 'input') {
    return (
      <Label htmlFor={props.title}>
        {props.title}
        <Input
          bgcolor={props.color}
          id={props.title}
          type="text"
          onChange={props.onChange}
          value={props.value}
          onBlur={props.onBlur}
          placeholder={props.placeHolder}
        />
        <Error>{props.error}</Error>
      </Label>
    );
  } else {
    return (
      <Label htmlFor={props.title}>
        {props.title}
        <Text
          bgcolor={props.color}
          id={props.title}
          onChange={props.onChange}
          value={props.value}
          cols="30"
          rows="10"
          onBlur={props.onBlur}
          placeholder={props.placeHolder}
        ></Text>
        <Error>{props.error}</Error>
      </Label>
    );
  }
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      text: '',
      errors: {
        nameError: null,
        emailError: null,
        textError: null,
      },
      isValid: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateText = this.validateText.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
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
          <Title>Contact Us</Title>
          <FormInput
            inputType="input"
            title={'Name'}
            color={() => {
              switch (this.state.errors.nameError) {
                case '':
                  return green;
                case 'Please enter a name':
                  return salmon;
                default:
                  return lightBlue;
              }
            }}
            onChange={e => {
              this.setState({ name: e.target.value });
              this.validateName();
            }}
            value={this.state.name}
            onBlur={this.validateName}
            error={this.state.errors.nameError}
            placeHolder="Your name"
          />
          <FormInput
            inputType="input"
            title={'Email'}
            color={() => {
              switch (this.state.errors.emailError) {
                case '':
                  return green;
                case 'Please enter an email address':
                case 'Email address not valid':
                  return salmon;
                default:
                  return lightBlue;
              }
            }}
            onChange={e => {
              this.setState({ email: e.target.value });
              this.validateEmail();
            }}
            value={this.state.email}
            onBlur={this.validateEmail}
            error={this.state.errors.emailError}
            placeHolder="Your email"
          />
          <FormInput
            inputType=""
            title={'Message'}
            color={() => {
              switch (this.state.errors.textError) {
                case '':
                  return green;
                case 'Please enter a message':
                  return salmon;
                default:
                  return lightBlue;
              }
            }}
            onChange={e => {
              this.setState({ text: e.target.value });
              this.validateText();
            }}
            value={this.state.text}
            onBlur={this.validateText}
            error={this.state.errors.textError}
            placeHolder="How can we help?"
          />
          <Button
            type="submit"
            bgcolor={() => {
              switch (this.state.isValid) {
                case true:
                  return green;
                case false:
                  return salmon;
                default:
                  return lightBlue;
              }
            }}
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
