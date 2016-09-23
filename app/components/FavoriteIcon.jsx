import React from 'react';

const FavoriteIcon = React.createClass({
  getDefaultProps() {
    return {
      stroke: 'black'
    };
  },

  render() {
    return <svg
      height="100%"
      version="1.1"
      viewBox="0 0 91 91"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
      >
        <path
          d="M22.7383,0.5051 L22.7383,8.0051 L30.2383,8.0051 L37.7383,8.0051 L45.2383,8.0051 L52.7383,8.0051 L60.2383,8.0051 L67.7383,8.0051 L67.7383,0.5051 L60.2383,0.5051 L52.7383,0.5051 L45.2383,0.5051 L37.7383,0.5051 L30.2383,0.5051 L22.7383,0.5051 L22.7383,0.5051 Z M67.7383,8.0051 L67.7383,15.5051 L75.2383,15.5051 L75.2383,8.0051 L67.7383,8.0051 L67.7383,8.0051 Z M75.2383,15.5051 L75.2383,23.0051 L82.7383,23.0051 L82.7383,15.5051 L75.2383,15.5051 L75.2383,15.5051 Z M82.7383,23.0051 L82.7383,30.5051 L82.7383,38.0051 L82.7383,45.5051 L82.7383,53.0051 L82.7383,60.5051 L82.7383,68.0051 L90.2383,68.0051 L90.2383,60.5051 L90.2383,53.0051 L90.2383,45.5051 L90.2383,38.0051 L90.2383,30.5051 L90.2383,23.0051 L82.7383,23.0051 L82.7383,23.0051 Z M82.7383,68.0051 L75.2383,68.0051 L75.2383,75.5051 L82.7383,75.5051 L82.7383,68.0051 L82.7383,68.0051 Z M75.2383,75.5051 L67.7383,75.5051 L67.7383,83.0051 L75.2383,83.0051 L75.2383,75.5051 L75.2383,75.5051 Z M67.7383,83.0051 L60.2383,83.0051 L52.7383,83.0051 L45.2383,83.0051 L37.7383,83.0051 L30.2383,83.0051 L22.7383,83.0051 L22.7383,90.5051 L30.2383,90.5051 L37.7383,90.5051 L45.2383,90.5051 L52.7383,90.5051 L60.2383,90.5051 L67.7383,90.5051 L67.7383,83.0051 L67.7383,83.0051 Z M22.7383,83.0051 L22.7383,75.5051 L15.2383,75.5051 L15.2383,83.0051 L22.7383,83.0051 L22.7383,83.0051 Z M15.2383,75.5051 L15.2383,68.0051 L7.7383,68.0051 L7.7383,75.5051 L15.2383,75.5051 L15.2383,75.5051 Z M7.7383,68.0051 L7.7383,60.5051 L7.7383,53.0051 L7.7383,45.5051 L7.7383,38.0051 L7.7383,30.5051 L7.7383,23.0051 L0.2383,23.0051 L0.2383,30.5051 L0.2383,38.0051 L0.2383,45.5051 L0.2383,53.0051 L0.2383,60.5051 L0.2383,68.0051 L7.7383,68.0051 L7.7383,68.0051 Z M7.7383,23.0051 L15.2383,23.0051 L15.2383,15.5051 L7.7383,15.5051 L7.7383,23.0051 L7.7383,23.0051 Z M15.2383,15.5051 L22.7383,15.5051 L22.7383,8.0051 L15.2383,8.0051 L15.2383,15.5051 L15.2383,15.5051 Z M37.7383,23.0051 L37.7383,30.5051 L37.7383,38.0051 L30.2383,38.0051 L22.7383,38.0051 L22.7383,45.5051 L22.7383,53.0051 L30.2383,53.0051 L37.7383,53.0051 L37.7383,60.5051 L37.7383,68.0051 L45.2383,68.0051 L52.7383,68.0051 L52.7383,60.5051 L52.7383,53.0051 L60.2383,53.0051 L67.7383,53.0051 L67.7383,45.5051 L67.7383,38.0051 L60.2383,38.0051 L52.7383,38.0051 L52.7383,30.5051 L52.7383,23.0051 L45.2383,23.0051 L37.7383,23.0051 L37.7383,23.0051 Z"
          fill="white"
          stroke={this.props.stroke}
          strokeOpacity="1"
          strokeWidth="1"
          style={{
            transition: 'all 0.9s ease'
          }}
        />
      </g>
    </svg>;
  }
});

export default FavoriteIcon;