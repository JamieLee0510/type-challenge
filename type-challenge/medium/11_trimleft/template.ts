type Blank = ' ' | '\n' | '\t'

type TrimLeft<S extends string> =
    S extends `${Blank}${infer R}` ? TrimLeft<R> : S

/**
 * 1. 用模板字符串聯集模擬繼承類型
 * 2. 用遞迴一個個去除空白字符
 */
