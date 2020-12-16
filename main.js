Vue.component('task',{
	template: '<li><slot></slot></li>',

	data(){
		return {
			message 'Important data in a component is a function that returns an object'
		}
	}
});

new Vue({
	el:'#root'
})