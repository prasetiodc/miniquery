class EventDispatcher{
    static on(params, name, functions){
        document.querySelectorAll(params).forEach((value)=>{
            value.addEventListener(name, functions, false)
        })
    }

    static trigger(params, name){
        let event = new Event(name)
        document.querySelectorAll(params).forEach((value)=>{
            value.dispatchEvent(event)
        })
    }
}