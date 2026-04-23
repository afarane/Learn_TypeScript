# Generics Cheat Sheet

- Generic function: `function identity<T>(arg: T): T { return arg; }`
- Generic class: `class Box<T> { value: T; }`
- Constraints: `function logLength<T extends { length: number }>(arg: T) {}`
