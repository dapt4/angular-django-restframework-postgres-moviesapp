# angular-django-restframework-postgres-moviesapp

![image](https://user-images.githubusercontent.com/67972962/188239827-5f64d120-ebb4-4efc-bddd-fdb161ee9bc2.png)


first create your virtualenv

`$ cd django`

`$ python3 -m venv venv`

activate venv

`$ source venv/bin/activate`

then install requeriments

`$ pip install -r requirements.txt`

install postgresql, login and create the database

`CREATE DATABASE <yourDBname>;`

create a .env file in the root folder

`$ touch .env`

and add your postgresql credentials and the app SECRET_KEY to .env file

>ENV_SECRET_KEY="{add a secret key like bhajfbkjhawbdkjhabdjh}"\
ENV_NAME='{yourDBname}'\
ENV_HOST='{your host or localhost}'\
ENV_PORT='{your db port or 5432}'\
ENV_USER='{your db user}'\
ENV_PASSWORD='{your db password}'
run the command:
`python manage.py migrate`

finally the project run with: 

`$ python manage.py runserver`

open your browser or your REST Client in: 

`GET POST localhost:8000/movie`\
`GET PUT DELETE localhost:8000/movie/<id>`

active the frontend with:

`cd ../angular-moviesapp`\
`ng serve`

open the browser in:

`localhost:4200`
