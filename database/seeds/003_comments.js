
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {comment: 'Wow you are dense huh', bleep_id:'1'},
        {comment: 'Yes Yes Yes', bleep_id:'4'},
        {comment: 'Do you belong on the internet?', bleep_id:'3'},
        {comment: 'Go home you\'re drunk', bleep_id:'1'},
      ]);
    });
};
