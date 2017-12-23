<template>
	<div class="headerline" ref="headerline">
		<div class="headerline_content">
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
					<div class="tab_item " v-for="(item,index) in TabList" ref="tabitem" @click="ChooseTab(item,index)">
						<div class="tab_item_content " :class="{'tab_item_active':TabIndex==index}">
							{{item.name}}
						</div>
						
					</div>
				</div>
			</div>
			<div class="list_wrapper">
				<div class="list">
					<div class="list_item" v-for=" item in ListData">
						<div class="list_item_title">
							nodejs操作mongodb循环操作报错后，整个循环终止了，怎么办？？？
						</div>
						<div class="list_item_info">
							<div class="list_item_author">master</div>
							<div class="list_item_time">1天前</div>
						</div>
						<div class="list_item_cp_partition">
							<div class="list_item_cpl">
								<div class="list_item_cp_praise">
									<i></i>
									51
								</div>
								<div class="list_item_cp_commen">
									<i></i>
									6
								</div>
							</div>
							<div class="list_item_cpr">
								#前端
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<toast v-model="ToastShow" type="text" width="8rem">{{ToastTest}}</toast>
		<loading v-show="loadingShow" :text="loadingWord"></loading>
		<tab></tab>
	</div>	
</template>
<script>
import {Toast,Loading} from 'vux'
import BScroll from 'better-scroll'
import Tab from "@/components/tab"
	export default{
		data(){
			return{
				loadingShow:false,
				loadingWord:' ',
				ToastShow:false,
				ToastTest:'',
				ListData:[1,1,1,1,1,1,1],
				TabList:[
					{
						name:'全部',
					},
					{
						name:'前端',
					},
					{
						name:'后端',
					},
					{
						name:'iOS',
					},
					{
						name:'Android',
					},
					{
						name:'安全',
					},
					{
						name:'工具',
					},
					{
						name:'程序员',
					},
					{
						name:'行业',
					}
				],
				TabIndex:0
			}
		},
		components:{
			Toast,
			Loading,
			Tab
		},
		mounted(){
			this.InitTabScroll()
			this.InitListScroll()
		},
		methods:{
			InitTabScroll(){
				let width=0
				for (let  i = 0; i <this.TabList.length; i++) {
					width+=this.$refs.tabitem[i].getBoundingClientRect().width
				}

				this.$refs.tabcontent.style.width=width+'px'
				this.$nextTick(()=>{
					if (!this.scrollTab) {
						this.scrollTab=new BScroll(this.$refs.tab, {
							startX:0,
		        			click:true,
		        			scrollX:true,
		        			scrollY:false,
		        			eventPassthrough:'vertical'
        				})
					}else{
						this.scrollTab.refresh()
					}
				})
			},
			InitListScroll(){
				this.$nextTick(()=>{
					if (!this.scrollList) {
						this.scrollList=new BScroll(this.$refs.headerline, {
		        			click:true,
		        			scrollY:true,
		        			startY:0,
		        			pullUpLoad:{
                              threshold: -70, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
                          }
        				})
        				this.scrollList.on('pullingUp',(pos)=>{       				
        					console.log('超出啦')
        					this.LoadMoreData()
        				})
 
					}else{
						this.scrollList.refresh()
					}
				})
			},
			LoadMoreData(){
				this.Loading=true
				this.$nextTick(()=>{
					this.scrollList.refresh()//为了不让加载的loading隐藏起来看不见需要重新刷新下列表
				})
				setTimeout(()=>{
					this.ListData.push(1,2,3,4,5,6,7,8,9,10)
					console.log('加载数据')
					this.$nextTick(()=>{
						this.Loading=false
						this.scrollList.finishPullUp()//告诉better-scroll数据已经加载完毕
	        			this.scrollList.refresh()//刷新scroll
					})
					
				},1000)
			},
			ChooseTab(item,index){
				this.TabIndex=index
			}
		}
	}
</script>
<style scoped>
.headerline{
	/*height: 17.786667rem;*/
	height: 16.186667rem;
	overflow: hidden;
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
	width: 10.0rem;
	height: 1.333333rem;
	overflow: hidden;
	background: #009a61;
	color:#fff;
	
}
.tab_content{
	height: 1.333333rem;
	
	/*width: auto;*/
	/*overflow-y: hidden;*/
}
.tab_item{
	display: inline-block;
	height:1.293333rem;
	line-height:1.293333rem;
	border-bottom: 0.08rem solid #009a61;
}
.tab_item_content{
	padding: 0 0.466667rem;
}
.tab_item_active{
	border-bottom: 0.08rem solid #fff;
}
.list_wrapper{
	/*padding-bottom: 1.6rem;*/
	/*margin-bottom: 1.6rem;*/
}
.list_item{
	padding:0.426667rem 0.466667rem;
	border-bottom: 1px solid #d7d7d7;
}
.list_item_title{
	font-size: 16px;
	margin-bottom: 0.266667rem;
}
.list_item_info{
	color: #a2a2a2;
	margin-bottom:0.373333rem;
}
.list_item_author{
	display: inline-block;
}
.list_item_time{
	display: inline-block;
}
.list_item_cp_partition{
	display: flex;
	justify-content: space-between;
	color: #5dbf9b;
}
.list_item_cp_praise{
	display: inline-block;
}
.list_item_cp_praise i{
	display: inline-block;
	width: 0.333333rem;
	height: 0.333333rem;
	background:url('../../static/img/like_icon.png')no-repeat;
	background-size: 100% 100%;
	vertical-align: middle;
}
.list_item_cp_commen{
	display: inline-block;
	padding-left: 0.133333rem
}
.list_item_cp_commen i{
	display: inline-block;
	width: 0.333333rem;
	height: 0.333333rem;
	background:url('../../static/img/commen_icon.png')no-repeat;
	background-size: 100% 100%;
	vertical-align: middle;
}
.list_item_cpr{
	color: #a2a2a2;
}	
</style>
