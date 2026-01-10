import { Github, Linkedin, Mail } from "lucide-react";
import { useStore } from "@/lib/store";

export function Footer() {
  const { language } = useStore();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-2xl mb-2">Daniel Vázquez Vera</h3>
            <p className="text-slate-400 text-sm max-w-xs">
              {language === 'en' 
                ? "Connecting finance, strategy, and analytical precision." 
                : "Conectando finanzas, estrategia y precisión analítica."}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/daniel-vázquez-vera-81356723b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:text-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:vazquezveradaniel@gmail.com" 
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:text-primary transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            {/* Added Github as a placeholder for technical projects if needed later */}
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {year} Daniel Vázquez Vera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
