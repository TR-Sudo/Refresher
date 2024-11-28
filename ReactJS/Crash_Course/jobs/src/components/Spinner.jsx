import React from 'react'
import { ClipLoader } from 'react-spinners'

const override ={
    display: 'black',
    margin: '100px auto'
}

function Spinner({loading}) {
  return (
    <ClipLoader
        color='#4338ca'
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
  )
}

export default Spinner