// DESTRUCTIVE EXAMPLE

var sentence = "This is a string. with a list in side of it:" +
"listItem1, listItem2 ,listItem3 ,listItem4. That was the list.";

var start = sentence.indexOf(':');
var end = sentence.indexOf('.',start+1);

var listSrt = sentence.substring(start+1, end);
// passing in regexp to strip whitespace and split.
var list = listSrt.split(/\s*,\s*/);

console.log(list);

// NON DESTRUCTIVE EXAMPLE

//    use Array.map()

var list = sentence.substring(start+1, end).split(/\s*,\s*/);
console.log(list);

var str1 = "somestrong";
var str2 = "anotherstring";
console.log(typeof str1 === 'string');
