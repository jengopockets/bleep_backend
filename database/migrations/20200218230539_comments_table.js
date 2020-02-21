
exports.up = function(knex) {
    return knex.schema.createTable('comments', tbl => {
        tbl.increments();
        tbl.string('comment', 500)
            .notNullable();
        tbl.integer('bleep_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('bleeps')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('comments');
};
