export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  description: string;
  isbn?: string;
  publisher?: string;
  publishDate?: string;
  pages?: number;
  language?: string;
  inStock: boolean;
  featured?: boolean;
  bestseller?: boolean;
}

export interface CartItem {
  book: Book;
  quantity: number;
}

export type Category = 
  | 'romance'
  | 'action'
  | 'fiction'
  | 'mystery'
  | 'fantasy'
  | 'academic'
  | 'children';

export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  icon: string;
  color: string;
}
