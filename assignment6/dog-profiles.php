<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
<link href="../assignment6/dogs.css" rel="stylesheet" type="text/css">

<!--PUT JAVASCRIPT REFERENCE HERE-->
<script type="text/javascript" src="../assignment6/scripts/jquery-1.9.1.js"></script>
<script type="text/javascript" src="../assignment6/scripts/jquery.cycle2.js"></script>
</head>

<body>
<div class="head">THE DOGS OF HARRISON
<div class="nav">
<a href="index.html">HOME</a>
<a href="index.html">HOME</a>
<a href="index.html">HOME</a>
</div>
<div style="clear:both;"></div>
</div>
<div id="container">

    <div id="container-slideshow"> 
      <!--START CONTAINER-->
      
      <div class="table-container"> 
        <!--START TABLE-->
        
        <div class="table-nav"><a id=prev><img src="paw-right.jpg"></a></div>
        <!--PREVIOUS NAVIGATION--> 
        
        <!--  PUT SLIDESHOW HERE-->
        <div class="cycle-slideshow" 
    data-cycle-fx="scrollHorz"
    data-cycle-timeout=0
    data-cycle-slides="> div"
    data-cycle-prev="#prev"
    data-cycle-next="#next"
    >
          <?php include'dogslide1.html'; ?>
          <?php include'dogslide2.html'; ?>
          <?php include'dogslide3.html'; ?>
          <?php include'dogslide4.html'; ?>
          <?php include'dogslide5.html'; ?>
          <?php include'dogslide6.html'; ?>
          <?php include'dogslide7.html'; ?>
          <?php include'dogslide8.html'; ?>
          <?php include'dogslide9.html'; ?>
          <?php include'dogslide10.html'; ?>
          <?php include'dogslide11.html'; ?>
        </div>
        <!--END SLIDESHOW-->
        
        <div class="table-nav"><a id=next><img src="paw-right2.jpg"></a></div>
        <!--NEXT NAVIGATION--> 
        
      </div>
      <!--END TABLE--> 
      
    </div>
    <!--END CONTAINER-->
    
<!--CONTAINER-END-->    
</div>

<!--FOOTER-->    
<div class="footer">Alfonso Martin | Interactive 1 | Spring 2015 </div> 
</body>

</html>