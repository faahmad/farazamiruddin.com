import React from 'react'
import { Styled } from "theme-ui"
import { Link } from "gatsby"

const PostLink = ({ title, slug, date, excerpt }) => (
  <article className="shadow" style={{ backgroundColor: "white", padding: "8px 24px", marginBottom: "8px" }}>
    <header>
      <Styled.h2
        sx={{
          mb: 1,
        }}
      >
        <Styled.a
          as={Link}
          sx={{
            textDecoration: `none`,
          }}
          to={slug}
        >
          {title || slug}
        </Styled.a>
      </Styled.h2>
      <small>{date}</small>
    </header>
    <section>
      <Styled.p>{excerpt}</Styled.p>
    </section>
  </article>
)

export default PostLink
