const knex = require('knex');
const config = require('../knexfile').development
const db = knex(config)
module.exports = {
  getRecipes(){
    return db("recipes")
  },
  getShoppingList(recipe_id){
    return db("ingredientList").where({RecipeID: recipe_id}).first()
  },
  getInstructions(recipe_id){
    return db("steps").where({RecipeID: recipe_id}).first()
  }
}