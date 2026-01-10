import { Section } from "@/components/ui/Section";
import { useStore, content } from "@/lib/store";
import { ArrowRight, CheckCircle2, TrendingUp, BookOpen, BarChart3, ChevronRight, Mail, Linkedin, FileText } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const { language } = useStore();
  const t = content[language];

  // Map icons to interests for visual variety
  const interestIcons = [TrendingUp, BookOpen, BarChart3];

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent -z-10" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Profile Image - Left Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full blur-xl opacity-20 transform translate-y-4"></div>
              <img 
                src="/profile.jpg" 
                alt="Daniel Vázquez Vera" 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl relative z-10"
              />
            </motion.div>

            {/* Hero Content - Right Side */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 text-primary font-medium text-sm mb-6 mx-auto md:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                {t.hero.role}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
                {t.hero.greeting} <span className="text-gradient">Daniel Vázquez</span>.
              </h1>
              
              <div className="space-y-4 mb-8">
                <p className="text-xl md:text-2xl text-slate-800 font-medium italic">
                  "{t.hero.tagline}"
                </p>
                <p className="text-lg text-slate-600 font-light leading-relaxed">
                  {t.hero.bio}
                </p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a 
                  href="mailto:vazquezveradaniel@gmail.com"
                  className="px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  {t.hero.cta_email}
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/daniel-vázquez-vera-81356723b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#0077b5] text-white rounded-xl font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  {t.hero.cta_linkedin}
                </a>

                <a 
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  {t.hero.cta_resume}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section Removed as requested */}

      {/* Professional Profile Section */}
      <Section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
             <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Professional Profile</h2>
             <p className="text-lg text-slate-600 leading-relaxed">
               I combine three complementary areas: Finance & Accounting, Entrepreneurship, and Digital Content. This combination allows me to understand both numbers and narratives, moving comfortably between analysis, execution, and creativity.
             </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
               <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-primary mb-4">
                 <BarChart3 className="w-5 h-5" />
               </div>
               <h3 className="font-bold text-slate-900 mb-2">Finance & Accounting</h3>
               <p className="text-slate-600 text-sm">Strong academic background, valuation, financial statements, markets.</p>
             </div>
             <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
               <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                 <TrendingUp className="w-5 h-5" />
               </div>
               <h3 className="font-bold text-slate-900 mb-2">Entrepreneurship</h3>
               <p className="text-slate-600 text-sm">Self-initiated projects, freelancing, client-oriented mindset.</p>
             </div>
             <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
               <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                 <BookOpen className="w-5 h-5" />
               </div>
               <h3 className="font-bold text-slate-900 mb-2">Digital & Content</h3>
               <p className="text-slate-600 text-sm">Web creation, social media, analytics and communication.</p>
             </div>
          </div>
        </div>
      </Section>

      {/* Curiosity Section */}
      <Section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">{t.about.curiosity_title}</h2>
            <p className="text-lg text-slate-600 leading-relaxed italic">
              "{t.about.curiosity_text}"
            </p>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="bg-white pt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative order-2 md:order-1">
              {/* Unsplash image with finance/business theme */}
              {/* professional workspace finance analytics */}
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                 <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" 
                  alt="Financial Analytics" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-100 rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/20 rounded-full -z-10" />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-slate-900">
                {t.about.title}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {t.about.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {t.about.certifications}
                  </h4>
                  <ul className="grid grid-cols-1 gap-2 pl-7">
                    <li className="text-slate-600 text-sm">CFA Level I Candidate (Nov 2025)</li>
                    <li className="text-slate-600 text-sm">Technical Analysis & Value Investing</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {t.about.skills}
                  </h4>
                  <div className="flex flex-wrap gap-2 pl-7">
                    {["Valuation (DCF)", "Multiples", "IFRS/US GAAP", "Excel", "PowerPoint"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Link href="/experience" className="group inline-flex items-center text-primary font-semibold hover:text-blue-700 transition-colors">
                  More about my background <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
