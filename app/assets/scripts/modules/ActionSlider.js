import $ from 'jquery';

class ActionSlider{
    constructor() {
        this.Items=document.getElementsByClassName('action-slider__item');
        this.events();
    }

    events() {
      this.changeVisibleItem(this.changeVisibleItem.bind(this));
    }

    changeVisibleItem() {
        var arr = [];
        var max=this.Items.length;
       
        for(var i = 0; i < max; i++) arr.push(this.Items[i]);
        var i=5;
        var looper = setInterval(function() {
            
            $('.action-slider-'+(i-2)%max).removeClass("past");
            $('.action-slider-'+(i%max)).removeClass("next");
            $('.action-slider-'+(i-1)%max).removeClass("visible");
            
            $('.action-slider-'+(i-1)%max).addClass("past");
            $('.action-slider-'+(i+1)%max).addClass("next");
            $('.action-slider-'+(i)%max).addClass("visible");
            
            i+=1;
            if (i==13) {
                clearInterval(looper);
            }
        }
        , 4000);  

    }
}



export default ActionSlider;