import React from 'react'

function NewBookItem({ imgUrl, title, id }) {
    return (
        <div className='col-lg-2 col-md-5 col-sm-3 mt-4 layout-new-book'>

            <img class="img-fluid" style={ { width: '100%', height: '180px' } } src={imgUrl} alt="" />

            <div className='content-newBookItem text-center'>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default NewBookItem