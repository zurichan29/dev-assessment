
const modal = document.querySelector('#modal');

const btn = document.querySelector("#start_browsing");

const close_btn = document.querySelectorAll('.close')[0];

btn.onclick = function () {
    modal.classList.add('active')
}

close_btn.onclick = function () {
    modal.classList.remove('active')
}