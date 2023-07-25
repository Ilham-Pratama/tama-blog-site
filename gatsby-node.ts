import path from 'path';

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        pageComponents: path.resolve(__dirname, 'src/pageComponents'),
        pages: path.resolve(__dirname, 'src/pages'),
        shared: path.resolve(__dirname, 'src/shared'),
        types: path.resolve(__dirname, 'src/types'),
        assets: path.resolve(__dirname, 'src/assets'),
        styles: path.resolve(__dirname, 'src/styles'),
      }
    }
  });
};
