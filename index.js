// Import stylesheets
import './style.css';

// Write Javascript code!
function buttonClick()
   {
    var x=document.getElementById("text1").value;
    alert("Entered text is: "+x); 
   }
   function buttonClick2()
   {
      if(rd1.checked==true)
      alert("Selected car brand is : "+rd1.value);
      else if(rd2.checked==true)
      alert("Selected car brand is : "+rd2.value);
      else
      alert("No option Selected");
   }

     function buttonClick3()
     {
       var x=document.getElementById("selectbox");
       alert(x.options[x.selectedIndex].value);
     }

       function validate()
       {
         var uname=document.getElementById("textbox2");
         var pass=document.getElementById("textbox3");
         if(uname.value==""||pass.value=="")
         {
           alert("No blank Values Allowed");
           return false;
         }
         else if(pass.value<5)
         {
         alert("password is too short");
         return false;
         }
         else
         true;
       }