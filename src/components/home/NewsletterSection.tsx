import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      toast.success('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary-foreground/10 p-3">
            <Mail className="h-8 w-8 text-gold" />
          </div>

          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Stay Updated
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Subscribe to our newsletter for new releases, exclusive offers, and reading recommendations
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:bg-primary-foreground/20 sm:rounded-r-none"
            />
            <Button
              type="submit"
              variant="gold"
              size="lg"
              className="sm:rounded-l-none"
            >
              Subscribe
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="mt-4 text-sm text-primary-foreground/60">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
