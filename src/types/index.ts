export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  tag?: string;
  tagColor?: string;
  badge?: string;
  harvest?: string;
  price: number;
  originalPrice?: number;
  netWeight: string;
  servings: string;
  terroir: string;
  milling: string;
  origin: string;
  grade: string;
  ingredients: string;
  description: string;
  longDescription: string[];
  tasteProfile: {
    umami: number; // percentage
    creaminess: number;
    astringency: number;
  };
  features: string[];
  preparationBenchmark: string;
  storage: string;
  image: string;
  images: string[];
  inStock: boolean;
  category: 'powder' | 'sets' | 'reserves' | 'ceremonial' | string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOption?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'basics' | 'preparation' | 'storage' | 'sourcing';
}

export interface OrderDetails {
  orderNumber: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  subtotal: number;
  shipping: number;
  total: number;
  items: CartItem[];
  createdAt: string;
}
