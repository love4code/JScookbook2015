/*
    The escape sequences in JavaScript all begin with the backslash
    character, (\).
    This character signals the application processing the string
    that what follows is a sequence of characters that need
    special handling.
*/
var resultString = "<p>This page \u00A9 Mark Grover </p>";
    // print out to page
var blk = document.getElementById("copyResult");
blk.innerHTML = resultString;
//console.log(blk);

/*
 +------------------------------------------------------+
 |  Other Escape Sequences Are Listed Bellow:           |
 +------------------------------------------------------+
 |  Sequence            Character
 |     \'              Single quote
 |     \"              Double quote
 |     \\               Backslash
 |     \b               Backspace
 |     \f               Form feed
 |     \n                Newline
 |     \r             Carriage return
 |     \t              Horizontal tab
 |     \ddd      Octal sequence (3 digits:ddd)
 |     \xdd     Hexadecimal sequence (2 digits:dd)
 |     \udddd  Unicode sequence (4 hex digits:dddd)
 +-----------------------------------------------------+
*/