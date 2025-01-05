 import { createConnection } from 'mysql2/promise';
 

 const connection = await createConnection({
   host: 'localhost',
   user: 'hyfuser',
   password: 'hyfpassword',
 });
 

const create_database_query = `CREATE DATABASE IF NOT EXISTS recipes`;
  const use_database_query = `USE recipes`;

 
  const create_recipe_query = `
    CREATE TABLE IF NOT EXISTS recipe (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
  `;

const create_category_query = `
    CREATE TABLE IF NOT EXISTS category (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
  `;

const create_recipe_category_query = `
    CREATE TABLE IF NOT EXISTS recipe_category (
      recipe_id INT,
      category_id INT,
      PRIMARY KEY (recipe_id, category_id),
      FOREIGN KEY (recipe_id) REFERENCES recipe(id) ON DELETE CASCADE,
      FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE
    )
  `;
const create_ingredient_query = `
    CREATE TABLE IF NOT EXISTS ingredient (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
  `;
const create_recipe_ingredient_query = `
    CREATE TABLE IF NOT EXISTS recipe_ingredient (
      recipe_id INT,
      ingredient_id INT,
      PRIMARY KEY (recipe_id, ingredient_id),
      FOREIGN KEY (recipe_id) REFERENCES recipe(id) ON DELETE CASCADE,
      FOREIGN KEY (ingredient_id) REFERENCES ingredient(id) ON DELETE CASCADE
    )
  `;

const create_step_query = `
    CREATE TABLE IF NOT EXISTS step (
      id INT AUTO_INCREMENT PRIMARY KEY,
  recipe_id INT,
  step_number INT,
  description TEXT,
  FOREIGN KEY (recipe_id) REFERENCES recipe(id)
    )
  `;

await connection.query(create_database_query);
await connection.query(use_database_query);
    await connection.query(create_recipe_query);
    await connection.query(create_category_query);
    await connection.query(create_recipe_category_query);
    await connection.query(create_ingredient_query);
    await connection.query(create_recipe_ingredient_query);
    await connection.query(create_step_query);

const insert_recipe_query = `
      INSERT INTO recipe (name) VALUES
      ('No-Bake Cheesecake'),
      ('Roasted Brussels Sprouts'),
      ('Mac & Cheese'),
      ('Tamagoyaki Japanese Omelette')
    `;
    await connection.query(insert_recipe_query);
    console.log("Recipes inserted successfully!");

const insert_category_query = `
      INSERT INTO category (name) VALUES
      ('Cake'),
      ('No-Bake'),
      ('Vegetarian'),
      ('Vegan'),
      ('Gluten-Free'),
      ('Japanese')
    `;
    await connection.query(insert_category_query);
    console.log("Categories inserted successfully!");

const insert_recipe_category_query = `
      INSERT INTO recipe_category (recipe_id, category_id) VALUES
      (1, 1), (1, 2), (1, 3), 
      (2, 4), (2, 5),           
      (3, 3),                   
      (4, 3), (4, 6) ` ;
    await connection.query(insert_recipe_category_query);
    console.log("Recipe-Category relationships inserted successfully!");

const insert_ingredient_query = `
      INSERT INTO ingredient (name) VALUES
      ('Condensed milk'),
      ('Cream Cheese'),
      ('Lemon Juice'),
      ('Pie Crust'),
      ('Cherry Jam'),
      ('Brussels Sprouts'),
      ('Lemon juice'),
      ('Sesame seeds'),
      ('Pepper'),
      ('Salt'),
      ('Olive oil'),
      ('Macaroni'),
      ('Butter'),
      ('Flour'),
      ('Shredded Cheddar cheese'),
      ('Eggs'),
      ('Soy sauce'),
      ('Sugar')
    `;

    await connection.query(insert_ingredient_query);
    console.log("Ingredients inserted successfully!");

const insert_recipe_ingredient_query =
 `
INSERT INTO recipe_ingredient (recipe_id, ingredient_id) VALUES


(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(2, 11),
(3, 12),
(3, 13),
(3, 14),
(3, 9),
(3, 10),
(3, 15),
(3, 16),
(4, 17) ,
(4, 18),
(4, 9),
(4, 16)
 `;

 await connection.query(insert_recipe_ingredient_query);
 console.log("Recipe-Ingredient relationships inserted successfully!");


const insert_step_query=`
INSERT INTO step (recipe_id, step_number, description) VALUES
(1, 1, 'Beat Cream Cheese'),
(1, 2, 'Add condensed Milk and blend'),
(1, 3, 'Add Lemon Juice and blend'),
(1, 4, 'Add the mix to the pie crust'),
(1, 5, 'Spread the Cherry Jam'),
(1, 6, 'Place in refrigerator for 3h'),
(2, 1, 'Preheat the oven'),
(2, 2, 'Mix the ingredients in a bowl'),
(2, 3, 'Spread the mix on baking sheet'),
(2, 4, 'Bake for 30'),
(3, 1, 'Cook Macaroni for 8'),
(3, 2, 'Melt butter in a saucepan'),
(3, 3, 'Add flour, salt, pepper and mix'),
(3, 4, 'Add Milk and mix'),
(3, 5, 'Cook until mix is smooth'),
(3, 6, 'Add cheddar cheese'),
(3, 7, 'Add the macaroni'),
(4, 1, 'Beat the eggs'),
(4, 2, 'Add soya sauce, sugar and salt'),
(4, 3, 'Add oil to a sauce pan'),
(4, 4, 'Bring to medium heat'),
(4, 5, 'Add some mix to the sauce pan'),
(4, 6, 'Let it cook for 1'),
(4, 7, 'Add oil to a sauce pan'),
(4, 8, 'Add some mix to the sauce pan'),
(4, 9, 'Let it cook for 1'),
(4, 10, 'Remove pan from fire')`;


await connection.query(insert_step_query);
 console.log("step insert");
 connection.end();


