(function() {
    /**
     * Staggered functionallity
     */
    window.addEventListener('resize', (e)=>{
        setUpAllStaggered();
    })

    /*
    DOMNodeInserted deprecated 
    document.addEventListener('DOMNodeInserted', function(e){
        var parent = e.relatedNode
        if(parent.className.includes('staggered')){
            setUpStaggered(parent);
        }
    }) */

    function setUpAllStaggered(){
        var staggered = document.querySelectorAll('.staggered')
        for (var i = 0, len = staggered.length; i < len; i++) {
            var s = staggered[i];
            s.lastStaggeredItem = 0;
            
            var observer = new MutationObserver(()=>{
                setUpStaggered(s);
            });
            observer.observe(s, {
                childList: true
            });

            setUpStaggered(s)
        }
    }

    function setUpStaggered(staggered){
        var items = staggered.querySelectorAll('.staggered > .staggered-item')
    
        var cols = 4;
        var fakeMargin = 20;

        var w = getDeviceWidth();
        if(w <= 767){
            if(staggered.classList.contains('mobile-three')){
                cols = 3;
            }else if(staggered.classList.contains('mobile-two')){
                cols = 2;
            }
        }else if(w <= 991){
            if(staggered.classList.contains('tablet-three')){
                cols = 3;
            }else if(staggered.classList.contains('tablet-two')){
                cols = 2;
            }
        }else{
            if(staggered.classList.contains('three')){
                cols = 3;
            }else if(staggered.classList.contains('two')){
                cols = 2;
            }
        }

        for (var i = staggered.lastStaggeredItem, len = items.length; i < len; i++) {

            /* 
            TEST SETTING COL FOR EACH ELEMENT
            var element = items[i];
            if (i == 0) {
                element.staggeredCol = 1
            }else{
                var prevEl = items[i-1];
                if(prevEl.staggeredCol < cols){
                    element.staggeredCol = prevEl.staggeredCol+1
                }else{
                    element.staggeredCol = 1
                }
            }*/

            var element = items[i];
            element.firstElementChild.style.marginTop = '0px';
            element.firstElementChild.style.marginBottom = fakeMargin+'px';
            element.firstElementChild.wasStaggered = undefined;
            if(i < cols){
                continue;
            }
            
            var index = i-cols;
            var refElement = items[index];
            //var element = items[i];

            var images = refElement.querySelectorAll('img');
            if(images.length > 0){
                for (let j = 0; j < images.length; j++) {
                    var img = images[j];
                    if(imgLoaded(img))
                        calculateNegativeMargin(element, refElement, fakeMargin)
                    else{
                        img.addEventListener('load',function () {
                            setUpStaggered(staggered)
                        })
                        //staggered.lastStaggeredItem = index+1;
                        /* podria ahorrarse algunas vueltas */
                        return;
                    }
                }
            }else{
                calculateNegativeMargin(element, refElement, fakeMargin)
            }

        }

        staggered.lastStaggeredItem = items.length-1;
    }

    function calculateNegativeMargin(element, refElement, fakeMargin){
        var fixedHeight = refElement.offsetHeight;
        var referenceHeight = refElement.firstElementChild.offsetHeight;
        
        var distance = fixedHeight - referenceHeight;
        if(refElement.firstElementChild.wasStaggered){
            distance+=refElement.firstElementChild.wasStaggered;
        }
        distance -= fakeMargin;
        
        element.firstElementChild.style.marginTop = '-'+distance+'px';
        element.firstElementChild.wasStaggered = distance;
        element.firstElementChild.style.marginBottom = fakeMargin+'px';
    }

    function imgLoaded(imgElement) {
        return imgElement.complete && imgElement.naturalHeight !== 0;
    }

    function getDeviceWidth(){
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }

    setUpAllStaggered();

    
})();

(function(){
    /**
     * Sidebar functionallity
     */
    var burgerBtn = document.querySelector('.sidebar-content .burger-btn')
    //var burgerBtn = document.getElementById('el-id'),
    elClone = burgerBtn.cloneNode(true);
    burgerBtn.parentNode.replaceChild(elClone, burgerBtn);
    burgerBtn = elClone;

    if(burgerBtn){
        burgerBtn.addEventListener('click', ()=>{
            console.log(burgerBtn)
            console.log('click called')

            if (!burgerBtn.classList.contains('active')) {
                burgerBtn.classList.add('active')
                document.getElementById(burgerBtn.htmlFor).classList.add('active')
            }else{
                burgerBtn.classList.remove('active')
                document.getElementById(burgerBtn.htmlFor).classList.remove('active')
            }
        });
    }

    const links = document.querySelectorAll('.sidebar>.link')
    for (let index = 0; index < links.length; index++) {
        var element = links[index];
        elClone = element.cloneNode(true);
        element.parentNode.replaceChild(elClone, element);
        element = elClone;

        const sibling = element.nextElementSibling
        if(sibling !== null && sibling.classList.contains('children')){
            var click = ()=>{
                console.log('click')
                if(!sibling.classList.contains('active')){
                sibling.classList.add('active')
                }else{
                sibling.classList.remove('active')
                }
            };
            element.removeEventListener('click', click)
            element.addEventListener('click', click);
        }
    }
})();