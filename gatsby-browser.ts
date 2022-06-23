import './src/global.css';
import { initiateTheme } from './src/shared/theme';

const onInitialClientRender = () => {
  initiateTheme();
};

export { onInitialClientRender };
