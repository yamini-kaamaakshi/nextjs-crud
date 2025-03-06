import mongoose from "mongoose";

const CustomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});

export default mongoose.models.Custom || mongoose.model("Custom", CustomSchema);
