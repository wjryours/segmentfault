<template>
	<div class="headerline">
		<div class="header">
			<div class="header_search">
				<div class="header_search_icon"></div>
				<div class="header_search_word">搜索问答、文章和人</div>
			</div>
			<div class="header_icon_w">
				<div class="header_sort header_icon"></div>
			</div>
			<div class="header_icon_w">
				 <div class="header_add header_icon"></div>
			</div>
		</div>
		<div class="tab" ref="tab">
			<div class="tab_content" ref="tabcontent">
				<div class="tab_item" v-for="item in TabList" ref="tabitem">
					{{item.name}}
				</div>
			</div>
		</div>
		<toast v-model="ToastShow" type="text" width="8rem">{{ToastTest}}</toast>
		<loading v-show="loadingShow" :text="loadingWord"></loading>
	</div>	
</template>
<script>
import {Toast,Loading} from 'vux'
import BScroll from 'better-scroll'
	export default{
		data(){
			return{
				loadingShow:false,
				loadingWord:' ',
				ToastShow:false,
				ToastTest:'',
				TabList:[
					{
						name:'全部',
					},
					{
						name:'全部',
					},
					{
						name:'全部',
					},
					{
						name:'全部',
					},
					{
						name:'全部',
					},
					{
						name:'全部',
					},
					{
						name:'全部',
					},
					{
						name:'全部',
					},
					{
						name:'全部',
					},
					{
						name:'全部',
					},
				]
			}
		},
		components:{
			Toast,
			Loading,
		},
		mounted(){
			this.InitTabScroll()
		},
		methods:{
			InitTabScroll(){
				let width=0
				for (let  i = 0; i <this.TabList.length; i++) {
					width+=this.$refs.tabitem[0].getBoundingClientRect().width
				}

				this.$refs.tabcontent.style.width=width+'px'
				this.$nextTick(()=>{
					if (!this.scroll) {
						this.scroll=new BScroll(this.$refs.tab, {
							startX:0,
		        			click:true,
		        			scrollX:true,
		        			scrollY:false,
		        			eventPassthrough:'vertical'
        				})
					}else{
						this.scroll.refresh()
					}
				})
			}
		}
	}
</script>
<style scoped>
.headerline{
	
}
.header{
	width: 100%;
	height: 1.6rem;
	background: #009a61;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.header_search{
	background: #1aa471;
	width: 6.933333rem;
	height: 1.133333rem;
	margin-left: 0.466667rem;
	display: flex;
	align-items: center;
}
.header_icon_w{
	flex: 1;

}
.header_icon{
	width: 0.533333rem;
	height: 0.533333rem;
	margin:0 auto;
}
.header_sort{
	background: url('../../static/img/sort_icon.png')no-repeat;
	background-size: 100% 100%;
}
.header_add{
	background: url('../../static/img/add_icon.png')no-repeat;
	background-size: 100% 100%;
}
.header_search_icon{
	width: 0.533333rem;
	height: 0.533333rem;
	margin-left: 0.266667rem;
	margin-right: 0.333333rem;
	background: url('../../static/img/search_icon.png')no-repeat;
	background-size: 100% 100%;
}
.header_search_word{
	color: #9cd8c2;
	font-size: 14px;
}
.tab{
	/*width: 10.0rem;*/
	height: 1.333333rem;
	overflow: hidden;
}
.tab_content{
	height: 1.333333rem;
	/*width: auto;*/
	/*overflow-y: hidden;*/
}
.tab_item{
	display: inline-block;
	height: 1.333333rem;
	line-height: 1.333333rem;
	padding: 0 0.466667rem;
}	
</style>
