<?php
	$datatable=$_GET["dtable"];
	//连接主机
	$con=mysqli_connect("119.29.61.46","XJ","XJ15675389354");
	if(!$con)
	{
		die("error".mysqli_error());
	}
//	else
//	{
//		echo"success";
//	}
	//连接数据库
	$mysqli_selletdb=mysqli_select_db($con,"words");
	if(!$mysqli_selletdb)
	{
		die("error_db".mysqli_error());
	}
//	else
//	{
//		echo"success";
//	}
	//设置数据库编码格式
	mysqli_query($con,"SET CHARACTER SET utf8");
	//执行查询
	$result=mysqli_query($con,"SELECT*FROM ".$datatable." ORDER BY RAND() LIMIT 1");
	//从结果集中获得数据，并存储为数组
	while($row=mysqli_fetch_array($result))
	{
		echo "var Quote = new Array(\"".$row['content']."\",\"".$row['source']."\")";
	}
?>