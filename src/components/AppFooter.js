import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter style={{ backgroundColor: 'White' }}>
      <div >
        <a href="/#" target="_blank" rel="noopener noreferrer">
          ThumbsUp
        </a>
        <span className="ms-1">&copy; 2022 Systems Limited.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="/#" target="_blank" rel="noopener noreferrer">
        Systems Limited
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
