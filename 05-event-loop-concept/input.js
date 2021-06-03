const fs = require('fs')

fs.readFile('./data/input.txt', (err, data) => {
  if(err){
    console.log(err)
    return
  }
  console.log(data.toString())
})
console.log('Program ended')