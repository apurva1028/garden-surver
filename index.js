import express from "express";
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())

const plants = [
    {
        "id": 1,
        "name": "Bamboo",
        "category": "indoor",
        "image": "https://www.ugaoo.com/cdn/shop/files/Aimage_3.jpg?v=1682523121",
        "price": 450,
        "description": "Easy to grow and care for, the Lucky Bamboo plant is a popular indoor plant because of more reasons than just its care requirements."
    },

    {
        "id": 2,
        "name": "Rose",
        "category": "outdoor",
        "image": "https://www.ugaoo.com/cdn/shop/files/Aimage_3.jpg?v=1682523121",
        "price": 250,
        "description": "Easy to grow and care for, the Rose plant is a popular indoor plant because of more reasons than just its care requirements."
    },

    {
        "id": 3,
        "name": "Mango",
        "category": "indoor",
        "image": "https://www.ugaoo.com/cdn/shop/files/Aimage_3.jpg?v=1682523121",
        "price": 180,
        "description": "Easy to grow and care for, the Mango plant is a popular indoor plant because of more reasons than just its care requirements."
    }
]

app.post("/plant", (req, res) => {
    const {
        name,
        category,
        image,
        price,
        description } = req.body

    if (!name) {
        res.json({
            success: false,
            data: null,
            message: "name cannot be empty"
        })
    }

    if (!category) {
        res.json({
            success: false,
            data: null,
            message: "category cannot be empty"
        })
    }

    if (!price) {
        res.json({
            success: false,
            data: null,
            message: "price cannot be empty"
        })
    }


    if (!image) {
        res.json({
            success: false,
            data: null,
            message: "image cannot be empty"
        })
    }

    if (!description) {
        res.json({
            success: false,
            data: null,
            message: "description cannot be empty"
        })
    }



    const randomId = Math.round(Math.random() * 10000)

    const newPlant = {
        id: randomId,
        name: name,
        category: category,
        price: price,
        description: description
    }

    plants.push(newPlant)

    res.json({
        success: true,
        data: newPlant,
        message: "New plant added successfully"
    })
})

app.get("/plants", (req, res) => {

    res.json({
        success: true,
        data: plants,
        message: "All plants fetched successfully"
    })
})

app.get("/plant/:id", (req, res) => {
    const { id } = req.params

    const plant = plants.find((p)=>p.id == id)

    res.json({
        success: plant ? true : false,
        data: plant || null,
        message: plant ? "Plant fetched successfully" : "Plant not found"
    })
})



const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})