import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About The Journal</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Welcome to The Journal, a platform dedicated to exploring the intersections of design, technology, and business. Our mission is to provide thoughtful insights and practical knowledge that helps professionals navigate the ever-evolving digital landscape.
            </p>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We believe in the power of sharing knowledge and experiences. Through our articles and research, we aim to foster a community of learners and innovators who are passionate about creating meaningful digital experiences.
            </p>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">Our Team</h2>
            <p className="text-gray-600 mb-6">
              The Journal is maintained by a dedicated team of writers, designers, and developers who are committed to delivering high-quality content that matters. Our contributors bring diverse perspectives and expertise from various fields.
            </p>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              We're always looking to connect with our readers and hear your thoughts. Whether you have a question, suggestion, or just want to say hello, feel free to reach out through our contact page.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;