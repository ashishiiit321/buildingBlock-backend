"use strict";

const Floor = require("../models/floor");

function createFloor(data) {
    return new Promise(async (resolve, reject) => {
        try {
            const floor = new Floor(data);
            let res = await floor.save();
            resolve(res);
        } catch (err) {
            reject(err);
        }
    });
}

function getFloor(query = {}) {
    return new Promise(async (resolve, reject) => {
        try {
            const floors = await Floor.find(query).lean()
            resolve(floors);
        } catch (err) {
            reject(err);
        }
    });
}



function deleteFloorById(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await Floor.remove({'_id': id})
            resolve(result)

        } catch (err) {
            reject(err)
        }
    })
}

function deleteFloors(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await Floor.deleteMany({'buildingId': id})
            resolve(result)

        } catch (err) {
            reject(err)
        }
    })
}

function updateFloorById(id, newData) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await Floor.findByIdAndUpdate(id, { "$set": newData } , {new: true})
            resolve(result)

        } catch (err) {
            reject(err)
        }

    });
}


//

module.exports = {
    createFloor,
    getFloor,
   deleteFloors,
    deleteFloorById,
    updateFloorById
};