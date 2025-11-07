Date: 2025-11-??
Desc: SOLID principles are very well known, but are they really that important?
# SOLID Principles: Do They Matter

<img src="/journal/SOLID.png" alt="Solid principles guide" style="background-color: white; border-radius: 15px; margin-inline: 10px; margin-top: 2.5%; margin-bottom: 1.5%; width: 95%; max-width: 500px;">

###### Image source: [Geeks for Geeks](https://www.geeksforgeeks.org/system-design/solid-principle-in-programming-understand-with-real-life-examples/)
<br>

###### Author: Hayden Hargreaves

###### Published: 11/??/2025

## Background

If you have not heard of the SOLID principles, you are in the right place! SOLID is an acronym for 
the first five **object-oriented design** (OOD) principles, invented by Robert C. Martin, commonly
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

This article serves as an *introduction*, not a comprehensive guide. However, a simple understanding
of the principles can help you level up as a developer!


## Object-Oriented Programming Refresher

A basic understanding of object-oriented programming (OOP) is expected for optimal success when reading
this article. Regardless, a simple refresher can't hurt! Object-oriented programming is precisely 
what it sounds like, **object-based programming**. Code written in OOP languages is organized into 
"objects", which are self-contained units that combine data (attributes) and functions that operate 
on the data (methods). The OOP approach can simplify complex systems, promote code reusability and 
modularity, which makes OOP code easier to maintain and scale. There are four main principles of 
object-oriented programming: **encapsulation**, **inheritance**, **abstraction** and **polymorphism**. I will write 
a dedicated article about these four principles soon, which will also be found here in my journal.

To understand the SOLID principles, it is essential to remember **what a class is**: a class is a blueprint
or template for creating objects. An object is a unique instance of a class.


There are many object-oriented languages, and the concepts taught in this article are not unique to 
a specific language; they can be applied to any language that implements OOP structure (even Python!).
Some languages include: **[C++](https://en.wikipedia.org/wiki/C%2B%2B)**, **[C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language))**, **[Java](https://en.wikipedia.org/wiki/Java_(programming_language))**, **[Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language))**, and others. The examples provided in this article
will be in C++, but as mentioned previously, they apply to any OOP language!

## Single-Responsibility Principle

The **[Single-Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle)** states:

>
> "A class should have one and only one reason to change, meaning that a class should have only one
> job." ~Robert "Uncle Bob" Martin
>

### The Misunderstood Principle

The SRP is the simplest, yet most commonly misunderstood principle. The goal of the SRP is to **prevent
unexpected side effects* by keeping each unit (class) simple and with only a single purpose. A class 
with many responsibilities will often need to be modified as requirements change, which can lead to 
more bugs. When a class is changed, it can impact classes that depend on it, which can result in 
unexpected bugs in code that did not seem to change. However, a class with a **single responsibility**
will be changed much less, reducing the number of sneaky bugs that result from code refactors.


### Easier to Understand

Another benefit of implementing the single-responsibility principle is that the resulting code becomes
much easier to understand. A class with a single purpose is much easier to explain to a coworker or 
intern. However, this is another area of shared misunderstanding. Some developers take the SRP a bit 
too far and **oversimplify** their code, for example, by writing a new class for each function. When they
later want to write some real code, they need to inject dozens of dependencies to achieve a single task!

A healthy balance of responsibility and simplicity exists, which can be challenging to understand at
first. The best thing you can do is keep the SRP in mind, but do not follow it **too strictly**. Do not 
use it as your "programming bible." Use common sense; there is no point in classes that only contain
a single function!

### Code Example

To display this concept, we will examine a `Shape` class that needs to be drawn to an output. Below is
an implementation that does not adhere to the single-responsibility principle.

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
for storing shape data, computing the area, and rendering it to the output. Imagine we have hundreds
of shapes, we don't want to write hundreds of different ways to render each shape! This example is a
tad simple, but it helps us understand why we need to split responsibilities as code scales.

To fix this, we can create a `ShapeRenderer` class and simplify our `Shape` class.

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

We have successfully implemented a scalable and modular class that can be used with various shapes. 
Using polymorphism, we can achieve an even better solution, which is not the focus of this article, 
but further encourages the idea.

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

The **[Open/Closed Principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)** states:

>
> "Objects or entities should be open for extension but closed for modification." ~Bertrand Meyer
>

This means a class should be extensible without requiring modifications to the class itself.

The general idea of the Open/Closed Principle (OCP) is excellent! It requires a developer to write 
code that can be upgraded or extended without requiring modifications to existing code. This effect 
prevents extensions from requiring the developer to adapt all classes that depend on the target 
class. But Bertrand Meyer suggests that [inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)) is used to achieve this:

>
> “A class is closed, since it may be compiled, stored in a library, baselined, and used by client 
> classes. But it is also open, since any new class may use it as parent, adding new features. When 
> a descendant class is defined, there is no need to change the original or to disturb its clients.”
> ~Bertrand Meyer
>

This is problem because it frequently introduces tight coupling if subclasses depend on the 
implementation of a parent class. For that reason, "Uncle Bob" revised the principle to the **[Polymorphic](https://en.wikipedia.org/wiki/Polymorphism_(computer_science))
Open/Closed Principle**. Using interfaces instead of **superclasses** (a class which has subclasses) allows 
different implementations which can be swapped and changed with relative ease. Furthermore, the calling
(using) code does not need to be changed, as long as the interface's requirements are met.

This is a problem because it frequently introduces tight coupling if subclasses depend on the 
implementation of a parent class. For that reason, "Uncle Bob" revised the principle to the **[Polymorphic](https://en.wikipedia.org/wiki/Polymorphism_(computer_science))
Open/Closed Principle**. Using interfaces instead of **superclasses** (a class that has subclasses) allows
different implementations, which can be swapped and changed with relative ease. Furthermore, the 
calling (using) code does not need to be changed, as long as the interface's requirements are met.

Another significant benefit of using this polymorphic guideline is that it introduces an additional 
level of **[abstraction](https://en.wikipedia.org/wiki/Abstraction_(computer_science))**, which enables loose coupling. Interface implementations are distinct and have 
no relation to one another, and share no code. But if the interfaces should share some code, then 
**composition** and **inheritance** can be used.


### Code Example

To reinforce this point, a simple employer bonus calculation program will be written in two different 
ways: one that violates the OCP, and one that does not. It will be up to you to judge the effectiveness 
of each solution, and therefore the effectiveness of the rule!

In the example below, we violate the Open/Closed principle because any time a new employee type is 
added, the `BonusCalculator` class must be updated to match.

```cpp
enum EmployeeType { MANAGER, DEVELOPER, SALES };

class Employee {
public:
  Employee(EmployeeType type, double salary) : type(type), salary(salary) {}
  EmployeeType getType() const { return type; }
  double getSalary() const { return salary; }

private:
  EmployeeType type;
  double salary;
};

// VIOLATION: This class must be MODIFIED every time a new EmployeeType is added.
class BonusCalculator {
public:
  double calculateBonus(const Employee &emp) const {
    double salary = emp.getSalary();

    if (emp.getType() == MANAGER) {
      // Manager gets 10% bonus
      return salary * 0.10;
    } else if (emp.getType() == DEVELOPER) {
      // Developer gets 5% bonus
      return salary * 0.05;
    } else if (emp.getType() == SALES) {
      // Sales gets a fixed bonus
      return 500.0;
    }
    // If we add 'HR', we MUST modify and recompile this function.
    return 0.0;
  }
};
```

To fix this example, we can take three steps:

First, we can use abstraction via an **Abstract Base Class** (a class that cannot be instantiated, ABC) 
and polymorphism. This allows us to extend the base Employee class and let the final `BonusProcessor `
class grow via polymorphism.

The `EmployeeBase` class is open for extension since many more types can implement it without 
modifying the class itself.

```cpp
// 1. Base Class: Defines the contract
class EmployeeBase {
public:
  EmployeeBase(double salary) : salary(salary) {}

  // Virtual function (the key to polymorphism)
  virtual double calculateBonus() const = 0;
  virtual ~EmployeeBase() = default;

protected:
  double getSalary() const { return salary; }

private:
  double salary;
};
```

Now, we can create some different types of employees that inherit (implement) the `EmployeeBase` ABC.

```cpp
// 2. Concrete Implementations
class Manager : public EmployeeBase {
public:
  Manager(double salary) : EmployeeBase(salary) {}
  // Implements its unique bonus logic
  double calculateBonus() const override { return getSalary() * 0.10; }
};

class Developer : public EmployeeBase {
public:
  Developer(double salary) : EmployeeBase(salary) {}
  // Implements its unique bonus logic
  double calculateBonus() const override { return getSalary() * 0.05; }
};

// Adding a brand new type (e.g., HR) requires NO modification to existing code!
class HRSpecialist : public EmployeeBase {
public:
  HRSpecialist(double salary) : EmployeeBase(salary) {}
  double calculateBonus() const override { return getSalary() * 0.03; }
};
```

Finally, we can create the `BonusProcessor` class, which interacts only with the `EmployeeBase` ABC, 
making it **closed for modification**.

```cpp
// 3. ADHERENCE: This class is CLOSED for modification.
class BonusProcessor {
public:
  // This function doesn't need to know the specific type (Manager, Developer,
  // etc.) It relies only on the contract (virtual function) defined in
  // EmployeeBase.
  double processBonus(const EmployeeBase &emp) const {
    return emp.calculateBonus();
  }
};
```

Hopefully, you can see how powerful this principle can be when implemented correctly. Code that 
adheres to the open/closed principle is easy to scale, expand and upgrade.


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
