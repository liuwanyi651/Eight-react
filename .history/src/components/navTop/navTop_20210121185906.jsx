import React from 'react'

 const navTop = () => {
     let nav = JSON.parse(localStorage.getItem('nav')) || []
     let goto=(path)=>{
         console.log(path);
     }
    return (
        <div className='flex'>
            {
            nav.map((item.))
            }
        </div>
    )
}
export default navTop