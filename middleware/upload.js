import multer from 'multer';
// import { GridFsStorage } from 'multer-gridfs-storage';
// import 'dotenv/config'


// const storage = new GridFsStorage({
//     url: "mongodb+srv://moinislam667:moin1122@chatappdatabase.glodhb9.mongodb.net/",
//     file: (req, file) => {
//         console.log(file)
//         const match = ["image/png", "image/jpg"];

//         if(match.indexOf(file.mimeType) === -1) 
//            {
//             return `${Date.now()}-file-${file.originalname}`;
//            }

//         return {
//             bucketName: "photos",
//             filename: `${Date.now()}-file-${file.originalname}`
//         }
//     }
// });

// // export const upload = multer({ storage });
// export default multer({storage}); 


import path from "path"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/Files')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null,uniqueSuffix  + '-' + file.originalname )
    }
  })
  export default multer({storage: storage}); 
