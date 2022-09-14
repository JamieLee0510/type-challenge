// type MyTrimLeft<T extends string> =
//     T extends `${Blank}${infer R}` ? MyTrimLeft<R> : T

// type MyTrimRight<T extends string> =
//     T extends `${infer R}${Blank}` ? MyTrimRight<R> : T

// type Trim<S extends string> = S extends `${Blank}${infer R}`
//     ? R extends `${infer P}${Blank}`
//         ? Trim<P>
//         : MyTrimLeft<R>
//     : S extends `${infer R}${Blank}`
//     ? MyTrimRight<R>
//     : S

// 使用union，更簡潔了
type Trim<S extends string> = S extends
    | `${Blank}${infer T}`
    | `${infer T}${Blank}`
    ? Trim<T>
    : S
