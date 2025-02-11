import React from 'react';
import { Twitter, Github } from 'lucide-react';
import aboutpic from "../assets/techLogo/column.svg"

export default function Aboutme() {
  return (
    <div className="min-h-screen pt-12 lg:pt-20">
      <div className="w-full">
        <div className="bg-white flex flex-col items-center p-8 lg:flex-row items-none justify-center lg:p-20">
            <img className='w-full h-[22rem] md:h-[25rem] lg:h-[32rem]' src={aboutpic} alt='About pic' />
            <div className='pl-0 lg:pl-24'>
                <div className="text-center ">
                    <h1 className="text-5xl font-base mt-8 mb-12 font-bold lg:mt-0 mb-8">About Me</h1>
                </div>

                {/* Main Content */}
                <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                    I'm a passionate, self-proclaimed designer who specializes in full stack
                    development (React.js & Node.js). I am very enthusiastic about bringing the
                    technical and visual aspects of digital products to life. User experience, pixel
                    perfect design, and writing clear, readable, highly performant code matters to me.
                    </p>

                    <p>
                    I began my journey as a web developer in 2015, and since then, I've continued to
                    grow and evolve as a developer, taking on new challenges and learning the latest
                    technologies along the way. Now, in my early thirties, 7 years after starting my web
                    development journey, I'm building cutting-edge web applications using modern
                    technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                    </p>

                    <p>
                    When I'm not in full-on developer mode, you can find me hovering around on twitter
                    or on indie hacker, witnessing the journey of early startups or enjoying some free
                    time. You can follow me on Twitter where I share tech-related bites and build in
                    public, or you can follow me on GitHub.
                    </p>
                </div>
                <div className="flex justify-center space-x-6 pt-4">
                    <a
                    href="https://x.com/AatifAyman"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Twitter className="w-8 h-8" />
                    </a>
                    <a
                    href="https://github.com/mdaatifayman786"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Github className="w-8 h-8" />
                    </a>
                </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}