const testSubtitle =
  'Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.'
export default function Example({ subtitle }: { subtitle?: string }) {
  const ctaButton = (
    <button className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">
      <a href="#">Get started</a>
    </button>
  )
  const ctaArrow = (
    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
      Learn more <span aria-hidden="true">→</span>
    </a>
  )
  return (
    <div className="bg-white">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Boost your productivity.
            <br />
            Start using our app today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            {subtitle ?? testSubtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {ctaButton}
            {ctaArrow}
          </div>
        </div>
      </div>
    </div>
  )
}
