import { Router } from "express";
import * as funct from "../controllers/controllers.js"

const router = new Router();

router.get('/', (req, res) => {
    res.render("home")
})

router.post('/loosers', async (req, res) => {

    const players = req.body.selectPlayers;
    const quantityLoosers = req.body.numberLoosers

    const sort = await funct.sorteo(players, quantityLoosers)

    if(sort.length == 0){
        return res.sendStatus(404)
    }else{
        res.status(200).send({ loosers: sort });
    }

    
})

router.get("/results", (req, res) => {

    res.render("results")
})


export default router