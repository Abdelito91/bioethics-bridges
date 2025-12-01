import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bridge-dna.jpg";

const Home = () => {
  const featuredArticles = [
    {
      title: "Cross-Cultural Perspectives on Informed Consent",
      excerpt: "Exploring how cultural values shape the doctrine of informed consent across the Arab world and United States, and what this means for global bioethics.",
      category: "Medical Ethics",
      date: "November 15, 2025",
      readTime: "8 min read",
    },
    {
      title: "AI in Healthcare: Ethical Considerations for Diverse Populations",
      excerpt: "Examining the ethical implications of AI-driven diagnostics and treatment recommendations in culturally diverse healthcare settings.",
      category: "AI Ethics",
      date: "November 10, 2025",
      readTime: "10 min read",
    },
    {
      title: "Public Health Ethics During Pandemics: Lessons from Two Worlds",
      excerpt: "Comparing public health responses and ethical frameworks during global health crises in the Arab world and the United States.",
      category: "Public Health",
      date: "November 5, 2025",
      readTime: "12 min read",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Bridge and DNA helix symbolizing bioethical connections" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Bridging Bioethical Perspectives
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-serif">
            Reflections on bioethics, culture, and science across the Arab world and the United States
          </p>
          <Link to="/articles">
            <Button size="lg" className="text-lg px-8 py-6 group">
              Explore Articles
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-serif">
            Bioethics Bridges creates a space for thoughtful dialogue on bioethical issues that span cultures, continents, and communities. We believe that the most pressing ethical challenges in medicine, science, and public health require perspectives that transcend borders.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-serif">
            By bringing together voices from the Arab world and the United States, we aim to foster understanding, challenge assumptions, and build bridges of ethical reflection in an increasingly interconnected world.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Reflections</h2>
          <p className="text-lg text-muted-foreground">Recent explorations in bioethics and culture</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/articles">
            <Button variant="outline" size="lg">
              View All Articles
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
