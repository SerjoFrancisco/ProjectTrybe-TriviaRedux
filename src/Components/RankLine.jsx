import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RankLine.css';

export default class RankLine extends Component {
  render() {
    const { player, index } = this.props;
    const { name, score, picture } = player;
    return (
      <li>
        <img className="picture" src={ picture } alt={ name } />
        <span data-testid={ `player-name-${index}` }>
          Nome:
          {name}
        </span>
        {'  '}
        <span data-testid={ `player-score-${index}` }>
          Pontos:
          {score}
        </span>
      </li>
    );
  }
}

RankLine.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.number,
  }).isRequired,
  index: PropTypes.number,
}.isRequired;
