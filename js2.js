<html>
    <body>

        enter number:
             <input type="number" placwholder="number" id="t1" onclick="show()">
             
   </body>
</html>


<script>
   function show()
{      
    var a=document.getElementById("t1").value;
       for(i=1;i<=10;i++)
      alrat("a*i");

}
</script>