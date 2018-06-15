import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = $('.spy');
    
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReveal.addClass('is-before-view');
    }

    createWaypoints() {
        this.itemsToReveal.each(function() {
            var currentItem=this;
            new Waypoint({
                element:currentItem,
                handler:function() {
                    $(currentItem).addClass('is-on-view');
                    $(currentItem).removeClass('is-before-view');
                },
                offset:"65%"
            });
            new Waypoint({
                element:currentItem,
                handler:function() {
                    $(currentItem).addClass('is-on-center');
                   
                },
                offset:"30%"
            });
        })
    }
}

export default RevealOnScroll;