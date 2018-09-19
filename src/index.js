function add(a, b){
  return a + b;
}

function longestString(array){
  let result = "";
  array.forEach(word => {
    if (word.length > result.length){
      result = word;
    }
  })
  return result
}

function toLeet(string){
  let newString = "";
  newString = string.replace(/i/g, 1);
  newString = newString.replace(/l/g, 1);
  newString = newString.replace(/z/g, 2);
  newString = newString.replace(/e/g, 3);
  newString = newString.replace(/a/g, 4);
  newString = newString.replace(/s/g, 5);
  newString = newString.replace(/g/g, 6);
  newString = newString.replace(/t/g, 7);
  newString = newString.replace(/y/g, 7);
  newString = newString.replace(/b/g, 8);
  newString = newString.replace(/q/g, 9);
  newString = newString.replace(/o/g, 0);

  

  return newString;



}

function uniqueStrings(array){
  let resultObj = {}
  array.forEach(string => {
    resultObj[string] = ""
  })
  return Object.keys(resultObj)
}

function Developer(name,languages){
  this.name = name;
  this.languages = languages;
}

Developer.prototype.learnLanguage = function(language){
  if (! this.languages.includes(language)){
    this.languages.push(language);
  }
}

function stringsConcat(array) {
  return array.reduce((a,b) => {
    if (typeof b === 'string') {
      return a + b;
    }
    return a;
  })
}

function negativeOnly(array){
  return array.filter(element => {
    if (element < 0){
      return element
    }
  })
}

function camelise(string){
  array = string.split(" ");
  capsArray = array.map(word => {
    return word.charAt(0).toUpperCase() + word.substr(1);
  } )
   capsArray[0] = capsArray[0].charAt(0).toLowerCase() + capsArray[0].substr(1);
   return capsArray.join("");

}

exports.add = add;
exports.longestString = longestString
exports.toLeet = toLeet;
exports.uniqueStrings = uniqueStrings
exports.Developer = Developer
exports.stringsConcat = stringsConcat
exports.negativeOnly = negativeOnly
exports.camelise = camelise
