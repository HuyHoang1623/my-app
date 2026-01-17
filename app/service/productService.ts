import { Product } from '../models/Product';

const API_URL = 'https://fakestoreapi.com/products';

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}
