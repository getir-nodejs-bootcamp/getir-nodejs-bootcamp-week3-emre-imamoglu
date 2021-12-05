const express = require("express");
const router = express.Router();
const {getPlayer,getPlayers,addPlayer,updatePlayer,deletePlayer} = require('../controllers/playerConroller')

router.get("/player", getPlayers);
router.get("/player/:id",getPlayer);
router.post("/player",addPlayer);
router.put("/player/:id",updatePlayer);
router.delete("/player/:id",deletePlayer)
module.exports = router;
