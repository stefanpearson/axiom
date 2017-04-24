import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { getArcProperties } from './utils';
import RadialProgress from './RadialProgress';
import './ProgressInfinite.css';
import './_filter';

export default class ProgressInfinite extends Component {
  static propTypes = {
    color: PropTypes.oneOf([
      'subtle',
      'white',
    ]),
  };

  static defaultProps = {
    color: 'subtle',
  }

  render() {
    const {
      color,
      ...rest
    } = this.props;
    const classes = classnames('ax-progress-infinite', `ax-progress-infinite--${color}`);
    const {
      diameter,
      innerRadius,
      strokeWidth,
      strokeDasharray,
      strokeDashoffset,
    } = getArcProperties({ percent: 75 });

    return (
      <RadialProgress { ...rest } className={ classes } diameter={ diameter }>
        <circle
            className="ax-progress-infinite__arc"
            r={ innerRadius }
            style={ {
              stroke: `url(#ax-progress-infinite__filter--${ color })`,
              strokeDasharray,
              strokeDashoffset,
              strokeWidth,
            } } />
      </RadialProgress>
    );
  }
}