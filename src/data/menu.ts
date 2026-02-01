export type MenuItem = {
  name: string;
  price: number;
};

export const weeklyMenu: Record<string, MenuItem[]> = {
  Monday: [
    { name: "Chicken Rice", price: 120 },
    { name: "Veg Thali", price: 90 },
  ],
  Tuesday: [
    { name: "Egg Roll", price: 70 },
  ],
  Wednesday: [
    { name: "Chicken Biryani", price: 150 },
  ],
  Thursday: [
    { name: "Veg Fried Rice", price: 100 },
  ],
  Friday: [
    { name: "Chicken Noodles", price: 130 },
  ],
  Saturday: [
    { name: "Special Combo", price: 180 },
  ],
};

export const drinks: MenuItem[] = [
  { name: "Lime Soda", price: 30 },
  { name: "Water Bottle", price: 20 },
];
