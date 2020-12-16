Vue.component('coupon',{

	template: `
	<input type="text" placeholder="Enter your coupon" @blur="onCouponApplied">
	`,
	methods:{
		onCouponApplied(){
			this.$emit('applied', this.coupon);

		}
	}

});

new Vue({
	el: '#root',
	data:{
		couponApplied:false
	},
	methods:{
		onCouponApplied(){
			this.couponApplied = true;
		}
	}
});