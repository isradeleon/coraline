(function() {
    /**
     * Staggered functionallity
     */
    window.addEventListener('resize', (e)=>{
        console.log('resize')
        //console.log(e)
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
    }, 2000);

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
    }, 4000);

    //var fakeMargin = 20;
    function setUpAllStaggered(){
        var staggered = document.querySelectorAll('.staggered')
        for (let i = 0; i < staggered.length; i++) {
            const s = staggered[i];
            s.lastStaggeredItem = 0;
            setUpStaggered(s)
        }
    }

    function setUpStaggered(staggered){
        //var staggered = document.querySelector('.staggered')
        var items = staggered.querySelectorAll('.staggered > .staggered-item')
        console.log(items)
    
        var cols = 3;
        var fakeMargin = 20;

        //var shouldCalculate = true;
        var i = staggered.lastStaggeredItem
        for (i; i < items.length; i++) {
            console.log('ITEEEEEM'+staggered.lastStaggeredItem+" "+i)

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
                    /* console.log(img)
                    console.log(imgLoaded(img)) */
                    if(imgLoaded(img))
                        calculateNegativeMargin(element, refElement, fakeMargin)
                    else{
                        img.addEventListener('load',function () {
                            /* console.log('loaded'+j) */
                            setUpStaggered(staggered)
                        })
                        /* podria ahorrarse algunas vueltas */
                        return;
                    }
                }
            }else{
                calculateNegativeMargin(element, refElement, fakeMargin)
            }
        }
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

        /**
         * parent = staggered
         */
        element.parentNode.lastStaggeredItem++;
    }

    function imgLoaded(imgElement) {
        return imgElement.complete && imgElement.naturalHeight !== 0;
    }

    //setUpStaggered();
    setUpAllStaggered();

    console.log()
 })();