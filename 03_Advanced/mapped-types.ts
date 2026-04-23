// Mapped Types in TypeScript
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
