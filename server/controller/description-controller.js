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