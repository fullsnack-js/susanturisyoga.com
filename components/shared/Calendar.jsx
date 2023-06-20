import googleCalendarPlugin from '@fullcalendar/google-calendar'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz')


// Obtain a Date instance that will render the equivalent Berlin time for the UTC date
const date = new Date()
const timeZone = 'America/New_York'
const zonedDate = utcToZonedTime(date, timeZone)
// zonedDate could be used to initialize a date picker or display the formatted local date/time

// Set the output to "1.9.2018 18:01:36.386 GMT+02:00 (CEST)"
const pattern = 'HH:mm:ss'
const output = format(zonedDate, pattern, { timeZone })
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
      slotMinTime={"07:00:00"}
      slotMaxTime={"21:00:00"}
      nowIndicator={true}
      scrollToTime={output}
    />
  )
}
export default Schedule
