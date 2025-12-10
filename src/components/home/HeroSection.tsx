import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative py-20 md:py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground backdrop-blur-sm animate-fade-up">
              <Sparkles className="h-4 w-4" />
              <span>New arrivals every week</span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Discover Your Next
              <span className="block text-gold">Great Read</span>
            </h1>

            <p className="max-w-xl text-lg text-primary-foreground/80 mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Explore thousands of books across every genre. From timeless classics to the latest 
              bestsellers, find the stories that speak to you.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/books">
                <Button variant="gold" size="xl" className="w-full sm:w-auto btn-shine">
                  Browse Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/category/fiction">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  Explore Genres
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-4 lg:justify-start animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-foreground">50K+</p>
                <p className="text-sm text-primary-foreground/70">Books Available</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-foreground">10K+</p>
                <p className="text-sm text-primary-foreground/70">Happy Readers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-foreground">100+</p>
                <p className="text-sm text-primary-foreground/70">Authors</p>
              </div>
            </div>
          </div>

          {/* Featured Books Display */}
          <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative mx-auto w-full max-w-md">
              {/* Floating Books */}
              <div className="relative h-96">
                <div className="absolute left-0 top-8 w-40 transform -rotate-6 shadow-hover rounded-lg overflow-hidden animate-float">
                  <img
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=300&fit=crop"
                    alt="Featured book"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute left-1/2 top-0 w-44 -translate-x-1/2 transform shadow-hover rounded-lg overflow-hidden animate-float" style={{ animationDelay: '0.5s' }}>
                  <img
                    src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=220&h=330&fit=crop"
                    alt="Featured book"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute right-0 top-12 w-40 transform rotate-6 shadow-hover rounded-lg overflow-hidden animate-float" style={{ animationDelay: '1s' }}>
                  <img
                    src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=300&fit=crop"
                    alt="Featured book"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gold/20 blur-2xl" />
              <div className="absolute -right-4 top-1/4 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
