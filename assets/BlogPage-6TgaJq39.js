import {
    j as e
} from "./index-DkyWHF8O.js";
import {
    L as s
} from "./router-BGDdRcgm.js";
import {
    r as t
} from "./vendor-CRb3ZNvc.js";
import {
    S as a
} from "./Section-5G4BUSli.js";
import {
    A as i,
    B as r
} from "./AuthorProfile-DVsvpanm.js";
import {
    S as l,
    F as o,
    X as n,
    f as c,
    g as m,
    A as d
} from "./utils-j4oi1-vl.js";
import {
    A as x,
    m as p
} from "./motion-CwSfUfFn.js";
import "./supabase-bNDkVZ62.js";
const h = ({
        src: s,
        alt: a,
        className: i = "",
        width: r,
        height: l,
        loading: o = "lazy",
        priority: n = !1
    }) => {
        const [c, m] = t.useState(!1), [d, x] = t.useState(!1), p = t.useCallback(() => {
            m(!0)
        }, []), h = t.useCallback(() => {
            x(!0)
        }, []);
        return d ? e.jsx("div", {
            className: `bg-gray-800 flex items-center justify-center ${i}`,
            children: e.jsx("span", {
                className: "text-gray-500 text-sm",
                children: "Image failed to load"
            })
        }) : e.jsxs("div", {
            className: `relative overflow-hidden ${i}`,
            children: [!c && e.jsx("div", {
                className: "absolute inset-0 bg-gray-800 animate-pulse"
            }), e.jsx("img", {
                src: s,
                alt: a,
                width: r,
                height: l,
                loading: n ? "eager" : o,
                onLoad: p,
                onError: h,
                className: "w-full h-full object-cover transition-opacity duration-300 " + (c ? "opacity-100" : "opacity-0"),
                decoding: "async"
            })]
        })
    },
    g = [{
        id: 1,
        slug: "ai-automation-home-services",
        title: "How AI Automation is Revolutionizing Home Service Businesses",
        excerpt: "Discover how AI-powered automation is helping home service businesses capture more leads, book more appointments, and increase revenue without hiring additional staff.",
        author: "Nicolas Weathersby",
        date: "2025-01-15",
        readTime: "5 min read",
        category: "AI Automation",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
        featured: !0,
        tags: ["AI", "automation", "home services", "lead generation"]
    }, {
        id: 2,
        slug: "lead-generation-strategies-2025",
        title: "5 Lead Generation Strategies That Actually Work in 2025",
        excerpt: "Traditional lead generation methods are failing. Here are the proven strategies that are driving real results for home service businesses this year.",
        author: "Nicolas Weathersby",
        date: "2025-01-10",
        readTime: "7 min read",
        category: "Lead Generation",
        image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["lead generation", "marketing", "strategies", "conversion"]
    }, {
        id: 3,
        slug: "website-conversion-optimization",
        title: "Why Your Website Isn't Converting (And How to Fix It)",
        excerpt: "Getting traffic but no conversions? Learn the common mistakes that kill website conversions and the simple fixes that can double your lead generation.",
        author: "Nicolas Weathersby",
        date: "2025-01-05",
        readTime: "6 min read",
        category: "Conversion Optimization",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["conversion", "website", "optimization", "CRO"]
    }, {
        id: 4,
        slug: "chatbot-vs-human-agents",
        title: "AI Chatbots vs Human Agents: The Ultimate Comparison",
        excerpt: "Should you hire more staff or invest in AI? We break down the costs, benefits, and performance of AI chatbots versus human customer service agents.",
        author: "Nicolas Weathersby",
        date: "2024-12-28",
        readTime: "8 min read",
        category: "AI Technology",
        image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["AI", "chatbots", "comparison", "customer service"]
    }, {
        id: 5,
        slug: "roi-ai-automation",
        title: "The Real ROI of AI Automation for Small Businesses",
        excerpt: "Is AI automation worth the investment? We analyze real case studies and show you exactly how much money AI automation can save your business.",
        author: "Nicolas Weathersby",
        date: "2024-12-20",
        readTime: "9 min read",
        category: "Business Strategy",
        image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["ROI", "business strategy", "AI", "automation", "case studies"]
    }, {
        id: 6,
        slug: "customer-service-automation",
        title: "Automating Customer Service Without Losing the Human Touch",
        excerpt: "Learn how to implement AI-powered customer service that feels personal and maintains the quality your customers expect.",
        author: "Nicolas Weathersby",
        date: "2024-12-15",
        readTime: "6 min read",
        category: "Customer Service",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["customer service", "automation", "AI", "personalization"]
    }, {
        id: 7,
        slug: "marketing-automation-trends",
        title: "Marketing Automation Trends to Watch in 2025",
        excerpt: "Stay ahead of the curve with these emerging marketing automation trends that will shape the industry this year.",
        author: "Nicolas Weathersby",
        date: "2024-12-10",
        readTime: "7 min read",
        category: "Marketing",
        image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["marketing", "automation", "trends", "digital marketing"]
    }, {
        id: 8,
        slug: "small-business-growth-hacks",
        title: "10 Growth Hacks Every Small Business Should Know",
        excerpt: "Proven growth strategies that don't require a massive budget but can deliver significant results for your business.",
        author: "Nicolas Weathersby",
        date: "2024-12-05",
        readTime: "8 min read",
        category: "Business Strategy",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["growth hacks", "small business", "marketing", "strategy"]
    }],
    u = [...new Set(g.map(e => e.category))],
    f = () => {
        const [f, j] = t.useState(""), [b, v] = t.useState([]), [N, w] = t.useState(!1), k = t.useMemo(() => g.find(e => e.featured), []), S = t.useMemo(() => {
            let e = g.filter(e => !e.featured);
            if (b.length > 0 && (e = e.filter(e => b.includes(e.category))), f.trim()) {
                const s = f.toLowerCase();
                e = e.filter(e => e.title.toLowerCase().includes(s) || e.excerpt.toLowerCase().includes(s) || e.category.toLowerCase().includes(s) || e.tags.some(e => e.toLowerCase().includes(s)))
            }
            return e
        }, [f, b]), C = t.useCallback(e => new Date(e).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        }), []), A = t.useCallback(e => new Date(e).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric"
        }), []), I = t.useCallback(e => {
            v(s => s.includes(e) ? s.filter(s => s !== e) : [...s, e])
        }, []), z = t.useCallback(() => {
            v([]), j("")
        }, []), T = b.length > 0 || "" !== f.trim();
        return e.jsx("div", {
            className: "pt-44 pb-16 md:pt-52 md:pb-24 bg-dark",
            children: e.jsx(a, {
                children: e.jsxs("div", {
                    className: "max-w-6xl mx-auto",
                    children: [e.jsx("div", {
                        className: "text-center mb-8 md:mb-12",
                        children: e.jsxs("h1", {
                            className: "text-3xl sm:text-4xl md:text-6xl font-medium mb-4 md:mb-6 leading-tight px-4 md:px-0",
                            style: {
                                color: "#ffffff"
                            },
                            children: ["Coming ", e.jsx("span", {
                                className: "serif-italic",
                                children: "soon."
                            })]
                        })
                    }), , , , ]
                })
            })
        })
    },
 
export {
    f as
    default
};
