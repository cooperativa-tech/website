import React from "react"

export default function Ship({ shipLightsOn, shipActive, style }) {
  return (
    <svg
      style={style}
      id="alien-ship"
      width="249"
      height="260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M154.562 12c0 4.4183-14.68 1.5-34.562 1.5-19.882 0-37.4385 2.9183-37.4385-1.5 0-4.41828 16.5562-12 36.4385-12 19.882 0 35.562 7.58172 35.562 12z"
        fill="#fff"
      />
      <g className="ship-bottom">
        <path
          d="M179 16.5c0 3.5899-26.415 7-59 7-32.5848 0-59-3.4101-59-7 0-3.5898 26.4152-4 59-4 32.585 0 59 .4102 59 4z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M161.5 19c0 2.8095-16.319 5-42 5-25.6812 0-41-2.1905-41-5 0-2.8094 14.8188-2.5 40.5-2.5 25.681 0 42.5-.3094 42.5 2.5z"
          fill="#DFDFDF"
        />
      </g>
      {shipLightsOn && (
        <>
          <g
            className="ship-light"
            innerstyle="mix-blend-mode:color"
            filter="url(#filter0_f)"
          >
            <path
              d="M92.9286 20h53.9344L235 246H14L92.9286 20z"
              fill="url(#paint1_linear)"
            />
          </g>
          <path
            className="ship-light"
            d="M92.9286 20h53.9344L235 246H14L92.9286 20z"
            fill="url(#paint2_linear)"
            fillOpacity=".35"
          />
        </>
      )}
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="120"
          y1="10"
          x2="120"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E7E7E7" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="124.5"
          y1="20"
          x2="124.5"
          y2="246"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAFF00" stopOpacity=".76" />
          <stop offset="1" stopColor="#BABE00" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="124.5"
          y1="20"
          x2="124.5"
          y2="246"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FCFF74" stopOpacity=".76" />
          <stop offset="1" stopColor="#BABE00" stopOpacity="0" />
        </linearGradient>
        <filter
          id="filter0_f"
          x="0"
          y="6"
          width="249"
          height="254"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  )
}
