const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'https://nasa.gov/donec.json',
    user_id: 2
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    content: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
