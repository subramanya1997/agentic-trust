"use client";

import { Clock, Calendar, ArrowRight } from "lucide-react";

interface Author {
  name: string;
  avatar: string;
  role?: string;
}

interface FeaturedPostProps {
  date: string;
  readTime: string;
  title: string;
  description: string;
  author: Author;
  category: string;
}

export const FeaturedPost = ({ date, readTime, title, description, author, category }: FeaturedPostProps) => {
  return (
    <div className="relative mb-16 group cursor-pointer">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-muted/50 to-secondary/30 rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      
      {/* Main container */}
      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/50">
        <div className="grid lg:grid-cols-5 gap-0">
          {/* Content Section - Takes more space */}
          <div className="lg:col-span-3 p-8 md:p-12 lg:p-16">
            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand bg-brand/10 px-3 py-1.5 rounded-full">
                {category}
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {readTime}
                </span>
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-brand transition-colors duration-300">
              {title}
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            {/* Author & CTA */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand to-brand/60 rounded-full flex items-center justify-center text-brand-foreground font-bold shadow-lg">
                    {author.avatar}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{author.name}</p>
                  {author.role && <p className="text-sm text-gray-500">{author.role}</p>}
                </div>
              </div>
              
              <button className="flex items-center gap-2 text-brand font-semibold hover:text-brand/80 transition-colors group/btn">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Visual Section - Modern abstract design */}
          <div className="lg:col-span-2 relative h-64 lg:h-auto bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 overflow-hidden">
            {/* Animated background circles */}
            <div className="absolute inset-0">
              <div className="absolute top-10 right-10 w-32 h-32 bg-brand/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
              <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
            </div>
            
            {/* Modern icon grid */}
            <div className="relative grid grid-cols-2 gap-4 max-w-xs">
              {/* MCP/Tech Icon */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group/icon">
                <svg className="w-10 h-10 text-brand group-hover/icon:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="10" rx="2"/>
                  <path d="M12 3v8"/>
                  <circle cx="12" cy="3" r="1"/>
                  <circle cx="8" cy="16" r="1"/>
                  <circle cx="16" cy="16" r="1"/>
                </svg>
              </div>
              
              {/* Network Icon */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group/icon">
                <svg className="w-10 h-10 text-muted-foreground group-hover/icon:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 7h16"/>
                  <path d="M4 17h16"/>
                  <path d="M8 12h8"/>
                  <circle cx="12" cy="7" r="2"/>
                  <circle cx="12" cy="17" r="2"/>
                </svg>
              </div>
              
              {/* Security Icon */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group/icon">
                <svg className="w-10 h-10 text-success group-hover/icon:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l8 3v8c0 3.5-2.5 6.5-8 9-5.5-2.5-8-5.5-8-9V5l8-3z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              
              {/* Analytics Icon */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group/icon">
                <svg className="w-10 h-10 text-foreground group-hover/icon:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 3v18h18"/>
                  <path d="M7 16l4-4 4 4 5-5"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 