const convert24hourTo12HourFormat = (time) => {
  let [hours, minutes] = time.split(':')
  let ampm = ' AM'
  if (hours >= 12) {
    ampm = ' PM'
  }
  if (hours > 12) {
    hours = hours - 12
  }
  const formatted_time = `${hours}:${minutes}${ampm}`
  return formatted_time
}
const getTimeList = (timeList: {value: string}[]) =>
  timeList.map((timeSlot, index) => ({
    value: timeSlot.value,
    title: convert24hourTo12HourFormat(timeSlot.value),
  }))

export const timeList12h = [
  {value: '06:00', title: '06:00 AM'},
  {value: '06:15', title: '06:15 AM'},
  {value: '06:30', title: '06:30 AM'},
  {value: '06:45', title: '06:45 AM'},
  {value: '07:00', title: '07:00 AM'},
  {value: '07:15', title: '07:15 AM'},
  {value: '07:30', title: '07:30 AM'},
  {value: '07:45', title: '07:45 AM'},
  {value: '08:00', title: '08:00 AM'},
  {value: '08:15', title: '08:15 AM'},
  {value: '08:30', title: '08:30 AM'},
  {value: '08:45', title: '08:45 AM'},
  {value: '09:00', title: '09:00 AM'},
  {value: '09:15', title: '09:15 AM'},
  {value: '09:30', title: '09:30 AM'},
  {value: '09:45', title: '09:45 AM'},
  {value: '10:00', title: '10:00 AM'},
  {value: '10:15', title: '10:15 AM'},
  {value: '10:30', title: '10:30 AM'},
  {value: '10:45', title: '10:45 AM'},
  {value: '11:00', title: '11:00 AM'},
  {value: '11:15', title: '11:15 AM'},
  {value: '11:30', title: '11:30 AM'},
  {value: '11:45', title: '11:45 AM'},
  {value: '12:00', title: '12:00 PM'},
  {value: '12:15', title: '12:15 PM'},
  {value: '12:30', title: '12:30 PM'},
  {value: '12:45', title: '12:45 PM'},
  {value: '13:00', title: '1:00 PM'},
  {value: '13:15', title: '1:15 PM'},
  {value: '13:30', title: '1:30 PM'},
  {value: '13:45', title: '1:45 PM'},
  {value: '14:00', title: '2:00 PM'},
  {value: '14:15', title: '2:15 PM'},
  {value: '14:30', title: '2:30 PM'},
  {value: '14:45', title: '2:45 PM'},
  {value: '15:00', title: '3:00 PM'},
  {value: '15:15', title: '3:15 PM'},
  {value: '15:30', title: '3:30 PM'},
  {value: '15:45', title: '3:45 PM'},
  {value: '16:00', title: '4:00 PM'},
  {value: '16:15', title: '4:15 PM'},
  {value: '16:30', title: '4:30 PM'},
  {value: '16:45', title: '4:45 PM'},
  {value: '17:00', title: '5:00 PM'},
  {value: '17:15', title: '5:15 PM'},
  {value: '17:30', title: '5:30 PM'},
  {value: '17:45', title: '5:45 PM'},
  {value: '18:00', title: '6:00 PM'},
  {value: '18:15', title: '6:15 PM'},
  {value: '18:30', title: '6:30 PM'},
  {value: '18:45', title: '6:45 PM'},
  {value: '19:00', title: '7:00 PM'},
  {value: '19:15', title: '7:15 PM'},
  {value: '19:30', title: '7:30 PM'},
  {value: '19:45', title: '7:45 PM'},
  {value: '20:00', title: '8:00 PM'},
  {value: '20:15', title: '8:15 PM'},
  {value: '20:30', title: '8:30 PM'},
  {value: '20:45', title: '8:45 PM'},
  {value: '21:00', title: '9:00 PM'},
]

export const verifyRange = (fields) => {
  const {start, end} = fields
  if (Number(end.replace(/:/g, '')) < Number(start.replace(/:/g, ''))) {
    return 'End time must be later than start time'
  } else {
    return true
  }
}
