<template>
	<div class="header-wrap">
		<div class="header-lf arrow arrowLeft" v-on:click="back()"></div>
		<div class="header-ct">{{title}}</div>
		<div class="header-rg"></div>
	</div>
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {

			}
		},
		props: ["title"],
		components: {

		},
		methods: {
			back() {
				this.$router.go(-1)
			}
		},
		watch: {
			
		},
	}
</script>

<style scoped="scoped">
	.header-wrap {
		border-bottom: 1px solid #e2e2e2;
		width: 100%;
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
	}
	
	.header-lf,
	.header-ct,
	.header-rg {
		height: 50px;
		font-size: 16px;
		color: #333333;
		display: flex;
		align-items: center;
	}
	
	.header-lf,
	.header-rg {
		flex: 1;
	}
	
	.header-ct {
		flex: 3;
		justify-content: center;
	}
</style>