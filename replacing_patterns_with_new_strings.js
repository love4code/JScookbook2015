var searchString = "Now is the time, this is the tame";
var re = /t\w{2}e/g;
var replacementString = searchString.replace(re, "place");
console.log(replacementString);

/*
    The solution also makes use of a global search.
    Using the global flag (g) with the regular expression
    in combination with the String replace() method
    will replace all instances of the matched text
    with the replacement string.
    If we did not use the global flag,
    only the first match would trigger a replacement.
*/

/*
    The literal regular expression begins and ends with a slash (/).
    As an alternative, I could have used the built-in RegExp object:
*/

var regexp = new RegExp('t\\w{2}e', "g");
var replacement = searchString.replace(re, "present");
console.log(replacement);

/*
    The difference is the surrounding slashes are not necessary when using
    RegExp, but the use of the backslash in the pattern has to be escaped.
    In addition, the global indicator is a second,
    optional argument to the RegExp constructor.
*/