// use the RegExp exec method and the global flag in a loop
// to locate all instinces of a pattern, such as any
// word that begins with t and ends with e, with any
// number of characters in between.

var searchString = "Now is the time and this is the time and that is the";
+ "time";
var pattern = /t\w*e/g;
var matchArray;

var str = "";

// check for pattern with regexp exec
while( ( matchArray = pattern.exec( searchString ) ) != null ) {
    str+="at " + matchArray.index + " we found " + matchArray[0] + "\n";
}
console.time()
console.log(str);
console.timeEnd();

/*
    The RegExp exec() method executes the regular expression,
    returning null if a match is not found,
    or an object with information about the match, if found.

    Included in the returned array is:
    ------------------------------------------------------------
    ------------------------------------------------------------
    1) The actual matched value,
    2) The index in the string where the match is found,
    3) Any parenthetical substring matches,
    4) The original string.


     index           The index of the located match
     input           The original input string
     [0]             The matched value
     [1],...,[n]+    Parenthesized substring matches, if any

     The parentheses capture the matched values given a regular expression.
*/

var re = /a(p+).*(pie)/ig;
var searchString = "The apples in the apple pie are tart";
var result = re.exec(searchString);
console.log(result);
console.log(result.index);
console.log(result.input);

/*
 RETURNS:
      >>  [
             "apples in the apple pie",
             "pp",
             "pie",
             index: 4,
             input:
             "The apples in the apple pie are tart"
         ]
      >>  4
      >>  The apples in the apple pie are tart

    The array results contain the complete matched value at index zero (0),
    and the rest of the array entries are the parenthetical matches.
    The index is the index of the match,
    and the input is just a repeat of the string being matched.
    In the solution, the index where the match was found is printed out
    in addition to the matched value.
    The solution also uses the global flag (g).
    This triggers the RegExp object to preserve the location of each match,
    and to begin the search after the previously discovered match.
    When used in a loop,
    we can find all instances where the pattern matches the string.
*/

