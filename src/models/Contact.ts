import mongoose, { Schema, models } from 'mongoose';

export interface IContact {
    name: string;
    email: string;
    phone: string;
    message?: string;
    createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
    },
    message: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Contact = models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
