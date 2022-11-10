
// // practice round from time with Cooper
// const ramenMenu = document.getElementById("ramen-menu")

// const ratingDisplay = document.getElementById("rating-display")
// const commentDisplay = document.getElementById("comment-display")
// const ramenRestaurant = document.getElementById("ramen-restaurant")
// const ramenName = document.getElementById("ramen-name")
// const ramenImage = document.getElementById("ramen-image");
// const newRamenForm = document.getElementById("new-ramen");

// // newRamenForm.addEventListener("submit", (e) => {
// //     e.preventDefault()

// //     let img = document.createElement("img")
// //     img.src = newRamenForm.image.value
// //     ramenMenu.append(img)
// // })


// const grabRamImg = async () => {
//     let req = await fetch("http://localhost:3000/ramens");
//     let res = await req.json();
//     res.forEach((ramen, i) => {
//         let img = document.createElement("img");
//         img.src = ramen.image
//         img.addEventListener("click", () => {
//             ratingDisplay.innerText = ramen.rating
//             commentDisplay.innerText = ramen.comment
//             ramenRestaurant.innerText = ramen.restaurant
//             ramenName.innertext = ramen.name
//             ramenImage.src = ramen.image
//         })
//         ramenMenu.append(img)
//     })
// }
// grabRamImg();

//round 2 practice Wednesday afternoon (works!)
// const ramenMenu = document.getElementById("ramen-menu")

// const ramenImage = document.getElementById("ramen-detail-image")
// const ramenRestaurant = document.getElementById("ramen-restaurant")
// const ramenDetail = document.getElementById("ramen-detail")
// const ratingDisplay = document.getElementById("rating-display")
// const ramenComment = document.getElementById("comment-display")
// const ramenName = document.getElementById("ramen-name")
// const newRamenForm = document.getElementById("new-ramen")

// newRamenForm.addEventListener("submit", (e) => {
//     e.preventDefault()

//     let img = document.createElement("img")
//     img.src = newRamenForm.image.value
//     ramenMenu.append(img)
// })

// const grabImage = async () => {
//     let request = await fetch("http://localhost:3000/ramens");
//     let res = await request.json()
//     res.forEach((ramen, i) => {
//         let img = document.createElement("img")
//         img.src = ramen.image
//         img.addEventListener("click", () => {
//             ramenImage.src = ramen.image
//             ramenRestaurant.innerText = ramen.restaurant
//             ratingDisplay.innerText = ramen.rating
//             ramenComment.innerText = ramen.comment
//             ramenName.innerText = ramen.name
//         })
//         ramenMenu.append(img)
//     })
// }
// grabImage();

// round three practice live with Michael and the class

console.log("it is working!")

const ramenMenu = document.getElementById("ramen-menu")
//ramen details
const imageDisplay = document.getElementById("ramen-detail-image")
const ramenName = document.getElementById("ramen-name")
const ramenRestaurant = document.getElementById("ramen-restaurant")
const ratingDisplay = document.getElementById('rating-display')
const commentDisplay = document.getElementById("comment-display")
// the form section
const newRamenForm = document.getElementById("new-ramen")

newRamenForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let img = document.createElement("img")
    img.src = newRamenForm.image.value
    ramenMenu.append(img)
})

const request = async () => {
    let req = await fetch("http://localhost:3000/ramens")
    let res = await req.json()
    console.log(res)
    res.forEach((ramen) => {
        let img = document.createElement("img")
        img.src = ramen.image
        ramenMenu.append(img)
        img.addEventListener("click", () => {
            imageDisplay.src = ramen.image
            ramenName.innerText = ramen.name
            ramenRestaurant.innerText = ramen.restaurant
            ratingDisplay.innerText = ramen.rating
            commentDisplay.innerText = ramen.commentDisplay
        })
    })
}
request()