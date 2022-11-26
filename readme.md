The server will listen on port 3000:
http://localhost:3000/

Endpoint to resize images
http://localhost:3000/api/resize

----------------------------------------------------------------------------------------

* to use the application make sure to use image in the project folder .../image processing api app

there are inserted images for example that can be used ( image.jpg , picture.jpg )

--------------------------------------------------------------------------------

* 1 - using the appliciation 

in the terminal use "npm run start"

then  visit http://localhost:3000/ to open the app page

insert valid pixels number and upload the image then generte the new resized image

--------------------------------------------------------------------------------

* 2- using url address

http://localhost:3000/api/resize/?&filename=" image name "&height=" number "&width=" number "

example url for application:

http://localhost:3000/api/resize/?&filename=picture&height=795&width=564

or 

http://localhost:3000/api/resize/?&filename=image&width=657&height=543

--------------------------------------------------------------------------------

* possible output 

1- if user entry is correct :

- the resized image will saved at thumb folder (src/thumb) in the project folder
- the image will be displayed

2- if user enter wrong number : 

- the message will be " Please insert valid pixels number  "

3- if user enter wrong image name or its not in the project folder :

- the message will be " Image is not in the project dictionary , use images in project folder  "


