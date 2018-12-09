const company = {
  name: {
    first: 'Brand',
    second: 'Logo'
  },
  address: {
    street: "123 Main St",
    city: "Oceanside",
    state: "CA",
    zip: "90210"
  },
  phone_number: "(760) 412-2222",
  hours: {
    weekday: {
      open: '9:00',
      close: '9:00'
    },
    weekend: {
      open: '9:00',
      close: '10:00'
    }
  },
  site: {
    nav: {
      nav_option_1: 'Menu',
      nav_option_2: 'Party Platters',
      nav_option_3: 'Locations',
      nav_option_4: 'Rewards',
      nav_option_5: 'reservations'
    },
    header: {
      title: 'Prime Time Restaurant',
    },
    our_story: {
      title: 'Cooking Is The Art Of Adjustment',
      caption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero maiores esse commodi error aliquid distinctio doloribus? Fuga veniam adipisci quidem corporis obcaecati maxime! Quaerat quam nisi accusantium facere cumque.',
      name: 'Thomas Eggsy',
      position: 'Master Chef At Al Restaurant'
    },
    special_menu: {
      title: 'Delicious Flavors Of Autumn'
    }
  }
};

const special_menu = [
  {
    img: '/img/production/special_menu_section/eggs.jpg',
    title: 'Super BBQ Grill No Smoke',
    description: 'Fried eggs, bacon, toast, fresh tomato, salad, cup of coffee or tea',
    price: 25
  },
  {
    img: '/img/production/special_menu_section/chicken-wings.jpg',
    title: 'Queen Of Autumn',
    description: 'Warm chicken wings, portobello mushrooms, fresh mozzarella, cup of coffee or tea',
    price: 42
  },
  {
    img: '/img/production/special_menu_section/fried-chicken.jpg',
    title: 'Royal Fried Chicken',
    description: 'Grilled chicken, roasted red potatoes with rosemary, mushroom sauce, wine',
    price: 30
  },
];

const random_quote_data = [
  {
    author: 'Al roker',
    quote: 'I love cooking for my family and for myself'
  },
  {
    author: 'Johnny b',
    quote: 'Flavors are carefully mixed and combined. Bring me back!'
  }
];

const reviews_data = [
  {
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero maiores esse commodi error aliquid distinctio doloribus? Fuga veniam adipisci quidem corporis obcaecati maxime! Quaerat quam nisi accusantium facere cumque.',
    author: 'Joe Bastianich',
    position: 'Winner master chef 2016'
  },
  {
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero maiores esse commodi error aliquid distinctio doloribus? Fuga veniam adipisci quidem corporis obcaecati maxime!',
    author: 'Michael Smith',
    position: 'The food network'
  },
  {
    review: 'Officiis libero maiores esse commodi error aliquid distinctio doloribus? Fuga veniam adipisci quidem corporis obcaecati maxime! Quaerat quam nisi accusantium facere cumque.',
    author: 'Jacob Ramirez',
    position: 'Chopped'
  },
  {
    review: 'Lorem ipsum, dolor sit obcaecati maxime! Quaerat quam nisi accusantium facere cumque.',
    author: 'Sandra Moreno',
    position: 'Blazzin'
  },
  {
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit obcaecati maxime! Quaerat quam nisi accusantium facere cumque.',
    author: 'Erica Sanchez',
    position: 'Telefood'
  },
];




export const globalState = {
  company,
  special_menu,
  reviews_data,
  random_quote_data,
  review_status: {
    current_review: 3
  }
}
