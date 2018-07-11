//获取JSON基本路径
var baseurl="http://192.168.15.155:8080/basicservice/DataAccess/execute?";
//图表数据源ID
var chartDataSourceId="40288f1b642fbea60164610461330044";
//图表数据源ID
var singleValueDataSourceId="40288f1b642fbea60164612066650058";
//平台服务_信用数据质量数据源ID
var table_XYSJZL_DataSourceId="40288f1b642fbea601646185bfed005f";
//企业信用_行政许可数据源ID
var table_XZXK_DataSourceId="40288f1b642fbea6016468857c640088";
//企业信用_行政处罚数据源ID
var table_XZCF_DataSourceId="40288f1b642fbea6016468867923008c";
//企业信用_评级信息数据源ID
var table_PJXX_DataSourceId="40288f1b642fbea6016461fa70a4006e";
//企业信用_失信企业数据源ID
var table_SXQY_DataSourceId="40288f1b642fbea6016461f83c9f0069";
//企业信用_企业预警数据源ID
var table_QYYJ_DataSourceId="40288f1b642fbea601646207cf320078";
//资源信用_部门主题数据源ID
var table_BMZT_DataSourceId="40288f1b642fbea6016465eb514a0084";
//资源信用_共享方式数据源ID
var table_GXFS_DataSourceId="40288f1b642fbea6016465d8617e007c";
//行业信用_安全生产数据源ID
var table_AQSC_DataSourceId="40288f1b642fbea6016468a3ff520090";
//个人信用_重点人群详情表数据源ID
var table_ZDRQXQ_DataSourceId="40288f1b642fbea601646a16634c0096";
//资源信用_部门主题联系表数据源ID
var table_BMZT_GXFS_DataSourceId="40288f1b642fbea601647f99d6a1009c";

//按照数据源ID获得JSON路径
function getJsonUrl(datasourceId){
	return baseurl+"datasourceId="+datasourceId;
}

//按照数据源ID和年份获得JSON路径
function getJsonUrl(datasourceId,year){
	var yearparam='{\"YEAR\":\"'+year+'\"}';
	return baseurl+"datasourceId="+datasourceId+"&paramMap="+yearparam;
}
//按照数据源ID和年份获得JSON路径
function getBmztJsonUrl(datasourceId,year){
	var yearparam='{\"NAME\":\"'+year+'\"}';
	return baseurl+"datasourceId="+datasourceId+"&paramMap="+yearparam;
}
//按照数据源ID和分类获得JSON路径
function getSelectJsonUrl(datasourceId,select_fl){
	var fl='{\"FL\":\"'+select_fl+'\"}';
	//return baseurl+"datasourceId="+datasourceId+"&paramMap="+yearparam;
	return baseurl+"datasourceId="+datasourceId;
}

//按照图表ID和年份获得JSON路径
function getChartJsonUrl(chartID,year){
	var paramMap='{\"CHART_ID\":\"'+chartID+'\",\"YEAR\":\"'+year+'\"}';
	return baseurl+"datasourceId="+chartDataSourceId+"&paramMap="+paramMap;
}
//按照数据源ID获得JSON路径
function getAllJsonUrl(datasourceId){
	return baseurl+"datasourceId="+datasourceId;
}

//旋转字符串函数
function rotateStr(oldStr){
var newStr='';
for(var i=0;i<oldStr.length-1;i++){
	newStr+=oldStr.charAt(i)+"\n";
}
newStr+=oldStr.charAt(i);
return newStr;
}
//滚动表格
function scrollTable(tablename){
	var $this = $('#'+tablename); 
	var scrollTimer; 
	$this.hover(function() { 
	clearInterval(scrollTimer); 
	}, function() { 
	scrollTimer = setInterval(function() { 
	scrollup(); 
	}, 2000); 
	}).trigger("mouseleave"); 
	

	//从下往上滚
        function scrollup(){
            var table = document.getElementById(tablename);//$("#table1 > tbody").get(0)
            var row = table.firstChild;
            table.removeChild(row);
            table.appendChild(row);
			//if(index==5)index=0;
			// var newrow=$(rows[index]);
           // $("#tbd").append(rows[index++]);    //可以通过ajax去取后面的数据
        }   
	
}