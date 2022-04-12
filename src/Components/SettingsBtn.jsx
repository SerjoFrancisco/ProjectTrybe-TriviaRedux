import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdSettings } from 'react-icons/md';

export default class SettingsBtn extends Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/settings');
  }

  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="btn-settings"
          onClick={ this.handleClick }
          className="settings"
        >
          <MdSettings className="settings-btn" />
        </button>

      </div>
    );
  }
}

SettingsBtn.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}.isRequire;
