
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'LambdaLover', password: 'LambdaLove',email:'lambda@love.com',bio:'I Love Lambda School'},
        {username: 'LambdaLover2', password: 'LambdaLove',email:'lambda2@love.com',bio:'I Love Lambda School'},
        {username: 'LambdaLover3', password: 'LambdaLove',email:'lambda3@love.com',bio:'I Love Lambda School'},
        {username: 'LambdaLover4', password: 'LambdaLove',email:'lambda4@love.com',bio:'I Love Lambda School'}
      ]);
    });
};
