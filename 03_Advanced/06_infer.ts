// Infer Keyword in TypeScript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
