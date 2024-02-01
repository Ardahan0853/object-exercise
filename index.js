const cont = document.querySelector('.container')
const btn = document.querySelector('.new-book')
const submitBtn = document.querySelector('.submit-btn')
const form = document.querySelector('form')
const formElement = new FormData(form)



let bookObjectArray = []
let formObject;




function book(author, name,page, readed){
    this.name = name
    this.page = page
    this.author = author
    this.readed = readed
}



function addBookToLibrary(bookAuthor, bookName, bookPage, readed){
    let createBook = new book(bookAuthor, bookName, bookPage,readed)
    bookObjectArray.push(createBook);
    
}






const displayDOM = () => {
        
    
    const newElement = document.createElement('div');
        const newElementChild = document.createElement('p');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerText = 'Delete This Book';
        newElement.classList.add('card');
        newElement.appendChild(newElementChild);
        newElement.appendChild(deleteButton);
        

    for(let i = 0; i < bookObjectArray.length; i++){
        
        
        cont.appendChild(newElement)
        newElement.appendChild(newElementChild)
        newElement.appendChild(deleteButton)
        let oneBook = `${bookObjectArray[i].name} is very great book. It has ${bookObjectArray[i].page} pages. Written by ${bookObjectArray[i].author}. And ${bookObjectArray[i].readed == 'on' ? 'it is readed' : 'it is not readed'}`
        newElementChild.innerText = oneBook
        newElement.style.display = 'grid'
        const allDeleteButtons = document.querySelectorAll('.delete-btn');

        allDeleteButtons.forEach(button => {
            button.addEventListener('click', e => {
                console.log(e);
                e.target.parentElement.style.display = 'none';
            });
        });
        
        
    }
}
displayDOM();

submitBtn.addEventListener('click' , e => {
    e.preventDefault();
    var formData = new FormData(form);
    formObject = Object.fromEntries(formData)
    console.log(formObject)
    addBookToLibrary(formObject.book_author, formObject.book_name, formObject.book_pages, formObject.book_readed)
    displayDOM();
})


btn.addEventListener('click', (e) => {
    form.style.display = 'unset'
})

