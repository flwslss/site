const openFormButton = document.getElementById('openFormButton');
const closeFormButton = document.getElementById('closeForm');
const contactFormPopup = document.getElementById('contactFormPopup');

// Функция для открытия формы
function openForm() {
    contactFormPopup.classList.add('active');
    document.body.style.overflow = 'hidden'; // Блокируем скролл
}

// Функция для закрытия формы
function closeForm() {
    contactFormPopup.classList.remove('active');
    document.body.style.overflow = ''; // Восстанавливаем скролл
}

// Привязываем события
if (openFormButton) {
    openFormButton.addEventListener('click', openForm);
}

if (closeFormButton) {
    closeFormButton.addEventListener('click', closeForm);
}

// Закрытие при клике вне формы
contactFormPopup.addEventListener('click', (e) => {
    if (e.target === contactFormPopup) {
        closeForm();
    }
});

// Закрытие по ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactFormPopup.classList.contains('active')) {
        closeForm();
    }
});

// Плавные переходы между страницами
document.addEventListener('DOMContentLoaded', function() {
    // Создаем элемент для перехода
    const transitionEl = document.createElement('div');
    transitionEl.className = 'page-transition';
    document.body.appendChild(transitionEl);
    
    // Обработка всех ссылок
    const links = document.querySelectorAll('a[href^="/"], a[href^="http"]:not([href*="yandex.ru"])');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Исключаем якорные ссылки и ссылки на текущую страницу
            if (this.href === window.location.href || this.getAttribute('href').startsWith('#')) {
                return;
            }
            
            e.preventDefault();
            const href = this.href;
            
            // Анимация исчезновения
            transitionEl.style.opacity = '1';
            
            // Переход после анимации
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
    
    // Анимация появления при загрузке
    setTimeout(() => {
        transitionEl.style.opacity = '0';
    }, 100);
    // Плавная загрузка страницы
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Обработка перед уходом со страницы
window.addEventListener('beforeunload', function() {
    document.body.classList.add('fade-out');
});
});

// Автоматическое обновление года в футере
document.getElementById('currentYear').textContent = new Date().getFullYear();

$(document).ready(function() {
    $('#phone').inputmask({
        mask: '+7 (999) 999-99-99',
        placeholder: '_',
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
        inputmode: 'numeric',
        definitions: {
            '9': {
                validator: '[0-9]',
                cardinality: 1
            }
        }
    });
});

document.querySelector('form').addEventListener('submit', function(event) {
    const phoneInput = document.getElementById('phone');
    const phonePattern = /\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;

    if (!phonePattern.test(phoneInput.value)) {
        alert('Пожалуйста, введите корректный номер телефона.');
        event.preventDefault(); // Остановить отправку формы
    }
});

