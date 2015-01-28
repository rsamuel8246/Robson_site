<script>


    $(document).ready(function () {        
	
		var pathname = document.location.hash;
		

	
        $('html, body').animate({
            scrollTop: $(pathname).offset().top
        }, 2000);
    });
</script>