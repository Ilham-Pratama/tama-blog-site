import React, { useEffect, useState } from 'react';
import BrightModeIcon from 'assets/icons/BrightModeIcon';
import DarkModeIcon from 'assets/icons/DarkModeIcon';
import Button from 'components/Button';
import { isDarkTheme, toggleTheme } from 'shared/theme';
import Text from 'components/Text';
import { Link } from 'gatsby';
import { FirebaseAnalytic } from 'shared/analyticLogger';

const firebaseAnalytic = new FirebaseAnalytic();

const Top = () => {
  const [pathname, setPathname] = useState('');
  const [currentThemeDarkMode, setCurrentThemeDarkMode] = useState(false);

  useEffect(() => {
    setCurrentThemeDarkMode(isDarkTheme());
    setPathname(typeof window !== undefined ? window.location.pathname : '');
  }, []);

  const onToggleTheme = () => {
    setCurrentThemeDarkMode(current => {
      firebaseAnalytic.logEvent('dark-mode-adjustment', {
        mode: current ? 'light' : 'dark'
      });
      return !current;
    });
    toggleTheme();
  };

  return (
    <div className="pt-5 flex justify-between">
      <Link
        style={{ textDecoration: 'none' }}
        to="/"
        className="flex text-3xl items-center">
        <Text className="font-normal font-raleway">Tama</Text>
        <p className="font-raleway ml-2 px-2 font-thin rounded dark:bg-slate-100 bg-slate-800 dark:text-slate-800 text-slate-100">
          blog
        </p>
      </Link>
      <div className="flex items-start">
        {!pathname.endsWith('/blogs/') ? (
          <Link
            to="/blogs/"
            onClick={() => firebaseAnalytic.logEvent('blog-link-click')}
            className="mr-5">
            <Text className="text-xl font-raleway font-semibold">Blog</Text>
          </Link>
        ) : null}
        <Button onClick={onToggleTheme} noStyle>
          {!currentThemeDarkMode ? (
            <DarkModeIcon className="fill-sky-400" height="30" width="30" />
          ) : (
            <BrightModeIcon className="fill-sky-100" height="30" width="30" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Top;
