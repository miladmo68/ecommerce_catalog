
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  if (!cart.length) return <p>Your cart is empty.</p>;

  return (
    <div>
      {cart.map(item => (
        <div key={item._id} className="flex justify-between mb-2">
          <span>{item.name} x{item.qty}</span>
          <span>${item.price * item.qty}</span>
          <button className="btn btn-xs btn-error" onClick={() => removeFromCart(item._id)}>Remove</button>
        </div>
      ))}
      <hr className="my-4"/>
      <h2 className="text-xl font-bold">Total: ${total}</h2>
    </div>
  );
}
