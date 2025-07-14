
import { useEffect, useState } from 'react';
import { fetchProducts } from '../utils/api';
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map(p => <ProductCard key={p._id} product={p} />)}
    </div>
  );
}
