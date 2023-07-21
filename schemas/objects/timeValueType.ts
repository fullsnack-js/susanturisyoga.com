import { defineType } from "sanity";

export const timeValueType = defineType({
    name: 'timeValue',
    title: 'Time',
    type: 'string',
    options: {
        list: ALLOWED_TIMES()
    }
})

export function ALLOWED_TIMES() {
    const times = [];
    for (let h=6; h<23; h++) {
        for (let m=0; m< 60; m+=15) {
            times.push(`${h.toString().padStart(2, '0')}:${m.toString()}`)
        }
    }
    return times
}