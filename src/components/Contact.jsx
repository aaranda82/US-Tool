import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';
import emailjs from 'emailjs-com';

const { black, lightGrey, red, salmon, green, lightBlue } = ColorScheme;
const ContactForm = styled.div`
  color: ${lightGrey};
  min-height: 600px;
  border: 1px solid ${lightGrey};
  background-color: ${black};
  width: 350px;
  @media screen and (max-width: 400px) {
    width: 300px;
  }
`;
const Form = styled.form`
  font-size: 30px;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  padding: 15px 30px 15px 30px;
  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (max-width: 650px) {
    font-size: 20px;
  }
`;
const Label = styled.label`
  font-size: 20px;
  width: 100%;
  margin-top: 10px;
  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
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
  transition: all 0.5s ease;

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
  transition: all 0.5s ease;
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
  transition: all 0.5s ease;
  cursor: pointer;
  margin: 40px auto;
  &:active {
    transform: ${props => props.isActiveClick};
  }
  &:hover {
    outline: none;
    color: ${lightGrey};
  }
  @media screen and (max-width: 400px) {
  }
`;

function FormInput(props) {
  if (props.inputType === 'input') {
    return (
      <>
        <Label htmlFor={props.title}>{props.title}</Label>
        <Input
          name={props.name}
          bgcolor={props.color}
          id={props.title}
          type="text"
          onChange={props.onChange}
          value={props.value}
          onBlur={props.onBlur}
          placeholder={props.placeHolder}
        />
        <Error>{props.error}</Error>
      </>
    );
  } else {
    return (
      <>
        <Label htmlFor={props.title}>{props.title}</Label>
        <Text
          name={props.name}
          bgcolor={props.color}
          id={props.title}
          onChange={props.onChange}
          value={props.value}
          cols="30"
          rows="5"
          onBlur={props.onBlur}
          placeholder={props.placeHolder}
        ></Text>
        <Error>{props.error}</Error>
      </>
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
    this.sendEmail = this.sendEmail.bind(this);
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

  sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'default_service',
        'template_uc1KOyOn',
        e.target,
        'user_m6NruWncZN4iR0Yby8Isl'
      )
      .then(
        result => {
          console.log(result.text, 'ok');
        },
        error => {
          console.log(error.text);
        }
      );
    this.setState({
      name: '',
      email: '',
      text: '',
      errors: {
        nameError: null,
        emailError: null,
        textError: null,
      },
      isValid: null,
    });
  }

  render() {
    return (
      <ContactForm id="Contact">
        <Form
          onSubmit={this.state.isValid ? this.sendEmail : this.validateInputs}
        >
          <Title>Contact Us</Title>
          <input type="hidden" name="contact_number"></input>
          <FormInput
            name="from_name"
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
            name="from_email"
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
            name="message_html"
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
