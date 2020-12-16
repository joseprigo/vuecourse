Vue.component('modal-message',{
	template:`
	<div class="modal is-active">
 		<div class="modal-background"></div>
  		<div class="modal-content">
  			<div class="box">
				<slot></slot>
			</div>
  		</div>
  		<button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
	</div>
	`
});

Vue.component('message-raw',{
	props: ['title', 'body'],
	template: `
	<article class="message" v-show="isVisible">
  		<div class="message-header">
    		<p>{{ title }}</p>
    		<button class="delete" aria-label="delete" @click="isVisible=false" ></button>
  		</div>
  		<div class="message-body">
    		{{ body}}
  		</div>
	</article>
`,
	data(){
		return {
			isVisible: true
		}
	}
});

new Vue({
	el:'#root',
	data: {
		showModal: false
	}
});