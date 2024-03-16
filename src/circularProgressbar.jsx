import React from "react";

const CircularProgressBar = ({ total, completed }) => {

    let endAngle = 0;
    if(total) endAngle = (completed * 360) / total;
    endAngle = Math.min(endAngle, 359)

    const x = 20 + 18 * Math.cos((endAngle * Math.PI) / 180);
    const y = 20 + 18 * Math.sin((endAngle * Math.PI) / 180);
    
    const largeArcFlag = endAngle <= 180 ? '0' : '1';
      
    return (
      <svg width="40" height="40" viewBox="0 0 40 40">
        {/* <circle
          cx="20"
          cy="20"
          r="18"
          fill="transparent"
          stroke="white"
          strokeWidth="4"
        /> */}
        <path 
          fill="transparent"
          stroke="var(--color-text)"
          strokeWidth="4"
           d={`M 38 20 A 18 18 0 ${largeArcFlag} 1 ${x} ${y}`}
           transform="rotate(-90 20 20 )"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="var(--color-text)"
          fontSize="10"
          fontWeight="bold"
        >
          {Math.round((completed / total) * 100)}%
        </text>
      </svg>
    );
  };

  export default CircularProgressBar;