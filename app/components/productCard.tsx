import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Product } from '../models/product';

export default function ProductCard({ product, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={{ margin: 8 }}>
      <Image
        source={{ uri: product.image }}
        style={{ width: '100%', height: 120 }}
      />
      <Text numberOfLines={2}>{product.title}</Text>
      <Text style={{ color: 'red' }}>
        ${product.price}
      </Text>
    </TouchableOpacity>
  );
}
