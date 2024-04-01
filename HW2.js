// // Задание 1
// // Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

class Library {

    // Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
    #books = [];
    
    // Реализуйте геттер allBooks, который возвращает текущий список книг.
    get allBooks() {
        return this.#books;
    }

    // Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
    addBook(title) {
        try {
            if (this.#books.includes(title)) {
                throw new Error('книга с таким названием уже существует в списке');
            }
            this.#books.push(title);
        } catch (error) {
            console.log(error.message);
        }
    }
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
removeBook(title) {
    try {
        if (!this.#books.includes(title)) {
            throw new Error('книги с таким названием нет в списке');
        } else {
            let index = this.#books.indexOf(title);
            this.#books.splice(index);
        }

    } catch (error) {
        console.log(error.message);
    }
    
}

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
hasBook(title) {
    return this.#books.includes(title);
}
 // Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
constructor (array = []) {
    try {
        if ( array.length === new Set(array).size) {
            this.#books = array;
        } else {
            throw new Error('предоставленный массив содержит дубликаты')
        }
    } catch (error) {
        console.log(error.message);
    }        
}
}

// Проверка

const myLibrary = new Library(['Граф Монте-Кристо', 'Три мушкетера', 'Раковый корпус']);

console.log(myLibrary.allBooks);
myLibrary.addBook('Нетерпение сердца');
console.log(myLibrary.allBooks);
myLibrary.addBook('Нетерпение сердца'); // error
myLibrary.removeBook('Нетерпение сердца');
console.log(myLibrary.allBooks);
myLibrary.removeBook('Нетерпение сердца'); // error
console.log(myLibrary.allBooks);
console.log(myLibrary.hasBook('Нетерпение сердца')); // false
console.log(myLibrary.hasBook('Три мушкетера'));  // true

const myLibrary2 = new Library(['Граф Монте-Кристо', 'Три мушкетера', 'Три мушкетера', 'Раковый корпус']);  // error


// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.


const userInput = document.querySelector('.input-comment');
const btnPost = document.querySelector('.btn-post');
const commentsList = document.querySelector('.comments-list');
const errorMessage = document.querySelector('.error-message');

btnPost.addEventListener('click', () => {
    try {
        if (userInput.value.length < 50 || userInput.value.length > 500) {
            throw new Error('длина введенного отзыва менее 50 или более 500 символов');
        }
        const li = document.createElement('li');
        li.textContent = userInput.value;
        commentsList.appendChild(li);
        errorMessage.textContent = '';
    } catch (error) {
        errorMessage.textContent = error.message;
    }
})