import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import BookGrid from '@/components/books/BookGrid';
import { getBooksByCategory, categories } from '@/data/books';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find(c => c.id === categoryId);
  const books = categoryId ? getBooksByCategory(categoryId) : [];

  if (!category) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold">Category not found</h1>
          <Link to="/">
            <Button className="mt-4">Return Home</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary/50 py-12 md:py-16">
        <div className="container">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1 className="font-display text-3xl font-bold md:text-4xl">
                {category.name}
              </h1>
              <p className="mt-2 text-muted-foreground">{category.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="container py-12">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            {books.length} {books.length === 1 ? 'book' : 'books'} found
          </p>
        </div>

        <BookGrid books={books} />
      </section>
    </Layout>
  );
};

export default CategoryPage;
