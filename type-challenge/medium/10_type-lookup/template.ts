type LookUp<
    T extends { type: string; [key: string]: any },
    U extends T['type'],
> = T extends T ? (U extends T['type'] ? T : never) : never

/**
 * T extends T
 * 是為了從聯合類型中提取各個子類型
 */
