import React from 'react';
import Content from 'pageComponents/Index/Content';
import Top from 'pageComponents/Index/Top';
import Footer from 'pageComponents/Index/Footer';
import SEO from 'components/SEO';

const IndexPage = () => {
  return (
    <main className="dark:bg-slate-800 bg-slate-50">
      <SEO />
      <div className="px-4 m-auto max-w-5xl">
        <Top />
        <Content />
        <Footer />
      </div>
    </main>
  );
};

export default IndexPage;
