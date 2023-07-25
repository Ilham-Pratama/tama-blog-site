import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

interface SEOInterface {
  title?: string;
  description?: string;
  image?: string;
}

const SEO = ({ title, image, description }: SEOInterface) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
          image
          author
        }
      }
    }
  `);

  const siteTitle = `${title ? `${title} | ` : ''}${
    data.site.siteMetadata.title
  }`;
  const siteDesc = description
    ? description
    : data.site.siteMetadata.description;
  const siteImage = image ? image : data.site.siteMetadata.image;

  return (
    <Helmet>
      <meta charSet="utf-8" />

      <title>{siteTitle}</title>
      <meta
        name="description"
        content={siteDesc}
      />
      <link rel="icon" href={siteImage} type="image/png" />
      <meta name="robots" content="index" />
      <meta
        name="image"
        content={siteImage}
      />
      <link rel="canonical" href={data.site.siteMetadata.siteUrl} />

      <meta name="og:title" content={siteTitle} />
      <meta
        name="og:description"
        content={siteDesc}
      />
      <meta name="og:site_name" content={siteTitle} />
      <meta name="og:image" content={siteImage} />
      <meta name="og:url" content={data.site.siteMetadata.siteUrl} />

      <meta name="twitter:image" content={siteImage} />
      <meta
        name="twitter:description"
        content={siteDesc}
      />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:creator" content="@ilhamPr57825345" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEO;
