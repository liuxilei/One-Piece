import { User } from "./SearchPanel";

interface Project {
    id: string;
    name: string;
    personId: string;
    title: string;
    organization: string
}

interface Props {
    list: Project[];
    users: User[]
}

export default ({ list, users }: Props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>负责人</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map(project => (
                        <tr key={project.id}>
                            <td>{project.name}</td>
                            <td>{users.find(user => user.id === project.personId)?.name || "未知"}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}