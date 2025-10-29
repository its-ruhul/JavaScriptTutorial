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


# 6 BOOLEANS

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
    This is called short circuiting. Eg:

    let <variable> = false && '<string>';

    //substituition for simple if statement.

11. || ends beforehand if prior value is true. Eg: 

    let <variable> = true && <data>;

  IF STATEMENT

1. Math.random()  //generates random no. in [0,1)

2. &&             //AND
3. ||             //OR
4. !              //NOT

5. Scope: A scope limits where a variable exists.
  Ex: variable defined inside if statement stays in if statement

6. var doesn't follow scope, that's why var is not used nowadays.


#7 FUNCTIONS

1. function <identifier> (<parameter1> = <default>, <paramemter2>) {
    //function body

    return <data>;
  }

2. <identifier>(<parameter1>, <parameter2>);
  //Calling a function.


# 7 OBJECTS

1. Object can be used to store multiple values.
  let <object> = {
    <var1>: <value1>,   //property: value
    <var2>: <value2>    //property value pair
  };

2. <object>.<var1>      //gives <value1>
  //dot notation

3. <object>.<var2> = <value3>;

4. //assigning property (dot notation)
  <object>.<newVar> = <newVal>;

5. //deleting property
  <object>.<var1>;

6. //bracket notation
  <object>['<var1>']

  <object> {
    ['<var1>']: <val1>,
    '<var2> : <val2>,

    <var3>: function <function>() {

    }
  };

  //bracket notation is helpful for variables with '-'
  //since, javascript treats it as minus sign while calling
  //can perforem operations inside it

7. function inside object is a method.

8. // while defining an object if <variable> === <value>
  <variable>: <value>,      //can be rewritten as
  <varialble>,

9. //insted of this inside an object
  <function>: function <function>() {
    }

  <function>() {
    
  }

8. BUILT IN OBJECTS:
  Math, JSON, localStorage

9. JSON: just like JavaScript object but less features.
  use of double quotes only for variable and values.
  doesn't support functions inside it.

  it is compatible with many programming language

10. JSON.stringify(<object>)      //converts object to JSON
  //returns a string value.

11. JSON.parse(<object>)      //converts JSON to object

    #LocalStorage

12. localStorage.setItem('<var1>, '<value1>);
  localStorage.getItem('<var1>,);

13. 'null' : intentionally watnt something to be empty.
  'undefined': unintentional null (function treats  null as a variable)

14. '<string>'.lenght;
  '<string>'.toUpperCase();
  '<string>'.toLowerCase();
  '<string>'.repeat(<num>);

15. can't equate to objects with same value.

16. cosnt message = <object>.message;      //This can be rewritten as
  const {message} = <object>;              //Same as above
  const {<var1>, <value1>} = <object>;


# 9 DOCUMENT OBJECT MODEL

1. document is an object that allows us to access the html code.

2. document.title     //accesses the title
3. document.body

4. documnent.querySelector('<tag-name>')  //accesses any tag

5. every object has an element innerHTML which accesses the things inside that value.

6. in dot notion we can put some of it in next line starting with a dot.

  
# 11 LOOPS AND ARRAYS

1. while (<contition>) {
  //while loop
  //use for non standar loops like
  //generating a random no. with some condition
}

2. for (let i = 1; i <= 5; i++) {
  //for loop
}

