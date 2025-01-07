import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";

const ARTICLES = [
  {
    title: "The Future of Design Systems in 2024",
    excerpt: "Explore how design systems are evolving and shaping the future of digital product development. From atomic design to AI-powered components.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    author: "Sarah Johnson",
    date: "22 Jan 2024",
    categories: ["Design Systems", "Technology"],
    slug: "future-of-design-systems"
  },
  {
    title: "Conversations with Our Favorite London Studio",
    excerpt: "We sat down with London's fast-growing brand and product design studio to find out how they've used our platform to 2x their revenue.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    author: "Olivia Rhye",
    date: "20 Jan 2024",
    categories: ["Design", "Research"],
    slug: "london-studio-conversation"
  },
  {
    title: "A Relentless Pursuit of Perfection in Product Design",
    excerpt: "I began to notice that there was a sharp contrast between well-made, crafted products and poorly made ones, and an even greater distinction between the people who made them.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    author: "Phoenix Baker",
    date: "19 Jan 2024",
    categories: ["Product", "Design"],
    slug: "perfection-in-product-design"
  },
  {
    title: "How to Run a Successful Business With Your Partner",
    excerpt: "Starting a business with your spouse or significant other is an exciting but delicate process and requires a great deal of faith.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    author: "Lana Steiner",
    date: "18 Jan 2024",
    categories: ["Business", "Research"],
    slug: "business-with-partner"
  },
  {
    title: "The Impact of AI on Modern Software Development",
    excerpt: "Artificial Intelligence is revolutionizing how we build software. Learn about the latest trends and tools shaping the future of development.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    author: "Alex Chen",
    date: "17 Jan 2024",
    categories: ["Technology", "AI"],
    slug: "ai-impact-software-development"
  },
  {
    title: "Creating Sustainable Design Practices",
    excerpt: "Discover how design teams are incorporating sustainability into their digital products and processes for a better future.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    author: "Emma Wilson",
    date: "16 Jan 2024",
    categories: ["Design", "Sustainability"],
    slug: "sustainable-design-practices"
  }
];

const Articles = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">Latest Articles</h1>
          
          <div className="grid gap-8">
            {ARTICLES.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
