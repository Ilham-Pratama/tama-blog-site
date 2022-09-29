import { logEvent } from '@firebase/analytics';
import { analytics } from './firebase';

export const blogLinkClickLog = () => {
  logEvent(analytics, 'blog-link-click');
};

export const goBackHomeButtonClickLog = () => {
  logEvent(analytics, 'go-back-home-button-click');
};

export const darkModeAdjustmentLog = (mode: 'dark' | 'light') => {
  logEvent(analytics, 'dark-mode-adjustment', { mode });
};

export const personalProjectLinkClickLog = (
  projectName: string,
  projectType: string
) => {
  logEvent(analytics, 'personal-project-link-click', {
    projectName,
    projectType
  });
};

export const contactMeSubmissionLog = (
  name: string,
  email: string,
  message: string
) => {
  logEvent(analytics, 'contact-me-submission', { name, email, message });
};

export const emailLinkClickLog = () => {
  logEvent(analytics, 'email-link-click');
};

export const socialMediaLinkClickLog = (name: string) => {
  logEvent(analytics, 'social-media-link-click', { name });
};

export const gatsbyLinkClickLog = () => {
  logEvent(analytics, 'gatsby-link-click');
};
