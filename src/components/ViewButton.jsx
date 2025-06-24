import React from 'react'

function ViewButton({content, className}) {
  return (
    <div className='project-text'>
        <button className={className}>
            {content}
            <span className='pi pi-arrow-right'></span>
        </button>
    </div>
  )
}

export default ViewButton