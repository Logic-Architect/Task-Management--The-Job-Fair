const mongoose = require('mongoose');

const roomsSchema = new mongoose.Schema({
    collegeName : {
        type : String,
        require : true,
        unique : true
    },
    block: [
        {
            blockName: {
                type: String,
                required: true,
                unique :true
            },
            floor: [
                {
                    floorName: {
                        type: Number,
                        required: true
                    },
                    room: [
                        {
                            roomNo: {
                                type: Number,
                                required: true
                            },
                            status : {
                                type :Boolean,
                                required :true,
                                default : false
                            }
                        }
                    ]
                }
            ]
        }
    ]

}, {
    timestamps: true
})

const CollegeRoom = mongoose.model('College', roomsSchema);

module.exports = CollegeRoom