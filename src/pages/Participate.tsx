import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";

const Participate = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    reflection: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.reflection) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // In a real application, this would send data to a backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Thank You!",
      description: "Your reflection has been submitted. We appreciate your contribution to the dialogue.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      topic: "",
      reflection: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-muted to-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <MessageCircle size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Participate in the Dialogue</h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-serif max-w-2xl mx-auto">
            Share your reflections, experiences, or questions on bioethical topics. Your voice contributes to our cross-cultural conversation.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card>
          <CardHeader>
            <CardTitle>Share Your Reflection</CardTitle>
            <CardDescription className="font-serif">
              We welcome perspectives from all backgrounds. Your submission may be featured in future discussions or articles.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="topic">Topic / Area of Interest</Label>
                <Input
                  id="topic"
                  name="topic"
                  type="text"
                  placeholder="e.g., AI Ethics, Medical Ethics, Cultural Perspectives"
                  value={formData.topic}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reflection">Your Reflection *</Label>
                <Textarea
                  id="reflection"
                  name="reflection"
                  placeholder="Share your thoughts, experiences, questions, or perspectives on bioethical topics..."
                  value={formData.reflection}
                  onChange={handleChange}
                  rows={8}
                  className="resize-none font-serif"
                  required
                />
                <p className="text-sm text-muted-foreground">
                  Minimum 100 characters. Be thoughtful and respectful.
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Reflection
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Guidelines */}
        <div className="mt-8 p-6 bg-muted rounded-lg">
          <h3 className="text-lg font-semibold text-foreground mb-4">Submission Guidelines</h3>
          <ul className="space-y-2 text-muted-foreground font-serif">
            <li>• Be respectful of diverse viewpoints and cultural perspectives</li>
            <li>• Ground your reflections in personal experience or careful analysis</li>
            <li>• Avoid inflammatory language or personal attacks</li>
            <li>• Citations and references are encouraged for factual claims</li>
            <li>• All submissions are reviewed before being considered for publication</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Participate;
