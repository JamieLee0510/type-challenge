type StringToArray<Str extends string> =
    Str extends `${infer F}${infer Rest}`
        ? [F, ...StringToArray<Rest>]
        : []

type LengthOfString<S extends string> =
    StringToArray<S>['length']
