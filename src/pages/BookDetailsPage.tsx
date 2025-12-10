import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Heart,
  Share2,
  BookOpen,
  Calendar,
  Building,
  FileText,
  Globe,
  Check,
  X,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getBookById, getBooksByCategory } from '@/data/books';
import { useCart } from '@/context/CartContext';
import BookGrid from '@/components/books/BookGrid';

const BookDetailsPage: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const book = bookId ? getBookById(bookId) : undefined;
  const { addToCart } = useCart();

  if (!book) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold">Book not found</h1>
          <Link to="/books">
            <Button className="mt-4">Browse Books</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedBooks = getBooksByCategory(book.category)
    .filter(b => b.id !== book.id)
    .slice(0, 4);

  const discount = book.originalPrice
    ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)
    : 0;

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Breadcrumb */}
        <Link
          to="/books"
          className="mb-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Books
        </Link>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Book Image */}
          <div className="relative">
            <div className="sticky top-24 overflow-hidden rounded-2xl bg-card shadow-card">
              <img
                src={book.image}
                alt={`Cover of ${book.title}`}
                className="w-full object-cover"
              />
              {/* Badges */}
              <div className="absolute left-4 top-4 flex flex-col gap-2">
                {book.bestseller && (
                  <Badge className="bg-gold text-gold-foreground shadow-gold">
                    Bestseller
                  </Badge>
                )}
                {discount > 0 && (
                  <Badge className="bg-destructive text-destructive-foreground">
                    -{discount}% OFF
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            <div>
              <h1 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl animate-fade-up">
                {book.title}
              </h1>
              <p className="mt-2 text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: '0.1s' }}>
                by <span className="text-foreground font-medium">{book.author}</span>
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(book.rating)
                        ? 'fill-gold text-gold'
                        : 'text-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold">{book.rating}</span>
              <span className="text-muted-foreground">
                ({book.reviewCount.toLocaleString()} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <span className="text-4xl font-bold text-primary">
                ${book.price.toFixed(2)}
              </span>
              {book.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${book.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {book.inStock ? (
                <>
                  <Check className="h-5 w-5 text-accent" />
                  <span className="font-medium text-accent">In Stock</span>
                </>
              ) : (
                <>
                  <X className="h-5 w-5 text-destructive" />
                  <span className="font-medium text-destructive">Out of Stock</span>
                </>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <Button
                size="lg"
                variant="gold"
                onClick={() => addToCart(book)}
                disabled={!book.inStock}
                className="flex-1 sm:flex-none btn-shine"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="mr-2 h-5 w-5" />
                Wishlist
              </Button>
              <Button size="icon" variant="ghost" className="h-12 w-12">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <Separator />

            {/* Description */}
            <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="font-display text-xl font-semibold mb-3">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{book.description}</p>
            </div>

            <Separator />

            {/* Book Details */}
            <div className="grid gap-4 sm:grid-cols-2 animate-fade-up" style={{ animationDelay: '0.7s' }}>
              {book.pages && (
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Pages</p>
                    <p className="font-medium">{book.pages}</p>
                  </div>
                </div>
              )}
              {book.publisher && (
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Publisher</p>
                    <p className="font-medium">{book.publisher}</p>
                  </div>
                </div>
              )}
              {book.publishDate && (
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Published</p>
                    <p className="font-medium">{book.publishDate}</p>
                  </div>
                </div>
              )}
              {book.isbn && (
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">ISBN</p>
                    <p className="font-medium">{book.isbn}</p>
                  </div>
                </div>
              )}
              {book.language && (
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Language</p>
                    <p className="font-medium">{book.language}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <section className="mt-16 md:mt-24">
            <h2 className="font-display text-2xl font-bold md:text-3xl mb-8">
              You May Also Like
            </h2>
            <BookGrid books={relatedBooks} />
          </section>
        )}
      </div>
    </Layout>
  );
};

export default BookDetailsPage;
