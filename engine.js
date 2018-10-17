	var info = "<p id='content'>Hello,<br><br>&nbsp &nbsp Thank you for visiting my website. You can get in contact with me <a href='www.google.com'>here.</a></p>";
	
	var projects = "<p id='content'>Come back later!</p>";
	
	function showProjects()
	{
		    document.getElementById("content").innerHTML = projects;

	}
		function showHome()
	{
		    document.getElementById("content").innerHTML = info;

	}