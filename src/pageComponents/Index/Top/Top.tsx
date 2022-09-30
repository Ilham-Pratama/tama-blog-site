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
  const [currentThemeDarkMode, setCurrentThemeDarkMode] = useState(false);

  useEffect(() => {
    setCurrentThemeDarkMode(isDarkTheme());
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
      <div className="flex text-3xl items-center">
        <Text className="font-bold font-raleway">Tama</Text>
        <p className="font-raleway ml-2 px-2 font-thin rounded dark:bg-slate-100 bg-slate-800 dark:text-slate-800 text-slate-100">
          blog
        </p>
      </div>
      <div className="flex items-center">
        <Link
          to="/blog"
          onClick={() => firebaseAnalytic.logEvent('blog-link-click')}
          className="mr-5">
          <Text className="text-xl font-raleway font-bold">blog</Text>
        </Link>
        <Button onClick={onToggleTheme} noStyle>
          {!currentThemeDarkMode ? (
            <BrightModeIcon className="fill-sky-400" height="30" width="30" />
          ) : (
            <DarkModeIcon className="fill-sky-100" height="30" width="30" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Top;
