import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const SEO = () => {
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
  return (
    <Helmet>
      <meta charSet="utf-8" />

      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <link rel="icon" href={data.site.siteMetadata.image} type="image/png" />
      <meta name="robots" content="index" />
      <meta name="image" content={data.site.siteMetadata.image} />
      <link rel="canonical" href={data.site.siteMetadata.siteUrl} />

      <meta name="og:title" content={data.site.siteMetadata.title} />
      <meta
        name="og:description"
        content={data.site.siteMetadata.description}
      />
      <meta name="og:site_name" content={data.site.siteMetadata.title} />
      <meta name="og:image" content={data.site.siteMetadata.image} />
      <meta name="og:url" content={data.site.siteMetadata.siteUrl} />

      <meta name="twitter:image" content={data.site.siteMetadata.image} />
      <meta
        name="twitter:description"
        content={data.site.siteMetadata.description}
      />
      <meta name="twitter:title" content={data.site.siteMetadata.title} />
      <meta name="twitter:creator" content="@ilhamPr57825345" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEO;
