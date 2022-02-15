<html>
<head>
<meta charset="utf-8">
<title>Cover Images</title>
</head>
<body>
<?php
	$type = $_GET['type'];
	$bg = "../Bg/*.{jpg,png,jfif}";
	$cover = "../CoverBg/*.{jpg,jfif}";
	$anc="../AncStyle/*.{jpg}";
	if($type=='bg')
	{
	$img_array=glob($bg,GLOB_BRACE);
	}
	else if($type=='cover')
	{
	$img_array=glob($cover,GLOB_BRACE);
	}
	else if($type=='anc')
	{
	$img_array=glob($anc,GLOB_BRACE);
	}
	//获取文件夹图片的随机数
	$img=array_rand($img_array);
		//输出随机数的路径
	header("Location:".$img_array[$img]);
	?>
</body>
</html>