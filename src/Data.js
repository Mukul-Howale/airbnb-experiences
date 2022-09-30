import swimmer from "./images/swimmer.png";
import mountainBike from "./images/mountain-bike.png";
import weddingPhoto from "./images/wedding-photography.png"

const data = [
    {
        id : 1,
        thumbnail : swimmer,
        rating : 5.0,
        review : 6,
        location : "USA",
        title : "Life lessons with Katie Zaferes",
        price : 136,
        openSpots : 0
    },
    {
        id : 2,
        thumbnail : weddingPhoto,
        rating : 5.0,
        review : 30,
        location : "ONLINE",
        title : "Learn wedding photography",
        price : 125,
        openSpots : 1
    },
    {
        id : 3,
        thumbnail :mountainBike,
        rating : 4.8,
        review : 2,
        location : "USA",
        title : "Group Mountain Biking",
        price : 50,
        openSpots : 23
    }
]

export default data;