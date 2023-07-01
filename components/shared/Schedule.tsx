import React from "react";
// import { ModalDialog } from "./Components/Dialog";
// import "./styles.css";
// import { GlobalContext } from "./contexts/GlobalContext";
// import { RegistrationFormModal } from "./Components/RegistrationFormModal";
export interface YogaClass {
  id: string;
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
  title: string;
  time: string;
  kind: "HYBRID" | "ONLINE";
  registrationLink?: string;
}

const yogaClasses: YogaClass[] = [
  {
    id: "m-10-online-iyagny-level2",
    day: "Monday",
    time: "10-11:30",
    title: "General/ Level 2",
    kind: "ONLINE",
    registrationLink:
      "https://iyengarnyc.org/association-institutes/online-classes/"
  },
  {
    id: "w-815-hybrid-iyagny-level2",
    day: "Wednesday",
    time: "8:15-9:45",
    title: "General/ Level 2",
    kind: "HYBRID",
    registrationLink:
      "https://iyengarnyc.org/association-institutes/online-classes/"
  },
  {
    id: "w-1015-hybrid-iyagny-level1",
    day: "Wednesday",
    time: "10:15-11:45",
    title: "General/ Level 1",
    kind: "HYBRID",
    registrationLink:
      "https://iyengarnyc.org/association-institutes/online-classes/"
  },
  {
    id: "w-18-online-susan-general",
    day: "Wednesday",
    time: "6-7:30",
    title: "General",
    kind: "ONLINE"
  },
  {
    id: "r-1130-online-susan-general",
    day: "Thursday",
    time: "11:30-1",
    title: "General",
    kind: "ONLINE"
  },
  {
    id: "f-1415-online-iyanyc-sutra",
    day: "Friday",
    time: "2:15-3:45",
    title: "Sutra Study - FREE",
    kind: "ONLINE",
    registrationLink:
      "https://iyengarnyc.org/association-institutes/online-classes/"
  },
  {
    id: "sa-1130-online-susan-general",
    day: "Saturday",
    time: "11:30-1",
    title: "General",
    kind: "ONLINE"
  },
  {
    id: "sa-1415-hybrid-iyanyc-level1",
    day: "Saturday",
    time: "2:15-3:45",
    title: "General/ Level 1",
    kind: "HYBRID",
    registrationLink:
      "https://iyengarnyc.org/association-institutes/online-classes/"
  }
];

function ClassSlot(yogaClass: YogaClass) {
  const { id, title, time, kind, registrationLink } = yogaClass;
  // const { openModal, setOpenModal } = React.useContext(GlobalContext);
  return (
    <td id={id}>
      <span className="text-blue-500 font-bold">{time}</span>
      <br />
      <span className="text-black">{title}</span>
      <br />
      <span className="text-black">{kind}</span>
      <br />
      <span>
        {registrationLink ? (
          <a className="text-black" href={registrationLink}>
            {"Signup @ IYAGNY"}
          </a>
        ) : (
          <button>{"Sign Up"}</button>
        )}
      </span>
      {/* {openModal && (
        <RegistrationFormModal
          yogaClass={yogaClass}
          openModal={openModal}
          closeModal={() => setOpenModal(false)}
        />
      )} */}
    </td>
  );
}

const MobileSchedule = () => (
  <div className="w-full flex flex-col items-center justify-center space-y-4 bg-white p-6 sm:hidden">
    {yogaClasses.map((yogaClass, idx) => (
      <div key={yogaClass.id} className="rounded-sm bg-gray-200 p-4">
        <h4 className="font-bold text-green-400">
          {yogaClass.day.toUpperCase()}
        </h4>
        <div>
          <span className="text-blue-500 font-bold">{yogaClass.time}</span>
          <br />
          <span className="text-black">{yogaClass.title}</span>
          <br />
          <span className="text-black">{yogaClass.kind}</span>
          <br />
          <span>
            {yogaClass.registrationLink ? (
              <a className="text-black" href={yogaClass.registrationLink}>
                {"Signup @ IYAGNY"}
              </a>
            ) : (
              <a href={"/contact"}>{"Sign Up"}</a>
            )}
          </span>
        </div>
      </div>
    ))}
  </div>
);

export default function Schedule() {
  // const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      {/* <ModalDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <button onClick={() => setIsOpen(true)}>Open Dialog</button> */}
      {/* </div> */}

      <div className="hidden sm:flex sm:w-full">
        <table className="sm:w-full sm:table-auto">
          <thead>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <ClassSlot {...yogaClasses[1]} />
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <ClassSlot {...yogaClasses[0]} />
              <td></td>
              <ClassSlot {...yogaClasses[2]} />
              <td></td>
              <td>
                <br />
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <ClassSlot {...yogaClasses[6]} />
              <td>
                <br />
              </td>
              <ClassSlot {...yogaClasses[4]} />
              <td></td>
              <ClassSlot {...yogaClasses[6]} />
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <ClassSlot {...yogaClasses[5]} />
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <ClassSlot {...yogaClasses[3]} />
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <MobileSchedule />
    </>
  );
}
