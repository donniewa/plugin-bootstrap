/**
 * @author Donald White
 */
/*global $, jQuery, require, window */
(function( $ ){
    var defaults    =   {};

    var originalElements = null;
    var settings    =   {};

    /**
     * Public Methods
     */
    var methods = {
        init : function( options ) {
           return this.each(function(){
                var $this = $(this),
                    element = this,
                    data = $this.data('sample');

                // If the plugin hasn't been initialized yet
                if ( ! data ) {
                    // Do more setup stuff here
                    $(this).data('sample', {
                        target : $this,
                        settings : $.extend({}, settings, options)
                    });
                }
            });
        },

        destroy : function( ) {
             return this.each(function(){
             var $this = $(this),
                 data = $this.data('sample');

             $(window).unbind('.sample');
             data.sample.remove();
             $this.removeData('sample');
           });
        },

        exFunction : function() {
            var $this = $(this),
                data = $this.data('sample');
        }
    };

    /**
     * Private methods
     */
    var helpers = {
        foo_private_method : function(){

        }
    };

    $.fn.sample = function( method ) {
        if ( methods[method] ) {
          return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
          return methods.init.apply( this, arguments );
        } else {
          $.error( 'Method ' +  method + ' does not exist on jQuery.sample' );
        }
        return(null);
    };
})( jQuery );