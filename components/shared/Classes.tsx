import { IyengarClass } from "types";
interface ClassesProps {
    classes: IyengarClass[]
}
export default function Classes ({classes}:ClassesProps) {
    return (
        <div>
{classes.map((classLevel, idx) => (
    <div key={classLevel.level}>
    <h4>{classLevel.title}</h4>
    <p>{classLevel.description}</p>
    </div>
))}
        </div>
    )
}