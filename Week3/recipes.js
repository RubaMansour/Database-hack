
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
     step_id INT AUTO_INCREMENT PRIMARY KEY,
  step_number INT,
  description TEXT,
  FOREIGN KEY (recipe_id) REFERENCES recipe(id)
    )
  `;

const create_recipe_step_query = `
    CREATE TABLE IF NOT EXISTS recipe_step (
    step_id INT ,
    (recipe_id) INT,
    FOREIGN KEY (step_id) REFERENCES step(id)
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
    await connection.query(create_recipe_step_query);
