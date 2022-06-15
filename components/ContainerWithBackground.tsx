import Image from 'next/dist/client/image'
import * as React from 'react'
import { ReactNode } from 'react'

interface ContainerWithBackgroundProps {
  className?: string
  id?: string
  imgClassName?: string
  children?: ReactNode
  backgroundImage?: StaticImageData
  backgroundImageSrc?: string
  childrenWrapperClass?: string
}

export function ContainerWithBackground(props: ContainerWithBackgroundProps) {
  const {
    className,
    children,
    backgroundImage,
    imgClassName,
    backgroundImageSrc,
    childrenWrapperClass,
    id,
  } = props

  if (backgroundImageSrc)
    return (
      <div
        style={{
          backgroundImage: `url(${backgroundImageSrc})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        id={id}
        className={className}
      >
        {children}
      </div>
    )
  if (backgroundImage)
    return (
      <div className={`relative z-0 ${className || ''}`} id={id}>
        <Image
          src={backgroundImage}
          layout="fill"
          className={`object-center object-cover pointer-events-none ${
            imgClassName || ''
          }`}
          alt=""
        />
        {children && (
          <div className={`relative z-1 w-full ${childrenWrapperClass ?? ''}`}>
            {children}
          </div>
        )}
      </div>
    )

  return <> {children} </>
}
