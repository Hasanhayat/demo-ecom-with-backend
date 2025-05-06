import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
      <div>
        <h4>ShopEasy</h4>
        <p>&copy; {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
      </div>
      <div style={{ marginTop: '10px' }}>
        <a href="/about" style={{ margin: '0 10px' }}>About Us</a>
        <a href="/contact" style={{ margin: '0 10px' }}>Contact</a>
        <a href="/privacy" style={{ margin: '0 10px' }}>Privacy Policy</a>
      </div>
      <div style={{ marginTop: '10px' }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;