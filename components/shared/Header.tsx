import { CustomPortableText } from 'components/shared/CustomPortableText'

interface HeaderProps {
  centered?: boolean
  image?: any
  subtitle?: any[]
  title?: string
}
export function Header(props: HeaderProps) {
  const { title, subtitle, image, centered = false } = props
  if (!subtitle && !title) {
    return null
  }
  return (
    <div className={`${centered ? 'text-center' : 'w-5/6 lg:w-3/5'}`}>
      {/* Title */}
      {title && (
        <div className="text-3xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </div>
      )}
      {/* Description */}
      {subtitle && (
        <div className="text-md mt-4 font-serif text-gray-600 md:text-lg">
          <CustomPortableText value={subtitle} />
        </div>
      )}
    </div>
  )
}
