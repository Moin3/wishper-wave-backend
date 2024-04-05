// const url = 'http://localhost:8000';
const url = 'https://wishper-wave-backend-1.onrender.com';


export const uploadFile =async (request, response) => {
    try{
        if(!request.file) {
            return response.status(404).json("File not found");
        }
        const imageUrl = `${url}/Files/${request.file.filename}`;
        response.status(200).json({imageUrl});

    }catch(error){
        response.status(500).json({ msg: error.message });
    }    
}
