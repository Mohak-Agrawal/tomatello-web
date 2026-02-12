interface MenuItemCardProps {
  item: MenuItem;
  addToCart: (item: MenuItem) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <li
      className={`
        group flex flex-col gap-4 py-10
        
        ${item.isSoldOut ? "opacity-60" : ""}
      `}
    >
      {/* Image */}
      <div className="w-full aspect-[5/4] overflow-hidden rounded-sm">
        <img
          src={item.imageUrl}
          alt={item.name}
          loading="lazy"
          className="
            w-full h-full object-cover
            transition-transform duration-700 ease-out rounded-md
            group-hover:scale-[1.03]
          "
        />
      </div>

      {/* Title + Price */}
      <div className="flex justify-between items-center">
        <h3
          className={`
            text-sm tracking-wide
            ${item.isSoldOut ? "text-gray-400" : "text-[#252525]"}
          `}
        >
          {item.name}
        </h3>

        <span
          className={`
            text-xs tracking-wide
            ${item.isSoldOut ? "text-gray-400" : "text-gray-500"}
          `}
        >
          {item.price}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-400 italic leading-relaxed">
        {item.description}
      </p>

      {/* 
      <button
        onClick={() => addToCart(item)}
      >
        Add to Cart
      </button>
      */}
    </li>
  );
};

export default MenuItemCard;
