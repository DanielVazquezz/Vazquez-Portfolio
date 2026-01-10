import { Section } from "@/components/ui/Section";
import { useStore, content } from "@/lib/store";
import { useCreateMessage } from "@/hooks/use-messages";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Phone, Linkedin, FileText, Send, Loader2 } from "lucide-react";
import { insertMessageSchema } from "@shared/schema";

export default function Contact() {
  const { language } = useStore();
  const t = content[language].contact;
  const { mutate, isPending } = useCreateMessage();

  // Define form schema client-side to ensure types match
  const formSchema = insertMessageSchema.extend({
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <Section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">{t.title}</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t.subtitle}</p>
          </Section>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Contact Info Cards */}
            <div className="md:col-span-1 space-y-4">
              <a href="mailto:vazquezveradaniel@gmail.com" className="block p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{t.info.email}</h3>
                <p className="text-sm text-slate-500 break-all">vazquezveradaniel@gmail.com</p>
              </a>

              <a href="https://www.linkedin.com/in/daniel-vázquez-vera-81356723b/" target="_blank" rel="noopener noreferrer" className="block p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{t.info.linkedin}</h3>
                <p className="text-sm text-slate-500">Connect on LinkedIn</p>
              </a>

              {/* Assuming resume file download if available, linking to file path or just generic */}
              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{t.info.resume}</h3>
                <p className="text-sm text-slate-500 mb-3">Available upon request</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-900 ml-1">{t.form.name}</label>
                      <input
                        {...form.register("name")}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                        placeholder="John Doe"
                      />
                      {form.formState.errors.name && <p className="text-red-500 text-xs ml-1">{form.formState.errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-900 ml-1">{t.form.email}</label>
                      <input
                        {...form.register("email")}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                        placeholder="john@example.com"
                      />
                      {form.formState.errors.email && <p className="text-red-500 text-xs ml-1">{form.formState.errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-900 ml-1">{t.form.message}</label>
                    <textarea
                      {...form.register("message")}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                      placeholder="How can I help you?"
                    />
                    {form.formState.errors.message && <p className="text-red-500 text-xs ml-1">{form.formState.errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-blue-600 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t.form.sending}
                      </>
                    ) : (
                      <>
                        {t.form.submit}
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
