const functions = require('../src/index');

test('Addition', function(){
  const expected = 5;
  const result = functions.add(2, 3);
  expect(result).toBe(expected);
});

test('Longest String', function(){
  const expected = 'laptop';
  const result = functions.longestString(["laptop", "dog"]);
  expect(result).toBe(expected);
});


test('toLeet', function(){
  const expected = "1337"
  const result = functions.toLeet("leet")
  expect(result).toBe(expected)
})

test('Unique Strings', function(){
  const expected = ['hello','my','dog', 'cat'];
  const result = functions.uniqueStrings(['hello','my','dog','cat','cat'])
  expect(result).toEqual(expected)
})

test('developer', function(){
  const expected = {name: 'Phil',
                    languages: ['JavaScript', 'Python']}
  const result = new functions.Developer('Phil', ['JavaScript', 'Python'])
  expect(result).toEqual(expected)
})

test('learn - add new language', function(){
  const phil = new functions.Developer ('Phil', ['JavaScript', 'Python'])
  const expected = {name: 'Phil',
                    languages: ['JavaScript', 'Python','HTML']}
  phil.learnLanguage("HTML");
  const result = phil
  expect(result).toEqual(expected)
})

test('learn - dont add duplicate language', function(){
  const phil = new functions.Developer ('Phil', ['JavaScript', 'Python', 'HTML'])
  const expected = {name: 'Phil',
                    languages: ['JavaScript', 'Python','HTML']}
  phil.learnLanguage("HTML");
  const result = phil
  expect(result).toEqual(expected)
})

test('concat array of strings into single string', function(){
  const expected = 'dogcatmouse'
  const result = functions.stringsConcat(['dog', 1, 'cat', 5, 'mouse', 9])
  expect(result).toBe(expected)
})

test('return an array of negative numbers', function() {
  const expected = [-1,-2,-3,-4,-5];
  const result = functions.negativeOnly([1,-1,2,-2,3,-3,4,-4,5,-5])
  expect(result).toEqual(expected)
})


test('return input string in camelCase', function(){
  const expected = 'theRainInSpainFallsMostlyOnThePlain'
  const result = functions.camelise('the rain in spain falls mostly on the plain')
  expect(result).toBe(expected)
})