/**
 * 這裏的chain option，要後面的覆蓋前面的
 *
 */
type Chainable<T = {}> = {
    option<Key extends string, Value>(
        key: Key extends keyof T ? never : Key,
        value: Value,
    ): Chainable<T & Record<Key, Value>>
    get(): T
}
interface CatInfo {
    age: number
    breed: string
}

type CatName = 'miffy' | 'boris' | 'mordred'

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: 'Persian' },
    boris: { age: 5, breed: 'Maine Coon' },
    mordred: { age: 16, breed: 'British Shorthair' },
}

cats.boris

// Javascript
let a = {
    Obj: {} as { [k: string]: any },
    option: function (key: string, val: any) {
        this.Obj[key] = val
    },
    get: function () {
        return this.Obj
    },
}
