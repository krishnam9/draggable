$(document).ready(function() {

	 $(".sortableList").sortable({
	        revert: true,
	        /*update: function (event, ui) {
	            // Some code to prevent duplicates
	        }*/
	    });
	
	var roles; 
	$.ajax({
        type        : 'GET',
        url         : 'profiles',
        dataType	: 'json',
        // using the done promise callback
        success: function(data, textStatus, jqXHR) {
        	populateProfiles(data);
        	sortableAgain();
        },
		error: function(XMLHttpRequest, textStatus, errorThrown) { 
            //alert("Status: " + textStatus); alert("Error: " + errorThrown); 
        }       
	});
	
	
	var populateProfiles = function(data) {
		console.log('profile data from profilejs:'+data);
		console.log("stringify:"+JSON.stringify(data));
		
		for (var key in data) {
				
				var aRow = "<div><span class='glyphicon glyphicon-chevron-down' data-toggle='collapse' " +
						"href='#" +	data[key].id + "'></span>" +
						data[key].profileName + "-" + data[key].loadLevel +
						"<ul id='" +
						data[key].id +
						"' class='collapse sortableList'>" + 
						"<li class='ui-state-default'>Admin Role</li>"
						+ "</ul>" +
						"</div>" +
						"";
				
				$("#profiles").append(aRow);
			}
		
	}

	
	
	var sortableAgain = function() {
		
		
	   $(".sortableList").sortable({
       revert: true,
       /*update: function (event, ui) {
           // Some code to prevent duplicates
       }*/
		 });
		
	}

	$('.glyphicon').click(function () {
		
		console.log('her cli');
        $(this).toggleClass("glyphicon-chevron-down").toggleClass("glyphicon-chevron-up");
        sortableAgain();
    });
	
	
	$('#showMyRoles').click(function(){
		
		event.preventDefault();
		//alert($('#profile1roles').html());
	    
	});
	
	
	
	$('#addProfile').click(function(){
		
		event.preventDefault();
		
		var aProfile = "<br/>" +
				"<div>" +
				"<span class='glyphicon glyphicon-chevron-down' data-toggle='collapse' href='#profile4roles'></span>Profile4" +
				"<ul id='profile4roles' class='collapse sortableList'>" +
				"<li class='ui-state-default'>Role 6</li>" +
				"<li class='ui-state-default'>Role 7</li>" +
				"</ul>" +
				"</div>" +
				"<br/>" 
				;
		
		
		$("#profiles").append(aProfile);
		sortableAgain();
	});
	

});
