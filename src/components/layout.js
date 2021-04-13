import React from "react"
import { Link } from "gatsby"
import useSiteMetadata from "../hooks/use-site-metadata"

import "semantic-styles"
import "@semantic-styles/reach-ui"

import "../index.css"

import { MenuBtn } from "../components"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <div>
      <header className="header container padding">
        <Link to="/" style={{ textDecoration: `none` }}>
          <h2
            className="title"
            style={{
              margin: `var(--space-xl) 0`,
            }}
          >
            {title}
          </h2>
        </Link>
        <MenuBtn />
      </header>
      <main className="main">{children}</main>
      <footer className="footer container padding">
        <Link to="/" style={{ textDecoration: `none` }}>
          <h2 className="title" style={{ margin: `var(--space-xl) 0` }}>
            {title}
          </h2>
        </Link>
      </footer>
    </div>
  )
}

export default Layout
