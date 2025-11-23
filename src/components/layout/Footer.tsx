import { Youtube, Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t-2 border-primary pt-16 pb-8 relative">

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h2 className="text-3xl font-display font-bold text-primary mb-4">AADIWOOD</h2>
                        <p className="text-gray-600 max-w-xs leading-relaxed">
                            The voice of Adivasi culture. Bridging tradition with modern cinema to showcase the untold stories of our land.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-accent mb-6 uppercase tracking-wider">Explore</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li><a href="#" className="hover:text-primary transition-colors">New Releases</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Artists</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Production Services</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-lg font-bold text-accent mb-6 uppercase tracking-wider">Connect</h3>
                        <div className="flex space-x-4 mb-6">
                            <a href="https://www.youtube.com/@Aadiwood7" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-full">
                                <Youtube size={18} />
                            </a>
                            <a href="https://www.instagram.com/aadiwood_official/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-full">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.facebook.com/aadiwood7/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-full">
                                <Facebook size={18} />
                            </a>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <Mail size={16} className="mr-2" />
                            <span>contact@aadiwood.com</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Aadiwood Production. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
