$(document).ready(function(){
	$('[data-plugin]').each(function(){
       var $this 	= $(this);
       var jsonData = $(this).data('plugin');
       if (typeof(jsonData) === 'string') {
           jsonData = $.parseJSON(jsonData);
       }
       $.each(jsonData, function(i) {
           if ($.isArray(jsonData[i])) {
               require(['plugins/' + i], function(){
                   $this[i].apply($this, jsonData[i]);
               });
           } else {
               require(['plugins/' + i], function(){
                   $this[i]();
               });
           }
       });
   });
});