import React from 'react'
import NavLinkTag from '../Elements/NavLinkTag'

export default function Breadcrumb({text, tagText, Path}) {
  return (
    <div className='h-[400px] w-full bg-slate-900 text-white flex items-center'>
        <span className='block'>
            <p>
              <NavLinkTag Path={Path} tagText={tagText} /> / {text}
            </p>
        </span>
    </div>
  )
}
