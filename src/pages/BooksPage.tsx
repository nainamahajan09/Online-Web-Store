import React from 'react';
import Layout from '@/components/layout/Layout';
import BookGrid from '@/components/books/BookGrid';
import { books } from '@/data/books';

const BooksPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary/50 py-12 md:py-16">
        <div className="container">
          <h1 className="font-display text-3xl font-bold md:text-4xl">
            All Books
          </h1>
          <p className="mt-2 text-muted-foreground">
            Browse our complete collection of {books.length} books
          </p>
        </div>
      </section>

      {/* Books Grid */}
      <section className="container py-12">
        <BookGrid books={books} />
      </section>
    </Layout>
  );
};

export default BooksPage;
