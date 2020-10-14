import React from "react"

import { recipe } from "../utils/mocks"
import { AWS_ASSOCIATE_ID } from "../utils/constants"
import { Layout, SEO, AmazonIngredientsForm, Ingredient } from "../components"

const isShare = window.navigator.share !== undefined

console.log(window.location)

export default function RecipeTemplate({ data }) {
  return (
    <Layout>
      <SEO
        title={`${data.sanityRecipe.title} | ${recipe.category}`}
        description={data.sanityRecipe.subtitle}
      />
      <article className="page padding container">
        <div className="responsive-container">
          <iframe
            title={data.sanityRecipe.title}
            className="responsive-iframe"
            id="player"
            type="text/html"
            src={`https://www.youtube.com/embed/${data.sanityRecipe.youtubeVideoId}?enablejsapi=1&origin=https://tg-platform.netlify.app`}
            frameBorder="0"
            style={{ marginTop: `var(--space-lg)` }}
          ></iframe>
        </div>
        <br />
        <section className="container">
          <h1>{data.sanityRecipe.title}</h1>
          <h2 className="text--md"> {data.sanityRecipe.subtitle}</h2>
          <hr />
        </section>
        <section className="container">
          <h2>Ingredients:</h2>
          <br />
          <AmazonIngredientsForm>
            <ul style={{ listStyleType: `none`, paddingLeft: `0` }}>
              {data.sanityRecipe.ingredients.map(({ ingredient }, i) => (
                <a
                  key={ingredient.ASIN}
                  href={`https://www.amazon.com/gp/product/${ingredient.ASIN}/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=${ingredient.ASIN}&linkCode=as2&tag=${AWS_ASSOCIATE_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Ingredient
                    text={ingredient.text}
                    ASIN={ingredient.ASIN}
                    // @HACK
                    quantity={1}
                    // quantity={ingredient.quantity}
                    order={i + 1}
                  />
                </a>
              ))}
            </ul>
          </AmazonIngredientsForm>
          <br />
          <a
            href={`https://www.youtube.com/watch?v=${data.sanityRecipe.youtubeVideoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="btn"
              style={{ width: `100%`, fontFamily: `var(--serif)` }}
            >
              Watch on YouTube
            </button>
          </a>
          {isShare && (
            <a href="">
              <button
                className="btn"
                style={{ width: `100%`, fontFamily: `var(--serif)` }}
                onClick={e => {
                  e.preventDefault()
                  if (window.navigator.share) {
                    window.navigator.share({
                      title: data.sanityRecipe.title,
                      text: data.sanityRecipe.title,
                      url: window.location.origin,
                    })
                  }
                }}
              >
                Share Link
              </button>
            </a>
          )}
        </section>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query RECIPE_QUERY($slug: String!) {
    sanityRecipe(slug: { current: { eq: $slug } }) {
      title
      subtitle
      youtubeVideoId
      ingredients {
        ingredient {
          id
          text
          ASIN
        }
      }
    }
  }
`
