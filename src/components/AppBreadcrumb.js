import React from 'react'
import { useLocation } from 'react-router-dom'

import routes from '../routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'
 
const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname


  const getRouteName = (pathname, routes) => {
 
 
  

    if(pathname==="/")
    {
      pathname="/users"
      // const currentRoute = routes.find((route) => route.tempPath === 'users')
      // return currentRoute.name
    }

      const currentRoute = routes.find((route) => route.tempPath === pathname)
       
      return currentRoute.name
   

  }

  const getBreadcrumbs = (location) => {

    
    console.log(location)
    
    var checkNumber = location.substr(-1)
    console.log("checknumber",checkNumber);
    if (isNaN(checkNumber)) {

      console.log("inside if",location)
      location = location.slice(0, location.length-1)
      console.log("inside if after",location)


    }
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {

 

      const currentPathname = `${prev}/${curr}`

 

      breadcrumbs.push({
        pathname: currentPathname,
        name: getRouteName(currentPathname, routes),
        active: index + 1 === array.length?  true : false,
      })

      return currentPathname
    })
    return breadcrumbs

  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <CBreadcrumb className="m-0 ms-2">
      <CBreadcrumbItem href="/users">Home</CBreadcrumbItem>

      {breadcrumbs.map((breadcrumb, index) => {
        return (

          <CBreadcrumbItem
            {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
            key={index}
          >
            {breadcrumb.name}
          </CBreadcrumbItem>
        )
      })}
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
