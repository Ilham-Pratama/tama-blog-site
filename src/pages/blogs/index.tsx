import React, { useMemo } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Top from 'pageComponents/Index/Top';
import { MdFrontmatter } from 'shared/interfaces';
import Text from 'components/Text';
import Footer from 'pageComponents/Index/Footer';
import SEO from 'components/SEO';

interface BlogsData {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string;
          frontmatter: MdFrontmatter;
        };
      }[];
    };
  };
}

const BlogCard = ({ blog }: { blog: MdFrontmatter }) => {
  const coverImage = getImage(blog.coverImage)!;

  return (
    <div
      style={{ minHeight: '12em' }}
      className="rounded-md flex overflow-hidden border dark:border-slate-600 border-slate-300">
      <GatsbyImage
        className="h-full w-32 sm:w-40"
        image={coverImage}
        alt="Cover Image"
      />
      <div className="px-4 py-8 flex-1">
        <Text className="text-3xl font-raleway mb-1">{blog.title}</Text>
        <Text className="text-sm font-poppins">{blog.description}</Text>
        <div className="mt-7">
          <Link
            to={`/blogs/${blog.slug}`}
            className="px-4 py-2 text-md   rounded-md bg-slate-700 dark:bg-slate-600 dark:text-slate-100 text-slate-200 font-medium">
            Read
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Blogs({ data }: BlogsData) {
  const allMarkdownList = useMemo(() => {
    if (data?.allMarkdownRemark?.edges?.length) {
      return data.allMarkdownRemark.edges;
    }
    return [];
  }, [data]);

  return (
    <>
      <div className="dark:bg-slate-800">
        <SEO title="All Articles" description='Check out my articles!' />
        <div className="max-w-5xl m-auto px-4 h-screen flex flex-col">
          <div className='flex-1'>
            <Top />
            <Text className="mt-10 mb-5 text-2xl font-semibold font-raleway text-center">
              Check out my articles!
            </Text>
            <div className="max-w-2xl m-auto grid grid-cols-1 pb-20 gap-4">
              {allMarkdownList.map(({ node: { id, frontmatter } }) => (
                <BlogCard key={id} blog={frontmatter} />
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            description
            slug
            coverImage {
              childImageSharp {
                gatsbyImageData(width: 700)
              }
            }
          }
        }
      }
    }
  }
`;
