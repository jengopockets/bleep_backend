
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bleeps').del()
    .then(function () {
      // Inserts seed entries
      return knex('bleeps').insert([
        {post: 'The earth is flat', user_id: '1'},
        {post: 'The earth is round', user_id: '3'},
        {post: 'Round earthers are so gullible', user_id: '1'},
        {post: 'Potato', user_id: '2'},
        {post: 'I can not understand how people dont see how the moon landing was faked', user_id: '1'},
        {post: 'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.', user_id: '4'},
        {post: 'The worst thing about prison was the Dementors. They were flying all over the place and they were scary and they’d come down and they’d suck the soul out of your body and it hurt!', user_id: '4'},
        {post: 'This is a default post', user_id: '1'},
        {post: 'This is a default post', user_id: '1'},
        {post: 'This is a default post', user_id: '1'},
        {post: 'I have cause. It is beCAUSE I hate him.', user_id: '4'},
        {post: 'You know what they say. Fool me once, strike one, but fool me twice … strike three.', user_id: '4'},
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
