export interface IProducts {
  id: number;
  title: string;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images?: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail?: string;
}
