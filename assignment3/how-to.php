<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
<link href="how-to.css" rel="stylesheet" type="text/css">
<script src="//use.typekit.net/quc1cpc.js"></script>
<script>try{Typekit.load();}catch(e){}</script>
<!--
PUT JAVASCRIPT REFERENCE HERE-->
<script type="text/javascript" src="scripts/jquery-1.9.1.js"></script>
<script type="text/javascript" src="scripts/jquery.cycle2.js"></script>
</head>

<body>
<div id="container">
  <div id="inner-container">
    <h1>How to Make a Day of the Dead Mask</h1>
    <div style="border-bottom: 4px #000000 dotted; margin-top:20px;"></div>
    <a class="navigation-horizontal" href="index.html">HOME</a> 
    <a class="navigation-horizontal" href="about-page.html" >ABOUT</a>
     <a class="navigation-horizontal" href="how-to.php">HOW-TO</a>
    <div style="clear:both;"></div>
    <div style=" border-top: 4px #000000 dotted;"></div>
    <div id="container-slideshow"> 
      <!--START CONTAINER-->
      
      <div class="table-container"> 
        <!--START TABLE-->
        
        <div class="table-nav"><a id=prev><img src="IMAG0006-left.png"></a></div>
        <!--PREVIOUS NAVIGATION--> 
        
        <!--  PUT SLIDESHOW HERE-->
        <div class="cycle-slideshow" 
    data-cycle-fx="scrollHorz"
    data-cycle-timeout=0
    data-cycle-slides="> div"
    data-cycle-prev="#prev"
    data-cycle-next="#next"
    >
          <?php include'how-to-slide1.html'; ?>
          <?php include'how-to-slide2.html'; ?>
          <?php include'how-to-slide3.html'; ?>
          <?php include'how-to-slide4.html'; ?>
          <?php include'how-to-slide5.html'; ?>
          <?php include'how-to-slide6.html'; ?>
          <?php include'how-to-slide7.html'; ?>
          <?php include'how-to-slide8.html'; ?>
          <?php include'how-to-slide9.html'; ?>
          <?php include'how-to-slide10.html'; ?>
          <?php include'how-to-slide11.html'; ?>
        </div>
        <!--END SLIDESHOW-->
        
        <div class="table-nav"><a id=next><img src="IMAG0006-right.png"></a></div>
        <!--NEXT NAVIGATION--> 
        
      </div>
      <!--END TABLE--> 
      
    </div>
    <!--END CONTAINER-->
    <div style="clear:both;"></div>
    <div style="border-bottom: 4px #000000 dotted; margin-top:40px;"></div>
    <div class="footer">Designed by Alfonso Martin for Interactive 1, Spring 2015</div>
  </div>
</div>
</body>
</html>
