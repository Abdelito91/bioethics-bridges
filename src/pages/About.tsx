import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Eye,
      title: "Cross-Cultural Understanding",
      description: "We believe that ethical wisdom emerges from dialogue across cultures, recognizing both universal principles and culturally-specific considerations in bioethics.",
    },
    {
      icon: Target,
      title: "Rigorous Inquiry",
      description: "Our reflections are grounded in careful analysis, drawing from bioethical theory, empirical research, and lived experience in diverse healthcare contexts.",
    },
    {
      icon: Heart,
      title: "Compassionate Discourse",
      description: "We approach contentious topics with intellectual humility and respect for diverse viewpoints, seeking understanding over winning arguments.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Bioethics Bridges</h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-serif">
            Building connections through ethical reflection
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed font-serif">
          <p>
            Bioethics Bridges was founded on the belief that bioethical challenges—from questions of autonomy and justice in healthcare to the governance of emerging technologies—demand perspectives that transcend national and cultural boundaries.
          </p>
          <p>
            The Arab world and the United States, while connected by globalization and shared scientific endeavors, often approach bioethical issues through different cultural, religious, and philosophical frameworks. Rather than viewing these differences as obstacles, we see them as opportunities for deeper understanding.
          </p>
          <p>
            Our platform serves as a meeting ground where these diverse perspectives can engage in meaningful dialogue, enriching the global conversation on bioethics.
          </p>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="bg-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Purpose</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed font-serif">
            <p>
              We aim to create a space where academics, healthcare professionals, policymakers, and engaged citizens can explore bioethical questions with nuance and depth. Our articles examine issues such as:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Medical ethics in cross-cultural contexts</li>
              <li>Ethical implications of artificial intelligence in healthcare</li>
              <li>Cultural perspectives on autonomy, beneficence, and justice</li>
              <li>Public health ethics and global health equity</li>
              <li>End-of-life care and decision-making across cultures</li>
              <li>Reproductive ethics and genetic technologies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                <value.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-serif">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Invitation Section */}
      <section className="bg-gradient-to-b from-background to-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Join the Conversation</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-serif mb-8">
            Whether you're a bioethicist, healthcare provider, student, or simply someone interested in these critical questions, we invite you to engage with our reflections and share your own perspectives.
          </p>
          <a href="/participate" className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-lg">
            Share Your Reflection →
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
