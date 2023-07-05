import { Food } from './app/shared/models/food';

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Pizza Pepperoni',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    region: ['italy'],
    stars: 4.5,
    imageUrl: 'assets/food-1.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id: '2',
    name: 'Meatball',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    region: ['persia', 'middle east', 'chinaching'],
    stars: 4.7,
    imageUrl: 'assets/food-2.jpg',
    tags: ['SlowFood', 'Lunch'],
  },
  {
    id: '3',
    name: 'Burger Deluxe',
    cookTime: '15-25',
    price: 15,
    favorite: true,
    region: ['america'],
    stars: 4.8,
    imageUrl: 'assets/food-3.jpg',
    tags: ['FastFood', 'Burger', 'Dinner'],
  },
  {
    id: '4',
    name: 'Sushi Rolls',
    cookTime: '30-45',
    price: 25,
    favorite: false,
    region: ['japan'],
    stars: 4.6,
    imageUrl: 'assets/food-4.jpg',
    tags: ['Seafood', 'Japanese', 'Dinner'],
  },
  {
    id: '5',
    name: 'Pasta Carbonara',
    cookTime: '20-30',
    price: 18,
    favorite: true,
    region: ['italy'],
    stars: 4.9,
    imageUrl: 'assets/food-5.jpg',
    tags: ['Italian', 'Pasta', 'Dinner'],
  },
  {
    id: '6',
    name: 'Chicken Shawarma',
    cookTime: '40-50',
    price: 12,
    favorite: false,
    region: ['middle east'],
    stars: 4.7,
    imageUrl: 'assets/food-6.jpg',
    tags: ['Middle Eastern', 'Street Food', 'Lunch'],
  },
  {
    id: '7',
    name: 'Steak Au Poivre',
    cookTime: '25-35',
    price: 30,
    favorite: true,
    region: ['france'],
    stars: 4.8,
    imageUrl: 'assets/food-7.jpg',
    tags: ['French', 'Dinner'],
  },
  {
    id: '8',
    name: 'Tacos al Pastor',
    cookTime: '35-45',
    price: 10,
    favorite: false,
    region: ['mexico'],
    stars: 4.6,
    imageUrl: 'assets/food-8.jpg',
    tags: ['Mexican', 'Street Food', 'Dinner'],
  },
];