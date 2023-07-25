import React, { useState } from "react";
import { YogaClass } from "types";
import RegisterForm from "components/shared/Form/Register"
import Link from "next/link";

const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`} target="_blank">{children}</a>;
};


function Timetable(classes: YogaClass[]) {
let groups = groupBy(classes.sort(function sortByDay(a, b) {
    let day1 = +a.weekday
    let day2 = +b.weekday
    return day1 - day2
  }), 'weekday')
  return groups
}
function groupBy(arr, property) {
  return arr.reduce(function (memo, x) {
    if (!memo[x[property]]) { memo[x[property]] = []} 
    memo[x[property]].push(x)
    return memo
  }, {})
};
const sortedTimetable = { "0": [ { "_id": "8ba49036-a92a-4bb6-a17f-9ec7fe25ffc6", "description": "Once the basic foundation is learned, Level 1 standing poses are deeply familiar and Sarvangasana can be held for at least 5 minutes, students move onto Level 2. This includes, refines and expands upon what was taught in Level 1. Sirsasana (headstand), Full Arm Balance, and Backbends are all introduced. Deeper twistings and forward extensions and variations in the familiar Shoulderstand are explored.", "registerUrl": "https://iyengarnyc.org/association-institutes/online-classes/", "venue": null, "weekday": "monday", "time": { "_type": "timeRange", "start": "10:00", "end": "11:30" }, "title": "General/ Level 2", "level": "2", "classType": "online" } ], "tuesday": [ { "_id": "2229ac97-524a-4ec5-a2a1-69a5dd02345e", "weekday": "tuesday", "title": "General/ Level 1", "description": "This class is accessible for students new to Iyengar Yoga, continuing beginners and students who want to focus on the foundation of the practice. Focus on fundamental postures and actions within standing poses, seated poses, twists, and forward bending. Inversions such as Halasana (plow pose) and Sarvangasana (shoulder stand) are introduced and refined.", "registerUrl": "https://iyengarnyc.org/association-institutes/online-classes/", "venue": { "_createdAt": "2023-07-08T09:46:08Z", "_rev": "8bWJNLsfg5fFtWbhrTAvBU", "_type": "venue", "description": [ { "_type": "block", "style": "normal", "_key": "1e6983cbe3c5", "markDefs": [], "children": [ { "_type": "span", "marks": [], "text": "https://iyengarnyc.org/association-institutes/mission/", "_key": "652c1641bdb60" } ] } ], "_id": "4565293b-6078-4058-828d-130476f7990c", "address": { "country": "USA", "other": "2nd Floor", "city": "New York", "street": "227 West 13th Street", "postalCode": "10011", "state": "NY" }, "_updatedAt": "2023-07-08T09:46:08Z", "url": "https://www.iyengarnyc.org", "name": "Iyengar Yoga Institute of New York" }, "time": { "_type": "timeRange", "start": "14:15", "end": "15:30" }, "level": "1", "classType": "hybrid" }, { "title": "General", "level": "General", "description": "For all students. Sign up via contact form.", "classType": "online", "_id": "816cf09a-5e79-4386-8f82-5525b9a734fe", "weekday": "tuesday", "time": { "_type": "timeRange", "start": "11:30", "end": "13:00" }, "registerUrl": "https://zoom.com", "venue": null } ], "wednesday": [ { "title": "General", "level": "General", "description": "For all students. Sign up via email", "classType": "online", "registerUrl": "https://zoom.com", "venue": null, "_id": "95de4c45-19cd-4c19-9eb5-03b5ca7d4b92", "weekday": "wednesday", "time": { "_type": "timeRange", "start": "18:00", "end": "19:30" } }, { "weekday": "wednesday", "time": { "_type": "timeRange", "start": "10:15", "end": "11:45" }, "title": "Beginner/ Level 1", "description": "For continuing Iyengar students deeply familiar with standing poses and can hold Sarvangasana for at least 5 minutes. Level 2 builds upon and expandsThis class is accessible for students new to Iyengar Yoga, continuing beginners and students who want to focus on the foundation of the practice. Focus on fundamental postures and actions within standing poses, seated poses, twists, and forward bending. Inversions such as Halasana (plow pose) and Sarvangasana (shoulder stand) are introduced and refined. the teachings of Level 1. Classes emphasize awareness in action and incorporate Sanskrit names and philosophy terms. Pranayama, which is the study of the breathing process, is also introduced. Level 2 introduces new postures such as Sirsasana (headstand), Full Arm Balance, and Backbends, as well as deeper twists, forward extensions, and variations in the familiar Shoulderstand.", "registerUrl": "https://iyengarnyc.org/association-institutes/online-classes/", "_id": "b2e582b9-5132-446c-a6d0-30cdd1120ce2", "level": "1", "classType": "hybrid", "venue": null }, { "description": "Once the basic foundation is learned, Level 1 standing poses are deeply familiar and Sarvangasana can be held for at least 5 minutes, students move onto Level 2. This includes, refines and expands upon what was taught in Level 1. Sirsasana (headstand), Full Arm Balance, and Backbends are all introduced. Deeper twistings and forward extensions and variations in the familiar Shoulderstand are explored.", "registerUrl": "https://iyengarnyc.org/association-institutes/online-classes/", "venue": { "address": { "street": "227 West 13th Street", "postalCode": "10011", "state": "NY", "country": "USA", "other": "2nd Floor", "city": "New York" }, "_createdAt": "2023-07-08T09:46:08Z", "_rev": "8bWJNLsfg5fFtWbhrTAvBU", "_type": "venue", "description": [ { "markDefs": [], "children": [ { "_type": "span", "marks": [], "text": "https://iyengarnyc.org/association-institutes/mission/", "_key": "652c1641bdb60" } ], "_type": "block", "style": "normal", "_key": "1e6983cbe3c5" } ], "_id": "4565293b-6078-4058-828d-130476f7990c", "name": "Iyengar Yoga Institute of New York", "_updatedAt": "2023-07-08T09:46:08Z", "url": "https://www.iyengarnyc.org" }, "title": "General/ Level 2", "level": "2", "classType": "hybrid", "_id": "c099e10a-d26c-4127-b5e8-5dec8a75423b", "weekday": "wednesday", "time": { "end": "09:45", "_type": "timeRange", "start": "08:15" } } ], "thursday": [ { "time": { "_type": "timeRange", "start": "11:30", "end": "13:00" }, "registerUrl": "https://zoom.com", "venue": null, "description": "For all students. Sign up via contact form.", "classType": "online", "_id": "b2f8e0f0-5359-4ba2-8cd6-5482b97fbf48", "weekday": "thursday", "title": "General", "level": "General" } ], "friday": [ { "_id": "a8270ef5-a855-4068-8bc8-45f3af114b64", "weekday": "friday", "description": "For all students. Sign up via contact form.", "classType": "online", "registerUrl": "https://zoom.com", "venue": null, "time": { "_type": "timeRange", "start": "11:30", "end": "13:00" }, "title": "General", "level": "General" }, { "time": { "_type": "timeRange", "start": "14:15", "end": "15:45" }, "title": "Sutra Study", "description": null, "classType": "online", "_id": "e31185b1-f817-487f-baa6-d4957307c329", "weekday": "friday", "level": "Free", "registerUrl": "https://zoom.com", "venue": null } ], "saturday": [ { "venue": { "name": "Iyengar Yoga Institute of New York", "_updatedAt": "2023-07-08T09:46:08Z", "url": "https://www.iyengarnyc.org", "_type": "venue", "description": [ { "markDefs": [], "children": [ { "_type": "span", "marks": [], "text": "https://iyengarnyc.org/association-institutes/mission/", "_key": "652c1641bdb60" } ], "_type": "block", "style": "normal", "_key": "1e6983cbe3c5" } ], "_id": "4565293b-6078-4058-828d-130476f7990c", "address": { "country": "USA", "other": "2nd Floor", "city": "New York", "street": "227 West 13th Street", "postalCode": "10011", "state": "NY" }, "_createdAt": "2023-07-08T09:46:08Z", "_rev": "8bWJNLsfg5fFtWbhrTAvBU" }, "level": "1", "description": "This class is accessible for students new to Iyengar Yoga, continuing beginners and students who want to focus on the foundation of the practice. Focus on fundamental postures and actions within standing poses, seated poses, twists, and forward bending. Inversions such as Halasana (plow pose) and Sarvangasana (shoulder stand) are introduced and refined.", "classType": "hybrid", "registerUrl": "https://zoom.org/2", "_id": "4cb7d7c3-0096-48da-8d8c-2adf36233309", "weekday": "saturday", "time": { "_type": "timeRange", "start": "14:15", "end": "15:30" }, "title": "General/ Level 1" } ] }
export type SortedTimetable = typeof sortedTimetable

  export function convertTime({startTime, endTime}) {
    
    let startingHour = startTime.split(':')[0];
    let endingHour = endTime.split(':')[0];
    const startingMinute = startTime.split(':')[1]
    const endingMinute = endTime.split(':')[1]
    if (startingHour > 12) {
      startingHour -= 12;
    }
    if (endingHour > 12) {
      endingHour -= 12;
    }
    let startingTime = `${startingHour}:${startingMinute}`;
    let endingTime = `${endingHour}:${endingMinute}`;;
    

    const startingTimeString = `${startingTime}${
      +startTime.split(':')[0] < 12 ? 'am' : 'pm'
    }`;
    const endingTimeString = `${endingTime}${
      +endTime.split(':')[0] < 12 ? 'am' : 'pm'
    }`;
    return `${startingTimeString}-${endingTimeString} EST`;
  }



export default function WeekSchedule({classes}:{classes: YogaClass[]}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function openModal() {
    setIsOpen(true);
  }
  let timetable: SortedTimetable = Timetable(classes)
  console.log(typeof timetable)
  
  const list = Object.entries(timetable)
  
  const sorter = {
    0:"sunday", // << if sunday is first day of week
    1:"monday",
    2:"tuesday",
    3: "wednesday",
    4:"thursday",
    5: "friday",
    6:"saturday"
  }
  return(
    <ul role="list" className="flex flex-start flex-col sm:flex-row sm:flex-wrap">
  {list.map((el, idx) => (
     <li className="divide-y divide-gray-200 bg-gray-200/25 rounded-lg bg-white text-center shadow">
      <div className="flex flex-1 flex-col p-4">
      <h3 className="mt-6 text-sm font-medium text-gray-900">{sorter[el[0]].toUpperCase()}</h3>
      {el[1].sort(function sortByTime(a, b) {
      let class1 = +a.time.start.split(':')[0]
      let class2 = +b.time.start.split(':')[0]
      return class1 - class2
    }).map((yogaClass, idx) => (
<dl className="mt-1 flex flex-grow flex-col justify-between" key={yogaClass._id}>
  
  <dt className="sr-only">Time</dt>
              <dd className="text-sm text-gray-500">{convertTime({startTime: yogaClass.time.start, endTime: yogaClass.time.end})}</dd>
              <dt className="sr-only">Class Title</dt>
              <dd className="text-sm text-gray-500">{yogaClass.title.toUpperCase()}</dd>
              <dt className="sr-only">Class Type</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {yogaClass.classType.toUpperCase()}
                </span>
              </dd>
<div className='flex items-center p-4'>
{yogaClass.registerUrl.includes('iyengar')?(<button className='rounded-md p-2 bg-indigo-200 font-bold text-white'><a href={yogaClass.registerUrl}>Sign Up &rarr;</a>
</button>) : (<><button className='rounded-md p-2 bg-indigo-200 font-bold text-white'><Link href={'/register'}>Sign Up &rarr;</Link>
</button></>)}
</div></dl>

      ))}</div></li>))} 
      </ul>
    )
    }
  



// function ClassSlot(yogaClass: YogaClass) {
//   const { id, title, time, kind, registrationLink } = yogaClass;
//   // const { openModal, setOpenModal } = React.useContext(GlobalContext);
//   return (
//     <td className='border border-slate-300' id={id}>
//       <span className="text-blue-500 font-bold">{time}</span>
//       <br />
//       <span className="text-black">{title}</span>
//       <br />
//       <span className="text-black">{kind}</span>
//       <br />
//       <span>
//         {registrationLink ? (
//           <a className="text-black" href={registrationLink}>
//             {"Signup @ IYAGNY"}
//           </a>
//         ) : (
//           <button>  <Mailto email="iyengarsusan@gmail.com" subject={`${yogaClass.day}-${yogaClass.time}`} body="Specify the date of the class to attend">Sign up</Mailto></button>
//         )}
//       </span>
     
//     </td>
//   );
// }
