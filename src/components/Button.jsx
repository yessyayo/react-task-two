import React from 'react'

function Button() {
  return (
    <div>
        <div className='selector-container'>
            
            <div className='indicator'>
                <div className='page-indicator'>
                    <div>0</div>
                    <div>1</div>
                </div>
                <div className='divider'>/</div>
                <div className='current-page'>05</div>
            </div>

            <div className='arrow-icon'>
                <i className='left-arrow pi pi-arrow-left'></i>
                <i className='right-arrow pi pi-arrow-right'></i>
            </div>
        </div>

        
    </div>
  )
}

export default Button