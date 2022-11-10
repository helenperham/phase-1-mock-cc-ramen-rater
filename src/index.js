//to build the menu
const Menu = document.getElementById("ramen-menu")
//to use in click function
const imageDetail = document.getElementById("imageDetail")
const nameDetail = document.getElementById("nameDetail")
const restaurantDetail = document.getElementById("restaurantDetail")
const ratingDisplay = document.getElementById("rating-display")
const commentDisplay = document.getElementById("comment-display")
//add image from for to menu
const newRamen = document.getElementById("new-ramen")

newRamen.addEventListener('submit', (e) => {
    e.prevemtDefault()
    let img = document.createElement("img")
    img.src = ramen.image
    Menu.append(img)
})

const grabImage = async () => {
    let req = await fetch("http://localhost:3000/ramens")
    let res = await req.json()
    console.log(res)
    
    res.forEach((ramen, i) => {
        let img = document.createElement("img")
        img.src = ramen.image
        Menu.append(img);
        console.log(img)
        img.addEventListener('click', (e) => {
            imageDetail.src = ramen.image
            nameDetail.innerText = ramen.name
            restaurantDetail.innerText = ramen.restaurant
            ratingDisplay.innerText = ramen.rating
            commentDisplay.innerText = ramen.comment
        })

    })
    
}
grabImage()