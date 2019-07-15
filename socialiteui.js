(function() {
    /**
     * Staggered functionallity
     */
    window.addEventListener('resize', (e)=>{
        /* console.log('resize') */
        //console.log(w)
        setUpAllStaggered();
    })

    document.addEventListener('DOMNodeInserted', function(e){
        var parent = e.relatedNode
        if(parent.className.includes('staggered')){
            setUpStaggered(parent);
        }
    })

    setTimeout(() => {
        document.querySelector('.staggered').insertAdjacentHTML(
            'beforeend', 
            `<div class="staggered-item">
            <article class="post">
    
                <section class="post-header">
                    <span class="user-img"
                    style="
                    width: 30px; height: 30px;
                    background-image: url(https://imagenes.milenio.com/mo9ozdZ0_6gSr9na6tncVakxgsk=/958x596/https://www.milenio.com/uploads/media/2019/05/19/elizabeth-olsen-audiciono-para-ser_0_250_913_568.jpg)"></span>
        
                    <span class="post-data">
                        <p>Elizabeth Olsen</p>
                        <small>5 min ago</small>
                    </span>
                </section>
    
                <img src="http://es.web.img3.acsta.net/pictures/15/09/15/12/25/231241.jpg" alt="">
                    
                <section class="social-actions evenly">
                    <button class="post-btn">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="post-btn">
                        <i class="far fa-comment"></i>
                    </button>
                </section>
    
            </article>
        </div>`
        );
    }, 1000);

    function jojo(timeout){
        setTimeout(() => {
            for (let index = 0; index < 10; index++)
            document.querySelector('.staggered').insertAdjacentHTML(
                'beforeend', 
                `<div class="staggered-item">
                <article class="post">
        
                    <section class="post-header">
                        <span class="user-img"
                        style="
                        width: 30px; height: 30px;
                        background-image: url(https://imagenes.milenio.com/mo9ozdZ0_6gSr9na6tncVakxgsk=/958x596/https://www.milenio.com/uploads/media/2019/05/19/elizabeth-olsen-audiciono-para-ser_0_250_913_568.jpg)"></span>
            
                        <span class="post-data">
                            <p>Elizabeth Olsen</p>
                            <small>5 min ago</small>
                        </span>
                    </section>
        
                    <img src="http://es.web.img3.acsta.net/pictures/15/09/15/12/25/231241.jpg" alt="">
                        
                    <section class="social-actions evenly">
                        <button class="post-btn">
                            <i class="far fa-heart"></i>
                        </button>
                        <button class="post-btn">
                            <i class="far fa-comment"></i>
                        </button>
                    </section>
        
                </article>
            </div>`
            );
        }, timeout);
    }

    jojo(2000)
    jojo(3000)
    jojo(4000)
    jojo(5000)

    //var fakeMargin = 20;
    function setUpAllStaggered(){
        var staggered = document.querySelectorAll('.staggered')
        for (var i = 0, len = staggered.length; i < len; i++) {
            const s = staggered[i];
            s.lastStaggeredItem = 0;
            setUpStaggered(s)
        }
    }
    var COUNTER = 0;

    function setUpStaggered(staggered){
        var items = staggered.querySelectorAll('.staggered > .staggered-item')
    
        var cols = 4;
        var fakeMargin = 20;

        var w = getDeviceWidth();
       /*  if(){

        } */

        //var shouldCalculate = true;
        for (var i = staggered.lastStaggeredItem, len = items.length; i < len; i++) {
            //console.log('ITEEEEEM'+staggered.lastStaggeredItem+" "+i)
            COUNTER++;
            console.log('ITERACION'+COUNTER);

            /* if(i == 0){
                continue;
            }else if(shouldCalculate){
                var temp = items[i-1];
                if(element.offsetTop > temp.offsetTop){
                    shouldCalculate = false;
                }else{
                    continue;
                }
            } */

            if(i < cols){
                var element = items[i];
                element.firstElementChild.style.marginBottom = fakeMargin+'px';
                continue;
            }
            
            var index = i-cols;
            var refElement = items[index];
            var element = items[i];

            var images = refElement.querySelectorAll('img');
            if(images.length > 0){
                for (let j = 0; j < images.length; j++) {
                    var img = images[j];
                    if(imgLoaded(img))
                        calculateNegativeMargin(element, refElement, fakeMargin)
                    else{
                        img.addEventListener('load',function () {
                            /* for (var k = i; k >= index; k--) {
                                var _refElement = items[k-cols];
                                var _element = items[k];
                                console.log(_element+" "+k)
                                calculateNegativeMargin(_element, _refElement, fakeMargin)
                            } */
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

    //setUpStaggered();
    setUpAllStaggered();
})();