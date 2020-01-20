'use strict'

const Router = require("express").Router();
const FloorCtrl = require('../app/database/controllers/floor');
const BuildingCtrl = require('../app/database/controllers/building');



Router.route('/floor')
    .post(async function(req, res) {
        try {
            let buildingId = req.body.buildingId;
            
            let response = await FloorCtrl.createFloor(req.body);

            let data = {
                "floor":response._id
            }

            let building = await BuildingCtrl.updateArrayData(buildingId, data)

            res.status(200).json(response)


        } catch (err) {
            console.log("Error in /register post", err)
            res.status(400).json({ "message": "Problem in creating building." })

        }
    })

    Router.route('/floor/:id')
         .put(async function (req, res) {
        try {


            let result = await FloorCtrl.updateFloorById(req.params.id, req.body)
            res.json(result)
            

        } catch (err) {
            console.log("Error in /block update", err)
            res.status(400).json({ "message": "Problem in updating floor." });
        }
    })


        .delete(async function (req, res) {
        try {
            let buildingId = req.query.buildingId;


             let result = await FloorCtrl.deleteFloorById(req.params.id)

            let data = {
                "floor":req.params.id
            }


            await BuildingCtrl.removeFromArrayData(buildingId, data)

            res.json(result);

        } catch (err) {
            console.log("Error in /block delete", err)
            res.status(400).json({ "message": "Problem in deleting Block." });
        }
    })


module.exports = Router