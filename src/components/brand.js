import React from "react"

export default function Brand() {
  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        minHeight: `95vh`,
      }}
    >
      <h1
        className="title"
        style={{
          fontSize: `20vmin`,
          marginBlockStart: `0`,
          marginBlockEnd: `0`,
          color: `var(--accent-1)`,
          textShadow: `var(--brand) 2vw 5vw`,
          padding: `var(--space-sm)`,
          fontStyle: `italic`,
          padding: `var(--space-xl)`,
          lineHeight: `initial`,
        }}
      >
        Home
        <br /> Rice
      </h1>
    </div>
  )
}
