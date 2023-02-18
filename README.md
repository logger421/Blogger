### Blogger is dynamic website project.

This project was part of my university web dev course, it shows fullstack blog app. 
Backend code is written mostly in nodejs with usage of express framework.
To connect with database I have chosen `mysql2` npm package (config data is hidden in .env file). To authenticate 
user I made use of simple `bcrypt` passwords comparison. Authorization is made with use of `express-session` package.


After successfully registering and logging in user will have access to:
- home page (all blogs added only by him)
- he will also be able to add new blog or delete already added
- view all blogs added by other users.

To consider with further updates:
- Maybe transfer to `JWT` due to its multi-server scalability.
- Instead of using raw mysql transfer to ORM like `sequelize.


