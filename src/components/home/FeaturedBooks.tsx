import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getFeaturedBooks } from '@/data/books';
import BookGrid from '@/components/books/BookGrid';

const FeaturedBooks: React.FC = () => {
  const featuredBooks = getFeaturedBooks();

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Featured Books
            </h2>
            <p className="mt-2 text-muted-foreground">
              Handpicked recommendations from our editors
            </p>
          </div>
          <Link to="/books">
            <Button variant="outline" className="group">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <BookGrid books={featuredBooks} />
      </div>
    </section>
  );
};

export default FeaturedBooks;
