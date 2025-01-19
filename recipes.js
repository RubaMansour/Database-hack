const { MongoClient } = require('mongodb');

const uri =  "mongodb+srv://rubamansour73:Ruba%40mansour@cluster1.jvvgj.mongodb.net/?retryWrites=true&w=majority";


; 

async function connectToMongoDB() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB Atlas");
   
    const db = client.db('recipesDb');
    const recipesCollection = db.collection('recipe-collection');

    const pancakeRecipe = {
      name: "Pancake",
      category: "Breakfast",
      ingredients: [
        "1 cup flour",
        "1 tbsp sugar",
        "1 tsp baking powder",
        "1/2 tsp salt",
        "1 egg",
        "1 cup milk",
        "2 tbsp melted butter",
        "1 tsp vanilla extract",
        "1 tsp vegetable oil"
      ],
       steps: [
        "Mix dry ingredients in a large bowl.",
        "Whisk wet ingredients in another bowl.",
        "Combine both wet and dry ingredients until smooth.",
        "Heat a non-stick pan with some oil.",
        "Pour batter onto the pan and cook until bubbles form on top.",
        "Flip and cook until golden brown.",
        "Serve with syrup, fruits, or chocolate."
      ]
    }
const result = await recipesCollection.insertOne(pancakeRecipe);
    console.log("Pancake Recipe Added:", result.insertedId);


await client.close();
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}


connectToMongoDB();
