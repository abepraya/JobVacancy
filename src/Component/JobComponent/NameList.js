import React, { Component } from "react";
import axios from "axios";

export class NameList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${this.props.match.params.id}.json`)
      .then(res => this.setState({data: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    // const { data, errorMsg } = this.state;
    return (
      <section className="container section">
        {this.state.data === 0 && (
          <img
            className="spinner"
            src="https://i.pinimg.com/originals/90/80/60/9080607321ab98fa3e70dd24b2513a20.gif"
            alt="Loading"
          />
        )}
        {this.state.data !== 0 && (
          <div className="columns is-mobile is-multiline">
            <div className="column is-one-third details">
              {this.state.data.company_logo && (
                <div className="card-image">
                  <figure className="image">
                    <img
                      src={this.state.data.company_logo}
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
              )}
              {!this.state.data.company_logo && (
                <div className="card-image">
                  <figure className="image">
                    <img
                      src="https://1000logos.net/wp-content/uploads/2018/08/GitHub-Logo.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
              )}
              <div className="more-details">
                <p>
                  {this.state.data.company_url && (
                    <a href={this.state.data.company_url}>
                      Check the company profile!
                    </a>
                  )}
                </p>
                <a>🌏 {this.state.data.location} </a>
              </div>
            </div>
            <div className="column is-two-thirds">
              <p className="title is-2">
                <strong>{this.state.data.title}</strong>
              </p>
              <br />
              <p className="subtitle is-6">
                Date added: {this.state.data.created_at}
              </p>
              <hr />
              <p className="title is-4">
                <small>Company: {this.state.data.company}</small>
              </p>
              <div
                className="has-text-justified"
                dangerouslySetInnerHTML={{
                  __html: `${this.state.data.description}`,
                }}
              />
              <p className="title is-4 apply-title">Apply here:</p>
              <div
                className="has-text-justified apply"
                dangerouslySetInnerHTML={{
                  __html: `${this.state.data.how_to_apply}`,
                }}
              />
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default NameList;
