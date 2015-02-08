Template.layout.events({
    'mouseenter li' : function(e){
        var icon = $(e.currentTarget).find('.icon');
        icon.addClass('animated swing');
        Meteor.setTimeout(function(){
            icon.removeClass('animated swing');
        }, 1000);
    }
});