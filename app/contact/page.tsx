import ButtonComponent from '@/app/_components/ButtonComponent';
import React from 'react';

// Server Component: fetch data on the server
const Contact = async () => {
  // Add protocol to the fetch URL
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-4 my-8">
      <p>Contact</p>
      <ButtonComponent />
      {/* Example: render number of posts fetched */}
      <p className="col-span-full">Posts fetched: {posts.length}</p>
    </div>
  );
};

export default Contact;