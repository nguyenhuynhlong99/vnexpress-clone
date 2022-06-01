import React from 'react';
import Article from './Article/Article';
import Feature from './Feature/Feature';
import News from './News/News';

export default function Content() {
  return (
    <section className="pt-4">
      <div className="w-full max-w-[1130px] my-0 mx-auto">
        <Article />
        <Feature />
        <News />
      </div>
    </section>
  );
}
