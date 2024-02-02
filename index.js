const cont = document.querySelector('.container')
const btn = document.querySelector('.new-book')
const submitBtn = document.querySelector('.submit-btn')
const form = document.querySelector('form')
const formElement = new FormData(form)



var bookObjectArray = []
let formObject;






function book(author, name,page, readed, id){
    this.name = name
    this.page = page
    this.author = author
    this.readed = readed
    this.id = id
}



function addBookToLibrary(bookAuthor, bookName, bookPage, readed, id){
    let createBook = new book(bookAuthor, bookName, bookPage,readed, id)
    bookObjectArray.push(createBook);
    
}

const createUUID = () => {
    const date = new Date()
    return date.toISOString();
}




const displayDOM = () => {
        
    
        cont.innerHTML = ''

    for(let i = 0; i < bookObjectArray.length; i++){
        
        const newElement = document.createElement('div');
        const newElementChild = document.createElement('p');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.id = bookObjectArray[i].id
        deleteButton.innerText = 'Delete This Book';
        newElement.classList.add('card');
        newElement.appendChild(newElementChild);
        newElement.appendChild(deleteButton);
        cont.appendChild(newElement)
        newElement.appendChild(newElementChild)
        newElement.appendChild(deleteButton)
        let oneBook = `${bookObjectArray[i].name} is very great book. It has ${bookObjectArray[i].page} pages. Written by ${bookObjectArray[i].author}. And ${bookObjectArray[i].readed == 'on' ? 'it is readed' : 'it is not readed'}`
        newElementChild.innerText = oneBook
        newElement.style.display = 'grid'
        
        
        deleteButton.addEventListener('click', e => {
            console.log(bookObjectArray)    
            bookObjectArray = bookObjectArray.filter(book => book.id != bookObjectArray[i].id)
            console.log(bookObjectArray)
            displayDOM()
        });
        
        
    }
}
displayDOM();

submitBtn.addEventListener('click' , e => {
    e.preventDefault();
    var formData = new FormData(form);
    formObject = Object.fromEntries(formData)
    console.log(formObject)
    addBookToLibrary(formObject.book_author, formObject.book_name, formObject.book_pages, formObject.book_readed, createUUID())
    displayDOM();
})


btn.addEventListener('click', (e) => {
    form.style.display = 'unset'
})



