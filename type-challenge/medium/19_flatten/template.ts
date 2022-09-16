type Flatten<T extends any[]> = T extends [
    infer F,
    ...infer R,
]
    ? F extends any[]
        ? [...Flatten<F>, ...Flatten<R>]
        : [F, ...Flatten<R>]
    : T

type testFlatten = Flatten<[1, 2, [2, 3], [5, 6]]>

type demoInfer<T extends any[]> = T extends [
    infer F,
    ...infer R,
]
    ? [F, [...R]]
    : T

type testDemoInfer = demoInfer<[1, 2, 3, 4, 5]>
