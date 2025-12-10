import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import BookGrid from '@/components/books/BookGrid';
import { searchBooks } from '@/data/books';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = searchBooks(query);

  return (
    <Layout>
      {/* Header */}
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
            <Search className="h-8 w-8 text-muted-foreground" />
            <div>
              <h1 className="font-display text-3xl font-bold md:text-4xl">
                Search Results
              </h1>
              <p className="mt-2 text-muted-foreground">
                {results.length} {results.length === 1 ? 'result' : 'results'} for "{query}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="container py-12">
        {results.length > 0 ? (
          <BookGrid books={results} />
        ) : (
          <div className="text-center py-16">
            <Search className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No books found</h2>
            <p className="text-muted-foreground mb-6">
              Try searching for a different title, author, or category
            </p>
            <Link to="/books">
              <button className="text-primary hover:underline">
                Browse all books
              </button>
            </Link>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default SearchPage;
