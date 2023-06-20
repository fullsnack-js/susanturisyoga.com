import { IyengarClass } from "types";

interface ClassesProps {
    classes: IyengarClass[]
}
export default function Classes ({classes}: ClassesProps) {
    console.log({classes})
    return (
<div>
            {classes.map((classLevel, idx) => (
                <div key={classLevel.level}>
                    <h4>{classLevel.title}</h4>
                    <p>{classLevel.description}</p>
                    {classLevel?.classResources && (<a href={classLevel.classResources.url}>{classLevel.classResources.title}</a>)}
                </div>
            ))}
</div>
    
    )
}