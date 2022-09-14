type ReplaceAll<
    S extends string,
    From extends string,
    To extends string,
> = From extends ''
    ? S
    : S extends `${infer L}${From}${infer R}`
    ? `${L}${To}${ReplaceAll<R, From, To>}`
    : S

type test = ReplaceAll<'foobarbar', 'bar', 'foo'>

// 根據 replace基礎，只要遞迴 Right就好
