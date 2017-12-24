'use strict';


var mongoose = require('mongoose'),
securegmail = mongoose.model('secureGmail');

exports.list_all_tasks = function(req, res) {
    securegmail.find({}, function(err, securegmail) {
    if (err)  res.send(err);
    res.json(securegmail);
  });
};


exports.create_a_task = function(req, res) {
  var new_task = new securegmail(req.body);
  new_task.save(function(err, task) {
    if (err)  res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
    securegmail.findById(req.params.taskId, function(err, task) {
    if (err)   res.send(err);
    res.json(task);
  });
};
