const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/supabase-bNDkVZ62.js", "assets/vendor-CRb3ZNvc.js"]))) => i.map(i => d[i]);
import {
    _ as e
} from "./supabase-bNDkVZ62.js";
import {
    j as r
} from "./index-DkyWHF8O.js";
import {
    r as s
} from "./vendor-CRb3ZNvc.js";
import {
    L as t
} from "./router-BGDdRcgm.js";
import {
    S as a
} from "./Section-5G4BUSli.js";
import {
    b as o,
    e as n
} from "./utils-j4oi1-vl.js";
var l = Object.defineProperty,
    i = Object.defineProperties,
    c = Object.getOwnPropertyDescriptors,
    d = Object.getOwnPropertySymbols,
    m = Object.prototype.hasOwnProperty,
    u = Object.prototype.propertyIsEnumerable,
    p = (e, r, s) => r in e ? l(e, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[r] = s,
    x = (e, r) => {
        for (var s in r || (r = {})) m.call(r, s) && p(e, s, r[s]);
        if (d)
            for (var s of d(r)) u.call(r, s) && p(e, s, r[s]);
        return e
    },
    h = (e, r) => i(e, c(r));
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
    }],
    b = () => {
        const [l, i] = s.useState({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            revenue: "",
            canAfford: "",
            website: "",
            reason: "",
            concerns: ""
        }), [c, d] = s.useState(!1), [m, u] = s.useState(!1), [p, b] = s.useState({}), [g, y] = s.useState(""), v = (e, r) => {
            i(s => h(x({}, s), {
                [e]: r
            })), p[e] && b(r => h(x({}, r), {
                [e]: void 0
            })), g && y("")
        };
        return m ? r.jsx("div", {
            className: "min-h-screen bg-dark pt-32 pb-8 md:pt-40 md:pb-16",
            children: r.jsxs("div", {
                className: "container max-w-4xl mx-auto px-4",
                children: [r.jsxs("div", {
                    className: "text-center mb-8 md:mb-12",
                    children: [r.jsx("div", {
                        className: "flex justify-center mb-6",
                        children: r.jsx("div", {
                            className: "w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center",
                            children: r.jsx(o, {
                                size: 32,
                                className: "text-green-400"
                            })
                        })
                    }), r.jsxs("h1", {
                        className: "text-3xl md:text-4xl lg:text-6xl font-medium mb-4 md:mb-6",
                        style: {
                            color: "#ffffff"
                        },
                        children: ["Thank ", r.jsx("span", {
                            className: "serif-italic",
                            children: "you!"
                        })]
                    }), r.jsxs("div", {
                        className: "max-w-2xl mx-auto space-y-3 md:space-y-4",
                        children: [r.jsx("p", {
                            className: "text-lg md:text-xl text-gray-300 leading-relaxed",
                            children: "We've received your information and will be in touch within 24 hours."
                        }), r.jsx("p", {
                            className: "text-lg md:text-xl text-gray-300 leading-relaxed",
                            children: "In the meantime, check out our blog and see how you can increase your sales using AI automation."
                        })]
                    })]
                }), r.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12",
                    children: f.map(e => r.jsxs(t, {
                        to: `/blog/${e.slug}`,
                        className: "group process-card overflow-hidden transition-all duration-300 hover:scale-105 block",
                        children: [r.jsx("div", {
                            className: "aspect-video overflow-hidden",
                            children: r.jsx("img", {
                                src: e.image,
                                alt: e.title,
                                className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110",
                                loading: "lazy",
                                decoding: "async"
                            })
                        }), r.jsxs("div", {
                            className: "p-4 md:p-6",
                            children: [r.jsx("h3", {
                                className: "text-base md:text-lg font-medium mb-2 md:mb-3 group-hover:text-purple-400 transition-colors line-clamp-2 leading-tight",
                                style: {
                                    color: "#ffffff"
                                },
                                children: e.title
                            }), r.jsx("p", {
                                className: "text-gray-300 text-sm leading-relaxed line-clamp-3",
                                children: e.excerpt
                            })]
                        })]
                    }, e.id))
                }), r.jsx("div", {
                    className: "text-center",
                    children: r.jsx(t, {
                        to: "/",
                        className: "btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4",
                        children: "Back to Home"
                    })
                })]
            })
        }) : r.jsx("div", {
            className: "min-h-screen bg-dark pt-32 pb-16 md:pt-40 md:pb-24",
            children: r.jsx(a, {
                children: r.jsxs("div", {
                    className: "max-w-4xl mx-auto",
                    children: [r.jsxs("div", {
                        className: "text-center mb-8 md:mb-12",
                        children: [r.jsxs("h1", {
                            className: "text-3xl sm:text-4xl md:text-6xl font-medium mb-4 md:mb-6 leading-tight px-4 md:px-0",
                            style: {
                                color: "#ffffff"
                            },
                            children: ["Let's ", r.jsx("span", {
                                className: "serif-italic",
                                children: "talk."
                            })]
                        }), 
                                    r.jsx("div", {
                            className: "calcom-embed",
                            children: r.jsx("iframe", {
                                src: "https://cal.com/harsharavig/discovery-call",
                                width: "100%",
                                height: "600px",
                                frameBorder: "0",
                                allowFullScreen: true
                            })
                        })
                        ]
                    })
                ]
            })
        })
    }
export {
    b as
    default
};
