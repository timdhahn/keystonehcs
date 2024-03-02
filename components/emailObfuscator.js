import React, { useState, useEffect } from 'react';

const EmailObfuscator = ({className}) => {
    console.log(className);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Encode parts of the email address
    const user = btoa('contact');
    const domain = btoa('keystonehcs');
    const tld = btoa('com');

    // Decode and construct the email address
    const decodedEmail = `${atob(user)}@${atob(domain)}.${atob(tld)}`;

    // Set the email address in state
    setEmail(decodedEmail);
  }, []);

  return (
    <a className={className} href={`mailto:${email}`}>{email}</a>
  );
};

export default EmailObfuscator;
