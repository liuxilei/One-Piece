import useArray from "@/hooks/useArray";
import useMount from "@/hooks/useMount";

export default () => {
    const persons: { name: string; age: number }[] = [
        { name: "jack", age: 25 },
        { name: "ma", age: 22 }
    ];
    const { value, clear, removeIndex, add} = useArray(persons);
    useMount(() => {
        // console.log(value.notExist);
        // add({name: "david"});
        // removeIndex("123")
    })
    return (
        <>
            <button onClick={() => add({name: "john", age: 22})}>add john</button>
            <button onClick={() => removeIndex(0)}>remove 0</button>
            <button style={{marginBottom:"50px"}}onClick={clear}> clear</button>
            {
                value.map((person, index) => {
                    return (
                        <div style={{marginBottom: "30px"}} key={index}>
                            <span style={{color: "red"}}>{index}</span>
                            <span>{person.name}</span>
                            <span>{person.age}</span>
                        </div>
                    )
                })
            }
        </>
    )
}