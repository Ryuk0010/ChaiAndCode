const heroSection = document.getElementById("hero-section");
let currentPage = 1;
const totalPage = 21;
let sortPage = 1;
let pageView = 0;

document.addEventListener("DOMContentLoaded", () => {
    fetchBooks(currentPage)
})

async function fetchBooks(currentPage){
    try {
        let i = 1;
        const data = await fetch(`https://api.freeapi.app/api/v1/public/books?page=${currentPage}`)
        const book = await data.json();
        const books = book?.data?.data;
        console.log(books)
        displayBooks(books);
        updatePageNumber()
    } catch (error) {
        console.log(error)
    }
}

function displayBooks(books){
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    books.forEach(book => {
        const title = book?.volumeInfo?.title || "Failed to fetch the title";
        const author = book?.volumeInfo?.authors?.join(", ") || "Unknown Author";
        const publisher = book?.volumeInfo?.publisher || "Unknown Publisher";
        const  publishedDate = book?.volumeInfo?.publishedDate || "Unknown publishedDate";
        const thumbnail = book?.volumeInfo?.imageLinks?.smallThumbnail;
        const infoLink = book?.volumeInfo?.infoLink || "#";
        // console.log(title, author, publisher, publishedDate)

        const bookInfo = document.createElement("div");
        bookInfo.className = "bookInfo"
        bookInfo.innerHTML = `
            <img class = "book-thumbnail" src="${thumbnail}">
            <h3 class="book-title">${title}</h3>
            <h4 class="book-author">${author}</h4>
            <h4 class="book-publisher">${publisher}</h4>
            <h4 class="book-publishedDate">${publishedDate}</h4> `
        
        bookList.appendChild(bookInfo)
        
        bookInfo.onclick = () => {
            window.open(infoLink, "_blank");
        };
    });

}

function changePage(page){
    currentPage += page;
    if(currentPage < 1) currentPage = 1;
    if(currentPage > totalPage) currentPage = totalPage;
    fetchBooks(currentPage)
    const searchQuery = document.getElementById("searchBar");
    searchQuery.value = "";
}


function updatePageNumber() {
    const pageNumber = document.getElementById("pageNumber");
    pageNumber.textContent = currentPage;


}

function searchBooks() {
    console.log(pageView)
    const searchQuery = document.getElementById("searchBar").value.toLowerCase();
    const bookList = document.getElementById("bookList");
    const books = bookList.getElementsByClassName("bookInfo");

    Array.from(books).forEach(book => {
        const bookTitle = book.querySelector(".book-title");
        const bookAuthor = book.querySelector(".book-author");

        const title = bookTitle ? bookTitle.textContent.toLowerCase() : "";
        const authors = bookAuthor ? bookAuthor.textContent.toLowerCase() : ""
        if (title.includes(searchQuery) || authors.includes(searchQuery)) {
            if(pageView === 1) book.style.display = "flex"; 
            else book.style.display = "block"; 
        } else {
            book.style.display = "none";
        }
    });
    
    
}


function sortBooks() {
    if(sortPage == 1){
        const bookList = document.getElementById("bookList");
        const books = Array.from(bookList.children);
        // console.log(books)
        const sortedBooks = books.sort((a, b) => {
            const titleA = a.querySelector(".book-title").textContent.toLowerCase();
            const titleB = b.querySelector(".book-title").textContent.toLowerCase();
            return titleA.localeCompare(titleB);
        });
    
        bookList.innerHTML = "";                    
        sortedBooks.forEach(book => bookList.appendChild(book));
        sortPage = !sortPage
    }
    else{
        const bookList = document.getElementById("bookList");
        const books = Array.from(bookList.children);
        // console.log(books)
        const sortedBooks = books.sort((a, b) => {
            const d1 = a.querySelector(".book-publishedDate").textContent;
            const d2 = b.querySelector(".book-publishedDate").textContent;

            const date1 = Number(d1.substr(0, 4)) || 0;
            const date2 = Number(d2.substr(0, 4)) || 0;
            if (date1 === date2) {
                return d1.localeCompare(d2);  
            }
            return date1 - date2;
        });
    
        bookList.innerHTML = "";                    
        sortedBooks.forEach(book => bookList.appendChild(book));
        sortPage = !sortPage
    }

}

function changeView() {
    const bookList = document.getElementById("bookList");
    console.log(`in change view ${ pageView}`)
    pageView = pageView === 0 ? 1 : 0;
    console.log(`in change view after toggle${ pageView}`)
    if (pageView === 1) {
        bookList.classList.add("list-view");
        bookList.classList.remove("grid-view");
    } else {
        bookList.classList.add("grid-view");
        bookList.classList.remove("list-view");
    }
}

