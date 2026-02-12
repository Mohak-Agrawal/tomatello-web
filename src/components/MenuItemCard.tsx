import type { MenuItem } from "../types/menu";

interface MenuItemCardProps {
  item: MenuItem;
  quantity: number;
  onAdd: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  quantity,
  onAdd,
  onIncrease,
  onDecrease,
}) => {
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

      {/* Description + Add to Cart / Quantity Controls */}
      <div className="flex flex-col gap-3">
        <p className="text-xs text-gray-400 italic leading-relaxed">
          {item.description}
        </p>

        {item.isSoldOut ? (
          <button
            type="button"
            disabled
            className="inline-flex items-center justify-center self-start px-4 py-2 text-[10px] tracking-[0.18em] uppercase font-medium rounded-full border flat-button bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
          >
            Sold Out
          </button>
        ) : quantity > 0 ? (
          <div className="inline-flex items-center self-start gap-3">
            <button
              type="button"
              onClick={onDecrease}
              className="w-7 h-7 border border-gray-300 text-xs flat-button hover:bg-gray-100 flex items-center justify-center rounded-full"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="font-semibold text-sm w-6 text-center">
              {quantity}
            </span>
            <button
              type="button"
              onClick={onIncrease}
              className="w-7 h-7 border border-gray-300 text-xs flat-button hover:bg-gray-100 flex items-center justify-center rounded-full"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onAdd}
            className={`
              inline-flex items-center justify-center self-start
              px-4 py-2 text-[10px] tracking-[0.18em] uppercase font-medium
              rounded-full border flat-button transition-all duration-200
              bg-[#9c8978] text-white border-transparent hover:bg-[#8a7766]
            `}
          >
            Add to Cart
          </button>
        )}
      </div>
    </li>
  );
};

export default MenuItemCard;
