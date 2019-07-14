(function() {
    /**
     * Staggered functionallity
     */
    window.addEventListener('resize', (e)=>{
        console.log('resize')
        //console.log(e)
        setUpStaggered();
    })

    function setUpStaggered(){
        var staggered = document.querySelector('.staggered')
        var items = staggered.querySelectorAll('.staggered-item')
    
        var cols = 3;
        for (let i = 0; i < items.length; i++) {
            if(i < 3){
                continue;
            }
            
            var index = i-cols;
            var refElement = items[index];
            var element = items[i];

            var images = refElement.querySelectorAll('img');
            if(images.length > 0){
                for (let j = 0; j < images.length; j++) {
                    var img = images[j];
                    console.log(img)
                    console.log(imgLoaded(img))
                    if(imgLoaded(img))
                        calculateNegativeMargin(element, refElement)
                    else
                        img.addEventListener('load',function () {
                            console.log('loaded'+j)
                            setUpStaggered()
                        })
                }
            }else{
                calculateNegativeMargin(element, refElement)
            }
            /*var fixedHeight = refElement.offsetHeight;
            var referenceHeight = refElement.firstElementChild.offsetHeight;
            
            var distance = fixedHeight - referenceHeight;
            if(refElement.firstElementChild.staggered){
                distance+=refElement.firstElementChild.staggered;
            }
            distance -= 20;
            
            element.firstElementChild.style.marginTop = '-'+distance+'px';
            element.firstElementChild.staggered = distance*/
    
            //console.log(element.firstElementChild)
        }
    }

    function calculateNegativeMargin(element, refElement){
        var fixedHeight = refElement.offsetHeight;
        var referenceHeight = refElement.firstElementChild.offsetHeight;
        
        var distance = fixedHeight - referenceHeight;
        if(refElement.firstElementChild.staggered){
            distance+=refElement.firstElementChild.staggered;
        }
        distance -= 20;
        
        element.firstElementChild.style.marginTop = '-'+distance+'px';
        element.firstElementChild.staggered = distance
    }

    function imgLoaded(imgElement) {
        return imgElement.complete && imgElement.naturalHeight !== 0;
    }

    setUpStaggered();

    console.log()
 })();