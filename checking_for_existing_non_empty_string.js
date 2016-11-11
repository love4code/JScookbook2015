var unknownVar = 'some random string';
if(typeof unknownVar === 'string' && unknownVar.length > 0)
    return true;

/*
    If your interested in testing for a string reguardless
    of whether its a String Object or String Literal,
    youll need a dif typeof test as well as a test to
    ensure the variable i not null
*/

if(((typeof unknownVar != 'undefined' && unknownVar) && unknownVar.length
 > 0) && typeof unknownVar.valueOf == 'string')
 return true;

 /*

    The valueOf() method is available on all JavaScript objects,
    and returns the primitive (unwrapped) value of the object.
    For Number, String, and Boolean, valueOf()
    returns the primitive value.
    So if the variable is a String object,
    valueOf() returns a string literal.
    If the variable is already a string literal,
    applying the valueOf() method temporarily wraps it
    in a String object, which means the valueOf() method
    will still return a string literal.
 */