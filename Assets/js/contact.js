$(document).ready(function() {
    var buttonGit = $("#gitHubBtn")

    $("#btnGithub").hover(function() {
        $(this).addClass("btnGithub");
        $(this).append("<button href='https://github.com/KarrynS' target='_blank'>GitHub</button>")
        
    })

});