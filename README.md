# library-managment-system


# 1. Project Description

A simple Book Management System designed to manage books, authors, members, and borrowing activity. This system allows admins to manage books and authors, and members can borrow books. The system tracks borrowed books, due dates, and sends notifications for overdue books.

## Features
- Add, update, and delete books and authors.
- Register members and allow them to borrow books.
- Track borrowed books and return deadlines.
- View overdue books for a specific member.
- Notify members of overdue books via email.

## Setup Instructions

### Prerequisites
1. Node.js 
2. MySQL (DB)

### Steps for Node.js (Express)

1. Clone the repository:
2. Install Dependencies
3. Set Up the Database
4. Configure the Database Connection
5. Create Database Tables (Models)
6. Run the Application
7. Test the API Endpoints
8. Periodically Check for Overdue Books
9.  Email Configuration for Notifications

##Sample API usage
###Book
1.Add a Book 
Endpoint: POST /api/books
Request body:
{
  "title": "maths by rd sharma",
  "author_id": 1,
  "genre": "education",
  "availability": true
}

2.Get All Books 
Endpoint: GET /api/books

3.Delete a Book
Endpoint:DELETE/api/books/{book:id}

4.Update a Book
Endpoint:PUT/api/books/{book:id}
Request body:
{
  "title": "maths by rd sharma",
  "author_id": 1,
  "genre": "education",
  "availability": true
}
5.getBooksByAuthor
Endpoint:GET/api/books/author/{author:id}


##Members
1.Register a New Member
Endpoint: POST /api/members
Request body:
{
  "name": "ganshyam",
  "contact_info": "ganshyam@gmail.com"
}
2.Get overdue books for particular member
Endpoint:GET/api/members/overdue/{member:id}

3.borrowBook
   Endpoint:POST/api/members/borrow
  Request body:
  {
  "book_id": 7,
  "member_id": 3
}

##authors
1.Register a New Author
Endpoint:POST/api/authors
Request body:
{
    "name":"Premchand",
     "bio":"literature"
}
2.Update a New Author
Endpoint:PUT/api/{author:id}
Request body:
{
    "name":"chacha choudhary",
     "bio":"literature"
}
3.Delete a Author
Endpoint:DELETE/api/{author:id}

