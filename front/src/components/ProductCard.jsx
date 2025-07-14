
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="card bg-base-100 shadow p-4">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-sm text-gray-500">${product.price}</p>
      <button className="btn btn-primary btn-sm mt-2" onClick={() => addToCart(product)}>
        Add to cart
      </button>
    </div>
  );
}
