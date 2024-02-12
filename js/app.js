// get the modal
const modal = document.querySelector('#modal');
// get the button
const btn = document.querySelector("#start_browsing");
// close button
const close_btn = document.querySelectorAll('.close')[0];

btn.onclick = function () {
    modal.classList.add('active')
}

close_btn.onclick = function () {
    modal.classList.remove('active')
}