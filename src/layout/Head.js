import Head from "next/head"

const DocHead = ({
  title,
  description,
  url,
  imageUrl,
  imageAlt,
  twitter,
}) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      <meta property="og:url" content={url} />
      <meta
        name="twitter:card"
        content={imageUrl ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta property="twitter:image" content={imageUrl} />}
      {imageAlt && <meta property="twitter:image:alt" content={imageAlt} />}
    </Head>
  </>
)

export default DocHead
