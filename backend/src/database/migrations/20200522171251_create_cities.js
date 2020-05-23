

exports.up = function(knex) {
    return knex.schema.createTable('cities', function (table){
        table.increments();
        table.string('city').notNullable();
        table.string('country', 2).notNullable();
        table.integer('temperature').notNullable();
        table.integer('humidity').notNullable();
        table.integer('description').notNullable();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cities');
};
