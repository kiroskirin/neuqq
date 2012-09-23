(function($) {
	if (typeof NEU == 'undefined'){
		NEU = {};
	}

	//console.log(this);
	//var self = this;
	if(this.document.readyState){
		//console.log("yes");
		addStaff();
	}

	function addStaff(){
		this.$(".show_faculty").hide();
		console.log($("#UserRole").find("options").val());
		if(":selected" == "staff"){
			console.log("staff");
		}
	}
	
})(jQuery);