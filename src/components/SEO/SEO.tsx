import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

export interface SEOProps {
  title: string;
  siteUrl: string;
  description: string;
  image: string;
  author: string;
}

const SEO = ({
  title,
  siteUrl,
  description,
  image,
  author
}: Partial<SEOProps>) => {
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

  const metaData: SEOProps = {
    title: title || data.site.siteMetadata.title,
    siteUrl: siteUrl || data.site.siteMetadata.siteUrl,
    description: description || data.site.siteMetadata.description,
    image: image || data.site.siteMetadata.image,
    author: author || data.site.siteMetadata.author
  };

  return (
    <Helmet>
      <meta charSet="utf-8" />

      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <link rel="icon" href={metaData.image} type="image/png" />
      <meta name="robots" content="index" />
      <meta name="image" content={metaData.image} />
      <link rel="canonical" href={metaData.siteUrl} />

      <meta name="og:title" content={metaData.title} />
      <meta name="og:description" content={metaData.description} />
      <meta name="og:site_name" content={metaData.title} />
      <meta name="og:image" content={metaData.image} />
      <meta name="og:url" content={metaData.siteUrl} />

      <meta name="twitter:image" content={metaData.image} />
      <meta name="twitter:description" content={metaData.description} />
      <meta name="twitter:title" content={metaData.title} />
      <meta name="twitter:creator" content="@ilhamPr57825345" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEO;
