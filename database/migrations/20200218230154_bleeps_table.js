
exports.up = function(knex) {
    return knex.schema.createTable('bleeps', tbl => {
        tbl.increments();
        tbl.string('post', 280)
            .notNullable();
        tbl.integer('user_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
        tbl.timestamp('created at')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('bleeps');
  
};
