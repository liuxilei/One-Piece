import { useState, useEffect } from "react";
import List from "./List";
import SearchPanel from "./SearchPanel";
import { apiUrl } from "./constants";
import { cleanObject } from "./utils";
import useMount from "@/hooks/useMount";
import useDebounce from "@/hooks/useDebounce";
import qs from "qs";

export default () => {
    const [param, setParam] = useState({
        name: "",
        personId: ""
    });
    const debouncedParam = useDebounce(param);
    const [list, setList] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
            if (response.ok) {
                setList(await response.json());
            }
        });
    }, [debouncedParam]);
    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json());
            }
        });
    });
    return (
        <div>
            <SearchPanel 
                param={param}
                setParam={setParam}
                users={users}
                />
            <List 
                list={list}
                users={users}
                />
        </div>
    )
}