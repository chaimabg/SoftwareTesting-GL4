

exports.stringLenWithoutSpaces = (chaine)=>{
  let count=0;
  for (let i = 0; i <chaine.length ; i++) {
    if(chaine[i]!==' ') {
      count++;
    }
  }
}
exports.letterCount = (letter,word)=>{
  let count =0;
  for (let i = 0; i < word.length ; i++) {
    if(word[i]===letter){
      count++;
    }
  }
}

exports.pwdValidation=(pwd)=>{
  // regex for password
}

exports.emailValidation = (email)=>{
  // regex for email
}
