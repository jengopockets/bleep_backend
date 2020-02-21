
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {comment: 'A Default Comment', bleep_id:'1'},
        {comment: 'A Default Comment', bleep_id:'4'},
        {comment: 'A Default Comment', bleep_id:'3'},
        {comment: 'A Default Comment', bleep_id:'1'},
      ]);
    });
};
