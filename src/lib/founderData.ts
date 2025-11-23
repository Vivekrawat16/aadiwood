export interface Founder {
    name: string;
    role: string;
    photo: string;
    bio: string;
    achievements: string[];
    social: {
        youtube?: string;
        instagram?: string;
        facebook?: string;
    };
}

export const founder: Founder = {
    name: "Rohit Vaishaki",
    role: "Founder & Creative Director",
    photo: "/founder.png",
    bio: "Visionary leader dedicated to preserving and promoting Adivasi culture through modern media. With a passion for storytelling and cultural heritage, bridging tradition with contemporary expression.",
    achievements: [
        "Established Aadiwood Production",
        "1B+ Views across platforms",
        "Cultural Ambassador",
        "Patrika 40 Under 40",
    ],
    social: {
        youtube: "https://www.youtube.com/@MaiAadiwasi7",
        instagram: "https://www.instagram.com/username",
        facebook: "https://www.facebook.com/username",
    },
};
