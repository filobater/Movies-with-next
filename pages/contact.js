import React from 'react';
import Meta from '../components/Meta';

const Contact = () => {
  return (
    <div className="text-center mt-20">
      <Meta title={'Contact'} />
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <a
        href="https://www.linkedin.com/in/filobater-nader-723887231"
        className="underline text-blue-600"
      >
        Filobater Nader
      </a>
    </div>
  );
};

export default Contact;
