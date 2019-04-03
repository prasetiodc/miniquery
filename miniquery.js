class SweetSelector{
    static select(params){
        return document.querySelectorAll(params)
    }
}

class DOM{
    static hide(params) {
        document.querySelectorAll(params).forEach((value) => {
            value.style.display = 'none'
        })
    }

    static show(params){
        SweetSelector.select(params).forEach((value)=>{
            value.style.display=''
        })
    }
    
    static addClass(params, name){
        SweetSelector.select(params).forEach((value)=>{
            value.classList.add(name)
            // console.log(value);
        })
    }

    static removeClass(params, name){
        SweetSelector.select(params).forEach((value)=>{
            value.classList.remove(name)
            // console.log(value);
        })
    }
}

class EventDispatcher{
    static on(params, name, functions){
        SweetSelector.select(params).forEach((value)=>{
            value.addEventListener(name, functions, false)
        })
    }

    static trigger(params, name){
        let event = new Event(name)
        SweetSelector.select(params).forEach((value)=>{
            value.dispatchEvent(event)
        })
    }
}

class AjaxWrapper{
    static request(params){
        let oReq = new XMLHttpRequest()
        oReq.addEventListener('load', params.success)
        oReq.addEventListener('fail', params.fail)
        oReq.open(params.type, params.url)
        oReq.send(null)
    }
}
