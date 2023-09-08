import React from 'react';

const SpinnerSVG = ({ width, height }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
                margin: 'auto',
                display: 'block',
                shapeRendering: 'auto',
            }}
            width={width || '50px'}
            height={height || '50px'}
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, index) => (
                <g key={index} transform={`rotate(${angle} 50 50)`}>
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin={`${(-index * 0.08333333333333333).toFixed(2)}s`}
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
            ))}
        </svg>
    );
};

export default SpinnerSVG;
