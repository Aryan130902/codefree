import Description from "../model/description.js"



export const creatDescription = async(request,response) =>{
    try {
        const description = await new Description(request.body);
        description.save();

        response.status(200).json({msg:'Description saved successfully'});
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getAllDescription = async (request, response) => {
    let username = request.query.username;
    let courses = request.query.courses;
    let descriptions;
    try {
        if(username) 
            descriptions = await Description.find({ username: username });
        else if (courses) 
                descriptions = await Description.find({ courses: courses });
        else
            descriptions = await Description.find({});
            
        response.status(200).json({descriptions, msg:'Got all descriptions'});
    } catch (error) {
        response.status(500).json({err:'getalldescription failed'})
    }
}