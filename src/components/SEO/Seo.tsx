import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

interface Props {
  onTitle?: string
  onDesc?: string
  onImage?: string
  onArticle?: boolean
}

interface Query<T> {
  site: {
    siteMetadata: {
      title: T
      titleTemplate: T
      author: T
      twitterUsername: T
      description: T
      siteUrl: T
      image: T
    }
  }
}
const Seo: React.FC<Props> = ({ onImage, onTitle, onDesc, onArticle }) => {
  const { pathname } = useLocation()
  const {
    site: {
      siteMetadata: {
        title,
        titleTemplate,
        author,
        twitterUsername,
        description,
        image,
        siteUrl,
      },
    },
  } = useStaticQuery<Query<string>>(SEO_QUERY)

  const seo = {
    title: onTitle || title,
    desc: onDesc || description,
    image: `${siteUrl}${onImage || image}`,
    url: `${siteUrl}${pathname}`,
    twitter: `${twitterUsername}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.desc} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}
      {(onArticle ? true : null) && (
        <meta property="og:type" content="article" />
      )}
      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.desc && <meta property="og:description" content={seo.desc} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.twitter && <meta name="twitter:creator" content={seo.twitter} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.desc && <meta name="twitter:description" content={seo.desc} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}

      <link
        href="https://fonts.googleapis.com/css2?family=Bellota:ital,wght@0,400;0,700;1,400&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

const SEO_QUERY = graphql`
  {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        author
        twitterUsername
        siteUrl
        image
      }
    }
  }
`
export default Seo
