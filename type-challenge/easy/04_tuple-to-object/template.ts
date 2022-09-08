type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K
}

// JS
function arrToObj(arr: any[]) {
    type demo = {
        [k: string]: any
    }
    let obj: demo = {}
    arr.forEach((element: any) => {
        obj[String(element)] = element
    })
}
