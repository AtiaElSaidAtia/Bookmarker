var input1=document.getElementById("inputIdone");
var input2=document.getElementById("inputIdtwo");

var ma5zan;
if( localStorage.getItem("productLite") == null)
{
   ma5zan=[];
}
else
{
   ma5zan =  JSON.parse(localStorage.getItem("productLite") );
   productAdd()
   
}
 

var bot = document.getElementById("demo") ;
bot.addEventListener("click" , test)
 function test()
{
  oneProduct={
   pName :input1.value ,
  pUrl:input2.value
    }
    ma5zan.push(oneProduct);
   localStorage.setItem("productLite" , JSON.stringify(ma5zan))
    productAdd();
    clear();
}


function productAdd()
{
 var hasalah=""; 
    for(var i=0 ; i<ma5zan.length ; i++)
 {
  hasalah += `
  <div class="p-5 row bordbot back ">
  <h6 class="w-25  text-dark text-center "> ${ma5zan[i].pName} </h6>
  <a href="${ma5zan[i].pUrl}" class="btn btn-secondary width">Visit</a> 
  <button onclick="Delete(${i})"  class="btn color width">Delete</button> 
 
  </div>`
 }
    document.getElementById("tBody").innerHTML=hasalah;
    
}

function clear()
{
    input1.value="";
    input2.value="";
}


function Delete(delI)
{
    ma5zan.splice(delI , 1);
    productAdd()
    localStorage.setItem("productLite" , JSON.stringify(ma5zan))    
}




