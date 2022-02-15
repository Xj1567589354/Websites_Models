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
	$result=mysqli_query($con,"SELECT *FROM ".$datatable);
	$index = 0;
	// $array = array('notes' =>array(),'translate'=> array(),'appre'=> array(),'conment'=>array() ,'info'=>array() ,'text'=>array());
	//从结果集中获得数据，并存储为数组
	while($row=mysqli_fetch_array($result))
	{
		//php键值对数组
		if ($index==0) {
			$array['notes']['title'] = $row['Title'];
			$array['notes']['content'] = $row['Content-P'];
		}
		if ($index==1) {
			$array['translate']['title'] = $row['Title'];
			$array['translate']['content'] = $row['Content-P'];
		}
		if ($index==2) {
			$array['appre']['title'] = $row['Title'];
			$array['appre']['content'] = $row['Content-P'];
		}
		if ($index==3) {
			$array['conment']['title'] = $row['Title'];
			$array['conment']['content'] = $row['Content-P'];
		}
		if ($index==4) {
			$array['info']['title'] = $row['Title'];
			$array['info']['content'] = $row['Content-P'];
		}
		if ($index==5) {
			$array['text']['title'] = $row['Title'];
			$array['text']['content'] = $row['Content-P'];
		}
		$index++;
	}
	//JS 键值对数组，PHP键值对转换为JS键值对
	echo "var Quote = {notes:{title:\"".$array['notes']['title']."\" ,content:\"".$array['notes']['content']."\"},translate:{title:\"".$array['translate']['title']."\" ,content:\"".$array['translate']['content']."\"},appre:{title:\"".$array['appre']['title']."\" ,content:\"".$array['appre']['content']."\"},conment:{title:\"".$array['conment']['title']."\" ,content:\"".$array['conment']['content']."\"},info:{title:\"".$array['info']['title']."\" ,content:\"".$array['info']['content']."\"},text:{title:\"".$array['text']['title']."\" ,content:\"".$array['text']['content']."\"}}";
	?>