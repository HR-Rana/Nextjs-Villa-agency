"use-client"
import Link from 'next/link'
import React from 'react'

export default function LinkTag({Path, tagText}) {
  return (
    <Link to={Path}>{tagText}</Link>
  )
}
