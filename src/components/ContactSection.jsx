import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useMemo, useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const mailtoHref = useMemo(() => {
    const subject = `Portfolio message from ${form.name || "Someone"}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;

    return `mailto:benothmanselim14@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [form.name, form.email, form.message]);

  const handleOpenEmail = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Champs manquants",
        description: "Remplis ton nom, ton email et ton message.",
        variant: "destructive",
      });
      return;
    }


    window.location.href = mailtoHref;

    toast({
      title: "Prêt à envoyer",
      description: "Ton application mail s’ouvre avec le message pré-rempli.",
    });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contactez <span className="text-primary"> moi</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Vous avez un projet en tête ou souhaitez collaborer ? N&apos;hésitez
          pas à me contacter. Je suis toujours ouvert à de nouvelles
          opportunités.
        </p>

        <div className="justify-center items-center mx-auto max-w-2xl">

          {/* RIGHT */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Envoyer un message</h3>

            <form className="space-y-6" onSubmit={handleOpenEmail}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Selim Ben Othman"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Votre email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Bonjour, j'aimerais discuter de..."
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "w-full flex items-center justify-center gap-2 rounded-md px-4 py-3 font-medium",
                  "bg-red-600 text-white hover:bg-red-700 transition-colors"
                )}
              >
                Envoyer le message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
