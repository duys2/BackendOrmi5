let openModal = document.querySelector(".modal-btn");
let modalPage = document.querySelector(".modal-page");
let closeModal = document.querySelector(".close-modal");

/*
openModal.onclick = function () {
    modalPage.classList.add("active");
}
*/

// 위와 같다
openModal.addEventListener("click", function () {
    modalPage.classList.add("active"); // 모달 페이지 보이게 하기
});

closeModal.onclick = function () {
    modalPage.classList.remove("active"); // 모달 페이지 안 보이게 하기
}