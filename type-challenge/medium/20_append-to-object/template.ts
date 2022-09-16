type AppendToObject<
    T extends object,
    AddKey extends string,
    V,
> = AddKey extends keyof T
    ? T
    : {
          [Key in keyof T | AddKey]: Key extends keyof T
              ? T[Key]
              : V
      }
