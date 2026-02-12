import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

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
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [couponError, setCouponError] = useState("");

  // Available coupons and their discount rates
  const COUPONS: Record<string, { label: string; rate: number }> = {
    TOMA10: { label: "10% off your order", rate: 0.1 },
    TOMA15: { label: "15% off your order", rate: 0.15 },
    TOMA5: { label: "5% off your order", rate: 0.05 },
  };

  // Calculate totals
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const activeCoupon = appliedCoupon.trim()
    ? COUPONS[appliedCoupon.trim()]
    : undefined;
  const hasCoupon = !!activeCoupon;
  const discountRate = activeCoupon?.rate ?? 0;
  const discount = subtotal * discountRate;
  const total = Math.max(0, subtotal - discount);

  const CartItemRow: React.FC<{ item: CartItem }> = ({ item }) => (
    <div className="flex justify-between items-center py-6 border-b border-neutral-200">
      <div className="flex-1">
        <p className="text-sm text-neutral-800 font-light">{item.name}</p>
        <p className="text-xs text-neutral-500 mt-1">
          ₹{item.price.toFixed(2)}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center border border-neutral-300 px-2 py-1">
          <button
            onClick={() => updateQuantity(item.id, -1)}
            className="px-2 text-neutral-500 hover:opacity-70"
          >
            −
          </button>

          <span className="w-6 text-center text-sm">{item.quantity}</span>

          <button
            onClick={() => updateQuantity(item.id, 1)}
            className="px-2 text-neutral-500 hover:opacity-70"
          >
            +
          </button>
        </div>

        <span className="text-sm text-neutral-700">
          ₹{(item.price * item.quantity).toFixed(2)}
        </span>

        <button
          onClick={() => removeFromCart(item.id)}
          className="text-neutral-400 hover:opacity-60"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6 18L18 6M6 6l12 12"
            />
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
        <div className="px-8 py-6 border-b border-neutral-200 flex justify-between items-center">
          <h2 className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            Your Order
          </h2>

          <button
            onClick={toggleCart}
            className="text-neutral-400 hover:opacity-70 transition-opacity"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12"
              />
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

        {/* Coupon + Summary and Checkout */}
        <div className="absolute bottom-0 w-full px-8 py-8 border-t border-neutral-200 bg-[#f5f3ee]">
          {/* Coupon Section */}
          <div className="mb-4">
            <label className="block text-[11px] uppercase tracking-[0.2em] text-neutral-600 mb-1">
              Have a coupon?
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
                className="flex-1 border border-neutral-300 rounded-full px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#9c8978] bg-white"
              />
              <button
                type="button"
                onClick={() => {
                  if (hasCoupon) {
                    // Remove currently applied coupon
                    setAppliedCoupon("");
                    setCouponCode("");
                    setCouponError("");
                    return;
                  }

                  const code = couponCode.trim().toUpperCase();
                  if (!code) return;

                  const config = COUPONS[code];
                  if (!config) {
                    setAppliedCoupon("");
                    setCouponError(
                      "Invalid coupon code. Try TOMA10, TOMA15, or TOMA5.",
                    );
                    return;
                  }

                  setAppliedCoupon(code);
                  setCouponError("");
                }}
                className="px-4 py-2 text-[11px] uppercase tracking-[0.18em] border border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors rounded-full disabled:opacity-40"
                disabled={!hasCoupon && !couponCode.trim()}
              >
                {hasCoupon ? "Remove" : "Apply"}
              </button>
            </div>
            <p className="mt-1 text-[10px] text-neutral-500">
              Discount is calculated and shown below after applying your code.
            </p>
            {hasCoupon && activeCoupon && (
              <div className="mt-1 text-[10px] text-green-700">
                Applied: {appliedCoupon} – {activeCoupon.label}
              </div>
            )}
            {couponError && (
              <p className="mt-1 text-[10px] text-red-500">{couponError}</p>
            )}
          </div>

          <div className="space-y-3 text-sm text-neutral-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            {hasCoupon && (
              <div className="flex justify-between text-green-700">
                <span>Discount ({Math.round(discountRate * 100)}%)</span>
                <span>-₹{discount.toFixed(2)}</span>
              </div>
            )}

            <div className="flex justify-between pt-4 border-t border-neutral-300 text-base">
              <span className="uppercase tracking-wide">Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          <button
            disabled={cart.length === 0}
            onClick={() => {
              if (cart.length === 0) return;

              const lines = cart.map(
                (item) =>
                  `${item.quantity} x ${item.name} - ₹${(
                    item.price * item.quantity
                  ).toFixed(2)}`,
              );

              const summaryLines = [
                "Hello Tomatello, I'd like to place an order:",
                "",
                ...lines,
                "",
                `Subtotal: ₹${subtotal.toFixed(2)}`,
                ...(hasCoupon
                  ? [
                      `Discount (${Math.round(
                        discountRate * 100,
                      )}%): -₹${discount.toFixed(2)}`,
                    ]
                  : []),
                `Total: ₹${total.toFixed(2)}`,
              ];

              if (hasCoupon) {
                summaryLines.push("", `Coupon code: ${appliedCoupon.trim()}`);
              }

              summaryLines.push(
                "",
                "Please confirm availability and pickup time.",
              );

              const message = summaryLines.join("\n");
              const url = `https://wa.me/918076823024?text=${encodeURIComponent(
                message,
              )}`;

              window.open(url, "_blank");
            }}
            className="
    mt-8 w-full border border-neutral-800 text-neutral-800
    py-3 uppercase tracking-[0.3em] text-xs
    hover:bg-neutral-800 hover:text-white
    transition-all duration-300
    disabled:opacity-40
  "
          >
            Order Now
          </button>

          <p className="text-[11px] text-neutral-500 text-center mt-4">
            You’ll be redirected to WhatsApp to confirm your order.
          </p>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
