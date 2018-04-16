import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    title: String,
    text: String
});

export default mongoose.model('Post', PostSchema);
