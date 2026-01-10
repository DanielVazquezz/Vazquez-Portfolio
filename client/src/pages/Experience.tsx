import { Section } from "@/components/ui/Section";
import { useStore, content } from "@/lib/store";
import { Briefcase, GraduationCap, Calendar, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const { language } = useStore();
  const t = content[language].experience;

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">{t.title}</h1>
            <p className="text-xl text-slate-600">{t.subtitle}</p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Work History */}
          <Section delay={0.1}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 rounded-xl text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-display text-slate-900">Work History</h2>
            </div>

            <div className="space-y-8 relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-4 bottom-4 w-px bg-slate-200 -z-10" />

              {t.jobs.map((job, index) => (
                <div key={index} className="relative pl-20 group">
                  {/* Timeline dot */}
                  <div className="absolute left-[29px] top-6 w-3 h-3 bg-white border-2 border-primary rounded-full group-hover:scale-125 transition-transform duration-300" />
                  
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="font-bold text-lg text-slate-900">{job.role}</h3>
                      <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded-md whitespace-nowrap">
                        {job.date}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary font-medium text-sm mb-3">
                      <Building2 className="w-4 h-4" />
                      {job.company}
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-display text-slate-900">Education</h2>
            </div>

            <div className="space-y-8 relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-4 bottom-4 w-px bg-slate-200 -z-10" />

              {t.education.map((edu, index) => (
                <div key={index} className="relative pl-20 group">
                  {/* Timeline dot */}
                  <div className="absolute left-[29px] top-6 w-3 h-3 bg-white border-2 border-indigo-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                  
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="font-bold text-lg text-slate-900">{edu.degree}</h3>
                      <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded-md whitespace-nowrap">
                        {edu.date}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-indigo-600 font-medium text-sm mb-3">
                      <Building2 className="w-4 h-4" />
                      {edu.school}
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}
