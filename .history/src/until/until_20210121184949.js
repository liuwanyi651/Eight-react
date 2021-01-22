const setnav = obj =>{
    let nav = JSON.parse(localStorage.getItem("nav")) || [];
    let flag = nav.some(item =>{
        return item.path === obj.path
    })
    if(!flag){
        nav.push({
            title:obj.meta.title,
            path:obj.path
        })
    }
    localStorage.setItem("nav",JSON.stringify(nav))
}
export {
    set
}