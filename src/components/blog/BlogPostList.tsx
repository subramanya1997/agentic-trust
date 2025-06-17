"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface Author {
  name: string;
  avatar?: string;
}

interface BlogPost {
  id: number;
  title: string;
  authors: Author[];
  category: string;
  date: string;
  slug?: string;
}

interface BlogPostListProps {
  posts: BlogPost[];
}

// Define category colors using stone theme
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Engineering": { bg: "bg-muted", text: "text-foreground", border: "border-border" },
  "Product": { bg: "bg-secondary", text: "text-secondary-foreground", border: "border-border" },
  "Security": { bg: "bg-accent", text: "text-accent-foreground", border: "border-border" },
  "Standards": { bg: "bg-secondary", text: "text-secondary-foreground", border: "border-border" },
  "Company": { bg: "bg-muted", text: "text-muted-foreground", border: "border-border" },
  "Launch Week": { bg: "bg-brand/10", text: "text-brand", border: "border-brand/20" },
};

// Avatar background colors using stone variations
const avatarColors = [
  "bg-gradient-to-br from-primary to-muted-foreground",
  "bg-gradient-to-br from-secondary to-accent",
  "bg-gradient-to-br from-muted to-secondary",
  "bg-gradient-to-br from-brand to-brand/60",
  "bg-gradient-to-br from-accent to-muted",
];

const getAvatarColor = (index: number) => avatarColors[index % avatarColors.length];

// Get initials from name
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

export const BlogPostList = ({ posts }: BlogPostListProps) => {
  // Show coming soon message if no posts
  if (posts.length === 0) {
    return (
      <div className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <ArrowUpRight className="w-8 h-8 text-brand" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Articles Coming Soon
          </h3>
          <p className="text-sm text-gray-600">
            We&apos;re preparing insightful content about AI agent infrastructure, MCP servers, and production best practices. 
            Check back in June 2025!
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <Table className="[&&_tr]:border-b min-w-[800px]">
          <TableBody>
            {posts.map((post, postIndex) => (
              <TableRow 
                key={post.id} 
                className="group cursor-pointer hover:bg-gray-50/50 transition-colors duration-150 border-gray-200"
              >
                <TableCell className="px-6 py-5 whitespace-normal">
                  {post.slug ? (
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-brand transition-colors flex items-center gap-1.5">
                        {post.title}
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-brand" />
                      </h3>
                    </Link>
                  ) : (
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-brand transition-colors flex items-center gap-1.5">
                      {post.title}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-brand" />
                    </h3>
                  )}
                </TableCell>
                <TableCell className="px-3 py-5 text-right">
                  <div 
                    className="inline-flex -space-x-2"
                    title={post.authors.map(a => a.name).join(", ")}
                  >
                    {post.authors.slice(0, 2).map((author, index) => (
                      <div
                        key={index}
                        className="relative w-7 h-7 rounded-full ring-2 ring-white shadow-sm hover:scale-110 hover:z-10 transition-transform overflow-hidden"
                      >
                        {author.avatar ? (
                          <Image
                            src={author.avatar}
                            alt={author.name}
                            width={28}
                            height={28}
                            className="object-cover"
                          />
                        ) : (
                          <div className={`w-full h-full ${getAvatarColor(postIndex + index)} flex items-center justify-center text-[10px] font-semibold text-white`}>
                            {getInitials(author.name)}
                          </div>
                        )}
                      </div>
                    ))}
                    {post.authors.length > 2 && (
                      <div className="w-7 h-7 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-[10px] font-semibold text-white ring-2 ring-white shadow-sm">
                        +{post.authors.length - 2}
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell className="px-3 py-5 text-right">
                  <Badge 
                    variant="secondary" 
                    className={`${categoryColors[post.category]?.bg || 'bg-gray-100'} ${categoryColors[post.category]?.text || 'text-gray-700'} border ${categoryColors[post.category]?.border || 'border-gray-200'} text-xs font-medium px-2.5 py-1 rounded-md`}
                  >
                    {post.category}
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-xs sm:text-sm text-gray-500 whitespace-nowrap px-6 py-5 font-medium">
                  {post.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}; 