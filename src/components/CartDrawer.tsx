interface CartDrawerProps {
  cart: CartItem[];
  isCartOpen: boolean;
  toggleCart: () => void;
  updateQuantity: (itemId: number, change: 1 | -1) => void;
  removeFromCart: (itemId: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  cart,
  isCartOpen,
  toggleCart,
  updateQuantity,
  removeFromCart,
}) => {
  // Calculate total cost
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const taxRate = 0.1; // 10% tax
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const CartItemRow: React.FC<{ item: CartItem }> = ({ item }) => (
    <div className="flex justify-between items-center py-4 border-b border-gray-200">
      <div className="flex flex-col flex-grow">
        <p className="font-medium text-sm text-[#252525]">{item.name}</p>
        <p className="text-xs text-gray-600">₹{item.price.toFixed(2)} ea.</p>
      </div>

      <div className="flex items-center space-x-2">
        {/* Decrease Quantity */}
        <button
          onClick={() => updateQuantity(item.id, -1)}
          className="w-6 h-6 border border-gray-300 text-xs flat-button hover:bg-gray-100"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="font-semibold text-sm w-4 text-center">
          {item.quantity}
        </span>
        {/* Increase Quantity */}
        <button
          onClick={() => updateQuantity(item.id, 1)}
          className="w-6 h-6 border border-gray-300 text-xs flat-button hover:bg-gray-100"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <div className="flex items-center space-x-4 pl-4">
        <span className="font-bold text-sm text-[#9c8978]">
          ₹{(item.price * item.quantity).toFixed(2)}
        </span>
        {/* Remove Item */}
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-gray-400 hover:text-red-500 transition-colors duration-200"
          aria-label="Remove item"
        >
          {/* SVG for close/remove */}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Backdrop Overlay (Flat) */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleCart}
        aria-hidden={!isCartOpen}
      />

      {/* Drawer Container (Flat) */}
      <div
        className={`fixed top-0 right-0 h-full      w-full sm:w-[440px] md:w-[480px]  bg-[#f7f2e9] shadow-2xl z-50 
                      transform transition-transform duration-500 ease-in-out border-l-4 border-[#9c8978]
                      ${isCartOpen ? "translate-x-0" : "translate-x-full"}
                  `}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart"
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-gray-300 flex justify-between items-center bg-white">
          <h2 className="text-xl font-bold uppercase tracking-widest text-[#252525]">
            Your Order
          </h2>
          <button
            onClick={toggleCart}
            className="text-gray-500 hover:text-[#9c8978] transition-colors duration-200 p-1"
            aria-label="Close cart"
          >
            {/* SVG for close */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Cart Items List */}
        <div className="p-6 h-[calc(100%-18rem)] overflow-y-auto">
          {cart.length === 0 ? (
            <div className="text-center py-10 text-gray-500 italic">
              <p>Your cart is empty.</p>
              <p>Add some delicious Italian food!</p>
            </div>
          ) : (
            <div>
              {cart.map((item) => (
                <CartItemRow key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Summary and Checkout */}
        <div className="absolute bottom-0 w-full p-6 border-t border-gray-300 bg-white">
          <div className="flex justify-between text-base py-1">
            <span className="font-light">Subtotal:</span>
            <span className="font-medium">₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-base py-1">
            <span className="font-light">Tax (10%):</span>
            <span className="font-medium">₹{tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl font-bold border-t-2 border-[#9c8978] pt-3 mt-3">
            <span className="uppercase tracking-wider">Total:</span>
            <span className="text-[#9c8978]">₹{total.toFixed(2)}</span>
          </div>

          <button
            onClick={() => {
              console.log("Proceeding to Checkout with Cart:", cart);
              alert("Pretending to go to checkout...");
            }}
            disabled={cart.length === 0}
            className="
                              flat-button font-mono text-base font-bold mt-6
                              bg-[#252525] text-white 
                              py-4 px-8 uppercase tracking-wider w-full
                              border-2 border-transparent hover:border-[#9c8978] transition-all duration-200
                              disabled:bg-gray-400 disabled:cursor-not-allowed
                          "
          >
            Proceed to Checkout
          </button>

          <p className="text-xs text-center text-gray-500 mt-2">
            *All orders are for pickup only.
          </p>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
