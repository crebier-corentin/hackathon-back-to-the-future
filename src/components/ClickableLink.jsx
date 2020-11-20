import React, { Component } from 'react';
import './ClickableLink.css';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const artists = ['Rembrandt', 'Claude Monet', 'Van Gogh', 'Renoir'];

class ClickableLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    const { name } = this.state;
    const { history } = this.props;
    history.push(`/search/${name}`); // on change de page avec le param
    this.setState({ name: '' }); // on vide la case du formulaire
    event.preventDefault();
  };

  handleSubmitRandom = (event) => {
    const randomArtist = artists[Math.floor(artists.length * Math.random())];

    const { history } = this.props;
    history.push(`/artist/${randomArtist}`); // on change de page avec le param
    event.preventDefault();
  };

  render() {
    const { name } = this.state;
    return (
      <div className="grid-container">
        <p className="DesciptionSearchArtist">Name of artists or keywords:</p>
        <div>
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            className="SearchArtist"
            placeholder="Query"
          />
          <button type="submit" id="search-button" onClick={this.handleSubmit}>
            <img src="/magnifyingglass.svg" width="100%" alt="Search" />
          </button>
        </div>
        <p className="DesciptionRandomButton">
          Want to be surprised ? Click here !
        </p>
        <button
          className="RandomButton"
          type="button"
          onClick={this.handleSubmitRandom}
        >
          Random Artist
        </button>
      </div>
    );
  }
}

ClickableLink.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(ClickableLink);
