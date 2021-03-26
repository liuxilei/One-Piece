import { useState } from "react";

const useArray = <T>(initialArray: T[]) => {
    const [value, setValue] = useState(initialArray);
    return {
        value,
        clear: () => setValue([]),
        removeIndex: (index: number) => {
            const copy = [...value];
            copy.splice(index, 1);
            setValue(copy)
        },
        add: (item: T) => setValue([ ...value, item])
    }
}

export default useArray;