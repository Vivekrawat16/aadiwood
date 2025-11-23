export interface Video {
    id: string;
    title: string;
    thumbnail: string;
    views: string;
    duration: string;
    category: string;
    videoUrl: string;
    description?: string;
    tags?: string[];
}

export const mockVideos: Video[] = [
    {
        id: "1",
        title: "Jangal Rakhwala Re | Official Music Video",
        thumbnail: "/thumbnail_01.jpg",
        views: "1.2M",
        duration: "4:32",
        category: "Music",
        videoUrl: "https://www.youtube.com/embed/HnnMo5dMdgs",
        description: "Aadiwood Production ( The Brand of Nimar ) presents Aadiwasi  a brand new song in the voice of Bheem Kanoje , Piru Bhai Solanki And Sheetal Senani   The lyrics of the new song are penned by  Rohit Padiyar Which in Aadiwasi (Barela) language. music by Ritesh Kirade. The video is directed by Rohit Vaishaki .",
        tags: ["Adivasi", "Culture", "Music", "Tradition"],
    },
    {
        id: "2",
        title: "Aapna Aadiwasi | New Adivasi Song 2025 | 9 August Special",
        thumbnail: "/thumbnail_02.jpg",
        views: "890K",
        duration: "3:45",
        category: "Culture",
        videoUrl: "https://www.youtube.com/embed/9znbTXiBiqI",
        description: "🎵 *Aadiwood Production* (The Brand of Nimar) proudly presents Aapna Aadiwasi — a brand new *Adivasi song* that celebrates our culture, identity, and unity.",
        tags: ["Celebration", "Identity", "Unity", "Folk"],
    },
    {
        id: "3",
        title: "Malik Re | New Adivasi Song 2025 | Kamlesh Barot, Sohan Bhai, Mahi",
        thumbnail: "/thumbnail_03.jpg",
        views: "450K",
        duration: "5:12",
        category: "Love",
        videoUrl: "https://www.youtube.com/embed/QuYqDX0-hGo",
        description: "The latest romantic melody from the heart of traditional music.",
        tags: ["Romance", "Melody", "Love", "Song"],
    },
];
