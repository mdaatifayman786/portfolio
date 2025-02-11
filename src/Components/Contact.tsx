import React, { useState } from 'react';
import { Facebook, Twitter, Disc as Discord, MessageSquare } from 'lucide-react';
import { frameData } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let prams = {
      name : formData["name"],
      email : formData["email"],
      subject : "Mal aya Mal aya",
      message : `"${formData["message"]}
      
      Website : ${formData["website"]}"`

    }
    emailjs.send("service_rjwc3nn", "template_too4eyi", prams).then(alert("Email sent Succesfully"));

    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16 bg-black  px-4 py-20 mt-16 md:mt-0 md:pt-28 sm:px-6 lg:px-24 lg:pt-48">
      <div className="flex-none lg:flex">
        <div className="a">
          <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 
            focus:ring-2 focus:ring-white focus:border-transparent outline-none transition "
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 
            focus:ring-2 focus:ring-white focus:border-transparent outline-none transition"
            required
          />

          <input
            type="url"
            name="website"
            placeholder="Your website (If exists)"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 
            focus:ring-2 focus:ring-white focus:border-transparent outline-none transition"
          />

          <textarea
            name="message"
            placeholder="How can I help?*"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 
            focus:ring-2 focus:ring-white focus:border-transparent outline-none transition resize-none"
            required
          />
          <div className="flex-none space-x-0 lg:flex lg:space-x-16">
              <button
              type="submit"
              className=" h-12 px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 
              transition duration-200 shadow-lg shadow-indigo-500/20 lg:w-"
            >
              Get In Touch
            </button>
            <div className="flex space-x-4 pt-6 lg:pt-0">
              <a href="#" className="p-2 bg-gray-800 flex items-center justify-center text-white rounded-lg hover:bg-indigo-700 w-auto lg:w-12">
                <Facebook size={24} />
              </a>
              <a href="#" className="p-2 bg-gray-800 flex items-center justify-center text-white rounded-lg hover:bg-gray-700 transition border border-gray-700 w-auto lg:w-12">
                <Discord  size={24} />
              </a>
              <a href="#" className="p-2 bg-gray-800 flex items-center justify-center text-white rounded-lg hover:bg-gray-700 transition border border-gray-700 w-auto lg:w-12">
                <MessageSquare size={24} />
              </a>
              <a href="#" className="p-2 bg-gray-800 flex items-center justify-center text-white rounded-lg hover:bg-gray-700 transition border border-gray-700 w-auto lg:w-12">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          </form>
        </div>
        <div className="pl-0 lg:pl-24">

          <div className="pt-12">
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              Let's <span className="font-normal text-indigo-400">talk</span> for
            </h2>
            <h2 className="text-4xl font-bold pt-1 text-white lg:text-5xl">Something special</h2>
            
            <p className="text-gray-400 mt-6">
              I seek to push the limits of creativity to create high-engaging, user-friendly, and 
              memorable interactive experiences.
            </p>

            <div className="mt-8 space-y-2">
              <p className="text-xl text-indigo-400 lg:text-2xl">mdaatifayman786@gmail.Com</p>
              <p className="text-xl text-gray-300 lg:text-2xl">8340293264</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
