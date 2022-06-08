var n = 0;
var vector = "";
var velem = 0;

var max = 2;
var min = -1;

var x = 0;
var y = 0;
var delta = 20;//delta = x + delta && || y + delta  
var c = 0;

var reload = 0;









function cnvclickf()
{
    if (reload == 0)
    {
    //alert("cnvclickf Works!");
    infotextarea.value = "";
   // document.location.reload();

    n = prompt("Enter n = ",'10');
    //n = quant.value;
    n = n*n;
    if (n > 0 && n < 100000)
    {
       // alert("Okay");
        /*if (confirm("Build the map? " + Math.sqrt(n) + " x " + Math.sqrt(n)))
        {
            //alert("Please Wait...");
            genvector();
            //mapbuildf();
        }
        else
        {
           alert("Buiding cancelled"); 
        }

        infotextarea.value += "/nMatrix " + Math.sqrt(n) + " x " + Math.sqrt(n) + "/n";*/
        im.value = "";
        im.value = Math.sqrt(n) + " x " + Math.sqrt(n); //dimmention of the matrix
        genvector();

    }
    else
    {
        n = 0;
        alert("Attention: Incorrect Value -> \nPlease, Try again");
        cnvclickf();
    }
    reload ++;
    }
    else if (reload ==1 )
    {
        document.location.reload();
    }
}









function mapbuildf()
{
    var drawingCanvas=document.getElementById('cnv');
    if (drawingCanvas&&drawingCanvas.getContext)
    {
    var context=drawingCanvas.getContext('2d');
        context.beginPath();
        context.strokeStyle = "#" + color.value;
        context.fillStyle= "white";
        
        //context.fillRect(0,0,cnv.width,cnv.height);
    
    
    context.lineWidth = linewidth.value;
    infotextarea.value += "CrossRect(x0,y0,xw,yh):: ( "+ x0 + " , " + y0  + " , " + xwidth + " , " + yheight  + ")\n";
    context.strokeRect(x0-1/2*xwidth,y0-1/2*yheight, xwidth, yheight);
    
    //customize rectangle on lines
    //context.moveTo(x0-1/2*xwidth,y0-1/2*yheight);
    //context.lineTo(x0-(-1/2)*xwidth,y0);//from center to down border y-
    
    context.moveTo(x0,y0);
    context.lineTo(x0-(-1/2)*xwidth,y0);//from center to down border x+
    
    context.moveTo(x0,y0);
    context.lineTo(x0-1/2*xwidth,y0); //from center to top border x-
    
    context.moveTo(x0,y0);
    context.lineTo(x0,y0-(-1/2)*yheight); //from center to left border y+
    
    context.moveTo(x0,y0);
    context.lineTo(x0,y0-1/2*yheight); //from center to right border y-
    
    
        context.closePath();
        context.stroke();	
        context.strokeStyle = "#" + color.value;
    }
}










function genvector()
{
    infotextarea.value = "";
    do 
    {
        velem = min -(-1)* Math.floor(Math.random()*max -(-1)* 1 - min) -1;
        //infotextarea.value += "\n" + n + " " +  velem + "\n";
        vector += velem;        
        infotextarea.value = vector;
        n--;
    }
    while(n > 0);

    grafbclf();
    //alert(vector);
}

function grafbclf()
{
    //begin graphics
    var drawingCanvas=document.getElementById('cnv');
    if (drawingCanvas&&drawingCanvas.getContext)
    {
    var context=drawingCanvas.getContext('2d');
        context.beginPath();
        context.strokeStyle = "#" + color.value;
        //context.fillStyle= "black";
        
        //context.fillRect(0,0,cnv.width,cnv.height);   
        
       // context.fillRect(0, 0,800, 600); 

        context.fillStyle= "white";
    
    //context.lineWidth = linewidth.value;
    context.lineWidth = 1;
    context.moveTo(x,y);
    //context.strokeRect(x, 0, delta, delta);   
   // context.fillRect(x0-1/2*xwidth,y0-1/2*yheight, xwidth, yheight);   
   //context.fillRect(x, 0, delta, delta);    
   
  /* do 
   {
        if (vector[c] == 0)
        {
            //stroke rect  = black whole = 0        
            //x += delta;
                    x += delta;
                    y = 0;
                    context.strokeRect(x, y, delta, delta);  
                    //if (c = )                     
        }
        else if (vector[c] == 1)
        {
            //draw white fill rect = 1        
                 x += delta;
                 y = 0;
                 context.fillRect(x, y, delta, delta);  
        }   
c ++ ;        
   }
   while(c < vector.length);
*/
   /*for (var i = 0; i <= Math.sqrt(vector.length) -1;i++)
    {
        //context.strokeRect(x, y, delta, delta);
        //x += delta;
   for (var j = 0; j <= Math.sqrt(vector.length) -1;j++)
    {   
            context.strokeRect(x - (-1)* i*(delta - (-2)), y - (-1) * j*(delta - (-2)), delta, delta);
    }}*/
            //context.fillRect(x - (-1)* i*(delta - (-2)), y - (-1) * j*(delta - (-2)), delta, delta); 
            //alert(vector); 

           /*for (;c <= vector.length;c++)
            {
                if (vector[c] == 0)
            {
                //stroke rect  = black whole = 0        
                //x += delta;
                context.strokeRect(x - (-1)* i*(delta - (-2)), y - (-1) * j*(delta - (-2)), delta, delta);
                        //if (c = )                     
            }
            else
             if (vector[c] == 1)
            {
                //draw white fill rect = 1        
                     context.fillRect(x - (-1)* i*(delta - (-2)), y - (-1) * j*(delta - (-2)), delta, delta);  
            } */


        /*if (vector[c] == 0)
        {
            //stroke rect  = black whole = 0        
            //x += delta;
            context.strokeRect(x - (-1)* i*(delta - (-2)), y - (-1) * j*(delta - (-2)), delta, delta);
                    //if (c = )                     
        }
        else if (vector[c] == 1)
        {
            //draw white fill rect = 1        
            context.fillRect(x - (-1)* i*(delta - (-2)), y - (-1) * j*(delta - (-2)), delta, delta);
        }  */ 


/*foreach (vector[i] in vector)
{
    if (vector[c] == 0)
    {
        //stroke rect  = black whole = 0        
        //x += delta;
        context.strokeRect(x - (-1)* i*(delta - (-2)), y - (-1) * j*(delta - (-2)), delta, delta);
                //if (c = )                     
    }
    else if (vector[c] == 1)
    {
        //draw white fill rect = 1        
        context.fillRect(x - (-1)* i*(delta - (-2)), y - (-1) * j*(delta - (-2)), delta, delta);
    }   
}*/
for (var i = 0; i <= Math.sqrt(vector.length) -1;i++)
    {       
   for (var j = 0; j <= Math.sqrt(vector.length) -1;j++)
    { 

if (vector[c] == 0)
         {
        //stroke rect  = black whole = 0        
        //x += delta;
        context.strokeRect(x - (-1)* j*(delta - (-2)), y - (-1) * i*(delta - (-2)), delta, delta);
        c++; 
                //if (c = )                     
         }
    else if (vector[c] == 1)
         {
        //draw white fill rect = 1        
        context.fillRect(x - (-1)* j*(delta - (-2)), y - (-1) * i*(delta - (-2)), delta, delta);
        c++; 
          }          
          
}}
        


  /*  do 
   {
        if (vector[c] == 0)
        {
            //stroke rect  = black whole = 0        
            //x += delta;
            context.strokeRect(x - (-1)* i*delta - (-10), y - (-1) * j*delta - (-10), delta, delta);
                    //if (c = )                     
        }
        else if (vector[c] == 1)
        {
            //draw white fill rect = 1        
                 context.fillRect(x - (-1)* i*delta - (-10), y - (-1) * j*delta - (-10), delta, delta);  
        }   
c ++ ;        
   }
   while(c < vector.length);
            //y += delta;   
            */  
        //}}
          

    
   context.closePath();
   context.stroke();	
   context.strokeStyle = "#" + color.value;
}
    //end graphics

}


function reclf()
{
    infotextarea.value = "";
    document.location.reload();
}
