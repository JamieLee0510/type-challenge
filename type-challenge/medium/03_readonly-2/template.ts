// K extends keyof T = keyof T, because of the test-case 1
// Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [P in K]: T[P]
} & {
    [K2 in Exclude<keyof T, K>]: T[K2]
}
