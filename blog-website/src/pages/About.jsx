// import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-5">
      <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
      <p className="text-lg mb-4 text-center">
        Welcome to MyBlog! Here, we share amazing content on a variety of topics to inspire, educate, and entertain. Whether you are looking for the latest tech trends, lifestyle tips, or thought-provoking articles, we got you covered.
      </p>
      <div className="flex justify-center mb-5">
        <img src="https://via.placeholder.com/150" alt="Surya" className="w-40 h-40 rounded-full shadow-lg" />
      </div>
      <h2 className="text-2xl font-bold mb-2 text-center">Our Mission</h2>
      <p className="text-lg mb-4 text-center">
        Our mission is to create a community of curious minds who love to learn and share knowledge. We believe that everyone has a story to tell and valuable insights to offer. Join us on this journey of exploration and discovery.
      </p>
      <h2 className="text-2xl font-bold mb-2 text-center">About Me</h2>
      <p className="text-lg mb-4 text-center">
        Hi, I am Surya! I started this blog to connect with like-minded individuals and share my passion for writing. When I am not working on the blog, you can find me exploring new tech, reading books, and enjoying the outdoors.
      </p>
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default About;
