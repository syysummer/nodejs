db
use study
show collections
db.test1.insert({name:'Jack',age:20,sex:'男'})
db.test1.find({})
db.test1.insert([{name:'rose',age:17,sex:'女'},{name:'Jerry',age:19,sex:'男'}])

db.test1.find({})

db.test1.insert([{name:'summer',age:15,sex:'女'},{name:'Jon',age:18,sex:'男'}])

db.test1.find({})
db.test1.find({age:{$gte:18}})
db.test1.find({age:{$lte:18}})
db.test1.find({age:{$in:[18,15]}})
db.test1.find({age:{$nin:[18,15]}})
db.test1.find({$or:[{name:'Tom'},{name:'Jack'}]})
db.test1.find({name:/^J/})
db.test1.find({$where:function(){
 return this.age >= 16 && this.name == 'Jack'
}})



