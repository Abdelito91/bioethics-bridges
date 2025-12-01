import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Bioethics Bridges</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bridging bioethical perspectives across the Arab world and the United States through thoughtful reflection and dialogue.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About</a></li>
              <li><a href="/articles" className="text-muted-foreground hover:text-primary transition-colors text-sm">Articles</a></li>
              <li><a href="/participate" className="text-muted-foreground hover:text-primary transition-colors text-sm">Participate</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Contact</h4>
            <a href="mailto:bioethicsbridge@gmail.com" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm">
              <Mail size={16} />
              <span>bioethicsbridge@gmail.com</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Bioethics Bridges. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
