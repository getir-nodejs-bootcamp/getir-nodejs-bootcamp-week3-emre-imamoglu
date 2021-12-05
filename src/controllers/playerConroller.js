let playerData = require('../db/db')
/**
 *  This page will contain the fuctions that return corresponding
 * responses to route calls.
 */

const getPlayers = (req, res) => {
  res.status(200).send(playerData);
};
const getPlayer = (req, res) => {
  const player = playerData.filter(data => data.id == req.params.id);
  if(!player) res.status(404).send({message : "Player does not exist"})
  res.status(200).send(player);
};
const addPlayer = (req, res) => {
  const player = {
    "id" : playerData.length+1,
    "name" : req.body.name,
    "points" : req.body.points
  }
  playerData.push(player);
  res.status(200).send(player);
};
const updatePlayer = (req, res) => {
  playerData = playerData.map(data => {
    if(data.id == req.params.id){
      data.name = req.body.name;
      data.points = req.body.points
      return data;
    }
    return data;
  })
  const changedData = playerData.filter(data => data.id == req.params.id)
  res.status(200).send(changedData);
  
};
const deletePlayer = (req, res) => {
  let playerToDelete = playerData.filter(data => data.id == req.params.id)
  if(playerToDelete.length == 0) {
    res.status(404).send({message: "Player does not exist"});
    return;
  }
  playerData = playerData.filter(data => data.id != req.params.id)
  res.status(200).send(playerToDelete);
};

module.exports = {
  getPlayer,
  getPlayers,
  addPlayer,
  updatePlayer,
  deletePlayer
};
