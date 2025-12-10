import React from 'react';
import { Book } from '@/types/book';
import BookCard from './BookCard';

interface BookGridProps {
  books: Book[];
  className?: string;
}

const BookGrid: React.FC<BookGridProps> = ({ books, className = '' }) => {
  if (books.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-xl text-muted-foreground">No books found</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Try adjusting your search or browse our categories
        </p>
      </div>
    );
  }

  return (
    <div
      className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 stagger-children ${className}`}
    >
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookGrid;
