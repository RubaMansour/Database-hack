CREATE TABLE Category (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(255)
);

CREATE TABLE Ingredient (
    Ingredient_id INT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE Dish (
    dish_id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Unit (
    Unit_id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Recipes (
    recipe_id  INT PRIMARY KEY,
    recipe_name VARCHAR(255) NOT NULL,
    category_id INT,
    dish_id INT,
    FOREIGN KEY (category_id) REFERENCES Category(category_id),
    FOREIGN KEY (dish_id) REFERENCES Dish(dish_id),
    description TEXT, 
    img_url TEXT
     
);
CREATE TABLE Recipe_steps (
    steps_id INT PRIMARY KEY,
    recipe_id INT,
    instruction TEXT,
    prep_time INT,
    cook_time INT,
    FOREIGN KEY (recipe_id) REFERENCES Recipe(recipe_id)
);


CREATE TABLE RecipeIngredient (
    RecipeIngredient_id INT PRIMARY KEY,
    recipe_id INT,
    Unit_id INT,
    FOREIGN KEY (recipe_id) REFERENCES Recipe(recipe_id),
    FOREIGN KEY (Unit_id) REFERENCES Unit(Unit_id),
    amount_required VARCHAR(255) NOT NULL
);
