## Welcome to the Shrub Community 

### post pictures of your favorite shrub! 
You are probably wondering what is stopping you from posting non-shrub photos.

## this shrub site discourages users from posting non-shrub photos

the average color of each photo is saved in the api. this is calculated by making a copy of the uploaded image, shrinking it down to 1x1 pixel, thus averaging the overall color pallete. This allows the server to sample that 1 pixel and push the RGB info into the API. 

## the color scheme for Buxus is generated from this process. 

Each photo is framed in its average RGB value inverse nested inside of another div with its average rgb value

if the G value is larger than the R and B it will send a message saying 'nice shrub'
else the user will see a message saying, not sure this is a shrub.

 
