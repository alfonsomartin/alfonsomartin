<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
<link href="../assignment6/dogs.css" rel="stylesheet" type="text/css">
<script src="//use.typekit.net/ysl6ifz.js"></script>
<script>try{Typekit.load();}catch(e){}</script>
<!--PUT JAVASCRIPT REFERENCE HERE-->
<script type="text/javascript" src="../assignment6/scripts/jquery-1.9.1.js"></script>
<script type="text/javascript" src="../assignment6/scripts/jquery.cycle2.js"></script>
</head>

<body>
<!--HEAD-->
<div class="head">The DOGS of HARRISON<div class="nav">
<a class="nav-buttons2" href="aboutdogs.html"></a>
<a class="nav-buttons" href="index.html"></a>
</div>
</div>

<!--CONTAINER-->
<div id="container">

    <div id="container-slideshow"> 
      <!--START CONTAINER-->
      
      <div class="table-container"> 
        <!--START TABLE-->
        
        <div class="table-nav"><a id=prev><img src="paw-right.jpg"></a></div>
        <!--PREVIOUS NAVIGATION--> 
        
<?php $id = $_GET['id']; ?>
<!--START SLIDESHOW-->
<div class="cycle-slideshow" 
    data-cycle-fx="scrollHorz"
    data-cycle-timeout=0
    data-cycle-slides="> div"
    data-cycle-prev="#prev"
    data-cycle-next="#next"
    data-cycle-starting-slide= <?php echo $id; ?> 
    >
    <div><?php include('dogslide1.html'); ?></div>
    <div><?php include('dogslide2.html'); ?></div>
    <div><?php include('dogslide3.html'); ?></div>
    <div><?php include('dogslide4.html'); ?></div>
    <div><?php include('dogslide5.html'); ?></div>
    <div><?php include('dogslide6.html'); ?></div>
    <div><?php include('dogslide7.html'); ?></div>
    <div><?php include('dogslide8.html'); ?></div>
    <div><?php include('dogslide9.html'); ?></div>
    <div><?php include('dogslide10.html'); ?></div>
    <div><?php include('dogslide11.html'); ?></div>
    <div><?php include('dogslide12.html'); ?></div>
    <div><?php include('dogslide13.html'); ?></div>
    <div><?php include('dogslide14.html'); ?></div>
    <div><?php include('dogslide15.html'); ?></div>
    <div><?php include('dogslide16.html'); ?></div>
    <div><?php include('dogslide17.html'); ?></div>
    <div><?php include('dogslide18.html'); ?></div>
    
    
    
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