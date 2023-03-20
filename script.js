function clickSub() {
    //Lấy value email từ input
    const emailValue = document.querySelector('.mail').value.toLowerCase();
    // khi lỗi
    const errorMail = document.querySelector('.error-mail');

    // Kiểm tra email
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const checkMail = emailValue.match(regex);
    const infoContent = document.querySelector('.myInfo');
    const formEmail = document.querySelector('.form-email');

    if (checkMail) {
        infoContent.style.display = 'block';
        formEmail.style.display = 'none';
    } else {
        errorMail.textContent = 'Email không chính xác';
    }
}

// hover button
function overMore(value) {
    const viewMore = value.querySelector('.view-more');
    viewMore.style.display = 'block';
}

function outMore(value) {
    const viewMore = value.querySelector('.view-more');
    viewMore.style.display = 'none';
}

//hiển thị job info

const viewMoreButtons = document.querySelectorAll('.view-more');
// lặp qua các phần tử trong viewMoreButtons
viewMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const viewMore = button.parentElement.previousElementSibling; // lấy phần tử trước nút view-more
        //kiểm tra xem viewMore có class show-more không
        if (viewMore.classList.contains('show-more')) {
            viewMore.classList.remove('show-more');
            button.textContent = 'View More';
        } else {
            viewMore.classList.add('show-more');
            button.textContent = 'Less More';
        }
    });
});


