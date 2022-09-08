/**
 * seen this need recursive solution,
 * because T could be Promise<Promise<Promise<any>>>
 */

type MyAwaited<T extends Promise<unknown>> =
    T extends Promise<infer X>
        ? X extends Promise<unknown>
            ? MyAwaited<X>
            : X
        : T
//javascript
async function myAwaited(t: Promise<any> | any) {
    const data = await t
    return data
}
