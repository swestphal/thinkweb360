import $ from 'jquery';

class ContentSlider {
    constructor() {
        this.step = 3;
        this.scrolling = false;
        this.direction="";
        this.containerToMove=$('#containerToMove');
       
        this.lastPosition=$('#containerToMove').scrollLeft();
        this.newPosition;
        this.flag=0;

        this.r=document.getElementById('right');
        this.events();
        
    }   

    events() {
        var tap = ("ontouchstart" in document.documentElement);
        if (!tap) {
            $("#right, #left").mouseenter(
                this.init.bind(this,event)
            ).mouseleave(
                this.stop.bind(this)
            ).mousedown( this.init.bind(this,event))
        }
        else {
            document.getElementById('right').addEventListener('touchstart', 
                this.init.bind(this)
            , false)
            document.getElementById('right').addEventListener('touchend', 
            this.stop.bind(this)
            , false)
            document.getElementById('left').addEventListener('touchstart', 
                this.init.bind(this)
            , false)
            document.getElementById('left').addEventListener('touchend', 
            this.stop.bind(this)
            , false)
        }
        
    };
        
    stop() {
        $('#containerToMove').stop(true,false);
        clearInterval(this.scrolling);
                
    }
       
    init() {
        this.direction=event.target.id;
        
        this.scrolling = setInterval(this.scrollContent.bind(this,event),10);
    }

    scrollContent() {
       
    if($('#containerToMove').scrollLeft()==0) {
       
    $('#left').addClass('hidden');
    } else  $('#left').removeClass('hidden');
    
    let amount=(this.direction==="right" ? ("+="+this.step) : ("-="+this.step));
        this.containerToMove.animate({
            scrollLeft: amount
        },1);
       
       
        if ( ($('#containerToMove').get(0).scrollWidth) - ($('#containerToMove').scrollLeft()) - ($('#containerToMove').width() )-36 ==0) {
            $('#right').addClass('hidden');
        }
        else $('#right').removeClass('hidden');
         
 
    }

}
          

   


export default ContentSlider;