const easeInOut = (t,b,c,d)=>{
    t /= d/2
    if(t<2){
        return c/2*t*t + b
    }
    t--
    return -c/2 *(t*(t-2)-1) + b
}
const easeInCubic = (t, b, c, d)=> {
    var tc = (t/=d)*t*t;
    return b+c*(tc);
};
const inOutQuintic = (t, b, c, d)=> {
    var ts = (t/=d)*t,
    tc = ts*t;
    return b+c*(6*tc*ts + -15*ts*ts + 10*tc);
  };
  function scrollTo(to,callback,duration){
        function move(amount) {
            document.documentElement.scrollTop  = amount
            document.body.parentNode.scrollTop = amount
            document.body.scrollTop = amount
        }
        function position() {
            return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop
        }
        let start = position(),
        change = to -start,
        currentTime = 0,
        increment = 20;
        duration = (typeof(duration) === 'undefined')?500:duration
        let animateScroll = () =>{
            currentTime+=increment
            let val = easeInOut(currentTime,start,change,duration)
            move(val)
            if(currentTime<duration){
                requestAnimationFrame(animateScroll)
            }else {
                if(callback&&typeof callback === 'function'){
                    callback()
                }
            }
        }
        animateScroll()
  }