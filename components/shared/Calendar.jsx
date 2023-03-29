import googleCalendarPlugin from '@fullcalendar/google-calendar'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
const Schedule = () => {
  return (
    <FullCalendar
      plugins={[timeGridPlugin, googleCalendarPlugin]}
      googleCalendarApiKey={'AIzaSyBZcf0dltxnVwkQ3ZMXYmjRJ4HyI8Jf6zs'}
      eventSources={[
        {
          googleCalendarId:
            'r0ueaeu4pa6af40cvh3ddqp87s@group.calendar.google.com',
        },
        {
          googleCalendarId:
            '2er5kvd9gni0sbgd11k53fbs4s@group.calendar.google.com',
        },
      ]}
      initialView="timeGridWeek"
    />
  )
}
export default Schedule
