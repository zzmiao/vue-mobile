<template>
	<div class="example-index">
		<div class="example-content">
			<div class="example-lf" v-bind:style="{height:availHeight+'px'}">1</div>
			<div class="example-rg">2</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				availHeight: "",
			}
		},
		components: {

		},
		methods: {

		},
		computed: {

		},
		watch: {

		},
		created: function() {
			console.log(this.getClientSize());
            console.log(this.getMenuHeight())
			this.$data.availHeight = this.getClientSize().clientHeight;
		},
		/**
		 * 实例被挂载后调用
		 */
		mounted() {

		}
	}
</script>

<style scoped="scoped">
	.example-content {
		border: 1px solid red;
		width: 100%;
		display: flex;
	}
	
	.example-lf,
	.example-rg {
		border: 1px solid red;
	}
	
	.example-lf {
		width: 20%;
	}
	
	.example-rg {
		width: 80%;
	}
</style>