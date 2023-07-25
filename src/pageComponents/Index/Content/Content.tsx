import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Text from 'components/Text';
import PackageItem from 'components/PackageItem';
import TextField from 'components/TextField';
import Button from 'components/Button';
import { Link } from 'gatsby';
import { FirebaseAnalytic } from 'shared/analyticLogger';

const firebaseAnalytic = new FirebaseAnalytic();

const ContactMeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <form
      action="https://formspree.io/f/xbjwejqg"
      method="POST"
      autoComplete="off"
      onSubmit={() => {
        if (name && email && message)
          firebaseAnalytic.logEvent('contact-me-submission', {
            name,
            email,
            message
          });
      }}
      className="mt-6">
      <Text className="mb-3 text-xl text-center">
        <b>Contact Me</b>
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextField
          name="name"
          placeholder="Name"
          onChange={e => setName(e.target.value)}
          required
        />
        <TextField
          name="_replyto"
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <div className="sm:col-span-2">
          <TextField
            name="message"
            placeholder="Message"
            onChange={e => setMessage(e.target.value)}
            required
            textarea
          />
        </div>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
      </div>
      <div className="mt-2">
        <Button type="submit">Submit</Button>
      </div>
      <Text className="mt-3">
        Or via email to{' '}
        <a
          href="mailto:ilhamprt5@gmail.com"
          target="_blank"
          rel="noopener noreferer"
          onClick={() => firebaseAnalytic.logEvent('email-link-click')}
          className="hover:underline text-sky-600 dark:text-sky-300">
          ilhamprt5@gmail.com
        </a>{' '}
      </Text>
    </form>
  );
};

const Content = () => {
  return (
    <article className="mt-10 pb-10">
      <div className="max-w-2xl m-auto">
        <div className="h-36 flex flex-col items-center justify-center">
          <StaticImage
            src="../../../assets/images/profile.jpg"
            alt="Profile Image"
            className="w-28 rounded-full shadow-lg dark:shadow-none dark:border-4 dark:border-slate-100"
          />
        </div>
        <Text className="mt-3 text-center">
          Hi! I'm <b>Tama</b>, a software developer who lives in Indonesia. 😀
        </Text>
        <Text className="text-center mt-3">
          I'm familiar with numbers of technologies that are written in{' '}
          <b>JavaScript</b>. I'm also an open-source enthusiast. Here are some
          packages I published:
        </Text>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-sm sm:max-w-none gap-4 mt-5 mb-8 m-auto">
          <PackageItem
            name="use-url-sync"
            description="use-url-sync is a utility package that helps you sync your states to url without hassle"
          />
          <PackageItem
            name="react-dynamic-theme"
            description="react-dynamic-theme is a lightweight theme management library for React"
          />
        </div>
        <div className="text-center mb-8">
          <Text>
            I also like playing some games. My personal favorites are{' '}
            <a
              href="https://www.stardewvalley.net/"
              target="_blank"
              rel="noopener noreferer"
              className="hover:underline text-sky-600 dark:text-sky-300">
              Stardew Valley 🌾
            </a>
            ,{' '}
            <a
              href="https://en.bandainamcoent.eu/elden-ring/elden-ring"
              target="_blank"
              rel="noopener noreferer"
              className="hover:underline text-sky-600 dark:text-sky-300">
              Elden Ring 🗡️
            </a>
            , and{' '}
            <a
              href="https://store.steampowered.com/app/1145360/Hades/"
              target="_blank"
              rel="noopener noreferer"
              className="hover:underline text-sky-600 dark:text-sky-300">
              Hades ⚔️
            </a>
            .
          </Text>
        </div>
        <ContactMeForm />
      </div>
    </article>
  );
};

export default Content;
