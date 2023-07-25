import { zodResolver } from '@hookform/resolvers/zod'
import ReactDOM from 'react-dom'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import axios from 'axios'
import { Fragment, useState } from 'react'
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { YogaClass } from 'types'
import { convertTime } from '../Schedule'
import { Dialog, Transition } from "@headlessui/react";
import { getDay } from 'date-fns'


const validationSchema = z.object({
  classTitle: z.string(),
  dateInput: z.string(),
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  messageBody: z
    .string()
    .min(10, { message: 'A valid message is required' })
    .max(500, { message: 'Message must not exceed 500 characters' }),
})
type FormInputs = z.infer<typeof validationSchema>

export default function RegisterForm({classes}:{classes:YogaClass[]}) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormInputs>({
    resolver: zodResolver(validationSchema),
  })
  const [result, setResult] = useState<string>();
  const [resultColor, setResultColor] = useState<string>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
  const params = {classTitle:data.classTitle, email: data.email, messageBody: data.messageBody, firstName: data.firstName, lastName: data.lastName, classDate:data.dateInput}

  try {
    const response = await axios.post('/api/register', params)
    if (response.status === 200) {
      // Handle success. You can change the message to whatever you want.
      setResult(
        `Thank you for signing up for ${params.classTitle}!`
      );
      setResultColor("text-green-500");
      // Reset the form after successful submission
      reset();
    }
  } catch (err: any) {
    // Handle errors. You can change the message to whatever you want.
    setResult(err.response.data.message + ": " + err.response.statusText);
    setResultColor("text-red-500");
  }
 }
 const sorter = {
  0:"Sunday", // << if sunday is first day of week
  1:"Monday",
  2:"Tuesday",
  3: "Wednesday",
  4:"Thursday",
  5: "Friday",
  6:"Saturday"
}
const currWeek = Array.from(Array(7).keys()).map((idx) => {const d = new Date(); d.setDate(d.getDate() - d.getDay() + idx); return d; });
// const isDayOfTheWeek = (date) => {
//   const day = getDay(date);
//  return day === +weekday
// }

// const [startDate, setStartDate] = useState(currWeek[+weekday]);
// console.log({weekday})


  return (
  
                <div className="w-full rounded-2xl transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <h2 className="mb-4 text-lg font-medium leading-6 text-gray-900 dark:text-gray-200">Class Registration</h2>
   
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto -mt-6 max-w-xl rounded sm:-mt-20"
      >
        <div>
          {/* <Controller 
            name="dateInput"
            control={control}
            render={({ field }) => (
              <ReactDatePicker
              selected={startDate}
              placeholderText='Select date'
        onChange={(date) => setStartDate(date)}
        value={startDate}
              minDate={new Date()}
              
            />
            )} */}
          {/* /> */}
        </div>
        <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">
        <div>
            <label
              htmlFor="classTitle"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Class
            </label>
            <div className="mt-2.5">
              <select
                id="classTitle"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                {...register('classTitle')}
              >
                {classes.map((yogaClass, idx) => (
                  <option value={`${sorter[+yogaClass.weekday].toUpperCase()} at ${convertTime({startTime: yogaClass.time.start, endTime: yogaClass.time.end})}`}>{`${yogaClass.title} | ${sorter[+yogaClass.weekday]} ${convertTime({startTime: yogaClass.time.start, endTime: yogaClass.time.end})}`}</option>
                ))}
              </select>
              {/* {errors.firstName && (
                <p className="mt-2 text-xs italic text-red-500">
                  {' '}
                  {errors.firstName?.message}
                </p>
              )} */}
            </div>
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Class Date
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="dateInput"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                {...register('dateInput')}
              />
              {errors.dateInput && (
                <p className="mt-2 text-xs italic text-red-500">
                  {' '}
                  {errors.dateInput?.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="firstName"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                {...register('firstName')}
              />
              {errors.firstName && (
                <p className="mt-2 text-xs italic text-red-500">
                  {' '}
                  {errors.firstName?.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="lastName"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                {...register('lastName')}
              />
              {errors.lastName && (
                <p className="mt-2 text-xs italic text-red-500">
                  {' '}
                  {errors.lastName?.message}
                </p>
              )}
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                {...register('email')}
              />
              {errors.email && (
                <p className="mt-2 text-xs italic text-red-500">
                  {' '}
                  {errors.email?.message}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Notes
            </label>
            <div className="mt-2.5">
              <textarea
                id="messageBody"
                rows={4}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                {...register('messageBody')}
              />
              {errors.messageBody && (
                <p className="mt-2 text-xs italic text-red-500">
                  {' '}
                  {errors.messageBody?.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
        <button
          className={`${
            isSubmitting
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          } bg-black hover:bg-gray-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline duration-300`}
          type="submit"
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>

        {isSubmitSuccessful && (
          <div className={`text-right ${resultColor}`}>{result}</div>
        )}
        </div>
      </form>
    </div>
  
  )
}
