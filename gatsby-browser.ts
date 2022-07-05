import './src/global.css';
import { initiateTheme } from './src/shared/theme';

const onClientEntry = () => {
  initiateTheme();
};

export { onClientEntry };
