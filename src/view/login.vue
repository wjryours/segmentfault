<template>
	<div class="login">
		<div class="header clearfix">
			<div class="resgister_btn">注册</div>
		</div>
		<div class="logo_wrapper">
			<div class="logo"></div>
		</div>
		<div class="logo_body">
			<div class="logo_body_item">
				<div class="logo_item_name">Email或者手机号</div>
				<div class="logo_input">
					<input type="text" v-model="UserInformation.name">
				</div>
			</div>
			<div class="logo_body_item">
				<div class="logo_item_name item_active">密码</div>
				<div class="logo_input">
					<input type="text" :type="InputType" v-model="UserInformation.password"> 
					<div class="noeye_icon"  @click="ChangeInputType" :class="{'eye_icon':InputType=='text'}">
						
					</div>
				</div>
			</div>
			<div class="forget clearfix">
				<div class="forget_btn ">
					忘记密码
				</div>
			</div>
		</div>
		<div class="login_btn_wrapper">
			<div class="login_btn" @click="Login">
				登录
			</div>
		</div>		
	</div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default{
	data(){
		return{
			InputType:'password',
			UserInformation:{
				name:'',
				password:''
			}
		}
	},
	computed:{
            ...mapGetters(['UserInfo'])
    },
    created(){
    	if(this.UserInfo.name!=""){
    		this.UserInformation.name=this.UserInfo.name
    	}
    	if(this.UserInfo.password!=""){
    		this.UserInformation.password=this.UserInfo.password
    	}
    },
	methods:{
		ChangeInputType(){
			if (this.InputType=='password') {
				this.InputType='text'
			}else{
				this.InputType='password'
			}	
		},
		Login(){
			
			this.ChangeUserInfo(this.UserInformation)
			console.log(this.UserInfo)
		},
		...mapActions(['ChangeUserInfo'])
	}
}
</script>
<style scoped>
.login{
	padding: 0 0.8rem;
}
.header{
	padding-top: 0.533333rem;
}
.resgister_btn{
	display: inline-block;
	float: right;
	font-size: 14px;
	color: #727272;
}
.clearfix:after{
	content:'';
	display:block;
	clear: both;
	visibility: hidden;
	height: 0;
}
.logo_wrapper{

}
.logo{
	width: 7.813333rem;
	height: 1.466667rem;
	background: url('../../static/img/logo.png')no-repeat;
	background-size: 100% 100%;
	margin:0.84rem auto 0;
}
.logo_body{
	margin-top: 0.666667rem;
}
.logo_body_item{
	padding-top:0.466667rem
}
.logo_item_name{
	color: #939393;
	font-size: 10px;
	padding-bottom: 0.133333rem;
}
.logo_input{
	position: relative;
}
.logo_input input{
	width: 7.6rem;
	height: 0.8rem;
	border:none;
	border-bottom:1px solid #4d4d4d;
	outline: none;
	position: relative;
	padding-right: 1rem;
}
.item_active{
	color: #009385
}
.noeye_icon{
	position: absolute;
	top:0;
	right: 0;  
	width: 0.64rem;
	height: 0.64rem;
	background: url('../../static/img/nowatch_icon.png')no-repeat;
	background-size: 100% 100%;
}	
.eye_icon{
	position: absolute;
	top:0;
	right: 0;  
	width: 0.64rem;
	height: 0.64rem;
	background: url('../../static/img/watch_icon.png')no-repeat;
	background-size: 100% 100%;
}
.forget{
	margin-top: 0.266667rem;
}
.forget_btn{
	color: #00833e;
	float: right;
}
.login_btn{
	margin:1.733333rem auto 0;
	width: 8.0rem;
	height: 1.333333rem;
	text-align: center;
	line-height: 1.333333rem;
	font-size: 15px;
	color: #fff;
	background: #009a61;
}
</style>