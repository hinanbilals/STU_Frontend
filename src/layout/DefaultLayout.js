import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div style={{ backgroundColor: 'White' }}>
      <AppSidebar />
      <div  className="wrapper d-flex flex-column min-vh-100 ">
        <AppHeader />
        <div  className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter style={{ backgroundColor: 'White' }}/>
      </div>
    </div>
  )
}

export default DefaultLayout
