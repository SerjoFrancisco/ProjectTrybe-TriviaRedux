import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';
import Logo from '../trivia.png';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      imgUrl: '',
    };
  }

  componentDidMount() {
    this.getPhoto();
  }

  getPhoto = () => {
    const { email } = this.props;
    const hash = md5(email).toString();
    const imgUrl = `https://www.gravatar.com/avatar/${hash}`;
    this.setState({ imgUrl });
  }

  render() {
    const { imgUrl } = this.state;
    const { name, score } = this.props;
    return (
      <header>
        <div>
          <img className="logo" src={ Logo } alt="triviapng" />
        </div>
        <div>
          <img src={ imgUrl } alt="PlayerPhoto" data-testid="header-profile-picture" />
          <h3 data-testid="header-player-name">{name}</h3>
          <span data-testid="header-score">{score}</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = ({
  email: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.number,
}).isRequired;
