function sayHello(name?) {
  if (!name) {
    return "Hello";
  }

  return `Hello, ${name}`;
}

export { sayHello };
