import React from 'react';
import Text from 'components/Text';
import FacebookIcon from 'assets/icons/FacebookIcon';
import TwitterIcon from 'assets/icons/TwitterIcon';
import LinkedInIcon from 'assets/icons/LinkedInIcon';
import GithubIcon from 'assets/icons/GithubIcon';
import {
  gatsbyLinkClickLog,
  socialMediaLinkClickLog
} from 'shared/analyticLogger';

const Footer = () => {
  return (
    <div className="border-t-2 flex sm:flex-row flex-col items-center sm:justify-between py-4 border-gray-300 dark:border-slate-700 text-sm">
      <Text className="flex-1">© 2022 Ilham Pratama</Text>
      <div className="flex justify-center flex-1 my-5 sm:my-0">
        <a
          href="https://github.com/Ilham-Pratama"
          target="_blank"
          onClick={() => socialMediaLinkClickLog('github')}
          rel="noopener noreferrer">
          <GithubIcon
            width={25}
            height={25}
            className="fill-slate-700 dark:fill-slate-50 mx-2"
          />
        </a>
        <a
          href="https://twitter.com/IlhamPr57825345"
          target="_blank"
          onClick={() => socialMediaLinkClickLog('twitter')}
          rel="noopener noreferrer">
          <TwitterIcon
            width={25}
            height={25}
            className="fill-slate-700 dark:fill-slate-50 mx-2"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ilham-pratama-6354a11ba/"
          target="_blank"
          onClick={() => socialMediaLinkClickLog('linked-in')}
          rel="noopener noreferrer">
          <LinkedInIcon
            width={25}
            height={25}
            className="fill-slate-700 dark:fill-slate-50 mx-2"
          />
        </a>
        <a
          href="https://web.facebook.com/profile.php?id=100008356693910"
          target="_blank"
          onClick={() => socialMediaLinkClickLog('facebook')}
          rel="noopener noreferrer">
          <FacebookIcon
            width={25}
            height={25}
            className="fill-slate-700 dark:fill-slate-50 mx-2"
          />
        </a>
      </div>
      <Text className="flex-1 text-right">
        Made with{' '}
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferer"
          onClick={() => gatsbyLinkClickLog()}
          className="hover:underline text-sky-600 dark:text-sky-300">
          Gatsby
        </a>
      </Text>
    </div>
  );
};

export default Footer;
