import React from 'react';
import './AboutPage.scss';

const AboutPage = () => {
  return (
    <div className='about-page'>
      <div className="about-page__text rich-text">
        <h2>WTF</h2>
        <p>Through this app you can search recently added media with a certain hashtag. It&apos;s using Instagram public API
          for fetching media. Now App is in a SANDBOX MODE, so you cannot easily authorize and use it, because of
          Instagram API restrictions. So, for using it, you have to contact me and I will add you as a sandbox user.
          Then you will be able to authorize and fetch your account media.</p>
        <p>Please, note, that you need to have some recently added
          photos, with tags, in your account, to be able to search among them.</p>
      </div>
    </div>
  );
};

export default AboutPage;
