'use strict';
module.exports = function(app) {
  var securegmailController = require('../controllers/securegmailController.js');

  // todoList Routes
  app.route('/api/secure')
    .get(securegmailController.list_all_tasks)
    .post(securegmailController.create_a_task);


  app.route('/api/secure/:taskId')
    .get(securegmailController.read_a_task)
};
