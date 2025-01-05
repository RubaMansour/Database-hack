import { createConnection } from 'mysql2/promise';

const connection = await createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
});

const use_database_query = `USE recipes`;
await connection.query(use_database_query);


const query_vegetarian_with_potatoes = `
  SELECT r.name AS recipe_name
  FROM recipe r
  JOIN recipe_category rc ON r.id = rc.recipe_id
  JOIN category c ON rc.category_id = c.id
  JOIN recipe_ingredient ri ON r.id = ri.recipe_id
  JOIN ingredient i ON ri.ingredient_id = i.id
  WHERE c.name = 'Vegetarian' AND i.name = 'Potato'
`;
const vegetarianWithPotatoes = await connection.query(query_vegetarian_with_potatoes);
console.log("Vegetarian recipes with potatoes:", vegetarianWithPotatoes[0]);


const query_cakes_no_bake = `
  SELECT r.name AS recipe_name
  FROM recipe r
  JOIN recipe_category rc ON r.id = rc.recipe_id
  JOIN category c ON rc.category_id = c.id
  WHERE c.name = 'Cake' AND r.name LIKE '%No-Bake%'
`;
const cakesNoBake = await connection.query(query_cakes_no_bake);
console.log("Cakes that do not need baking:", cakesNoBake[0]);


const query_vegan_japanese = `
  SELECT r.name AS recipe_name
  FROM recipe r
  JOIN recipe_category rc ON r.id = rc.recipe_id
  JOIN category c ON rc.category_id = c.id
  WHERE (c.name = 'Vegan' OR c.name = 'Japanese')
`;
const veganJapaneseRecipes = await connection.query(query_vegan_japanese);
console.log("Vegan and Japanese recipes:", veganJapaneseRecipes[0]);

connection.end();
