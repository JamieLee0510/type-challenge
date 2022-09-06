type MyExclude<T, U> = T extends U ? never : T

// 相反的操作--取出符合的type
type MyInclude<T, U> = T extends U ? T : never
