type Pop<T extends any[]> = T extends [
    ...infer Rest,
    infer Last,
]
    ? [...Rest]
    : []

type MyPush<T extends any[], P> = T extends [...infer Rest]
    ? [...Rest, P]
    : [P]

type MyShift<T extends any[]> = T extends [
    infer First,
    ...infer Rest,
]
    ? First
    : never

type MyUnShift<T extends any[]> = T extends [
    ...infer Rest,
    infer Last,
]
    ? Last
    : never
