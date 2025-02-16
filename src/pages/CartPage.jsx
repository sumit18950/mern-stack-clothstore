import { useCart } from '../context/CartContext';
import { TrashIcon } from '@heroicons/react/24/outline';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <button
          onClick={clearCart}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
      </div>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between border p-4 rounded">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
            <div className="flex-1 ml-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">Rs.{item.price}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right">
        <p className="text-2xl font-bold">Total: Rs.{total.toFixed(2)}</p>
        <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Checkout
        </button>
      </div>
    </div>
  );
}