<template>
	<div class="question" ref="question">
		<div class="question_content">
			<div class="header">
				<div class="header_search">
					<div class="header_search_icon"></div>
					<div class="header_search_word">搜索问答、文章和人</div>
				</div>
				<div class="header_icon_w">
					<div class="header_edit header_icon"></div>
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
			<div class="list_wraper">
				<div class="list">
					<div class="list_item" v-for="item in ListData"> 
						<div class="list_item_l">
							<div class="list_item_content">请问在HashSet集合中存入同一对象，在哈希值相同情况下为什么没有调用equals方法呢？</div>
							<div class="list_item_label">
								<div class="list_item_label_item">vue.js</div>
								<div class="list_item_label_item">webpack</div>
							</div>
						</div>
						<div class="list_item_r">
							<div class="list_item_answer">
								<div class="list_item_answer_w">
									<div class="list_item_answer_num">3</div>
									<div class="list_item_answer_word">回答</div>
								</div>	
							</div>
							<div class="list_item_time">27分钟前</div>
						</div>
					</div>
				</div>
			</div>
		</div>
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
						name:'推荐的',
					},
					{
						name:'热门的',
					},
					{
						name:'vue.js',
					},
					{
						name:'javascript',
					},
					{
						name:'react.js',
					},
					{
						name:'css3',
					},
					{
						name:'html5',
					},
					{
						name:'webpack',
					},
					{
						name:'node.js',
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
			ChooseTab(item,index){
				this.TabIndex=index
			},
			InitListScroll(){
				this.$nextTick(()=>{
					if (!this.scrollList) {
						this.scrollList=new BScroll(this.$refs.question, {
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
		}
	}
</script>
<style scoped>
.question{
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
	width: 8.266667rem;
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
.header_edit{
	background: url('../../static/img/edit_icon.png')no-repeat;
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
.list_item{
	display: flex;
	padding:0.426667rem 0.466667rem;
	border-bottom: 1px solid #d7d7d7;
}
.list_item_answer{
	width: 1.2rem;
	height: 1.2rem;
	/*line-height: 0.6rem;*/
	background: #e5f4ef;
	color: #009254;
	margin:0 auto;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
}
.list_item_answer_w{
	text-align: center;
}
.list_item_time{
	width: 1.36rem;
	color: #b2b2b2;
	margin-top: 0.266667rem;
}
.list_item_label{
	margin-top: 0.333333rem;
}
.list_item_label_item{
	display: inline-block;
	padding: 0.066667rem 0.266667rem;
	background:#f0f9f6;
	color: #009a61;
}
.list_item_content{
	font-size: 16px;
}
.list_item_content{
	width: 7.466667rem;
	overflow: hidden;
	height: 39px;
	line-height: 20px;
	display: -webkit-box;
	/* autoprefixer: off*/
    -webkit-box-orient: vertical;
    /* autoprefixer: on*/
    -webkit-line-clamp: 2;
}	
</style>
