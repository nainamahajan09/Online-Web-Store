import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Book } from '@/types/book';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { addToCart } = useCart();

  const discount = book.originalPrice
    ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)
    : 0;

  return (
    <article className="book-card group relative flex flex-col overflow-hidden rounded-xl bg-card shadow-soft">
      {/* Image Container */}
      <Link to={`/book/${book.id}`} className="relative aspect-[3/4] overflow-hidden">
        <img
          src={book.image}
          alt={`Cover of ${book.title} by ${book.author}`}
          className="book-image h-full w-full object-cover"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {book.bestseller && (
            <Badge className="bg-gold text-gold-foreground shadow-gold">
              Bestseller
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-destructive text-destructive-foreground">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Quick Add Button - Shows on Hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-primary/90 to-primary/70 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
          <Button
            onClick={(e) => {
              e.preventDefault();
              addToCart(book);
            }}
            variant="heroOutline"
            className="w-full"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <Link to={`/book/${book.id}`}>
          <h3 className="font-display text-lg font-semibold leading-tight text-foreground line-clamp-2 hover:text-primary transition-colors">
            {book.title}
          </h3>
        </Link>
        
        <p className="mt-1 text-sm text-muted-foreground">{book.author}</p>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <Star className="h-4 w-4 fill-gold text-gold" />
          <span className="text-sm font-medium">{book.rating}</span>
          <span className="text-xs text-muted-foreground">
            ({book.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto flex items-baseline gap-2 pt-3">
          <span className="text-xl font-bold text-primary">${book.price.toFixed(2)}</span>
          {book.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${book.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default BookCard;
