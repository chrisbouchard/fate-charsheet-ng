export interface FromOptionsConstructor<T> {
    new (options: T): T;
}

export function FromOptions<T>(defaultOptions: Partial<T> = {}): FromOptionsConstructor<T> {
    class FromOptionsClass {
        constructor(options: any) {
            Object.assign(this, defaultOptions);
            Object.assign(this, options);
        }
    }

    return FromOptionsClass as FromOptionsConstructor<T>;
}
