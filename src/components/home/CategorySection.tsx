import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/books';

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Explore by Genre
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Find your perfect read from our diverse collection of genres
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 stagger-children">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group relative overflow-hidden rounded-xl bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{category.icon}</span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {category.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
