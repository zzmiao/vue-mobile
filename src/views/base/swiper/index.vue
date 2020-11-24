<template>
	<swiper class="swiper" :options="swiperOption">
		<swiper-slide class="swiper-slide" v-for="items in swiperList.swiper">
			<img class="swiper-img" v-bind:src="items.img" />
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	export default {
		name: 'swiper-example-pagination',
		title: 'Pagination',
		components: {

		},
		data() {
			return {
				swiperOption: {
					autoplay: 3000,
					loop: true,
					pagination: '.swiper-pagination',
				}
			}
		},
		props: {
			height: {
				type: String,
				default: '200'
			},
			swiperList: {
				type: Object
			}
		}
	}
</script>

<style scoped="scoped">
	.swiper-slide {
		display: flex;
		position: relative;
	}
	
	.swiper-img {
		width: 100%;
		max-height: 375px;
	}
	
</style>