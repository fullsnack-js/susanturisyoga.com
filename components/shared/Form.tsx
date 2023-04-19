import { zodResolver } from '@hookform/resolvers/zod'
import ReactDOM from 'react-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

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
type ValidationSchema = z.infer<typeof validationSchema>
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })
  const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data)

  return (
    <div className="drop-shadow border-solid border-2 rounded-md border-gray-400 isolate bg-white py-24 px-6 sm:py-32 lg:px-8 mt-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto -mt-6 max-w-xl rounded sm:-mt-20"
      >
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
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
            type="submit"
            className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
      <div className="mx-auto max-w-2xl text-center">
        {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact sales
        </h2> */}
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Thank you for considering me as your yoga instructor. I look forward
          to hearing from you soon!
        </p>
      </div>
    </div>
  )
}
