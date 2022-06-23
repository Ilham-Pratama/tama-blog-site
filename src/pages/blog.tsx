import React from 'react';
import { Link } from 'gatsby';
import PlantsIcon from 'assets/icons/PlantsIcon';
import Button from 'components/Button';
import SEO from 'components/SEO';

const blog = () => {
  return (
    <div className="dark:bg-slate-800 bg-slate-50 h-screen pt-24 px-5">
      <SEO />
      <p className="font-raleway text-3xl text-center text-gray-500 dark:text-gray-300">
        This page is under development.
      </p>
      <div className="max-w-md m-auto overflow-hidden mt-16 mb-20">
        <PlantsIcon className="fill-gray-500 dark:fill-gray-300" />
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <Button>Go Back To Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default blog;
