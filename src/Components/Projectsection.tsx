import React from 'react';
import { ExternalLink, Folder, MonitorSmartphone, ShoppingBag } from 'lucide-react';



const projects = [
  {
    id: '01',
    number: '01',
    title: 'Crypto Screener Application',
    description: 'A comprehensive crypto tracking platform with real-time data, advanced analytics, and portfolio management tools.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832',
    icon: <MonitorSmartphone className="w-6 h-6" />,
  },
  {
    id: '02',
    number: '02',
    title: 'Euphoria - Ecommerce Website',
    description: 'Modern e-commerce platform featuring a sleek design, seamless shopping experience, and robust product management.',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=2940',
    icon: <ShoppingBag className="w-6 h-6" />,
  },
  {
    id: '03',
    number: '03',
    title: 'Design Blog Website',
    description: 'Creative blog platform showcasing design trends, tutorials, and industry insights with an elegant, minimalist interface.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=2938',
    icon: <Folder className="w-6 h-6" />,
  },
];

export default function Projectsection() {
  return (
    <div className="min-h-screen w-full bg-black text-white p-8 lg:mt-24">
      <h1 className="text-5xl font-base mt-8 mb-12 text-center lg:mb-20">My <span className='font-bold'>Projects</span></h1>
      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-zinc-900 rounded-xl p-6 transition-all duration-300 hover:bg-zinc-800 lg:flex justify-between lg:p-16"
          >
            <div className="flex items-start justify-between pl-0 mb-6 lg:flex-col pl-8 ">
              <div className="space-y-4">
                <span className="text-xl font-bold text-zinc-500 lg:text-5xl">{project.number}</span>
                <h2 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-zinc-400 max-w-2xl">
                  {project.description}
                </p>
              </div>
              <div className="flex space-x-4">
                {project.icon}
                <ExternalLink className="w-6 h-6 transform group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>
            
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
