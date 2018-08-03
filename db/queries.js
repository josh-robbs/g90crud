database = require('../db/database-connection')

module.exports = {
  list(){
    return database('student')
  },
  read(id){
    return database('student')
      .where('id',id)
      .first()
  },
  create(student){
    return database('student')
      .insert(student)
      .returning('*')
      .then(student => student[0])
  },
  update(id, student){
    return database('student')
      .update(student)
      .where('id',id)
      .returning('*')
      .then(student => student[0])
  },
  delete(id){
    return database('student')
      .del()
      where('id', id)
  }
}