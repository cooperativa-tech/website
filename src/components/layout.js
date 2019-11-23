/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { css, Global } from "@emotion/core"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --max-width: 860px;
          }

          body,
          html {
            height: 100%;
            margin: 0;
            background-color: black;
            color: white;
            font-family: "Exo 2", sans-serif;
            font-size: 20px;
            line-height: 1.1;
            font-weight: 200;
          }

          button {
            font-weight: 600;
            cursor: pointer;
          }

          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          iframe {
            width: 100%;
            height: 100%;
          }

          .centered {
            max-width: calc(var(--max-width) + 280px);
            margin: 0 auto;
            padding: 0 140px;
            position: relative;
          }

          .lead {
            margin-bottom: 40px;
          }

          .gallery {
            padding: 0px 30px 20px;
            list-style-type: none;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 40px;
            margin: 0 auto;
          }

          .gallery-item {
            width: 200px;
            height: 240px;
            background: white;
            position: relative;
          }

          .gallery-item-content {
            width: 100%;
            height: 100%;
            z-index: 2;
            position: relative;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
            background-blend-mode: difference;
          }

          .gallery-item:nth-child(1) .gallery-item-content,
          .gallery-item:nth-child(1)::before {
            background-color: #e18ab3;
            border-color: #e18ab3;
          }

          .gallery-item:nth-child(2) .gallery-item-content,
          .gallery-item:nth-child(2)::before {
            background-color: #48b9ce;
            border-color: #48b9ce;
          }

          .gallery-item::before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 30px;
            left: 20px;
            z-index: 0;
            mask: url("../images/mask.svg") no-repeat 0% 0%;
            -webkit-mask: url("../images/mask.svg") no-repeat 0% 0%;
            mask-size: cover;
            -webkit-mask-size: contain;
          }

          .gallery-item-label {
            color: white;
            text-decoration: none;
            font-weight: 500;
            position: absolute;
            bottom: -90px;
            left: -40px;
          }

          .text-only-item {
            height: 100%;
            font-size: 20px;
            color: black;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          #background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
          }

          .hero {
            height: 300px;
            width: 100%;
            display: flex;
            align-items: flex-end;
            position: relative;
            margin-bottom: 50px;
          }

          .hero-title {
            font-size: 48px;
            font-weight: 200;
            margin: 0;
          }

          .hero-img {
            width: 120px;
            position: absolute;
            right: 100%;
            bottom: 0;
          }

          .link {
            color: #fe53a3;
            background: none;
            border: none;
            font-size: inherit;
            padding: 0;
          }

          #alien-ship {
            position: absolute;
            top: 50px;
            left: -240px;
            z-index: 3;
            pointer-events: none;
          }

          .ship-light {
            transition: all 1s ease-in-out;
            transform-origin: top center;
            animation: rotate-lights 2s infinite;
          }

          .ship-bottom {
            transform-origin: top center;
            transform: rotate(2deg);
            animation: rotate-bottom 2s infinite;
          }

          @keyframes rotate-bottom {
            0% {
              transform: rotate(1deg);
            }

            50% {
              transform: rotate(-1deg);
            }

            100% {
              transform: rotate(1deg);
            }
          }

          @keyframes rotate-lights {
            0% {
              transform: rotate(4deg);
            }

            50% {
              transform: rotate(-4deg);
            }

            100% {
              transform: rotate(4deg);
            }
          }
        `}
      />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Exo+2:200,400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
