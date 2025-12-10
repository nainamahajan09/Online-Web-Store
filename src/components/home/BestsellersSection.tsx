import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getBestsellers } from '@/data/books';
import BookGrid from '@/components/books/BookGrid';

const BestsellersSection: React.FC = () => {
  const bestsellers = getBestsellers();

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <Award className="h-8 w-8 text-gold" />
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Bestsellers
              </h2>
              <p className="mt-1 text-muted-foreground">
                The books everyone is reading right now
              </p>
            </div>
          </div>
          <Link to="/books">
            <Button variant="outline" className="group">
              See All Bestsellers
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <BookGrid books={bestsellers} />
      </div>
    </section>
  );
};

export default BestsellersSection;
