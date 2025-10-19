#STRINGS

1. Single quotes and Double quotes ("", ''):
  \n can be used to move to next line.

2. Backtick(``):
  They support multiline without \n.
  Use ${<lines of codes / variable>} inside backticks.


#4 BASIC FUNCTIONS

1. onclick="<code>":  inside a tag runs code on clicking.
2. console.log(): displays message inside the console.
3. alert(): opens a popup with the message.


#5 VARIABLE

1. let <variable> = <value>;      //assigining a value.
  We can use $ or _ in variable anywhere.

2. variable += 1 ;        \\adds 1 to variable.
3. variable++;
4. +=, -=, *=, /=, ++, --;

5. camelCase is the standard for naming variable in JavaScript.
6. PascalCase
7. kebab-case is the standard for css anf filenames.
8. snake_case

9. const <variable> = <value>;    //variable remains constant
  best practice is to use const as default.

10. var <variable> = <value>;     //original way
  used earliear, but not anymore.

11. typeof <varialbe>       //states the type of the data
    typeof <value>

12. eval()    //allows us to evaluate string to Arithematic expression


#6 BOOLEANS

1. ===        //equal to
2. !==        //not equal to
3. ==, !=     //tries to convert both operators into same type

4. Falsy Values: false  0   ''  undefined   null
5. Any value no on the list is truthy.

7. NaN is returned on a invalid Math.

8. undefined doesn't have a value.
  const can't be left undefined, if we really have to then
  const <variable> = undefined;

9. Ternary:     //can be stored in a varaible
  <exp1> ? <exp2> : <exp3>;

10. && ends beforehand if the prior value is false.
    This is called short circuiting.

  IF STATEMENT

1. Math.random()  //generates random no. in [0,1)

2. &&             //AND
3. ||             //OR
4. !              //NOT

5. Scope: A scope limits where a variable exists.
  Ex: variable defined inside if statement stays in if statement

6. var doesn't follow scope, that's why var is not used nowadays.
