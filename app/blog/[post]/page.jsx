import { PathParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import React from 'react'

const page = ({params}) => {
  return (
    <div>
        blog\post  dynamic component, params = {params.post}
    </div>
  )
}

export default page