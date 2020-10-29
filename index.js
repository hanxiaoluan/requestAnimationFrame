function loadingBar(element){
    let handle
    return ()=>{
        
        element.style.width = 0
        cancelAnimationFrame(handle)
        // 回掉函数
        let _progress = () => {
            let elementWidth = parseInt(element.style.width)
            if(elementWidth<200){
                console.log(1)
                element.style.width = `${elementWidth+5}px`
                handle = requestAnimationFrame(_progress)
            }else {
                cancelAnimationFrame(handle)
            }
        }
        handle = requestAnimationFrame(_progress)
    }
}