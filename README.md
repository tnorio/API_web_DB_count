# API_web_DB_count

This project was made at the end of the MySQL [course](https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert) I did, to consolidate the skills learned through the course.

The project consists of a simple webpage that has a counter that shows the number of users registered in the DB. When someone inserts an email in the form, the DB gets automatically updated, making the counter increase by 1.
The structure of the project is a simple DB that has one table called `join_us` that contains one single table called `users`.
	| email (PK) | date (Timestamp DEFAULT NOW()) |
| ----------- | ----------- |
| email.emails@emails.com    | 2021-04-13 22:34:22 |
| email2.emails2@emails.com | 2022-01-21 17:46:30 |
The first 500 entrys where random generated using faker.

The connection with the DB was realized using `Node.js` with the `Express` framework in the app.js file. The page `HTML` was done using `e.js` in side the views folder and there is a simple `CSS` file for esthetics, inside the public folder.

website result example
![website_result](https://github.com/tnorio/API_web_DB_count/blob/main/Make%20it%20count%20img.png)
