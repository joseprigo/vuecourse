Vue.component('task-list',{
	template: '<div><task v-for="task in tasks" >{{ task.name }}</task></div>',

	data(){
		return {
			tasks: [
				{name: 'Do the laundry', completed: false},
				{name: 'Cook lunch', completed: true},
				{name: 'Go to school', completed: false},
				{name: 'Do english homework', completed: false},
				{name: 'Call grandma', completed: true},
				]
		}
	}
});

Vue.component('task',{
	template: '<li><slot></slot></li>',

	data(){
		return {
			message: 'task'
		}
	}
});

new Vue({
	el:'#root'
})