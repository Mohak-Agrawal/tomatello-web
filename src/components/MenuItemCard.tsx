interface MenuItemCardProps {
  item: MenuItem;
  addToCart: (item: MenuItem) => void;
}

// FLAT DESIGN: Simple border-separated list items instead of boxy cards
const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, addToCart }) => {
  return (
    <li
      className={`
        group flex flex-col sm:flex-row items-center sm:items-start justify-between
        gap-6 p-6 rounded-lg 
        transition-all duration-200
        ${item.isSoldOut ? "opacity-70" : "hover:bg-gray-50/50"}
      `}
    >
      {/* Image */}
      <img
        src={item.imageUrl}
        alt={item.name}
        loading="lazy"
        className="
          w-24 h-24 object-cover rounded-md 
          shadow-sm group-hover:scale-[1.03] transition-transform duration-200
        "
      />

      {/* Text Section */}
      <div className="flex flex-col flex-1 gap-2 text-center sm:text-left">
        <h3
          className={`text-sm font-semibold tracking-wide uppercase
            ${item.isSoldOut ? "text-gray-500" : "text-gray-900"}
          `}
        >
          {item.name}
        </h3>

        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
          {item.description}
        </p>

        <span className="text-xs font-medium uppercase text-gray-400 tracking-widest">
          {item.category}
          {item.isSignature && (
            <span className="text-yellow-600 font-bold"> · Signature</span>
          )}
        </span>
      </div>

      {/* Price & Button */}
      <div className="flex flex-col items-end justify-center sm:w-32 mt-2 sm:mt-0">
        <span
          className={`text-lg font-bold mb-2
            ${item.isSoldOut ? "text-gray-500" : "text-yellow-500"}
          `}
        >
          ₹{item.price}
        </span>

        {item.isSoldOut ? (
          <span className="text-xs font-semibold text-red-600 bg-red-100 px-2 py-1 rounded">
            SOLD OUT
          </span>
        ) : (
          <button
            onClick={() => addToCart(item)}
            className="
              bg-yellow-400 text-gray-900 font-mono text-xs font-semibold
              w-full py-2 rounded-md uppercase tracking-wide
              hover:bg-yellow-300 transition-all duration-200
            "
          >
            Add to Cart
          </button>
        )}
      </div>
    </li>
  );
};

export default MenuItemCard;
