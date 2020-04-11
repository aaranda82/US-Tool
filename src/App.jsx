import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      services: '',
    };
    this.handleServiceContent = this.handleServiceContent.bind(this);
  }

  handleServiceContent(services) {
    this.setState({ services });
  }

  render() {
    return (
      <>
        <header>
          <div>
            <a href="mailto:info@ustooldie.com">info@ustooldie.com</a>
          </div>
          <div>
            <img src="logo_transparent.png" alt="" /> US Tool & Die
          </div>
          <div>
            <a href="tel:19494549858">(949) 454 - 9858</a>
          </div>
        </header>
        <main>
          <div className="about">
            We are a family owned and operated business in Laguna Hills with
            over 20 years of machining experience. Our focus is on excellent
            customer service and quality production.
          </div>
          <div className="services">Services</div>
          <div className="servicesList">
            <div onClick={() => this.handleServiceContent(`We like CNC mills`)}>
              CNC Mills
            </div>
            <div
              onClick={() =>
                this.handleServiceContent(
                  `We're really good at doing stuff with lathes`
                )
              }
            >
              CNC Lathes
            </div>
            <div
              onClick={() =>
                this.handleServiceContent('We can cut stuff with the wire EDM')
              }
            >
              Wire EDMs
            </div>
            <div
              onClick={() =>
                this.handleServiceContent('We do stuff with punch presses too')
              }
            >
              Presses
            </div>
          </div>
          <div className="serviceContent">{this.state.services}</div>
          <div className="contact">Contact Us</div>
          <div className="contactInfo">
            <div className="address">
              23274 Del Lago Dr #1308,
              <br />
              Laguna Hills,
              <br />
              CA 92653
            </div>
            <picture>
              <img src="map.png" alt="map of location" />
            </picture>
            <div className="emailPhone">
              <a href="mailto:info@ustooldie.com">info@ustooldie.com</a>
              <br />
              <a href="tel:19494549858">(949) 454 - 9858</a>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default App;
