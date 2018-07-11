
        $(document).ready(function(){
			init_left_view(table_BMZT_DataSourceId);
	        init_rigth_view(table_GXFS_DataSourceId,'');
		 }
		);
		//清除共享方式内容
		function delete_all_gxnr()
		{
			var right = document.querySelector('div.right');
	        var childs = right.childNodes; 
			//console.log(childs.length);
			for(var i = childs.length-1; i>=0 ; i--) { 
			  console.log(childs.length);
			  right.removeChild(childs[i]); 
			}
		}
		// 非条件共享按钮的点击事件
	　　$("#FTJGX_BTN").click(function(){
	　　    delete_all_gxnr();
			init_rigth_view(table_GXFS_DataSourceId,'FTJGX');
	    });
	   // 条件共享按钮的点击事件
	　　$("#TJGX_BTN").click(function(){
		    delete_all_gxnr();
	        init_rigth_view(table_GXFS_DataSourceId,'TJGX');
	　　});
	   // 不共享按钮的点击事件
	　　$("#BGX_BTN").click(function(){
		    delete_all_gxnr();
	        init_rigth_view(table_GXFS_DataSourceId,'BGX');
	　　});
		//载入本页面单值数据
		
		//加载页面右边数据
		function init_rigth_view(datasourceId,select_fl)
		{
			$.get(getSelectJsonUrl(datasourceId,select_fl)).done(function (data) {		
				for (var i=0;i<data.rows.length;i++){
					var Values=new Array();//存放数据对象的数组
					var Name=data.rows[i]['NAME'];;//存放数据对象的数组
					for(var j=0;j<4;j++)
				    {
						Values[j]=data.rows[i]['VALUE1'];
					    Values[j]=data.rows[i]['VALUE2'];
					    Values[j]=data.rows[i]['VALUE3'];
					    Values[j]=data.rows[i]['VALUE4'];	
					}
                    createRightBlock(Values,Name);					
				}        
			});
		}
		//页面右边  共享方式数据模块打印方法
		function createRightBlock(values,name) {
			var Names=['非条件共享','每季度更新','记录数','字段数'];
            var right = document.querySelector('div.right');
            var rightBlock = document.createElement('div');
            rightBlock.className = 'rightBlock';
            var h4 = document.createElement('h4');
            h4.innerHTML = name;
            rightBlock.appendChild(h4);
            for(var k = 0; k < 4; k++) {
                var span = document.createElement('span');
                var p = document.createElement('p');
                p.innerHTML = Names[k];
                span.innerHTML = values[k];
                p.appendChild(span);
                rightBlock.appendChild(p);
            }
            right.appendChild(rightBlock);
        }
		//加载页面左边数据
		function init_left_view(datasourceId)
		{   var title=new Array();
		    var num=new Array();
			$.get(getAllJsonUrl(datasourceId)).done(function (data) {		
				for (var i=0;i<data.rows.length;i++){
					title[i]=data.rows[i]['NAME'];//存放数据对象的数组
					num[i]=data.rows[i]['VALUE'];
                    					
				}
                createLeftBlock(title,num);				
			});
		}
		//var title = ['市统计局1','市统计局2','市统计局3','市统计局4','市统计局','市统计局','市统计局','市统计局','市统计局','市统计局','市统计局','市统计局'];
		//var num = ['1','2','3','4','5','6','50','50','50','50','50','50']
		//页面左边 部门、主题数据模块打印方法
        //createLeftBlock(title,num)
		function createLeftBlock(title,num)
		{
			var leftbottom = document.querySelector('.leftbottom')
			for(var i = 0; i < title.length; i++) {
				var row = document.createElement('div');
				var leftbottom_title = document.createElement('span');
				var leftbottom_num = document.createElement('span');

                row.classList.add('row')
                leftbottom_title.classList.add('leftbottom-title');
                leftbottom_num.classList.add('leftbottom-num');

                leftbottom_title.innerHTML = title[i];
                leftbottom_num.innerHTML = num[i];

                row.appendChild(leftbottom_title)
                row.appendChild(leftbottom_num)
                leftbottom.appendChild(row)
			}
            clickEvent();

		}
		//row点击切换选中状态
        function clickEvent() {
            var row = document.querySelectorAll('.row');

            for(var i = 0; i < row.length; i++) {

                row[i].onclick = function () {

                    for(var k = 0; k < row.length; k++) {
                        row[k].classList.remove('active');
                    }
                    this.classList.add('active');
                    var text =  this.childNodes[0].innerHTML;
                    var number =  this.childNodes[1].innerHTML; 
					update_Right_Table_Info(text,number);
                }
            }
        }


		//更新页面右侧数据及视图
		function update_Right_Table_Info(name,number)
		{
			//var num=Math.floor(Math.random()*10+1);
			$("#DANWEI_NAME").text(name);
			$("#DANWEI_ZIYUANBIAO_NUM").text(number);
			$("#ZIDUANXIANG_NUM").text(number*4);
			delete_all_gxnr();
			$.get(getSelectJsonUrl(table_GXFS_DataSourceId,'')).done(function (data) {		
				for (var i=0;i<number;i++){
					var Values=new Array();//存放数据对象的数组
					var Name=data.rows[i]['NAME'];;//存放数据对象的数组
					for(var j=0;j<4;j++)
				    {
						Values[j]=data.rows[i]['VALUE1'];
					    Values[j]=data.rows[i]['VALUE2'];
					    Values[j]=data.rows[i]['VALUE3'];
					    Values[j]=data.rows[i]['VALUE4'];	
					}
                    createRightBlock(Values,Name);					
				}        
			});
		}



