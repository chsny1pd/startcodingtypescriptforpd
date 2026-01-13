function greet(name?: string): void {
  if (name) {
    console.log("Hello " + name);
  } else {
    console.log("Hello guest");
  }
}

greet('Fahsai')
greet('Pordee')
greet()