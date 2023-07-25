import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Tama Blog`,
    siteUrl: 'https://tamablog.gatsbyjs.io',
    description: 'Welcome to my blog site where I post many kind of things',
    image: 'https://tamablog.gatsbyjs.io/cat.png',
    author: '@ilhamPr57825345',
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'blogs',
        link: '/blogs'
      }
    ]
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `./src/blogs`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 350
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Poppins",
              variants: ["300", "400", "500", "600", "700"],
            },
            {
              family: "Raleway",
              variants: ["300", "400", "500", "600", "700"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Tama Blog',
        short_name: 'Tama Blog',
        start_url: '/',
        background_color: '#6a696b',
        theme_color: '#6a696b',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'static/cat.png', // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`
      }
    }
  ]
};

export default config;
