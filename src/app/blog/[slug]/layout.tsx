import 'highlight.js/styles/github.css';
import '@/app/blog/blog-post.css';

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="blog-post-layout">
      {children}
    </div>
  );
} 