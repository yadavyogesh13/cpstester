import { Layout } from "@/components/layout/Layout";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { useSeo } from "@/hooks/useSeo";
import { useJsonLd } from "@/hooks/useJsonLd";
import { blogPosts } from "@/data/blogData";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();

  const post = useMemo(
    () => blogPosts.find(p => p.slug === slug),
    [slug]
  );

  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  if (!post) {
    return (
      <Layout>
        <div className="container py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  useSeo({
    title: `${post.title} | CPS Checker Blog`,
    description: post.excerpt,
    url: `https://cpschecker.site/blog/${post.slug}`,
    image: post.image,
  });

  useJsonLd({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://cpschecker.site"
    }
  });

  return (
    <Layout>
      <div className="container py-12 md:py-16">
        {/* Breadcrumb & Back Link */}
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
            <li className="text-muted-foreground">/</li>
            <li><Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
            <li className="text-muted-foreground">/</li>
            <li className="text-foreground font-medium line-clamp-1">{post.title}</li>
          </ol>
        </nav>

        <article className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-4 inline-block">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="mb-6 text-4xl md:text-5xl font-black">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime} min read
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden border border-border/50">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('#')) {
                const level = paragraph.match(/^#+/)[0].length;
                const text = paragraph.replace(/^#+\s/, '');
                if (level === 1) return <h1 key={idx} className="text-4xl font-black mt-8 mb-4 text-foreground">{text}</h1>;
                if (level === 2) return <h2 key={idx} className="text-2xl font-bold mt-6 mb-4 text-foreground">{text}</h2>;
                if (level === 3) return <h3 key={idx} className="text-xl font-bold mt-4 mb-3 text-foreground">{text}</h3>;
              }
              
              if (paragraph.startsWith('-')) {
                const items = paragraph.split('\n').filter(l => l.startsWith('-'));
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 text-muted-foreground">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace(/^-\s/, '')}</li>
                    ))}
                  </ul>
                );
              }

              return <p key={idx} className="text-muted-foreground leading-relaxed">{paragraph}</p>;
            })}
          </div>

          {/* Tags */}
          <div className="mb-8 pt-8 border-t border-border/50">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                >
                  #{tag.toLowerCase()}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="grid gap-4 md:grid-cols-2 pt-8 border-t border-border/50">
            {prevPost ? (
              <Link to={`/blog/${prevPost.slug}`} className="group">
                <div className="rounded-lg border border-border/50 bg-card p-6 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <ArrowLeft className="h-4 w-4" />
                    Previous Article
                  </div>
                  <h3 className="font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {prevPost.title}
                  </h3>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextPost ? (
              <Link to={`/blog/${nextPost.slug}`} className="group">
                <div className="rounded-lg border border-border/50 bg-card p-6 hover:border-primary/50 transition-all text-right">
                  <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                    Next Article
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {nextPost.title}
                  </h3>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Author Bio */}
          <div className="mt-12 rounded-xl border border-border/50 bg-muted/30 p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{post.author}</h3>
                <p className="text-sm text-muted-foreground">
                  Expert contributor at CPS Checker, dedicated to helping users improve their speed and accuracy with comprehensive guides and proven techniques.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-16 pt-16 border-t border-border/50">
          <h2 className="mb-8 text-3xl font-bold text-center">More Articles</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="group">
                  <div className="rounded-lg border border-border/50 bg-card overflow-hidden hover:border-primary/50 transition-all">
                    <div className="h-40 overflow-hidden bg-muted">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-medium text-primary">{relatedPost.category}</span>
                      <h3 className="mt-2 font-bold group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {relatedPost.readTime} min
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <AdPlaceholder size="leaderboard" />
    </Layout>
  );
}
