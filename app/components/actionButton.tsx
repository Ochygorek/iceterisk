'use client'

import Image from 'next/image'
import React from 'react'

function actionButton(prop: any) {
  return (
    <button className={`button ${prop.variant === 'filled' ? 'filled' : 'outlined'} ${prop.variant === 'higlight' ? 'higlight' : ''} ${prop.variant === 'ghost' ? 'ghost' : ''} ${prop.size === 'large' ? 'large' : ''}`} onClick={() => console.log(prop.href)}>{prop.content}
    <Image
      src={`/${prop.image}.svg`}
      alt={`${prop.image} image`}
      width={20}
      height={20}
    />
    </button>
  )
}

export default actionButton