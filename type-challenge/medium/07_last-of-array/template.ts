type Last<T extends any[]> = T extends [
    ...infer Rest,
    infer LastItem,
]
    ? LastItem
    : never
