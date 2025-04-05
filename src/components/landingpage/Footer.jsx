import React from 'react';

const Footer = () => {
  return (
    <footer className=" py-6 text-secondary-text">
      <div className="container mx-auto text-center">
        <p className="mb-2">SKRIL © {new Date().getFullYear()}</p>
        <p>
          <a href="/terms" className="hover:text-primary-text mr-4">Terms</a>
          <a href="/privacy" className="hover:text-primary-text">Privacy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
