import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
    Expect<
        Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>
    >,
]

type casesPush = [
    Expect<Equal<MyPush<[3, 2, 1], 0>, [3, 2, 1, 0]>>,
]

type casesShift = [Expect<Equal<MyShift<[3, 2, 1]>, 3>>]
