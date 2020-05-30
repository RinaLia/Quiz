// let checker = (x,y) =>{
//   let paragraph = x.split(' ')
//   let words = y.split(' ')
//   let state = false
//   for (i=0; i<words.length; i++ ){
//     state = false
//     for(i2=0; i2<paragraph.length;i2++){
//   if(words[i] === paragraph[i2]){
//     state = true
//     break   
//   }
//   }
//   if (!state) return false
//   }
//   return true
// }
// console.log(checker('Pada suatu hari saya pergi ke kantor ternyata kantor saya hari ini tutup','saya tutup kantor suatu hari nanti'));



const searchWords = (paragraph, words) => {
  if (input(paragraph) && input(words)){
    return false
  } else {
    let lparagraph = paragraph.toLowerCase()
    let lwords = words.toLowerCase() 
    let arrx = paragraph.split('')
    let arry = words.split('')

    for(let i=0; i<arrx.length;i++){
      if(arrx.includes(arry[i]===false)){
        return false
      }
    }
  }

}



