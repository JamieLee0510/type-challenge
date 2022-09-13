/**
 * Because Function type could extend object, so need to 
 * filter it first.
 * Could use `type Check1 = Function extends object ? true : false`
 * to check it

 * */

type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends Function
        ? T[P]
        : T[P] extends object
        ? DeepReadonly<T[P]>
        : T[P]
}
type Check1 = Function extends object ? true : false // true
type Check2 = string extends object ? true : false // false
type Check3 = number extends object ? true : false // false

//javascript
function test(obj: Object) {
    let readonlyObj = {}
    for (let key in Object.keys) {
        // if( typeof obj[key]==Object){
        // }
    }
}
