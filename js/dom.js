class DOM{
    static hide(params) {
        document.querySelectorAll(params).forEach((value) => {
            value.style.display = 'none'
        })
    }

    static show(params){
        document.querySelectorAll(params).forEach((value)=>{
            value.style.display=''
        })
    }
    
    static addClass(params, name){
        document.querySelectorAll(params).forEach((value)=>{
            value.classList.add(name)
        })
    }

    static removeClass(params, name){
        document.querySelectorAll(params).forEach((value)=>{
            value.classList.remove(name)
        })
    }
}