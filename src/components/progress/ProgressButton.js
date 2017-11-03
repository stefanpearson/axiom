import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Button from '../button/Button';
import ProgressInfinite from './ProgressInfinite';
import './ProgressButton.css';

const progressSizeMap = {
  small: '1rem',
  medium: '1.25rem',
  large: '1.5rem',
};

export default class ProgressButton extends Component {
  static propTypes = {
    /** Content to be inserted into the Button */
    children: PropTypes.node.isRequired,
    /** Flag if an action is in progress, shows the progress indicator */
    isInProgress: PropTypes.bool,
    /** Size of the Button. See Button[size]. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  render() {
    const {
      children,
      isInProgress,
      size = Button.defaultProps.size,
      ...rest
    } = this.props;

    const classes = classnames('ax-progress-button', {
      'ax-progress-button--in-progress': isInProgress,
    });

    return (
      <Button { ...rest }
          active={ isInProgress }
          size={ size }
          style="primary">
        <div className={ classes }>
          <div className="ax-progress-button__content">
            { children }
          </div>

          <div className="ax-progress-button__indicator">
            <ProgressInfinite
                color="white"
                sizeRem={ progressSizeMap[size] } />
          </div>
        </div>
      </Button>
    );
  }
}
