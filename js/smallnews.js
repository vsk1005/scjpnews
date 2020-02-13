function doNews(){    
    for(var i=0; i<=smallnewsData.length -1; i++){
    $("#news").append(
        "<div id='nsource'>"+ smallnewsData[i].source + 
         " | " + smallnewsData[i].title_section + 
        "</div>" +        
        "<div id='ntitle'>Title: " + smallnewsData[i].title + "</div>" +
        "<div id='ndesc'>" + smallnewsData[i].desc + "</div>" + 
        "<div id='nbody'>" + smallnewsData[i].body + "</div>" +
         "<div id='nauthoreditor'><nauthor> Author: "+ smallnewsData[i].authors + 
         " </nauthor>| <neditor> Editor: " + smallnewsData[i].editor + 
        " </neditor></div>" 
    );
    }
    //$("img").width(100);
   // $("img").height(100);

}
