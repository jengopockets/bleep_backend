
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bleeps').del()
    .then(function () {
      // Inserts seed entries
      return knex('bleeps').insert([
        {post: 'This is a default post', user_id: '1'},
        {post: 'This is a default post', user_id: '3'},
        {post: 'This is a default post', user_id: '1'},
        {post: 'This is a default post', user_id: '2'},
        {post: 'This is a default post', user_id: '1'},
        {post: 'This is a default post', user_id: '4'},
        {post: 'This is a default post', user_id: '4'},
        {post: 'This is a default post', user_id: '1'},
        {post: 'This is a default post', user_id: '1'},
        {post: 'This is a default post', user_id: '1'},
        {post: 'This is a default post', user_id: '4'},
        {post: 'This is a default post', user_id: '1'},
        {post: 'This is a default post', user_id: '1'},
        {post: 'This is a default post', user_id: '3'},
        {post: 'This is a default post', user_id: '1'},
        {post: 'This is a default post', user_id: '3'},
        {post: 'This is a default post', user_id: '1'},
        {post: 'This is a default post', user_id: '1'},
        {post: 'This is a default post', user_id: '2'},
        {post: 'This is a default post', user_id: '1'}
      ]);
    });
};
