"use strict";

const Building = require("../models/building");

function createBuilding(data) {
    return new Promise(async (resolve, reject) => {
        try {
            
            const building = new Building(data);
            let res = await building.save();

            resolve(res);
        } catch (err) {
            reject(err);
        }
    });
}

function getBuilding(query = {}) {
    return new Promise(async (resolve, reject) => {
        try {

            const buildings = await Building.find(query).populate([{
                path:'floor',
                model:'Floor'}]).sort({ createdAt: 1 }).lean().exec();

            resolve(buildings);
        } catch (err) {
            reject(err);
        }
    });
}

function updateArrayData(buildingId, data) {
        return new Promise((resolve, reject) => {
            try {

                Building.update({ _id: buildingId }, { $push: data }, { new: true }, (err, res) => {
                    if (err) {
                        console.log("error", err)

                    } else {
                        resolve(res)
                    }
                })

                } catch(err) {
                    
                    reject(err)
                }
            })
    
    
}

function removeFromArrayData(buildingId, data) {
        return new Promise((resolve, reject) => {
             try {
                Building.update({ _id: buildingId }, { $pull: data }, { new: true }, (err, res) => {
                    if (err) {
                        console.log("error", err)

                    } else {
                        resolve(res)
                    }
                })

            } catch (err) {
                reject(err)
            }
        })
    
   
}


function deleteBuildingById(id) {
    return new Promise(async (resolve, reject) => {
        try {

            const result = await Building.remove({'_id': id})
            resolve(result)

        } catch (err) {
            reject(err)
        }
    })
}




module.exports = {
    createBuilding,
    getBuilding,
    updateArrayData,
    removeFromArrayData,
    deleteBuildingById
};