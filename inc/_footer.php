<footer>
<div id="cc"><a rel="license" target="blank" href="http://creativecommons.org/licenses/by-nc/4.0/"><img id="show_licensing" alt="Creative Commons License" src="photos/general/creative_commons.png" /></a><span id="licensing"> All work licensed under Creative Commons</span>
</div>
</footer>
<script> 

$('#cc').hover(function() { 

		$('#licensing').fadeIn(400);
	}, function() {
	 	$('#licensing').fadeOut(400); 
	 }); 


// fix for screen orientation change
// Rewritten version
// By @mathias, @cheeaun and @jdalton

(function(doc) {

    var addEvent = 'addEventListener',
        type = 'gesturestart',
        qsa = 'querySelectorAll',
        scales = [1, 1],
        meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

    function fix() {
        meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
        doc.removeEventListener(type, fix, true);
    }

    if ((meta = meta[meta.length - 1]) && addEvent in doc) {
        fix();
        scales = [.25, 1.6];
        doc[addEvent](type, fix, true);
    }

}(document));

</script>