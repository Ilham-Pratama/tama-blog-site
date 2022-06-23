type AvailableTheme = 'light' | 'dark';

const initiateTheme = (): void => {
  let theme: AvailableTheme = 'light';
  if ('localStorage' in window) {
    theme = window.localStorage.getItem('theme') as AvailableTheme;
  }
  setTheme(theme);
};

const setTheme = (theme: AvailableTheme): void => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    window.localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    window.localStorage.setItem('theme', 'light');
  }
};

const isDarkTheme = (): boolean => {
  return document.documentElement.classList.contains('dark');
};

const toggleTheme = (): void => {
  const darkTheme = isDarkTheme();
  if (darkTheme) setTheme('light');
  else setTheme('dark');
};

export { initiateTheme, setTheme, isDarkTheme, toggleTheme };
