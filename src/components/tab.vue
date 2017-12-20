<template>
	<div class="indextab">
		<div class="indextab_item" v-for="item in TabMenu" @click="SwitchTab(item)">
				<div class="indextab_item_wrap">
					<img :src="item.img" v-show="item.router!=$route.path">
					<img :src="item.acimg" v-show="item.router==$route.path" >
					<div class="indextab_word" :class="{'indextab_word_ac':item.router===$route.path}">	
						{{item.word}}
					</div>
				</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				router:'',
				TabMenu:[
					{
						img:'./static/img/list_icon.png',
						acimg:'./static/img/list_ac_icon.png',
						word:'头条',
						router:'/Headerline'
					},
					{
						img:'./static/img/article_icon.png',
						acimg:'./static/img/article_ac_icon.png',
						word:'专栏',
						router:'/Article'
					},
					{
						img:'./static/img/qa_icon.png',
						acimg:'./static/img/qa_ac_icon.png',
						word:'问答',
						router:'/Question'
					},
					{
						img:'./static/img/find_icon.png',
						acimg:'./static/img/find_ac_icon.png',
						word:'发现',
						router:'/Discover'
					},
					{
						img:'./static/img/my_icon.png',
						acimg:'./static/img/my_ac_icon.png',
						word:'我的',
						router:'/User'
					}
				]
			}
		},
		mounted(){
		},
		methods:{
			SwitchTab(item){
				

				this.$router.push({
					path:item.router
				})
			}
		}
	}
</script>
<style >
.indextab{
	display: flex;
	justify-content: center;
	position: fixed;
	bottom: 0;
	left: 0;
	background: #fff;
	width: 100%;
	box-shadow: 1px 1px 10px #333
}
.indextab_item{
	height: 1.6rem;
	text-align: center;
	display: flex;
	align-items: center;
	flex: 1;
	text-decoration: none!important;
}
.indextab_item_wrap{
	margin:0 auto;
}
.indextab_word{
	color: #969696;

}
.indextab_word_ac{
	color: #009a61
}
.indextab_item img{
	width: 0.533333rem;
	height: 0.533333rem;
}	
</style>