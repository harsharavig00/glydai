import { r as s } from "./vendor-CRb3ZNvc.js";
import { L as t } from "./router-BGDdRcgm.js";
import { S as a } from "./Section-5G4BUSli.js";

const f = [{
    id: 1,
    slug: "ai-automation-home-services",
    title: "How AI Automation is Revolutionizing Home Service Businesses",
    excerpt: "Discover how AI-powered automation is helping home service businesses capture more leads, book more appointments, and increase revenue.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
}, {
    id: 2,
    slug: "lead-generation-strategies-2025",
    title: "5 Lead Generation Strategies That Actually Work in 2025",
    excerpt: "Traditional lead generation methods are failing. Here are the proven strategies that are driving real results.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400"
}, {
    id: 3,
    slug: "website-conversion-optimization",
    title: "Why Your Website Isn't Converting (And How to Fix It)",
    excerpt: "Getting traffic but no conversions? Learn the common mistakes that kill website conversions.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400"
}];

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-dark pt-32 pb-16 md:pt-40 md:pb-24">
            <a>
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-8 md:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium mb-4 md:mb-6 leading-tight px-4 md:px-0" style={{ color: "#ffffff" }}>
                            Let's <span className="serif-italic">talk.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4 md:px-0 leading-relaxed">
                            Schedule a free AI Web Agent demo or call us directly to discuss your needs.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div>
                            <h2 className="text-xl md:text-2xl font-medium mb-4" style={{ color: "#ffffff" }}>
                                Book a Free Demo
                            </h2>
                            <iframe
                                src="https://cal.com/book/your-username"
                                title="Cal.com Booking"
                                className="w-full h-[600px] border-0 rounded-xl"
                            ></iframe>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-xl md:text-2xl font-medium mb-4" style={{ color: "#ffffff" }}>
                                Or Call Us Right Now
                            </h2>
                            <a
                                href="tel:+918749044712"
                                className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                            >
                                Call Now
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
                        {f.map(e => (
                            <t
                                to={`/blog/${e.slug}`}
                                className="group process-card overflow-hidden transition-all duration-300 hover:scale-105 block"
                                key={e.id}
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={e.image}
                                        alt={e.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <div className="p-4 md:p-6">
                                    <h3
                                        className="text-base md:text-lg font-medium mb-2 md:mb-3 group-hover:text-purple-400 transition-colors line-clamp-2 leading-tight"
                                        style={{ color: "#ffffff" }}
                                    >
                                        {e.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                                        {e.excerpt}
                                    </p>
                                </div>
                            </t>
                        ))}
                    </div>
                    <div className="text-center">
                        <t
                            to="/"
                            className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                        >
                            Back to Home
                        </t>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ContactPage;
