import Head from "next/head"
import PropTypes from "prop-types"

const twitter = "@johnpolacek"
const imageUrl = "https://project-starter.now.sh/project-screenshot.png"
const imageAlt = "Project Starter Screenshot"

const DocHead = (props) => (
  <>
    <Head>
      <title>{props.title}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="canonical" href={props.url} />
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      <meta property="og:url" content={props.url} />
      <meta
        name="twitter:card"
        content={imageUrl ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      {imageUrl && <meta property="twitter:image" content={imageUrl} />}
      {imageAlt && <meta property="twitter:image:alt" content={imageAlt} />}
    </Head>
  </>
)

DocHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  twitter: PropTypes.string,
  twitterAuthor: PropTypes.string,
}

export default DocHead
