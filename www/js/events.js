var deleteNumber = 0;

var gotString = "";

var stateString = "";

var itemClick = 0;

var list = [];

var listLength = 0;

var stringList = "";

var listItems = [];


function init (){
    
var update = function(){
var gotString =  localStorage.getItem("mccu0213localstorage");
        
     listLength = list.length;
     
     stringList = JSON.stringify(list); 
     
     listItems = JSON.parse(stringList);
     
     stateString = "";
     
 localStorage.setItem("mccu0213localstorage", stringList);
        
        for( var i=0; i < listLength; i++){
            stateString = stateString + '<div class="panel-body"><p>' + list[i] + "</p></div>";
            }
$("#placeholder").html(stateString);
        
$("#item").attr("placeholder", list[deleteNumber]);
    
          if(deleteNumber == listLength){
            $("#item").attr("placeholder", "Newer Item");
        }else{}  
    };
    
$("#add").click(function(ev){
    
    listLength = list.length;
    
    var fieldEntry = document.querySelector("#item").value;
    
    document.querySelector("#item").value = "";
    
    ev.preventDefault();
    deleteNumber = ++deleteNumber;
    stringList = JSON.stringify(list);
    listItems = JSON.parse(stringList);
    
$("#item").html("");
    
    if(fieldEntry == ""){
        
        list.splice(deleteNumber - 1, 1, list[deleteNumber - 1])
    }
    
else if(deleteNumber <= listLength){
        list.splice(deleteNumber - 1, 1, fieldEntry);
}
    
else{
    list.push(fieldEntry);
}
        update();
    
});
    
$("#plusNum").click(function(ev){
    
    ev.preventDefault();
    listLength = list.length;
        
if(deleteNumber == listLength){
    $("#item").attr("placeholder", "New Item");
}
else{
    deleteNumber = ++deleteNumber;
}
    update();
});
    
$("#minusNum").click(function(ev){
    ev.preventDefault();
        if(deleteNumber == 0){
            }
    else{
        deleteNumber = --deleteNumber;
                 }
    update();
});
    
    $("#deleteBtn").click(function(ev){
    ev.preventDefault();
    list.splice(deleteNumber, 1);
    if(deleteNumber == listLength){
    }
        else if(deleteNumber > 0){
            deleteNumber = --deleteNumber;
                 }
    update();
});

}
$(document).bind("ready", init);
