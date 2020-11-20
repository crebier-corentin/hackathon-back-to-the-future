import React, { Component } from 'react';
import './ClickableLink.css';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const artists = ['Rembrandt', 'Claude Monet', 'Van Gogh', 'Renoir'];

class ClickableLink extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    const { name } = this.state;
    const { history } = this.props;
    history.push(`/artist/${name}`); // on change de page avec le param
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
        <p className="DesciptionSearchArtist">
          If you know the name of your favorite Artist, type it here:
        </p>
        <input
          type="text"
          value={name}
          onChange={this.handleChange}
          className="SearchArtist"
          placeholder="Artist's name"
        />
        <button type="submit" id="search-button" onClick={this.handleSubmit}>
          <span role="img" aria-label="emoji" id="emoji">
            🔍
          </span>
        </button>
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
