exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl
        .text('Name')
        .unique()
        .notNullable();
    })
    .createTable('ingredientList', tbl => {
      tbl.increments();
      tbl
        .integer('RecipeID')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
      tbl
        .integer('IngredientID')
        .unsigned()
        .references('id')
        .inTable('ingredients');
      tbl.decimal('Quantity');
    })
    .createTable('steps', tbl => {
      tbl.increments();
      tbl
        .integer('RecipeID')
        .notNullable()
        .references('id')
        .inTable('recipes');
      tbl.integer('StepNumber').notNullable();
      tbl.text('Directions').notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl
        .text('Name')
        .unique()
        .notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredientList')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
