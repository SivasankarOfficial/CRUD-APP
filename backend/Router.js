const express = require("express")
const router = express.Router()
const infoSchema = require("./infoSchema")

router.post("/", async (req, res) => {
    console.log(req.body);
    let data = new infoSchema({
        Name: req.body.Name,
        Age: req.body.Age,
        City: req.body.City
    });
    await data.save();
    res.json(data)

})
//get all data
router.get("/", async (req, res) => {
    let findData = await infoSchema.find()
    res.json(findData)
})
router.get("/:id", async (req, res) => {
    let findData = await infoSchema.findById(req.params.id)
    res.json(findData)
})

router.put("/update/:id", async (req, res) => {
    const update = await infoSchema.findByIdAndUpdate(req.params.id)

    update.Name = req.body.Name,
        update.Age = req.body.Age,
        update.City = req.body.City

    update.save();
    res.json(update)
})
//Delete

router.delete("/delete/:id", async (req, res) => {
    await infoSchema.findByIdAndDelete(req.params.id)
    res.json("Deleted")
})



router.get("/", (req, res) => {
    res.json("Router Launched")
})

module.exports = router;