
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import { useState } from 'react';

export default function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="container mx-auto p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">🛒 E‑Commerce Catalog</h1>
        <button className="btn btn-secondary" onClick={() => setShowCart(!showCart)}>
          {showCart ? 'Back to Products' : 'View Cart'}
        </button>
      </header>
      {showCart ? <CartPage /> : <ProductsPage />}
    </div>
  );
}
