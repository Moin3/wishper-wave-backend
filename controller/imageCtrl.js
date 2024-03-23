// import grid from 'gridfs-stream';
// import mongoose from 'mongoose';
// import Conversation from '../models/conversationModel.js'

import Message from "../models/msgModel.js";


// let gfs, gridfsBucket;
// const conn = mongoose.connection;
// conn.once('open', () => {
//     gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
//         bucketName: 'fs'
//     });   
//     gfs = grid(conn.db, mongoose.mongo);
//     gfs.collection('fs');
// });
    const url = 'http://localhost:8000';


export const uploadFile =async (request, response) => {
    try{
        // console.log('file-name',request.file)
        if(!request.file) {
            return response.status(404).json("File not found");
        }
        const imageUrl = `${url}/Files/${request.file.filename}`;
        // const imageUrl = request.file.filename;
        // console.log(imageUrl)

        response.status(200).json({imageUrl});

    }catch(error){
        response.status(500).json({ msg: error.message });
    }    
}

// export const getImage = async (req, res) => {
//     // try {   
//     //     const file = await gfs.files.findOne({ filename: request.params.filename });
//     //     // const readStream = gfs.createReadStream(file.filename);
//     //     // readStream.pipe(response);
//     //     const readStream = gridfsBucket.openDownloadStream(file?._id);
//     //     readStream.pipe(response);
//     // } catch (error) {
//     //     response.status(500).json({ msg: error.message });
//     // }

//     const imgId = req.params.id;
//     // console.log(req.params)

//     try {
//         // Find image by ID in the collection
//         const image = await Message.findById(imgId);
//         // console.log(image)

//         // if (!image) {
//         //     res.status(404).json({ message: "Image not found" });
//         //     return;
//         // }

//         // Serve the image
//         // const imagePath = `./public/Files/${image.file}`; // Assuming images are stored in a directory named 'images' in the root of your project

//         const imageUrl = `${url}/Files/${image.file}`;

//         console.log(imageUrl)

//         res.status(200).json({imageUrl});
//         // fs.readFile(imagePath, (err, data) => {
//         //     if (err) {
//         //         res.status(500).json({ message: "Internal Server Error" });
//         //         return;
//         //     }
//         //     res.writeHead(200, { 'Content-Type': 'image/png' }); // Adjust Content-Type according to your image type
//         //     res.end(data);
//         // });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// }