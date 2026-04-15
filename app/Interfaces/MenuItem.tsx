
export interface MenuItem {
    name: string;
    about: string;
    price: number;
    imageName: string;
};

export const menuItems: MenuItem[] = [
   { 
      name: "Naan Burger",
      about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: 1.85,
      imageName: "Naan_Burger",
   },
   { 
      name: "Butter Chicken Taco",
      about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: 1.15,
      imageName: "Butter_Chicken_Taco",
   },
   { 
      name: "Chicken Burger",
      about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: 2.00,
      imageName: "Chicken_Burger",
   },
   { 
      name: "Cheese Chicken Naan",
      about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: 2.50,
      imageName: "Cheese_Chicken_Naan",
   },
   { 
      name: "3 Layer Burger",
      about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: 4.99,
      imageName: "3Layer_Burger",
   },
   { 
      name: "Sandwich",
      about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: 2.80,
      imageName: "Sandwich",
   },
];
