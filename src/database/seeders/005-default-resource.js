module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      'Resources',
      [
        {
          id: 11111,
          topicId: '44444',
          url: 'https://www.youtube.com/watch?v=jiEJ764jo',
          resourceType: 'video',
          title: 'JavaScript Prototype Basics',
          author: 'Philip Brown',
          createdAt: '2019-06-08 009:10:38.181+01',
          updatedAt: '2019-06-08 009:10:38.181+01',
        },
        {
          id: 22222,
          topicId: '33333',
          url: 'https://webdevblog.io/make-post-req-with-html-1b3b1kp280',
          resourceType: 'article',
          title: 'Make a POST Request Using A HTML Form',
          author: 'Zetta Hoeger',
          createdAt: '2019-06-08 009:10:38.181+01',
          updatedAt: '2019-06-08 009:10:38.181+01',
        },
        {
          id: 33333,
          topicId: '11111',
          url: 'https://www.youtube.com/watch?v=juIlu23Ih',
          resourceType: 'video',
          title: 'Basic JavaScript Array Methods',
          author: 'Jarret Parker',
          createdAt: '2019-06-08 009:10:38.181+01',
          updatedAt: '2019-06-08 009:10:38.181+01',
        },
        {
          id: 44444,
          topicId: '22222',
          url: 'https://www.i-love-python.com/fundamentals/functions',
          resourceType: 'article',
          title: 'Python Fundamentals: Functions',
          author: 'Gavin Major',
          createdAt: '2019-06-08 009:10:38.181+01',
          updatedAt: '2019-06-08 009:10:38.181+01',
        },
        {
          id: 55555,
          topicId: '33333',
          url: 'https://codecourses.com/courses/styling-html-forms',
          resourceType: 'course',
          title: 'Styling HTML Forms',
          author: 'Lloyd Rush',
          createdAt: '2019-06-08 009:10:38.181+01',
          updatedAt: '2019-06-08 009:10:38.181+01',
        },
      ],
      {},
    ),

  down: queryInterface => queryInterface.bulkDelete('Resources', null, {}),
};