import { initiateTheme } from './src/shared/theme';
// import hljs from 'highlight.js';

import './src/global.css';
import "highlight.js/styles/github.css";

const onClientEntry = () => {
  initiateTheme();
};

// const onInitialClientRender  = () => {
//   hljs.highlightAll();
// }

export { onClientEntry };
