'use strict'

const Router = require("express").Router();
const BuildingCtrl = require('../app/database/controllers/building');
const FloorCtrl = require('../app/database/controllers/floor');




Router.route('/building')
    .post(async function(req, res) {
        try {

            let response = await BuildingCtrl.createBuilding(req.body);
            res.status(200).json(response)


        } catch (err) {
            console.log("Error in /register post", err)
            res.status(400).json({ "message": "Problem in creating building." })

        }
    })

       .get(async function(req, res) {
        try {
            console.log("req.query",req.query)
            if(req.query)
               var  query = req.query
            
            let response = await BuildingCtrl.getBuilding(query);
            res.status(200).json(response)


        } catch (err) {
            console.log("Error in /register post", err)
            res.status(400).json({ "message": "Problem in creating building." })

        }
    })

  Router.route('/building/:id')
     

        .delete(async function (req, res) {
        try {

             let result = await BuildingCtrl.deleteBuildingById(req.params.id)

            let data = {
                "floor":req.params.id
            }

            await FloorCtrl.deleteFloors(req.params.id)



            res.json(result);

        } catch (err) {
            console.log("Error in /block delete", err)
            res.status(400).json({ "message": "Problem in deleting Block." });
        }
    })


module.exports = Router