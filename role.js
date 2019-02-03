$(document).ready(function() {

	 $(".sortableList").sortable({
	        revert: true,
	        /*update: function (event, ui) {
	            // Some code to prevent duplicates
	        }*/
	    });
	    $(".draggable").draggable({
	        connectToSortable: '.sortableList',
	        cursor: 'pointer',
	        helper: 'clone',
	        revert: 'invalid'
	    });
	
	
	var roles; 
	$.ajax({
        type        : 'GET',
        url         : 'roles',
        // using the done promise callback
        success: function(data, textStatus, jqXHR) {
        	console.log('role datas:'+data);
        	roles = data;
        	populateRoles(data);
        	droppableAgain();
        }
	});
	
	
	var populateRoles = function(data) {
		console.log('role data:'+data);
		
			for (var key in data) {
				
				var aRow = "<li class='draggable' class='ui-state-highlight' id='" + data[key].roleId + "'>" + data[key].roleName + "</li>";			
				
				$("#roles").append(aRow);
			}
		
	}

	
	
	var droppableAgain = function() {
		
		
	   $(".sortableList").sortable({
       revert: true,
       /*update: function (event, ui) {
           // Some code to prevent duplicates
       }*/
		 });
	   $(".draggable").draggable({
	       connectToSortable: '.sortableList',
	       cursor: 'pointer',
	       helper: 'clone',
	       revert: 'invalid'
	   });
		
	}

	$('.glyphicon').click(function () {
		
		console.log('her cli');
        $(this).toggleClass("glyphicon-chevron-down").toggleClass("glyphicon-chevron-up");
        droppableAgain();
    });
	
	
	$('#showMyRoles').click(function(){
		
		event.preventDefault();
		alert($('#profile1roles').html());
	    
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
		
		
		$("#_tdprofile").append(aProfile);
		droppableAgain();
	});
	

});
