// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
  

// UI Constructor
function UI() {}

//  Add book to list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
        <td>${book.title} </td>
        <td>${book.author} </td>
        <td>${book.isbn} </td>
        <td><a herf ="#" class="delete">x</td>
    `;
    list.appendChild(row);
}

// show alert
UI.prototype.showAlert = function(message, className) {
    // create div
    const div = document.createElement('div');
    // add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));

    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert')
        .remove();
    },3000);

}


// Clear Fields
UI.prototype.clearFields = function () {
   
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

}


// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    // Get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

    // Instantiate book
    const book = new Book (title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    // Validate
    if(title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('please fill in the all fields ' , 'error');
    } else {
         // Add book to list
         ui.addBookToList(book);

        //  show success
        ui.showAlert('Book Added ! ' , 'success');

         // Clear fields
         ui.clearFields();

    }

   

    e.preventDefault();
});