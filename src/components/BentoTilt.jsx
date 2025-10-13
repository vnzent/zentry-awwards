import React from 'react'

const BentoTilt = ({ children, className = ""}) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default BentoTilt