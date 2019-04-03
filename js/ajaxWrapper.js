class AjaxWrapper{
    static request(params){
        let oReq = new XMLHttpRequest()
        oReq.addEventListener('load', params.success)
        oReq.addEventListener('fail', params.fail)
        oReq.open(params.type, params.url)
        oReq.send(null)
    }
}