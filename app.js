//app.js
App({
	// 接口地址
	api:{
		yuyue:"https://api.getweapp.com/vendor/jiajuol/apply",//提交预约
		condition:"https://api.getweapp.com/vendor/jiajuol/common/condition_list",//条件   'all' => '全部','style' => '风格','space' => '空间','housetype' => '户型','area' => '面积','price' => '预算','section' => '局部'
		subjectList:"https://api.getweapp.com/vendor/jiajuol/subject/subject_list",//案例列表
		subjectInfo:"https://api.getweapp.com/vendor/jiajuol/subject/subject_info",//案例详情
		designerInfo:"https://api.getweapp.com/vendor/jiajuol/designer/designer_info",//设计师详情
		picList:"https://api.getweapp.com/vendor/jiajuol/pic_list/pic_list",//图库列表
	},
	// 获取用户信息
	getUserInfo: function(cb) {
		var that = this
		if (this.globalData.userInfo) {
			typeof cb == "function" && cb(this.globalData.userInfo)
		} else {
			//调用登录接口
			wx.login({
				success: function() {
					wx.getUserInfo({
						success: function(res) {
							that.globalData.userInfo = res.userInfo
							typeof cb == "function" && cb(that.globalData.userInfo)
						}
					})
				}
			})
		}
	},
	//跳转预约页面
	yuyue:function(){
        wx.navigateTo({
           url: '/pages/yuyue/yuyue'
        });
    },
    // 全局变量
	globalData: {
		caseId: 1000098, //案例ID 1000098 多张户型图 1000089 单张户型图 1000090 无户型图
		designerId:2227 //设计师id
	}
})