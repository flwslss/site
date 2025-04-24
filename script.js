// Получаем элементы
const openFormButton = document.getElementById('openFormButton');
const closeFormButton = document.getElementById('closeForm');
const contactFormPopup = document.getElementById('contactFormPopup');

// Функция для открытия формы
function openForm() {
    contactFormPopup.style.display = 'flex';
}

// Привязываем событие к кнопке открытия формы
if (openFormButton) {
    openFormButton.addEventListener('click', openForm);
}

// Закрыть форму по кнопке закрытия
if (closeFormButton) {
    closeFormButton.addEventListener('click', () => {
        contactFormPopup.style.display = 'none';
    });
}

// Закрыть форму при клике вне области формы
window.addEventListener('click', (event) => {
    if (event.target === contactFormPopup) {
        contactFormPopup.style.display = 'none';
    }
});

// Автоматическое обновление года в футере
document.getElementById('currentYear').textContent = new Date().getFullYear();