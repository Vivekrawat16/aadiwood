import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request: NextRequest) {
    try {
        // Connect to database
        await dbConnect();

        // Parse request body
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Validate required fields
        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: 'Name, email, and phone are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Validate phone format (basic validation)
        const phoneRegex = /^[0-9+\-\s()]{10,}$/;
        if (!phoneRegex.test(phone)) {
            return NextResponse.json(
                { error: 'Invalid phone number format' },
                { status: 400 }
            );
        }

        // Create new contact
        const contact = await Contact.create({
            name,
            email,
            phone,
            message: message || '',
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Contact information saved successfully',
                data: {
                    id: contact._id,
                    name: contact.name,
                    email: contact.email,
                },
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('=== Contact API Error ===');
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        console.error('Full error:', error);
        console.error('========================');

        return NextResponse.json(
            {
                error: 'Failed to save contact information',
                details: error.message,
                errorType: error.name,
            },
            { status: 500 }
        );
    }
}
