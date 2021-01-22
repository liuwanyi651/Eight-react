const setnav = obj =>{
    let nav = JSON.parse(localStorage.getItem("nav")) || [];
    let flag = nav.some(item =>{
        return item.path === obj.path
    })
    if
}