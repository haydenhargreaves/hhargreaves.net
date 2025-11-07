Date: 2025-11-??
Desc: SOLID principles are very well known, but are they really that important?
# SOLID: Do They Matter

<img src="/journal/SOLID.png" alt="Solid principles guide" style="background-color: white; border-radius: 15px; margin-inline: 10px; margin-top: 2.5%; margin-bottom: 1.5%; width: 95%; max-width: 500px;">

###### Image source: [Geeks for Geeks](https://www.geeksforgeeks.org/system-design/solid-principle-in-programming-understand-with-real-life-examples/)
<br>

###### Author: Hayden Hargreaves

###### Published: 11/??/2025

## Background

If you have not heard of the SOLID principles, you are in the right place! SOLID is an acronym for 
the first five **object-oriented design** (OOD) principles, invented by Robert C. Martin who is commonly
known as [Uncle Bob](https://en.wikipedia.org/wiki/Robert_C._Martin). The goal of the SOLID principles is to establish best practices for developing 
maintainable and extensible software. Adapting these principles into your own code can help you avoid
[code smells](https://en.wikipedia.org/wiki/Code_smell), refactor code and develop Agile software.

>
> "If you think good architecture is expensive, try bad architecture." ~Uncle Bob
>

The five principles are as follows:
- **S** - Single-responsibility Principle
- **O** - Open-closed Principle
- **L** - Liskov Substitution Principle
- **I** - Interface Segregation Principle
- **D** - Dependency Inversion Principle

This article will serve as an *introduction*, not a complete guide. However, a simple understanding
of the principles can help you level up as a developer!


## Object-Oriented Programming Refresher

Some basic knowledge of object-oriented programming (OOP) is expected for best success when reading this 
article. Regardless, a simple refresher can't hurt! Object-oriented programming is exactly as it sounds,
**object based programming.** Code written in OOP languages is organized into "objects", which are self-contained
units that combine data (attributes) and functions that operate on the data (methods). The OOP approach 
*can* simplify complex systems, promote code reusability and modularity which makes OOP code easier to 
maintain and scale. There are four main principles of object-oriented principles: **encapsulation**, 
**inheritance**, **abstraction** and **polymorphism**. I will write a dedicated article about these four
principles soon, which will also be found here in my journal.

To understand the SOLID principles, the most important thing to remember is **what a class is;** a 
class is a blueprint or template for creating objects. An object is a unique instance of a class.


There are many object-oriented languages and the concepts taught in this article are not unique to a 
specific language, they can be applied to any language which implements OOP structure (even Python!).
Some languages include: **[C++](https://en.wikipedia.org/wiki/C%2B%2B)**, **[C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language))**, **[Java](https://en.wikipedia.org/wiki/Java_(programming_language))**, **[Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language))**, and more. The examples provided in this article
will be in C++, but as mentioned previously, they apply to any OOP language!

## Single-Responsibility Principle

The **[Single-Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle)** states:

>
> "A class should have one and only one reason to change, meaning that a class should have only one
> job." ~Robert "Uncle Bob" Martin
>

### The Misunderstood Principle

The SRP is the simplest, yet most commonly misunderstood principle. The goal of the SRP is to **prevent
unexpected side effects** by keeping each *unit* (class) simple and with only a single purpose. A class
that has many responsibilities will frequently need to be changed as requirements change, which can 
lead to more bugs. When a class is changed, it can impact classes that depend on it, which can result 
in unexpected bugs in code that did not *seem* to change. However, a class with a **single responsibility** 
will be changed much less, reducing the number of sneaky bugs that result from code refactors. 


### Easier to Understand

Another benefit of implementing the single-responsibility principle is that resulting code becomes much 
easier to understand. A class that has a single purpose is much easier to explain to a co-worker or intern.
However, this is another common place of misunderstanding. Some developers take the SRP a bit too far
and **over-simplify** their code, for example: writing a new class for each function!? When they later
want to write some real code, they need to inject dozens of dependencies just to achieve a single task!

There exists a healthy balance of responsibility and simplicity, which can be hard to understand at first. 
The best thing you can do is keep the SRP in mind, but not follow it **too strictly**. Do not use it as 
your "programming bible." Use common sense, there is no point in classes that only contain a single function!

### Code Example

To display this concept we will look at a **Shape** class which needs to be draw to an output. Below
is an implementation which does not adhere to the single-responsibility principle.

```cpp
class Shape {
public:
  Shape(double w, double h) : width(w), height(h) {};

  // Responsibility 1: Core Business Logic (Math)
  double calculateArea() const {
    return this->width * this->height;
  }

  // Responsibility 2: Presentation/Output (Drawing)
  void draw() const {
    // Imagine complex rendering code here...
    std::cout << "Drawing a rectangle of size " << this->width << "x"
              << this->height << "\n";
  }

private:
  double width;
  double height;
};
```

However, as the comments note, this class has more than one responsibility. The class is responsible
for storing shape data and computing the area as well as rendering it to the output. Imagine we have 
hundreds of shapes, we don't want to write hundreds of different ways to render each shape! This 
example is a tad simple, but it helps us understand why we need to split responsibilities as code scales.

To fix this, we can create a **ShapeRenderer** class and simplify our **Shape** class.

```cpp
// 1. ShapeSRP: Responsibility = Core Business Logic ONLY (Data and Math)
class ShapeSRP {
public:
    ShapeSRP(double w, double h) : width(w), height(h) {}

    // Methods for data access and core calculation
    double getWidth() const { return width; }
    double getHeight() const { return height; }
    
    // Stays here as it's the core purpose of the data
    double calculateArea() const {
        return width * height;
    }

private:
    double width;
    double height;
};

// 2. ShapeRenderer: Responsibility = Presentation/Output ONLY
class ShapeRenderer {
public:
    // This class's sole job is to handle how the Shape is visualized.
    void draw(const ShapeSRP& shape) const {
        // The rendering logic is isolated here.
        std::cout << "--- Graphics Renderer Output ---\n";
        std::cout << "Drawing a shape with area: " << shape.calculateArea() << "\n";
        std::cout << "Using dimensions: " << shape.getWidth() << "x" << shape.getHeight() << "\n";
    }
};
```

Now we have successfully implemented a scalable and modular class which can be used by many shapes! 
Using polymorphism we can achieve an even better solution, which is not the focus of this article, but
further encourages the idea.

```cpp
#include <cmath>
#include <iostream>

// 1. Abstract Base Class: Defines the contract for all shapes
class Shape {
public:
  // Core Business Logic: Must be implemented by derived classes
  virtual double calculateArea() const = 0;

  // Virtual destructor is crucial for proper cleanup with polymorphism
  virtual ~Shape() = default;
};

// Concrete Shape 1: Rectangle
class Rectangle : public Shape {
public:
  Rectangle(double w, double h) : width(w), height(h) {}

  // Implements the specific area calculation for a rectangle
  double calculateArea() const override { return width * height; }

  // Getters needed for the renderer
  double getWidth() const { return width; }
  double getHeight() const { return height; }

private:
  double width;
  double height;
};

// Concrete Shape 2: Circle
class Circle : public Shape {
public:
  Circle(double r) : radius(r) {}

  // Implements the specific area calculation for a circle
  double calculateArea() const override { return M_PI * radius * radius; }

  // Getters needed for the renderer
  double getRadius() const { return radius; }

private:
  double radius;
};

// Renderer Interface (Contract for drawing)
class Renderer {
public:
  // The renderer must be able to handle any kind of Shape
  virtual void render(const Shape &shape) const = 0;
  virtual ~Renderer() = default;
};

// Console Renderer Implementation
class ConsoleRenderer : public Renderer {
public:
  void render(const Shape &shape) const override {
    std::cout << "\n--- Console Output (Simple) ---\n";

    // This dynamic_cast is often necessary when a Renderer needs specific data,
    // but it's important to keep the logic here, separate from the Shape class!
    if (const auto *rect = dynamic_cast<const Rectangle *>(&shape)) {
      std::cout << "Type: Rectangle\n";
      std::cout << "Dimensions: " << rect->getWidth() << "x"
                << rect->getHeight() << "\n";
    } else if (const auto *circ = dynamic_cast<const Circle *>(&shape)) {
      std::cout << "Type: Circle\n";
      std::cout << "Radius: " << circ->getRadius() << "\n";
    } else {
      std::cout << "Type: Unknown Shape\n";
    }

    // **Polymorphic call:** This works for all shapes!
    std::cout << "Calculated Area: " << shape.calculateArea() << "\n";
  }
};
```

This has taken our shape renderer example to new heights! But by now, you should be able to understand
the pros and cons of the **S**ingle-responsibility principle.


## Open/Closed Principle

define the rule
why it exists
what is attempts to achieve


## Liskov Substitution Principle
define the rule
why it exists
what is attempts to achieve


## Interface Segregation Principle
define the rule
why it exists
what is attempts to achieve


## Dependency Inversion Principle
define the rule
why it exists
what is attempts to achieve

## SOLID Only For OOP?


## "Don't Repeat Yourself" From Uncle Bob
