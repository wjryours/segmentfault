<template>
	<div class="user">
		<div class="header">
			SegmentFault
		</div>
		<div class="userinfo">
			<div class="userinfo_avatar">
				<img src="../../static/img/avatar.jpg" alt="">
			</div>
			<div class="userinfo_nickname">
				正义的伙伴
			</div>
		</div>
		<div class="user_item_group">
			<div class="user_item">
				最新动态
			</div>
		</div>
		<div class="user_item_group">
			<div class="user_item">
				我的消息
			</div>
			<div class="user_item">
				我的私信
			</div>
		</div>
		<div class="user_item_group">
			<div class="user_item">
				我的关注
			</div>
			<div class="user_item">
				我的收藏
			</div>
		</div>
		<div class="user_item_group">
			<div class="user_item">
				设置
			</div>
		</div>
	</div>	
</template>
<script>
export default{
	data(){
		return{

		}
	},
	mounted(){

	},
	methods:{

	}
}
</script>
<style scoped>
.user{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #e7e7e7;
}
.header{
	height: 1.6rem;
	line-height: 1.6rem;
	font-size: 18px;
	background: #009a61;
	color: #fff;
	padding-left: 0.466667rem;
}
.userinfo{
	background: #fff;
	height: 2.0rem;
	width: 100%;
	border-top:1px solid #c9c9c9;
	border-bottom:1px solid #c9c9c9;
	margin-top: 0.266667rem;
	display: flex;
	align-items: center;
	box-shadow:0 0 0 #000, /*左边阴影*/  
    0 0 0  #000, /*右边阴影*/  
    0 0 0  #000, /*顶部阴影*/  
    0 0 3px  #000; /*底边阴影*/ 
}
.userinfo_avatar{
	width: 1.4rem;
	height: 1.4rem;
	margin-left: 0.4rem;
}
.userinfo_avatar img{
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.userinfo_nickname{
	font-size: 15px;
	color: #7c7c7c;
	padding-left: 0.466667rem;
}
.user_item_group{
	/*padding-left: 0.533333rem;*/
	margin:0.2rem 0;
}
.user_item{
	background: #fff;
	height: 1.333333rem;
	line-height: 1.333333rem;
	padding-left: 0.533333rem;
	font-size: 14px;
	border-top:1px solid #c9c9c9;
	/*border-bottom:1px solid #c9c9c9;*/
}	
</style>
