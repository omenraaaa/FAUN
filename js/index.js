var num_wrapper = document.querySelectorAll('.card-counter__numbers')
var card_tape = document.querySelector('.card__tape')
var num_item = document.querySelectorAll('.card-counter__number')

function moveCards() {
			
	for(var i = 0; i < num_wrapper.length; i++) {
			
		num_wrapper[i].style.top = '-' + num_wrapper[i].dataset.state * 98 + 'px'
		num_wrapper[i].children[num_wrapper[i].dataset.state].classList.add('card-counter__number_active')
	}
			
	for(var i = 0; i < num_wrapper.length; i++) {
			
		card_tape.dataset.state = num_wrapper[0].dataset.state
		setTimeout(function(){
			card_tape.style.top = '-' + 583 * card_tape.dataset.state + 'px'
		}, 10)
	}
}

moveCards()

document.addEventListener('click', function(e){
			
	var numbers = e.target.parentNode.children

	if(e.target.classList.contains('card-counter__number')) {
				
		for (var i = 0; i < numbers.length; i++) {
					
			if(numbers[i].classList.contains('card-counter__number_active')) {
						
				numbers[i].classList.remove('card-counter__number_active')
			
			}
		}
				
		setTimeout(function(){
					
			e.target.classList.add('card-counter__number_active')
						
			e.target.parentNode.dataset.state = e.target.innerHTML - 1
					
			setTimeout(moveCards(), 10)
				
		}, 10)
		
	} else {
			
		return
			
	}
		
})

var video = document.getElementById('last_video')
var progress = document.querySelector('.progress__inner')
var play = document.getElementById('play_button')

video.addEventListener('timeupdate', function(){
	progress.style.width = video.currentTime / (video.duration / 100) + '%'
})
		
play.addEventListener('click', function(){
			
	if(video.paused) {
	
		video.play()

	} else {
	
		video.pause()

	}
})

var mobile_nav = document.querySelector('.mobile-nav')

document.addEventListener('click', function(e){

	if (e.target.id == 'menu_toggler') {
				
		mobile_nav.classList.toggle('hidden')
		setTimeout(function() {
					
			mobile_nav.classList.toggle('mobile-nav__show')
				
		}, 10)
	
	} else if (e.target.id == 'close_icon') {
				
		mobile_nav.classList.toggle('mobile-nav__show')
		setTimeout(function() {
			mobile_nav.classList.toggle('hidden')
		}, 1000)
	} else {
				
		return
	
	}

})