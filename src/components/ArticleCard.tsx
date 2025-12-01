import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

const ArticleCard = ({ title, excerpt, category, date, readTime }: ArticleCardProps) => {
  const categoryColors: Record<string, string> = {
    "Medical Ethics": "bg-primary/10 text-primary hover:bg-primary/20",
    "AI Ethics": "bg-secondary/10 text-secondary hover:bg-secondary/20",
    "Cultural Perspectives": "bg-accent/10 text-accent hover:bg-accent/20",
    "Public Health": "bg-primary/10 text-primary hover:bg-primary/20",
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 group">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className={categoryColors[category] || ""}>
            {category}
          </Badge>
          <span className="text-xs text-muted-foreground">{readTime}</span>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed mb-4 font-serif">{excerpt}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
