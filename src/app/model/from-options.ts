export interface FromOptionsConstructor<T> {
    new (options: T): T;
}

export function FromOptions<T>(): FromOptionsConstructor<T> {
    return FromOptionsClass as FromOptionsConstructor<T>;
}

class FromOptionsClass {
    constructor(options: any) {
        Object.assign(this, options);
    }
}
