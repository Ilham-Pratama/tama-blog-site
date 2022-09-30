import {
  getAnalytics,
  logEvent,
  isSupported,
  Analytics
} from '@firebase/analytics';
import { firebaseApp } from './firebase';

export type EventLoggerType =
  | 'blog-link-click'
  | 'go-back-home-button-click'
  | 'dark-mode-adjustment'
  | 'personal-project-link-click'
  | 'contact-me-submission'
  | 'email-link-click'
  | 'social-media-link-click'
  | 'gatsby-link-click';

export interface Payload {
  mode?: 'dark' | 'light';
  projectName?: string;
  projectType?: string;
  name?: string;
  email?: string;
  message?: string;
}

class FirebaseAnalytic {
  analytics: Analytics | undefined;

  constructor() {
    isSupported().then(shouldSupport => {
      if (shouldSupport) {
        this.analytics = getAnalytics(firebaseApp);
      }
    });
  }

  logEvent(eventName: EventLoggerType, payload?: Payload) {
    if (this.analytics) logEvent(this.analytics, eventName, payload);
  }
}

export { FirebaseAnalytic };
