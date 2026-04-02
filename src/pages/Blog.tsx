import { Layout } from "@/components/layout/Layout";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { useSeo } from "@/hooks/useSeo";
import { useJsonLd } from "@/hooks/useJsonLd";
import { blogPosts } from "@/data/blogData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { useState, useMemo } from "react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useSeo({
    title: "Blog - CPS Checker | Speed Testing Tips & Guides",
    description: "Read our comprehensive blog for typing tips, CPS benchmarks, reaction time training methods, and guides to improve your skills.",
    url: "https://cpschecker.site/blog",
    image: "https://cpschecker.site/cps-score-og.png",
    keywords: "blog, typing tips, CPS guide, reaction time, speed testing",
  });

  useJsonLd({
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "CPS Checker Blog",
    "description": "Speed testing tips, guides, and benchmarks",
    "url": "https://cpschecker.site/blog",
  });

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogPosts.map(post => post.category)));
    return cats;
  }, []);

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return blogPosts;
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <Layout>
      <div className="container py-12 md:py-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl mb-12">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li className="text-muted-foreground">/</li>
              <li className="text-foreground font-medium">Blog</li>
            </ol>
          </nav>

          <h1 className="mb-4 text-4xl md:text-5xl font-black">
            Latest <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Master your skills with expert-written articles on CPS testing, typing speed, 
            reaction time, and proven techniques to improve your performance.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "border border-border/50 text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              All Articles
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border border-border/50 text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {!selectedCategory && (
          <div className="mb-16 rounded-2xl border border-border/50 bg-gradient-to-r from-primary/10 to-accent/10 p-8 md:p-12">
            <div className="mb-6 flex items-center gap-2 text-sm text-primary font-medium">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              Featured Article
            </div>
            <h2 className="mb-4 text-3xl md:text-4xl font-black">{blogPosts[0].title}</h2>
            <p className="mb-6 text-lg text-muted-foreground">{blogPosts[0].excerpt}</p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {new Date(blogPosts[0].date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {blogPosts[0].readTime} min read
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary font-medium text-xs">
                  {blogPosts[0].category}
                </span>
              </div>
            </div>

            <Link to={`/blog/${blogPosts[0].slug}`}>
              <Button size="lg" className="gap-2">
                Read Article
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredPosts.map((post, idx) => (
            idx === 0 && !selectedCategory ? null : (
              <article
                key={post.id}
                className="group rounded-xl border border-border/50 bg-card overflow-hidden hover:border-primary/50 hover:shadow-md transition-all"
              >
                {/* Image */}
                <div className="overflow-hidden bg-muted h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="mb-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime} min
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs text-muted-foreground">
                        #{tag.toLowerCase()}
                      </span>
                    ))}
                  </div>

                  <Link to={`/blog/${post.slug}`} className="inline-flex">
                    <Button variant="ghost" size="sm" className="gap-2 group-hover:text-primary">
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </article>
            )
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">No articles found in this category.</p>
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-primary hover:underline font-medium"
            >
              View all articles
            </button>
          </div>
        )}
      </div>

      <AdPlaceholder size="leaderboard" />
    </Layout>
  );
}
