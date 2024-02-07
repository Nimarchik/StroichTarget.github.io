AOS.init();


$('#phone').on('input', function () {
  var val = this.value;
  if (val.length < 4)
    this.value = '+380';
});




const mailPath = './mail.php'

document.querySelectorAll('.uniForm').forEach((e) => {

  e.addEventListener('submit', function (e) {

    let th = this,
      params = new FormData(this),
      request = new XMLHttpRequest()

    request.open('POST', mailPath, true)
    request.send(params)

    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        setTimeout(function () { th.reset() }, 1000)
        const modal = document.querySelector('.modal_thank');
        const close = document.querySelector('.modal-close');
        modal.style.display = 'block';
        close.addEventListener('click', () => {
          modal.style.display = 'none';
        })
      }
    }

    e.preventDefault()

  })

})