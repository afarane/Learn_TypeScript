// Infer Keyword in TypeScript
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
