import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Link } from "react-router-dom";

// Group articles by category
const CATEGORIES = {
  "Design Systems": {
    articles: [
      {
        title: "The Future of Design Systems in 2024",
        excerpt: "Design systems are evolving rapidly as digital products become more complex and teams grow larger.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        author: "Sarah Johnson",
        date: "22 Jan 2024",
        categories: ["Design Systems", "Technology"],
        slug: "future-of-design-systems"
      }
    ]
  },
  "Technology": {
    articles: [
      {
        title: "The Future of Design Systems in 2024",
        excerpt: "Design systems are evolving rapidly as digital products become more complex and teams grow larger.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        author: "Sarah Johnson",
        date: "22 Jan 2024",
        categories: ["Design Systems", "Technology"],
        slug: "future-of-design-systems"
      },
      {
        title: "The Impact of AI on Modern Software Development",
        excerpt: "Artificial Intelligence is revolutionizing the software development landscape.",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        author: "Alex Chen",
        date: "17 Jan 2024",
        categories: ["Technology", "AI"],
        slug: "ai-impact-software-development"
      }
    ]
  },
  "Business": {
    articles: [
      {
        title: "How to Run a Successful Business With Your Partner",
        excerpt: "Starting a business with your spouse or significant other can be both rewarding and challenging.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        author: "Lana Steiner",
        date: "18 Jan 2024",
        categories: ["Business", "Research"],
        slug: "business-with-partner"
      }
    ]
  },
  "Research": {
    articles: [
      {
        title: "How to Run a Successful Business With Your Partner",
        excerpt: "Starting a business with your spouse or significant other can be both rewarding and challenging.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        author: "Lana Steiner",
        date: "18 Jan 2024",
        categories: ["Business", "Research"],
        slug: "business-with-partner"
      }
    ]
  }
};

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-12">Categories</h1>
        
        <div className="grid gap-12">
          {Object.entries(CATEGORIES).map(([category, { articles }]) => (
            <section key={category}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">{category}</h2>
                <span className="text-gray-500">
                  {articles.length} article{articles.length !== 1 ? 's' : ''}
                </span>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <BlogCard key={article.slug} {...article} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;