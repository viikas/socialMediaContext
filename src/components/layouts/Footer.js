import React from 'react';

const Footer = () => {
    var d = new Date();
  return (
    <div className="footer">
      <p>Social Media</p>
      <span>@{ d.getFullYear()}</span>
    </div>
  );
}
 
export default Footer;