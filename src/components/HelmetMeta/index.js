import React from 'react'
import { Helmet } from 'react-helmet'

export const HelmetMeta = ({ title, description }) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
    </Helmet>
  )
}
