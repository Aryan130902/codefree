import Description from "../model/description.js"



export const creatDescription = async(request,response) =>{
    try {
        const description = await new Description(request.body);
        description.save();

        response.status(200).json('Description saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getAllDescription = async (request, response) => {
   
    let descriptions;
    try {
      
            descriptions = await Description.find({});
            
        response.status(200).json({descriptions,msg:'Got all descriptions'});
    } catch (error) {
        response.status(500).json(error)
    }
}