type MyOmitPick<T, K extends keyof T> = { [P in K]: T[P] }
type MyOmitExclude<T, K> = T extends K ? never : T

type MyOmit<T, K extends keyof T> = MyOmitPick<
    T,
    MyOmitExclude<keyof T, K>
>
//type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
