export const isFalsy = (value: unknown):boolean => value === 0 ? true : Boolean(value);

export const cleanObject = (object: Object) => {
    const result = { ...object };
    Object.keys(result).forEach(key => {
        //@ts-ignore
        const value = result[key];
        if (!isFalsy(value)) {
            //@ts-ignore
            delete result[key];
        }
    });
    return result;
}