import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

const { lightGrey } = ColorScheme;
const ContactForm = styled.div`
  color: ${lightGrey};
  border: ${lightGrey} 3px solid;
  width: 25%;
  @media (max-width: 400px) {
    width: 75%;
  }
`;
const Form = styled.form`
  text-align: left;
  padding: 30px;
  font-size: 1.5em;
`;
const Input = styled.input`
  font-size: 0.8em;
  font-family: Georgia, 'Times New Roman', Times, serif;
`;
const Div = styled.div`
  padding-top: 10px;
`;
const Text = styled.textarea`
  font: 0.5em;
  font-family: Georgia, 'Times New Roman', Times, serif;
`;

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      text: '',
    };
    this.handleOnChangeFirstName = this.handleOnChangeFirstName.bind(this);
    this.handleOnChangeLastName = this.handleOnChangeLastName.bind(this);
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
    this.handleOnChangeText = this.handleOnChangeText.bind(this);
  }

  handleRender() {
    return (
      <ContactForm>
        <Form onSubmit={this.handleSubmit}>
          <Div>
            <label>First Name:</label>
            <br />
            <Input
              type="text"
              onChange={this.handleOnChangeFirstName}
              value={this.state.firstName}
            />
          </Div>
          <br />
          <Div>
            <label>Last Name:</label>
            <br />
            <Input
              type="text"
              onChange={this.handleOnChangeLastName}
              value={this.state.lastName}
            />
          </Div>
          <br />
          <Div>
            <label>Email:</label>
            <br />
            <Input
              type="text"
              onChange={this.handleOnChangeEmail}
              value={this.state.email}
            />
          </Div>
          <br />
          <Div>
            <label>Message:</label>
            <br />
            <Text
              onChange={this.handleOnChangeText}
              value={this.state.text}
              cols="30"
              rows="10"
            ></Text>
          </Div>
          <br />
          <button type="submit">Submit</button>
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
    console.log('I submit!');
  }

  render() {
    return this.handleRender();
  }
}

export default Contact;
