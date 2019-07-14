(function() {
    /**
     * Staggered functionallity
     */
    window.addEventListener('resize', (e)=>{
        console.log('resize')
        //console.log(e)
        setUpStaggered();
    })

    document.addEventListener('DOMNodeInserted', function(e){
        console.log('INSERTEEEED')
        console.log(e)
        var parent = e.relatedNode
        if(parent.className.includes('staggered')){
            console.log('mmm deberia')
            setUpStaggered();
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

    var fakeMargin = 20;
    function setUpStaggered(){
        var staggered = document.querySelector('.staggered')
        var items = staggered.querySelectorAll('.staggered-item')
    
        var cols = 3;
        //var shouldCalculate = true;
        fakeMargin = 20
        for (let i = 0; i < items.length; i++) {
            
            //console.log(element)

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

            if(i < 3){
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
                        calculateNegativeMargin(element, refElement)
                    else{
                        img.addEventListener('load',function () {
                            /* console.log('loaded'+j) */
                            setUpStaggered()
                        })
                        /* podria ahorrarse algunas vueltas */
                        return;
                    }
                }
            }else{
                calculateNegativeMargin(element, refElement)
            }
        }
    }

    function calculateNegativeMargin(element, refElement){
        var fixedHeight = refElement.offsetHeight;
        var referenceHeight = refElement.firstElementChild.offsetHeight;
        
        var distance = fixedHeight - referenceHeight;
        if(refElement.firstElementChild.staggered){
            distance+=refElement.firstElementChild.staggered;
        }
        distance -= fakeMargin;
        
        element.firstElementChild.style.marginTop = '-'+distance+'px';
        element.firstElementChild.staggered = distance;
        element.firstElementChild.style.marginBottom = fakeMargin+'px';
    }

    function imgLoaded(imgElement) {
        return imgElement.complete && imgElement.naturalHeight !== 0;
    }

    setUpStaggered();

    console.log()
 })();