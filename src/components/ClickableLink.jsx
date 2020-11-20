import React, { Component } from 'react';
import './ClickableLink.css';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

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

  render() {
    const { name } = this.state;
    return (
      <div className="grid-container">
        <p className="DesciptionSearchArtist">
          <bold>
            If you know the name of your favorite Artist, type it here:
          </bold>
        </p>
        <input
          type="text"
          value={name}
          onChange={this.handleChange}
          className="SearchArtist"
          placeholder="Artist's name"
        />
        <button type="submit" id="search-button">
          <span role="img" aria-label="emoji" id="emoji">
            🔍
          </span>
        </button>
        <p className="DesciptionRandomButton">
          Want to be surprised ? Click here !
        </p>
        <button className="RandomButton" type="button">
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
