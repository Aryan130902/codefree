import mongoose from 'mongoose';

const DescriptionSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        
    },
    description: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    courses: {
        type: Array,
        required: false   
    },
    createdDate: {
        type: Date
    }
});


const Description = mongoose.model('description', DescriptionSchema);

export default Description;