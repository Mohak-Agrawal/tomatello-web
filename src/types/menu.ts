import type { MenuItem as BaseMenuItem } from "../data/menuItems";

// Shared MenuItem type used across the app (menu, cards, cart).
// Extends the base menu item definition with optional flags for UI state.
export interface MenuItem extends BaseMenuItem {
  isSignature?: boolean;
  isSoldOut?: boolean;
}

