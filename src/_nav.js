import React from 'react'
import CIcon from '@coreui/icons-react'
import {

  cilSpeedometer,
  cilThumbUp, 
  cilBeachAccess,
 
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Dashboard',
  //   to: '/dashboard',
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,

  // },
  {
    component: CNavTitle,
    name: 'Administration',
  },
  {
    component: CNavGroup,
    name: 'Users',
    to: '/base',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Users',
        to: '/users',
      },
      {
        component: CNavItem,
        name: 'Top Users',
        to: '/top-user',
      },

    ],
  },
  {
    component: CNavItem,
    name: 'Thumbs Up',
    to: '/thumbs-up',
    icon: <CIcon icon={cilThumbUp} customClassName="nav-icon" />,

  },
  {
    component: CNavItem,
    name: 'Policies',
    to: '/policies',
    icon: <CIcon icon={cilBeachAccess} customClassName="nav-icon" />,

  },
]

export default _nav
