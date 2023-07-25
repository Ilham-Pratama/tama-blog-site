import React from 'react';
import Top from 'pageComponents/Index/Top';
import { graphql } from 'gatsby';
import hljs from 'highlight.js';

import * as blogStyles from 'styles/blog.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SEO from 'components/SEO/SEO';
import { MdFrontmatter } from 'shared/interfaces';
import Footer from 'pageComponents/Index/Footer';

interface BlogPostTemplateI {
  data: {
    markdownRemark: {
      frontmatter: MdFrontmatter;
      html: any;
    };
  };
}

export default function BlogPostTemplate({
  data // this prop is injected by the GraphQL query below.
}: BlogPostTemplateI) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  const coverImage = getImage(frontmatter.coverImage)!;

  React.useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="dark:bg-slate-800 text-slate-700 dark:text-gray-300">
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <div
        className={'max-w-5xl m-auto px-4 font-poppins'}>
        <Top />
        <div className={blogStyles.blogContainer}>
          <div className="mt-10 mb-5 flex justify-center">
            <GatsbyImage
              image={coverImage}
              alt="Cover Image"
              style={{ width: '600px' }}
            />
          </div>
          <h1 className={blogStyles.title}>{frontmatter.title}</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-5 text-sm mt-3 sm:mt-2">
            {frontmatter.date}
          </p>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: html }} className="mb-20" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        coverImage {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`;
