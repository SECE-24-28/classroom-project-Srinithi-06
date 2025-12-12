import React from 'react'

export const Content = ({frnds}) => {
  return (
    <ol>
        {
            frnds.map((val,indx)=>(<li key= {indx}>{val}</li>))
        }
        </ol>
  )
}
export default Content
