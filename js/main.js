const mailPath = './mail.php'

document.querySelectorAll('.uniForm').forEach( (e) => {

	e.addEventListener('submit', function(e) {

		let th      = this,
		    params  = new FormData(this),
		    request = new XMLHttpRequest()

		request.open('POST', mailPath, true)
		request.send(params)

		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				setTimeout(function() { th.reset() }, 1000)
				alert('Дякую, ваша заявка відправлена!')
			}
		}

		e.preventDefault()

	})

})

AOS.init();

let burger = document.querySelector('.burger');
let closeNav = document.querySelector('.modal-close-nav');
let list = document.querySelector('.mobile_list');

burger.addEventListener('click', () => {
  list.classList.add('--show');
  closeNav.addEventListener('click', () => {
    list.classList.remove('--show');
  })
})


