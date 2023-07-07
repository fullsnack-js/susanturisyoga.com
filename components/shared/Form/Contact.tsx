import { zodResolver } from '@hookform/resolvers/zod'
import ReactDOM from 'react-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import axios from 'axios'
import { useState } from 'react'


const validationSchema = z.object({
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
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormInputs>({
    resolver: zodResolver(validationSchema),
  })
  const [result, setResult] = useState<string>();
  const [resultColor, setResultColor] = useState<string>();
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
  const params = {email: data.email, messageBody: data.messageBody, firstName: data.firstName, lastName: data.lastName}
  
  try {
    const response = await axios.post('/api/send-email', params)
    if (response.status === 200) {
      // Handle success. You can change the message to whatever you want.
      setResult(
        "Your message has been sent. Thank you for contacting us. We will get back to you as soon as possible."
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


  

  return (
    <div className="drop-shadow border-solid border-2 rounded-md border-gray-300 isolate bg-white py-24 px-6 sm:py-32 lg:px-8 mt-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto -mt-6 max-w-xl rounded sm:-mt-20"
      >
        <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">
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
              Message
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
