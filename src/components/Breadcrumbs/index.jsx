import { Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'

const Breadcurmbs = () => {
  return (
    <Breadcrumbs>
<Link underline="none" color="inherit" href="/">
    MUI
  </Link>
  <Link
    underline="none"
    color="inherit"
    href="/material-ui/getting-started/installation/"
  >
    Core
  </Link>
  <Typography color="text.primary">Breadcrumbs</Typography>
    </Breadcrumbs>
  )
}

export default Breadcurmbs