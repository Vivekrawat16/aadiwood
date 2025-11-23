"use client";

export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Aadiwood Production",
        "alternateName": "The Brand of Nimar",
        "url": "https://aadiwood.com",
        "logo": "https://aadiwood.com/logo.png",
        "description": "Official production house promoting Adivasi culture through film, music videos, and storytelling.",
        "foundingDate": "2020",
        "founder": {
            "@type": "Person",
            "name": "Rohit Vaishaki",
            "jobTitle": "Founder & Creative Director"
        },
        "sameAs": [
            "https://www.youtube.com/@MaiAadiwasi7",
            "https://www.instagram.com/username",
            "https://www.facebook.com/username"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "availableLanguage": ["English", "Hindi"]
        },
        "areaServed": {
            "@type": "Place",
            "name": "India"
        },
        "knowsAbout": [
            "Adivasi Culture",
            "Tribal Film Production",
            "Music Video Production",
            "Cultural Preservation",
            "Indigenous Storytelling"
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Aadiwood Production",
        "url": "https://aadiwood.com",
        "description": "The Voice of Adivasi Culture - Official website of Aadiwood Production",
        "publisher": {
            "@type": "Organization",
            "name": "Aadiwood Production"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}
