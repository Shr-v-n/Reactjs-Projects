//Contains data about every menu item

const menuData = [
  {
    id: 1,
    name: "Classic Ribeye Steak",
    description: "Grilled ribeye with garlic butter, rosemary, salt, pepper, and olive oil.",
    image: "../src/images/Dish_1.jpg",
    price: "$29.99",
    rating: 4.8,
    time: "20 min",
    type: "Meat"
  },
  {
    id: 2,
    name: "Smoked Brisket",
    description: "Slow-cooked brisket with hickory smoke, BBQ rub, and house sauce.",
    image: "../src/images/Dish_2.jpg",
    price: "$25.49",
    rating: 4.7,
    time: "6 hrs",
    type: "Meat"
  },
  {
    id: 3,
    name: "Filet Mignon",
    description: "Tenderloin medallion seared in butter with thyme and garlic.",
    image: "../src/images/Dish_3.jpg",
    price: "$34.99",
    rating: 4.9,
    time: "25 min",
    type: "Meat"
  },
  {
    id: 4,
    name: "BBQ Ribs",
    description: "Pork ribs slow-cooked, glazed in tangy house BBQ sauce.",
    image: "../src/images/Dish_4.jpg",
    price: "$22.99",
    rating: 4.6,
    time: "4 hrs",
    type: "Meat"
  },
  {
    id: 5,
    name: "New York Strip",
    description: "Char-grilled strip steak with herb crust and butter baste.",
    image: "../src/images/Dish_5.jpg",
    price: "$28.99",
    rating: 4.7,
    time: "18 min",
    type: "Meat"
  },
  {
    id: 6,
    name: "Grilled Lamb Chops",
    description: "Marinated in rosemary, garlic, lemon, and grilled medium-rare.",
    image: "../src/images/Dish_6.jpg",
    price: "$30.49",
    rating: 4.8,
    time: "30 min",
    type: "Meat"
  },
  {
    id: 7,
    name: "Wagyu Skirt Steak",
    description: "Wagyu cut seared with soy glaze, scallions, and sesame.",
    image: "../src/images/Dish_7.jpg",
    price: "$39.99",
    rating: 4.9,
    time: "15 min",
    type: "Meat"
  },
  {
    id: 8,
    name: "Steak Frites",
    description: "Grilled steak with crispy fries and herb compound butter.",
    image: "../src/images/Dish_8.jpg",
    price: "$26.00",
    rating: 4.6,
    time: "25 min",
    type: "Meat"
  },
  {
    id: 9,
    name: "Peppercorn Sirloin",
    description: "Crusted sirloin with brandy peppercorn cream sauce.",
    image: "../src/images/Dish_9.jpg",
    price: "$27.75",
    rating: 4.5,
    time: "22 min",
    type: "Meat"
  },
  {
    id: 10,
    name: "T-Bone Deluxe",
    description: "T-bone steak grilled with smoked paprika and chili rub.",
    image: "../src/images/Dish_10.jpg",
    price: "$32.00",
    rating: 4.7,
    time: "30 min",
    type: "Meat"
  },
  {
    id: 11,
    name: "Grilled Vegetable Platter",
    description: "Seasonal veggies grilled and brushed with olive oil and herbs.",
    image: "../src/images/Dish_11.jpg",
    price: "$16.99",
    rating: 4.5,
    time: "15 min",
    type: "Vegan"
  },
  {
    id: 12,
    name: "Stuffed Bell Peppers",
    description: "Peppers stuffed with quinoa, black beans, corn, and tomato salsa.",
    image: "../src/images/Dish_12.jpg",
    price: "$18.25",
    rating: 4.6,
    time: "35 min",
    type: "Vegan"
  },
  {
    id: 13,
    name: "Mushroom Stroganoff",
    description: "Creamy stroganoff made with mushrooms and vegan sour cream over pasta.",
    image: "../src/images/Dish_13.jpg",
    price: "$17.49",
    rating: 4.7,
    time: "25 min",
    type: "Vegan"
  },
  {
    id: 14,
    name: "Vegan Lentil Loaf",
    description: "Savory lentil and veggie loaf glazed with tomato-balsamic reduction.",
    image: "../src/images/Dish_14.jpg",
    price: "$19.00",
    rating: 4.6,
    time: "40 min",
    type: "Vegan"
  },
  {
    id: 15,
    name: "Eggplant Parmesan",
    description: "Baked eggplant slices layered with marinara and vegan cheese.",
    image: "../src/images/Dish_15.jpg",
    price: "$21.50",
    rating: 4.8,
    time: "30 min",
    type: "Vegan"
  },
  {
    id: 16,
    name: "Tofu Teriyaki Bowl",
    description: "Grilled tofu with teriyaki glaze, served over rice with steamed veggies.",
    image: "../src/images/Dish_16.jpg",
    price: "$16.50",
    rating: 4.4,
    time: "20 min",
    type: "Vegan"
  },
  {
    id: 17,
    name: "Vegan Burger Deluxe",
    description: "Plant-based patty with lettuce, tomato, vegan cheese, and brioche bun.",
    image: "../src/images/Dish_17.jpg",
    price: "$15.99",
    rating: 4.5,
    time: "15 min",
    type: "Vegan"
  },
  {
    id: 18,
    name: "Zucchini Noodles Primavera",
    description: "Zoodles tossed with garlic, cherry tomatoes, spinach, and basil pesto.",
    image: "../src/images/Dish_18.jpg",
    price: "$17.25",
    rating: 4.6,
    time: "18 min",
    type: "Vegan"
  },
  {
    id: 19,
    name: "Chickpea Shawarma Wrap",
    description: "Spiced chickpeas, tahini, cucumber, and pickled onions in a warm wrap.",
    image: "../src/images/Dish_19.jpg",
    price: "$14.75",
    rating: 4.5,
    time: "12 min",
    type: "Vegan"
  },
  {
    id: 20,
    name: "Cauliflower Steak",
    description: "Thick-cut cauliflower grilled with chimichurri and smoked paprika.",
    image: "../src/images/Dish_20.jpg",
    price: "$18.00",
    rating: 4.7,
    time: "22 min",
    type: "Vegan"
  }
];

export default menuData;
