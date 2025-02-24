Date: 2025-02-23
# H1 Tag
## H2 Tag
### H3 Tag
#### H4 Tag
##### H5 Tag
###### H6 Tag

| Header 0 | Header 1 | Header 2 | Header 3 |
|---|---|---|---|
|Cell 0 | Cell 1   | Cell 2   | This cell is really big so it will hopefully overflow........This cell is really big so it will hopefully overflow..........This cell is really big so it will hopefully overflow......... |
| Cell 3 | Cell 4   | Cell 5   | Cell 6   |

*This text is italic*
**This text is bold**
***This text is bold and italic***

[This is an anchor](https://www.youtube.com), but this is not.

This is a blog post about something. It's really interesting. I hope you enjoy it.

# Markdown Quirks and Edge Cases

## Emphasis and Strong Emphasis

*This text is emphasized.*
_This text is also emphasized._

**This text is strong emphasis.**
__This text is also strong emphasis.__

* Item 1
* Item 2
* Item 3

+ Another Item 1
+ Another Item 2

1. Yet Another Item 1
2. Yet Another Item 2

***This text is both emphasized and strong!***
___This text is also both emphasized and strong!___

## Strikethrough

~~This text is strikethrough.~~

## Links

[Link to Google](https://www.google.com)
[Link with title](https://www.google.com "Google's Homepage")
[Relative link](/some/page)
[Link with spaces in URL](https://www.google.com/search?q=hello%20world)
<https://www.google.com>  (Auto-linked URL)

## Images

![Alt text for image](https://www.example.com/image.jpg)
![Alt text with title](https://www.example.com/image.jpg "Image title")
![Image with spaces in URL](https://www.example.com/image%20with%20spaces.png)  (URL encoded spaces)

## Code

`Inline code`
```javascript
// Code block with language specified
function myFunction() {
  console.log("Hello, world!");
}

```

My favorite color is red.

```cpp
// C++

#include <iostream>
#include <vector>
#include <string>

#define string "HELLO"

int main() {
    // Templates
    template <typename T>
    T max(T a, T b) {
        return (a > b) ? a : b;
    }

    // Lambda expressions
    auto lambda = [](int x) { return x * x; };

    // Smart pointers
    std::unique_ptr<int> ptr = std::make_unique<int>(42);

    // Raw strings (C++11)
    std::string raw_string = R"(This is a raw string.\nIt can contain backslashes and quotes: " ' \ )";

    // Variadic templates (C++11)
    template<typename... Args>
    void print_all(Args... args) {
        (std::cout << ... << args) << std::endl;
    }

    // constexpr (C++11)
    constexpr int factorial(int n) {
      return (n <= 1) ? 1 : (n * factorial(n-1));
    }

    // Namespaces
    namespace my_namespace {
        void my_function() {
            std::cout << "Hello from my_namespace!" << std::endl;
        }
    }

    // Operator overloading
    class MyClass {
    public:
        int value;
        MyClass(int v) : value(v) {}
        MyClass operator+(const MyClass& other) const {
            return MyClass(value + other.value);
        }
    };

    // Comments (including tricky ones)
    // This is a single-line comment.
    /*
    This is a
    multi-line comment.
    */
    // /* Nested comment */  <- tricky!

    // Unicode characters
    std::string unicode_string = "你好世界"; // Hello, world in Chinese

    return 0;
}
```

```go
// Go

package main

import "fmt"

func main() {
    // Functions with multiple return values
    func add_and_subtract(a, b int) (int, int) {
        return a + b, a - b
    }

    // Structs
    type Person struct {
        Name string
        Age  int
    }

    // Methods
    func (p Person) Greet() {
        fmt.Println("Hello, my name is", p.Name)
    }

    // Interfaces
    type Greeter interface {
        Greet()
    }

    // Goroutines and channels
    go func() {
        fmt.Println("This is a goroutine")
    }()

    ch := make(chan int)
    go func() {
        ch <- 42
    }()
    fmt.Println(<-ch)


    // Slices and arrays
    numbers := []int{1, 2, 3, 4, 5}
    slice := numbers[1:3]

    // Maps
    ages := map[string]int{
        "Alice": 30,
        "Bob":   25,
    }

    // Comments (including tricky ones)
    // This is a single-line comment.
    /*
    This is a
    multi-line comment.
    */
    // /* Nested comment */  <- tricky!

    // Unicode characters
    unicodeString := "你好世界"

    // Type switch
    var i interface{} = 123
    switch v := i.(type) {
    case int:
        fmt.Println("Integer:", v)
    default:
        fmt.Println("Other type")
    }

    // Defer statements
    defer fmt.Println("This will be printed last")

    // Error handling
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }

}

func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}
```

```js
// JavaScript

// Function with parameters and return value
function greet(name, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

// Arrow function
const multiply = (a, b) => a * b;

// Object literal
const person = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log(`My name is ${this.name}.`);
  }
};

// Array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

// Promises and async/await
async function fetchData() {
  const response = await fetch('https://example.com/data');
  const data = await response.json();
  return data;
}

// Class definition
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log("Woof!");
  }
}

// Comments: single-line and multi-line
// This is a single-line comment.
/*
This is a
multi-line comment.
*/

// Regular expressions
const regex = /^[a-zA-Z]+$/;

// Destructuring
const { name, age } = person;

// Template literals
const message = `Name: ${name}, Age: ${age}`;


// TypeScript (If your highlighter supports it)
// interface Person {
//   name: string;
//   age: number;
// }

// function greet(person: Person): string {
//   return `Hello, ${person.name}!`;
// }
```

```json
{
  "name": "John Doe",
  "age": 30
}
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Test</title>
  </head>
  <body>
    <h1>Hello world</h1>
  </body>
```


```css

@import 'tailwindcss';


/* This is very painful. There must be a better way. */
@layer base {
  pre {
    background-color: #191724;
    /* background-color: red; */
    /* Or any color you want */
    padding: 0.5rem 2rem;
    margin-inline: 2%;
    /* Adjust padding as needed */
    border-radius: 10px;
    /* Optional: Add rounded corners */
    overflow-x: auto;
    /* Handle horizontal overflow if code is wider */
    white-space: pre-wrap;
    /* Allows code to wrap within the pre element*/
  }

  code.hljs {
    color: #e0def4;
  }

  .hljs-string,
  .hljs-number,
  .hljs-meta {
    color: #f6c177;
  }

  .hljs-punctuation,
  .hljs-operator {
    color: #908caa;
  }

  .hljs-comment {
    color: #6e6a86;
  }

  .hljs-keyword {
    color: #31748f;
  }

  .hljs-params {
    color: #c4a7e7;
  }

  .hljs-variable,
  .hljs-attr {
    color: #e0def4;
  }

  .language_ {
    color: #eb6f92;
  }

  .function_,
  .hljs-literal,
  .hljs-built_in,
  .hljs-title,
  code.language-python .hljs-built_in,
  code.language-go .hljs-built_in {
    color: #ebbcba;
  }

  .hljs-property,
  .class_,
  .hljs-type,
  .hljs-tag,
  .hljs-selector-tag,
  code.language-ts .hljs-built_in {
    color: #9ccfd8;
  }
}
```

```rs
fn main() {
    // A simple function to add two numbers
    fn add(a: i32, b: i32) -> i32 {
        a + b
    }

    // A struct representing a point in 2D space
    struct Point {
        x: f64,
        y: f64,
    }

    impl Point {
        // Method to calculate the distance from the origin
        fn distance_from_origin(&self) -> f64 {
            (self.x * self.x + self.y * self.y).sqrt()
        }
    }

    // Example usage
    let num1 = 10;
    let num2 = 20;
    let sum = add(num1, num2);
    println!("The sum of {} and {} is {}", num1, num2, sum);

    let point = Point { x: 3.0, y: 4.0 };
    let distance = point.distance_from_origin();
    println!("The distance of the point from the origin is {}", distance);

    // Demonstrating a for loop
    for i in 0..5 {
        println!("Value of i: {}", i);
    }

    // Example of a vector
    let mut my_vector = vec![1, 2, 3];
    my_vector.push(4);
    println!("My vector: {:?}", my_vector);

    // Using a Result to handle potential errors
    fn divide(a: i32, b: i32) -> Result<i32, String> {
        if b == 0 {
            Err("Cannot divide by zero".to_string())
        } else {
            Ok(a / b)
        }
    }

    let result = divide(10, 2);
    match result {
        Ok(value) => println!("Result of division: {}", value),
        Err(error) => println!("Error: {}", error),
    }

    let result2 = divide(10, 0);
    match result2 {
        Ok(value) => println!("Result of division: {}", value),
        Err(error) => println!("Error: {}", error),
    }

    // Example of a closure
    let square = |x: i32| -> i32 { x * x };
    println!("Square of 5: {}", square(5));

    // String manipulation
    let my_string = "Hello, world!".to_string();
    let greeting = format!("Greeting: {}", my_string);
    println!("{}", greeting);

    // Option example
    let optional_value: Option<i32> = Some(42);
    match optional_value {
        Some(value) => println!("Optional value: {}", value),
        None => println!("No value present"),
    }
}
```

```python
# Python

# Function definition
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

# List comprehension
numbers = [1, 2, 3, 4, 5]
doubled = [num * 2 for num in numbers]

# Dictionary
person = {
    "name": "Alice",
    "age": 30,
    "greet": lambda self: print(f"My name is {self['name']}."),
}

# Class definition
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def bark(self):
        print("Woof!")

# Comments: single-line and multi-line
# This is a single-line comment.
"""
This is a
multi-line comment.
"""

# Try-except block
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero.")

# For loop
for i in range(5):
    print(f"Value of i: {i}")

# While loop
count = 0
while count < 3:
    print(f"Count: {count}")
    count += 1

# String formatting
message = "Name: {}, Age: {}".format(person["name"], person["age"])

# f-strings (formatted string literals)
message2 = f"Name: {person['name']}, Age: {person['age']}"

# List slicing
my_list = [10, 20, 30, 40, 50]
slice_of_list = my_list[1:4]

# Tuple unpacking
coordinates = (10, 20)
x, y = coordinates

# Decorators
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")
```

```java
// Java

// Class definition
public class Main {

    // Main method
    public static void main(String[] args) {

        // Variables and data types
        int age = 30;
        String name = "Alice";
        double height = 5.8;
        boolean isStudent = true;

        // Conditional statement
        if (age >= 18) {
            System.out.println("Adult");
        } else {
            System.out.println("Minor");
        }

        // Loops
        for (int i = 0; i < 5; i++) {
            System.out.println("Value of i: " + i);
        }

        // While loop
        int count = 0;
        while (count < 3) {
            System.out.println("Count: " + count);
            count++;
        }

        // Arrays
        int[] numbers = {1, 2, 3, 4, 5};

        // Methods
        greet(name);

        // Object creation
        Person person = new Person(name, age);
        person.greet();

        // Try-catch block
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero.");
        }

        // Comments: single-line and multi-line
        // This is a single-line comment.
        /*
        This is a
        multi-line comment.
        */

        // String concatenation
        String message = "Hello, " + name + "!";
        System.out.println(message);

    }

    // Method definition
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
}

// Class definition
class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void greet() {
        System.out.println("My name is " + this.name + ".");
    }
}
```
