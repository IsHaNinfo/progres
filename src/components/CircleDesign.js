import React from "react";
import "./CircleDesign.css";

const CircleDesign = ({ percentage, circlewidth }) => {
  const radius = 90;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className="pro">
      <svg
        width={circlewidth}
        height={circlewidth}
        viewBox={`0 0 ${circlewidth} ${circlewidth}`}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="10%" stop-color="#12c2e9" />
            <stop offset="50%" stop-color="#c471ed" />
            <stop offset="30%" stop-color="#f64f59" />
          </linearGradient>
        </defs>
        <circle
          cx={circlewidth / 2}
          cy={circlewidth / 2}
          strokeWidth="25px"
          r={radius}
          className="circle-background"
        />

        <circle
          cx={circlewidth / 2}
          cy={circlewidth / 2}
          strokeWidth="25px"
          r={radius}
          className="circle-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circlewidth / 2} ${circlewidth / 2})`}
          stroke="url(#gradient)"
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="circle-text"
          fil="url(#gradient)"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircleDesign;
