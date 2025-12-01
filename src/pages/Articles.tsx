import { useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";

const Articles = () => {
  const categories = ["All", "Medical Ethics", "AI Ethics", "Cultural Perspectives", "Public Health"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const articles = [
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
    {
      title: "Autonomy and Community in End-of-Life Care",
      excerpt: "How individual autonomy and communal decision-making intersect in end-of-life care across different cultural contexts.",
      category: "Cultural Perspectives",
      date: "October 30, 2025",
      readTime: "9 min read",
    },
    {
      title: "Genetic Testing and Privacy: A Cross-Cultural Analysis",
      excerpt: "Examining attitudes toward genetic testing, privacy, and familial disclosure in Arab and American healthcare contexts.",
      category: "Medical Ethics",
      date: "October 25, 2025",
      readTime: "11 min read",
    },
    {
      title: "Algorithmic Bias in Clinical Decision Support Systems",
      excerpt: "Investigating how AI systems may perpetuate or amplify healthcare disparities across different populations and what can be done about it.",
      category: "AI Ethics",
      date: "October 20, 2025",
      readTime: "10 min read",
    },
    {
      title: "Mental Health Stigma: Cultural Narratives and Clinical Practice",
      excerpt: "How cultural narratives around mental health shape access to care and treatment approaches in different societies.",
      category: "Cultural Perspectives",
      date: "October 15, 2025",
      readTime: "8 min read",
    },
    {
      title: "Vaccine Equity and Global Health Justice",
      excerpt: "Examining ethical frameworks for vaccine distribution and the obligations of wealthy nations during global health emergencies.",
      category: "Public Health",
      date: "October 10, 2025",
      readTime: "13 min read",
    },
  ];

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-muted to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Articles & Reflections</h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed font-serif">
            Exploring bioethical questions at the intersection of culture, science, and healthcare
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No articles found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Articles;
