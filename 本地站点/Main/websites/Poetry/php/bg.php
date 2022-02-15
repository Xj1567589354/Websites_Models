<html>
<head>
	<title>BackGround Images</title>
</head>
<body>
	<?php
//读取文件夹图片路径
$img_array = glob("../Bg/*.{gif,jpg,png,jfif}",GLOB_BRACE); 
//获取文件夹图片的随机数
$img = array_rand($img_array); 
//输出随机数的路径
	header("Location:".$img_array[$img]);
	?>
</body>
</html>