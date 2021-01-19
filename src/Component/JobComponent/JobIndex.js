import React from "react";
import axios from "axios";
import JobCard from "./JobCard";


class JobIndex extends React.Component {
  constructor() {
    super()
    this.state = { data: [], searchTerm: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.handlePage('1')
  }

  handlePage(n) {
    this.setState({data: []})
    axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${n}``)
      .then(res => this.setState({data: res.data}))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value })
  }

  filterJobs() {
    const regexp = new RegExp(this.state.searchTerm, 'i')
    return this.state.data.filter(item => regexp.test(item.title) || regexp.test(item.description) || regexp.test(item.location))
  }

  render() {
    return (
      <section className="container section mr-5">
        <h1 className="title is-1">Find a Job</h1>

        <div className="search">
          <form>
            <div className="field">
              <div className="control">
                <input
                  className="input is-primary"
                  type="text"
                  placeholder="Title, stack, city etc."
                  onChange={this.handleChange}
                  value={this.state.searchTerm}
                />
              </div>
            </div>
          </form>
        </div>
        {!this.state.data[0] && (
          <img
            className="spinner"
            src="https://gifimage.net/wp-content/uploads/2018/06/transparent-loading-gif-13.gif"
            alt="Loading"
          />
        )}
        {this.state.data[0] && (
          <div>
            {this.filterJobs().length < 50 && (
              <p>Matches found: {this.filterJobs().length}</p>
            )}
            <hr />
            <div className="columns is-mobile is-multiline">
              {this.filterJobs().map((card) => (
                <JobCard key={card.id} {...card} />
              ))}
            </div>
          </div>
        )}
        <hr />
        <nav className="pagination" role="navigation" aria-label="pagination">
          <ul className="pagination-list">
            <li>
              <button
                onClick={() => this.handlePage("1")}
                className="pagination-link"
              >
                1
              </button>
            </li>
            <li>
              <button
                onClick={() => this.handlePage("2")}
                className="pagination-link"
              >
                2
              </button>
            </li>
            <li>
              <button
                onClick={() => this.handlePage("3")}
                className="pagination-link"
              >
                3
              </button>
            </li>
            <li>
              <button
                onClick={() => this.handlePage("4")}
                className="pagination-link"
              >
                4
              </button>
            </li>
            <li>
              <button
                onClick={() => this.handlePage("5")}
                className="pagination-link"
              >
                5
              </button>
            </li>
            <li>
              <button
                onClick={() => this.handlePage("6")}
                className="pagination-link"
              >
                6
              </button>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}

export default JobIndex;
