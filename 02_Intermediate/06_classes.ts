// Classes in TypeScript
class Animal {
  constructor(public name: string) {}
  move(distance: number) {
    console.log(`${this.name} moved ${distance}m.`);
  }
}
