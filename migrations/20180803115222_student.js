
exports.up = function(knex, Promise) {
  return knex.schema.createTable('student', student => {
    student.string('firstName'),
    student.string('lastName'),
    student.string('photo'),
    student.string('hometownLat'),
    student.string('hometownLong'),
    student.string('prevOccupation')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('student')
};
