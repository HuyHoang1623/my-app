import { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../app/services/productService';
import { Product } from '../app/models/Product';

export default function HomeScreen({ navigation }: any) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCard
          product={item}
          onPress={() =>
            navigation.navigate('ProductDetail', { product: item })
          }
        />
      )}
    />
  );
}
