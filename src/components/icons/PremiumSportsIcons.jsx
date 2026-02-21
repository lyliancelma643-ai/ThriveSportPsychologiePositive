import React from 'react';

const svgProps = {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
};

export const PatinageIcon = ({ className }) => (
    <svg className={className} {...svgProps} strokeWidth="1.2">
        {/* Ice Skate Boot Details */}
        <path d="M7 16V9.5C7 8.11929 8.11929 7 9.5 7H13C14.1046 7 15 7.89543 15 9V11.5C15 12.3284 15.6716 13 16.5 13H17C17.5523 13 18 13.4477 18 14V14.5C18 15.3284 17.3284 16 16.5 16H7Z" fill="currentColor" fillOpacity="0.1" />
        <path d="M10 7H13" />
        <path d="M7 10H12" />
        <path d="M7 13H13" />
        {/* Blade details */}
        <path d="M6 19H19" strokeWidth="1.5" />
        <path d="M19 19C19 17.5 17 17.5 17 17.5" />
        <path d="M8 16V19" strokeWidth="2" />
        <path d="M14 16V19" strokeWidth="2" />
    </svg>
);

export const HockeyIcon = ({ className }) => (
    <svg className={className} {...svgProps} strokeWidth="1.2">
        {/* Hockey Stick */}
        <path d="M18 3L9 15C8.3 16 8.5 18.5 10 19L15 20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

        {/* Tape on blade */}
        <path d="M14 18.5L14.5 17" strokeWidth="1" />
        <path d="M12.5 18L13 16.5" strokeWidth="1" />
        <path d="M11 17.5L11.5 16" strokeWidth="1" />

        {/* Tape on handle */}
        <path d="M16 5.5L17.5 6" strokeWidth="1.2" />
        <path d="M14.5 7.5L16 8" strokeWidth="1.2" />

        {/* 3D Puck */}
        <ellipse cx="5" cy="18" rx="2.5" ry="1" fill="currentColor" stroke="none" />
        <path d="M2.5 18V19.5C2.5 20.0523 3.61929 20.5 5 20.5C6.38071 20.5 7.5 20.0523 7.5 19.5V18" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M2.5 18V19.5C2.5 20.0523 3.61929 20.5 5 20.5C6.38071 20.5 7.5 20.0523 7.5 19.5V18" stroke="none" fill="currentColor" fillOpacity="0.4" />
    </svg>
);

export const BasketballIcon = ({ className }) => (
    <svg className={className} {...svgProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3V21M3 12H21" />
        <path d="M6 6C9 8 10 11 10 12C10 13 9 16 6 18" />
        <path d="M18 6C15 8 14 11 14 12C14 13 15 16 18 18" />
    </svg>
);

export const SoccerIcon = ({ className }) => (
    <svg className={className} {...svgProps}>
        <circle cx="12" cy="12" r="9" />
        {/* Pentagon */}
        <path d="M12 7L16 10L14.5 14.5H9.5L8 10L12 7Z" />
        {/* Lines connecting to edges */}
        <path d="M12 3V7M16 10L19.5 8M14.5 14.5L16.5 19.5M9.5 14.5L7.5 19.5M8 10L4.5 8" />
    </svg>
);

export const FootballIcon = ({ className }) => (
    <svg className={className} {...svgProps}>
        {/* American Football Shape */}
        <path d="M5 19C5 10 10 5 19 5C19 14 14 19 5 19Z" />
        {/* Laces */}
        <path d="M9 15L15 9" />
        {/* Crosses */}
        <path d="M10.5 12.5L11.5 13.5M12 11L13 12M13.5 9.5L14.5 10.5" />
    </svg>
);
