import React from 'react'

 const navTop = () => {
     let nav = JSON.parse(localStorage.getItem('nav')) || []
     let goto=(path)=>{
         console.log(path);
     }
    return (
        <div className='flex'>
            {
            nav.map((item,index)=>{
                return (
                    <div className='mr20' key={item.path} onClick={()=> goto}>

                    </div>
                )
            })
            }
        </div>
    )
}
export default navTop