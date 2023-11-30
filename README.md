# Event Portal

This is a simple Node.js and Express application that allows users to submit event details along with images. The application uses MySQL for data storage and displays the events to users then permits the administrator of these events to manage them.

## Prerequisites

Before you begin, ensure you have met the following dependencies and requirements:

- You have installed Node.js and npm.
- install Express --npm intall express--
- install nodemon (npm install nodemon)
- install mutler (npm install mutler)
- install cors (npm install cors)
- install dotenv (npm install dotenv)

- You have a MySQL server running.

## Installing Event Portal

To install Event Portal, follow these steps:

1. Clone the repository: `git clone https://github.com/Elisbrown/EVENTMGMT.git`
2. Navigate into the project directory: `cd event-portal`
3. Install the dependencies: `npm install`

## Configuring the Database

This application uses a MySQL database. You need to create a database and a table named `events` with the following columns: `images`, `title`, `description`, `date`, `time`, `venue`.
alternatively, there is a database file in the respective folder that could simply be imported into your local server. 

Update the database connection details in `app.js`:

```javascript
const pool = mysql.createPool({
    host: 'localhost',
    user: 'Sunyin',
    password: 'test.dev$',
    database: 'event_portal',
    port: 3306,  
});
