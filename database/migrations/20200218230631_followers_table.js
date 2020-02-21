
exports.up = function(knex) {
    return knex.schema.createTable('followers', tbl => {
        tbl.increments();
        tbl.integer('follower_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
            
        tbl.integer('user_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')

        tbl.boolean('block')
            .notNullable()
            .defaultTo(false)
            
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('followers');
};
