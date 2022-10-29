/*
Part 1
Write a function that puts a line through the text of the first <li> in the unordered "Arguments" list (<ul). Since this function always does the same thing, it requires no parameters!✅

Now call it! The first list item (<li>) should get what's known as a "strikethrough" style.✅

Write a function that takes in a string representing an DOM element's id and a string representing a url. The function should set the image with that id to have that url as its image source.✅

Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!
This next function also doesn't require any parameters: write a function that always removes the first <li> from the Arguments <ul>✅

Now use it to remove the first two items from that list. You'll need to call it twice!✅

Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.

Try using it to change the size of any text on the page.

*/


function addStrikeThrough(){
    let arguementItem1 = document.querySelector("li")
    arguementItem1.style.textDecoration = "line-through"
}
addStrikeThrough()

function setImage(id, url){
    let image = document.querySelector("#" + id)
    image.src = url
    image.style.height = "300px"
}

setImage("image-1", "https://static01.nyt.com/images/2019/03/27/arts/26VANGOGH-BRITAIN-1/merlin_152403333_3552f80f-9675-4951-bc32-0b8cbdbfa090-superJumbo.jpg?quality=75&auto=webp")
setImage("image-2", "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436535/796067/main-image" )
setImage("image-3","https://www.vangoghgallery.com/skin/img/sunflower_full.jpg" )

function removeArguement(){
    let itemToRemove = document.querySelector("li")
    itemToRemove.remove()
}

removeArguement()
removeArguement()

function changeFont(id, size){
    let newSize = document.querySelector("#" + id)
    newSize.style.fontSize = size
}

changeFont("heading", "100px")
changeFont("thing-2", "100px")

//element = ANY DOM Element
function addElementToList(element){
    let arguments = document.querySelector("#arguments")
    arguments.appendChild(element
        
        )
}

let newImage = document.createElement("img")
newImage.src = "https://d.newsweek.com/en/full/2061323/2022-ford-bronco-raptor.webp?w=790&f=8446b7729f19221c1f6697df36f18184"
newImage.style.height = "250px"


addElementToList(newImage)
  