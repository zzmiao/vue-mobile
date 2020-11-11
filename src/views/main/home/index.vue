<template>
	<div class="app-wrap">
		<div class="home-index">
			<!--轮播-start-->
			<my-swiper v-bind:swiperList="swiperList"></my-swiper>
			<!--轮播-end-->
			<!---->
			123
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import myFooter from "@/views/base/footer/index"
	import mySwiper from "@/views/base/swiper/index"
	export default {
		name: "Home",
		data() {
			return {
				swiperList: {
					swiper: [{
						url: "",
						img: require("@/assets/homeSwiper/阿轲.jpg"),
						name: "阿轲"
					}, {
						url: "",
						img: require("@/assets/homeSwiper/安琪拉.jpg"),
						name: "安琪拉"
					}, {
						url: "",
						img: require("@/assets/homeSwiper/白起.jpg"),
						name: "白起"
					}, {
						url: "",
						img: require("@/assets/homeSwiper/百里守约.jpg"),
						name: "百里守约"
					}]
				}
			}
		},
		components: {
			myFooter,
			mySwiper
		}
	}
</script>

<style>

</style>