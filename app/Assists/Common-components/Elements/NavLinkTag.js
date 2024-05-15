"use-client"
import React from 'react'
import NavLink from 'next/link'

export default function NavLinkTag({tagText, Path}) {
  return (
    <NavLink to={Path} activeClassName="active">
        {tagText}
    </NavLink>
  )
}
