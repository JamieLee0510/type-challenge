/**
 * type isPillarMen =
 * Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>
 * // expected to be `false`
 *
 * seen it also need recursive solution,
 * in order to check each member
 */

type ImportEqual<X, Y> = (<T>() => T extends X
    ? 1
    : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false
type Includes<T extends readonly any[], U> = T extends [
    infer First,
    ...infer Rest,
]
    ? ImportEqual<First, U> extends true
        ? true
        : Includes<Rest, U>
    : false
