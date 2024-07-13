import React from 'react'

const page = ({params}) => {
  return (
    <div>
        greeting\name dynamic component, params = {params.name}
    </div>
  )
}

export default page