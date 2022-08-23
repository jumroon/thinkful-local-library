function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  const sorted = accounts.sort((lastName1, lastName2) =>
    lastName1.name.last.toLowerCase() > lastName2.name.last.toLowerCase()
      ? 1
      : -1
  );
  return sorted;
}

// function getTotalNumberOfBorrows(account, books) {
//  const numberBorrows = [];
//  const accountID = account.id
//  numberBorrows.push(books.filter((book) => book.borrows.id === accountID))
// return numberBorrows.length + 1
// }

function getTotalNumberOfBorrows(account, books) {
  const accountID = account.id;
  let numberBorrows = 0;
  books.forEach((book) => {
    const timesBorrowed = book.borrows.filter(
      (borrow) => borrow.id === accountID
    ).length;
    numberBorrows += timesBorrowed;
  });
  return numberBorrows;
}

////helper function. find author returns an author object

function findAuthor(book, authors) {
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}

function getBooksPossessedByAccount(account, books, authors) {
  const booksBorrowed = [];
  books.forEach((book) => {
    let bookBorrows = book.borrows;
    bookBorrows.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned) {
        booksBorrowed.push(book);
      }
    });
  });
  let result = booksBorrowed.map((book) => {
    return { ...book, author: findAuthor(book, authors) };
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

