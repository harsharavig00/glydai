import {
    j as e,
    B as t
} from "./index-DkyWHF8O.js";
import {
    u as s,
    C as i,
    a,
    X as n,
    b as l,
    S as o,
    Z as r,
    c as d,
    U as c,
    W as m,
    d as x,
    R as p
} from "./utils-j4oi1-vl.js";
import {
    S as u
} from "./Section-5G4BUSli.js";
import {
    r as h
} from "./vendor-CRb3ZNvc.js";
import {
    m as f,
    A as y
} from "./motion-CwSfUfFn.js";
import "./supabase-bNDkVZ62.js";
import "./router-BGDdRcgm.js";
const g = ({
    end: t,
    duration: i = 2,
    prefix: a = "",
    suffix: n = "",
    decimals: l = 0
}) => {
    const [o, r] = h.useState(0), {
        ref: d,
        inView: c
    } = s({
        triggerOnce: !0,
        threshold: .1
    }), m = h.useCallback(() => {
        let e = null;
        const s = a => {
            e || (e = a);
            const n = Math.min((a - e) / (1e3 * i), 1);
            r(Math.floor(n * t)), n < 1 && requestAnimationFrame(s)
        };
        requestAnimationFrame(s)
    }, [t, i]);
    h.useEffect(() => {
        c && m()
    }, [c, m]);
    const x = h.useMemo(() => `${a}${o.toFixed(l)}${n}`, [o, a, n, l]);
    return e.jsx("span", {
        ref: d,
        className: "tabular-nums",
        children: x
    })
};
var j = Object.defineProperty,
    b = Object.getOwnPropertySymbols,
    w = Object.prototype.hasOwnProperty,
    v = Object.prototype.propertyIsEnumerable,
    N = (e, t, s) => t in e ? j(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s,
    k = (e, t) => {
        for (var s in t || (t = {})) w.call(t, s) && N(e, s, t[s]);
        if (b)
            for (var s of b(t)) v.call(t, s) && N(e, s, t[s]);
        return e
    };
const I = ({
        children: t,
        className: i = "",
        delay: a = 0,
        direction: n = "up",
        distance: l = 20
    }) => {
        const {
            ref: o,
            inView: r
        } = s({
            triggerOnce: !0,
            threshold: .1,
            rootMargin: "-50px 0px"
        }), d = () => {
            switch (n) {
                case "up":
                default:
                    return {
                        y: l
                    };
                case "down":
                    return {
                        y: -l
                    };
                case "left":
                    return {
                        x: l
                    };
                case "right":
                    return {
                        x: -l
                    }
            }
        };
        return e.jsx(f.div, {
            ref: o,
            initial: k({
                opacity: 0
            }, d()),
            animate: r ? k({
                opacity: 1
            }, (() => {
                switch (n) {
                    case "up":
                    case "down":
                    default:
                        return {
                            y: 0
                        };
                    case "left":
                    case "right":
                        return {
                            x: 0
                        }
                }
            })()) : k({
                opacity: 0
            }, d()),
            transition: {
                duration: .6,
                delay: a,
                ease: [.25, .46, .45, .94]
            },
            className: i,
            children: t
        })
    },
    A = [{
        question: "How long does it take to see results from the AI solutions?",
        answer: "Most businesses see initial results within 1-3 months, with full impact in 6 months."
    }, {
        question: "Is the AI solution customizable for my specific industry?",
        answer: 'Yes, we tailor make solutions to fit your industry’s unique needs and challenges.'
    }, {
        question: "What kind of support do you offer after deployment?",
        answer: "Ongoing support includes monthly checks, updates, and optimization to ensure success."
    }, {
        question: "Are there any hidden costs beyond the one-time AI agent fee?",
        answer: "No hidden costs; the one-time fee covers setup, with optional add-ons clearly outlined."
    }, {
        question: "How secure is my business data with your AI tools?",
        answer: "We use industry-standard encryption and strict protocols to protect your data."
    }, {
        question: "Can I test the AI solution before committing?",
        answer: "Yes, please get in touch with us by booking a call."
    }, {
        question: "Do I need technical skills to use your AI tools?",
        answer: "No, our AI solutions are user-friendly and require no technical expertise to operate."
    }],
    W = () => {
        const [t, s] = h.useState([]), n = h.useCallback(e => {
            s(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
        }, []), l = h.useMemo(() => A, []);
        return e.jsxs("div", {
            className: "max-w-4xl mx-auto px-4 md:px-0",
            children: [e.jsxs("div", {
                className: "text-center mb-12 md:mb-16",
                children: [e.jsx("span", {
                    className: "section-label",
                    children: "FAQs"
                }), e.jsxs("h2", {
                    className: "text-3xl sm:text-4xl md:text-5xl font-medium mb-4 md:mb-6 text-white leading-tight",
                    children: ["Frequently Asked ", e.jsx("span", {
                        className: "serif-italic",
                        children: "questions"
                    })]
                }), e.jsx("p", {
                    className: "text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed",
                    children: "Everything you need to know about our AI Web Agent."
                })]
            }), e.jsx("div", {
                className: "space-y-4",
                children: l.map((s, l) => e.jsxs(f.div, {
                    className: "faq-item",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0,
                        margin: "-50px"
                    },
                    transition: {
                        duration: .5,
                        delay: .1 * l
                    },
                    children: [e.jsxs("button", {
                        onClick: () => n(l),
                        className: "faq-button",
                        children: [e.jsx("h3", {
                            className: "text-lg md:text-xl font-medium text-white text-left",
                            children: s.question
                        }), e.jsx(f.div, {
                            className: "text-amber-400 ml-4 flex-shrink-0",
                            animate: {
                                rotate: t.includes(l) ? 180 : 0
                            },
                            transition: {
                                duration: .3
                            },
                            children: t.includes(l) ? e.jsx(i, {
                                size: 24
                            }) : e.jsx(a, {
                                size: 24
                            })
                        })]
                    }), e.jsx(y, {
                        children: t.includes(l) && e.jsx(f.div, {
                            initial: {
                                height: 0,
                                opacity: 0
                            },
                            animate: {
                                height: "auto",
                                opacity: 1
                            },
                            exit: {
                                height: 0,
                                opacity: 0
                            },
                            transition: {
                                duration: .3,
                                ease: "easeInOut"
                            },
                            className: "overflow-hidden",
                            children: e.jsx("div", {
                                className: "faq-content",
                                children: e.jsx("p", {
                                    className: "text-base md:text-lg",
                                    children: s.answer
                                })
                            })
                        })
                    })]
                }, l))
            })]
        })
    },
    z = () => {
        const {
            ref: i
        } = s({
            triggerOnce: !0,
            threshold: .1
        });
        return e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: "min-h-screen pt-44 pb-16 md:pt-52 md:pb-24 flex items-center relative overflow-hidden bg-dark",
                children: [e.jsx("div", {
                    className: "absolute inset-0 grid-pattern opacity-30"
                }), e.jsx("div", {
                    className: "absolute inset-0 hero-gradient"
                }), e.jsx("div", {
                    className: "container relative",
                    children: e.jsxs("div", {
                        className: "max-w-5xl mx-auto text-center",
                        ref: i,
                        children: [e.jsxs(f.h1, {
                            className: "text-5xl sm:text-6xl md:text-7xl font-medium mb-6 md:mb-8 px-4 md:px-0",
                            style: {
                                color: "#ffffff",
                                lineHeight: "1.0"
                            },
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .8,
                                ease: [.25, .46, .45, .94]
                            },
                            children: [e.jsx("span", {
                                className: "block mb-1 md:mb-0",
                                children: "Your business works hard."
                            }), e.jsxs("span", {
                                className: "block",
                                children: ["Now add ", e.jsx("span", {
                                    className: "serif-italic",
                                    children: "smart."
                                })]
                            })]
                        }), e.jsx(f.h2, {
                            className: "text-xl sm:text-2xl md:text-3xl font-medium mb-4 md:mb-6 px-4 md:px-0",
                            style: {
                                color: "#ffffff"
                            },
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .8,
                                delay: .2,
                                ease: [.25, .46, .45, .94]
                            },
                            children: "Most Businesses Run Like It's 1990. Yours Won't..."
                        }), e.jsx(f.p, {
                            className: "text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4 md:px-0 leading-relaxed",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .8,
                                delay: .4,
                                ease: [.25, .46, .45, .94]
                            },
                            children: "Cut costs, increase revenue by 10xwhile still running smoothly...using AI."
                        }), e.jsxs(f.div, {
                            className: "flex flex-col sm:flex-row gap-4 justify-center items-center px-4 md:px-0",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .8,
                                delay: .6,
                                ease: [.25, .46, .45, .94]
                            },
                }), e.jsxs(f.div, {
                    className: "flex flex-col sm:flex-row gap-4 justify-center items-center px-4 md:px-0",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .6,
                        ease: [.25, .46, .45, .94]
                    },
                            children: [e.jsx(t, {
                                to: "/contact",
                                primary: !0,
                                className: "text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto shadow-[0_0_30px_rgba(255,155,5,0.4)] hover:shadow-[0_0_40px_rgba(255,155,5,0.6)]",
                                children: "Book a call"
                            }), e.jsx(t, {
                                secondary: !0,
                                className: "text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto",
                                onClick: () => (e => {
                                    const t = document.getElementById(e);
                                    t && t.scrollIntoView({
                                        behavior: "smooth"
                                    })
                                })("problem"),
                                children: "Learn more"
                            })]
                        })]
                    })
                })]
            }), e.jsx(u, {
                id: "problem",
                className: "bg-dark",
                children: e.jsxs(I, {
                    className: "max-w-4xl mx-auto text-center",
                    children: [e.jsxs("h2", {
                        className: "text-2xl sm:text-3xl md:text-5xl font-medium mb-4 md:mb-6 tracking-tight leading-tight px-4 md:px-0",
                        style: {
                            color: "#ffffff"
                        },
                        children: ["You want to grow your business.", e.jsx("br", {}), "But It's ", e.jsx("span", {
                            className: "serif-italic",
                            children: "not happening."
                        })]
                    }), e.jsxs("p", {
                        className: "text-lg sm:text-xl text-gray-300 mb-8 md:mb-12 px-4 md:px-0 leading-relaxed max-w-2xl mx-auto",
                        children: ["You're investing in ads, SEO, and content to get customers", " ", e.jsx("span", {
                            className: "sm:hidden",
                            children: "But some convert. Most leave."
                        }), e.jsxs("span", {
                            className: "hidden sm:inline",
                            children: [e.jsx("br", {}), "But some convert. Most leave."]
                        })]
                    }), e.jsxs(f.div, {
                        className: "card p-6 md:p-8 mb-8 md:mb-12 mx-4 md:mx-0",
                        initial: {
                            opacity: 0,
                            scale: .9
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        viewport: {
                            once: !0,
                            margin: "-100px"
                        },
                        transition: {
                            duration: .6,
                            delay: .3
                        },
                        children: [e.jsx("p", {
                            className: "text-4xl sm:text-5xl md:text-6xl font-medium mb-2",
                            style: {
                                color: "#ffffff"
                            },
                            children: e.jsx(g, {
                                end: 97,
                                suffix: "%"
                            })
                        }), e.jsx("p", {
                            className: "text-lg sm:text-xl text-gray-300",
                            children: "of businesses still run the old fashioined way."
                        })]
                    })]
                })
            }), e.jsx(u, {
                className: "bg-dark",
                children: e.jsxs(I, {
                    children: [e.jsxs("div", {
                        className: "text-center mb-12 md:mb-16",
                        children: [e.jsxs("h2", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-medium mb-4 md:mb-6 leading-tight px-4 md:px-0",
                            style: {
                                color: "#ffffff"
                            },
                            children: ["You're ", e.jsx("span", {
                                className: "serif-italic",
                                children: "already"
                            }), " Doing Enough."]
                        }), e.jsxs("p", {
                            className: "text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 px-4 md:px-0 leading-relaxed",
                            children: ["You're running jobs, managing teams, handling customers, and juggling everything else.", " ", e.jsx("span", {
                                className: "sm:hidden",
                                children: "You shouldn't be replying to DMs at 10pm or chasing leads."
                            }), e.jsxs("span", {
                                className: "hidden sm:inline",
                                children: [e.jsx("br", {}), "You shouldn't be replying to DMs at 10pm or chasing leads."]
                            })]
                        })]
                    }), e.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 px-4 md:px-0",
                        children: [{
                            title: "No-shows and flaky prospects",
                            description: "Wasted time on prospects who never show up or follow through"
                        }, {
                            title: "Wasted ad budget from unconverted clicks",
                            description: "Money spent on traffic that doesn't convert into paying customers"
                        }, {
                            title: "Slow response time kills hot leads",
                            description: "Losing interested prospects because you can't respond fast enough"
                        }, {
                            title: "Support staff that keep quitting",
                            description: "Unreliable team members who leave you hanging when you need them most"
                        }].map((t, s) => e.jsx(f.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0,
                                margin: "-50px"
                            },
                            transition: {
                                duration: .6,
                                delay: .1 * s
                            },
                            children: e.jsx(_, {
                                icon: e.jsx(n, {
                                    size: 28
                                }),
                                title: t.title,
                                description: t.description,
                                negative: !0
                            })
                        }, s))
                    }), e.jsxs(f.div, {
                        className: "text-center px-4 md:px-0",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .6,
                            delay: .4
                        },
                        children: [e.jsx("p", {
                            className: "text-lg sm:text-xl text-gray-300 mb-4 max-w-2xl mx-auto",
                            children: "You don't need to work harder."
                        }), e.jsx("p", {
                            className: "text-lg sm:text-xl font-medium max-w-2xl mx-auto",
                            style: {
                                color: "#ffffff"
                            },
                            children: "You need to implement the latest AI tools to work smarter."
                        })]
                    })]
                })
            }), e.jsx(u, {
                id: "features",
                className: "bg-dark",
                children: e.jsxs(I, {
                    children: [e.jsxs("div", {
                        className: "text-center mb-12 md:mb-16",
                        children: [e.jsx("span", {
                            className: "section-label",
                            children: "Features"
                        }), e.jsxs("h2", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-medium mb-4 md:mb-6 leading-tight px-4 md:px-0",
                            style: {
                                color: "#ffffff"
                            },
                            children: ['"But How Do I ', e.jsx("span", {
                                className: "serif-italic",
                                children: "work smarter?"
                            }), '"']
                        }), e.jsx("p", {
                            className: "text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4 md:px-0 leading-relaxed",
                            children: "Bring AI into your business. Custom built AI solutions help you cut costs, grow revenue and scale smarter."
                        })]
                    }), e.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0",
                        children: [{
                            icon: e.jsx(l, {
                                size: 28
                            }),
                            title: "AI Lead Qualification",
                            description: "Automatically qualify leads based on your criteria, making sure you don't spend time on uninterested leads."
                        }, {
                            icon: e.jsx(o, {
                                size: 28
                            }),
                            title: "AI SEO",
                            description: "Rank #1 on Google and generate 100s of leads per month, within 6 months, fully automated."
                        }, {
                            icon: e.jsx(r, {
                                size: 28
                            }),
                            title: "AI Phone Callers",
                            description: "Use AI phone callers to handle inbound leads, set appointments and make sure to never miss a lead."
                        }, {
                            icon: e.jsx(d, {
                                size: 28
                            }),
                            title: "CRM Integration",
                            description: "Seamlessly integrate with your existing CRM and tools for a unified workflow."
                        }, {
                            icon: e.jsx(c, {
                                size: 28
                            }),
                            title: "WhatsApp Campaigns",
                            description: "Automated campaings to revive your lead list without spending a fortune on ads. On WhatsApp, SMS or any other channel."
                        }, {
                            icon: e.jsx(m, {
                                size: 28
                            }),
                            title: "Custom Workflows",
                            description: "Tailored automation workflows designed specifically for your business needs."
                        }].map((t, s) => e.jsx(f.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0,
                                margin: "-50px"
                            },
                            transition: {
                                duration: .6,
                                delay: .1 * s
                            },
                            whileHover: {
                                y: -5
                            },
                            children: e.jsx(O, {
                                icon: t.icon,
                                title: t.title,
                                description: t.description
                            })
                        }, s))
                    })]
                })
            }), 
e.jsx(u, {
                className: "bg-dark",
                children: e.jsxs(I, {
                    children: [e.jsxs("div", {
                        className: "text-center mb-12 md:mb-16",
                        children: [e.jsx("span", {
                            className: "section-label",
                            children: "Comparison"
                        }), e.jsxs("h2", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-medium mb-4 md:mb-6 leading-tight px-4 md:px-0",
                            style: {
                                color: "#ffffff"
                            },
                            children: ["Hiring Staff Is ", e.jsx("span", {
                                className: "serif-italic",
                                children: "expensive."
                            }), " Our AI Agent Isn't."]
                        })]
                    }), e.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 px-4 md:px-0",
                        children: [e.jsx(f.div, {
                            initial: {
                                opacity: 0,
                                x: -30
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: !0,
                                margin: "-100px"
                            },
                            transition: {
                                duration: .6,
                                delay: .1
                            },
                            whileHover: {
                                scale: 1.02
                            },
                            children: e.jsx(M, {
                                title: "Human Agent",
                                items: [{
                                    text: "$45K-$50K/year",
                                    icon: e.jsx(n, {
                                        size: 20
                                    }),
                                    negative: !0
                                }, {
                                    text: "$4.7K hiring + onboarding",
                                    icon: e.jsx(n, {
                                        size: 20
                                    }),
                                    negative: !0
                                }, {
                                    text: "Sick days, turnover, time off",
                                    icon: e.jsx(n, {
                                        size: 20
                                    }),
                                    negative: !0
                                }, {
                                    text: "Works 8 hours/day",
                                    icon: e.jsx(n, {
                                        size: 20
                                    }),
                                    negative: !0
                                }, {
                                    text: "Prone to error",
                                    icon: e.jsx(n, {
                                        size: 20
                                    }),
                                    negative: !0
                                }],
                                negative: !0
                            })
                        }), e.jsx(f.div, {
                            initial: {
                                opacity: 0,
                                x: 30
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: !0,
                                margin: "-100px"
                            },
                            transition: {
                                duration: .6,
                                delay: .2
                            },
                            whileHover: {
                                scale: 1.02
                            },
                            children: e.jsx(M, {
                                title: "AI Web Agent",
                                items: [{
                                    text: "$1,500-$2,500 one-time",
                                    icon: e.jsx(l, {
                                        size: 20
                                    })
                                }, {
                                    text: "No salary or HR",
                                    icon: e.jsx(l, {
                                        size: 20
                                    })
                                }, {
                                    text: "Works 24/7",
                                    icon: e.jsx(l, {
                                        size: 20
                                    })
                                }, {
                                    text: "Instant response",
                                    icon: e.jsx(l, {
                                        size: 20
                                    })
                                }, {
                                    text: "Consistent performance",
                                    icon: e.jsx(l, {
                                        size: 20
                                    })
                                }]
                            })
                        })]
                    }), e.jsxs("div", {
                        className: "max-w-4xl mx-auto",
                        children: [e.jsxs(f.div, {
                            className: "card p-6 md:p-8 text-center mx-4 md:mx-0 mb-8",
                            initial: {
                                opacity: 0,
                                scale: .9
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: .6,
                                delay: .3
                            },
                            children: [e.jsx("p", {
                                className: "text-xl sm:text-2xl font-medium mb-2",
                                style: {
                                    color: "#ffffff"
                                },
                                children: "Replace 1 agent = save ~$48,500/year"
                            }), e.jsx("p", {
                                className: "text-base sm:text-lg text-gray-300",
                                children: "Replace 2 = six-figure savings"
                            })]
                        }), e.jsx(f.div, {
                            className: "text-center",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: .6,
                                delay: .4
                            },
                            children: e.jsx(t, {
                                to: "/contact",
                                primary: !0,
                                className: "text-base md:text-lg px-8 md:px-12 py-3 md:py-4 shadow-[0_0_30px_rgba(255,155,5,0.4)] hover:shadow-[0_0_40px_rgba(255,155,5,0.6)]",
                                children: "Book a call"
                            })
                        })]
                    })]
                })
            }), e.jsx(u, {
                id: "process",
                className: "bg-dark",
                children: e.jsxs(I, {
                    children: [e.jsxs("div", {
                        className: "text-center mb-12 md:mb-16",
                        children: [e.jsx("span", {
                            className: "section-label",
                            children: "Process"
                        }), e.jsxs("h2", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-medium mb-4 md:mb-6 leading-tight px-4 md:px-0",
                            style: {
                                color: "#ffffff"
                            },
                            children: ["Our ", e.jsx("span", {
                                className: "serif-italic",
                                children: "simple"
                            }), " Process:"]
                        })]
                    }), e.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0",
                        children: [{
                            number: "1",
                            icon: e.jsx(o, {
                                size: 40
                            }),
                            title: "Analysis",
                            description: "We analyse your workflows to identify opportunities to save you time and boost your profits."
                        }, {
                            number: "2",
                            icon: e.jsx(x, {
                                size: 40
                            }),
                            title: "Development",
                            description: "Our team plans, builds, then optimizes the custom AI solution for your business."
                        }, {
                            number: "3",
                            icon: e.jsx(p, {
                                size: 40
                            }),
                            title: "Deployment",
                            description: "See your progress at a glance as you tick off tasks. Stay productive and in control, one step at a time."
                        }].map((t, s) => e.jsx(f.div, {
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0,
                                margin: "-50px"
                            },
                            transition: {
                                duration: .6,
                                delay: .2 * s
                            },
                            whileHover: {
                                y: -8,
                                transition: {
                                    duration: .2
                                }
                            },
                            children: e.jsx(q, {
                                number: t.number,
                                icon: t.icon,
                                title: t.title,
                                description: t.description
                            })
                        }, s))
                    })]
                })
            }), 
                     e.jsx(u, {
    id: "testimonials",
    className: "bg-dark",
    children: e.jsxs(I, {
        children: [e.jsxs("div", {
            className: "text-center mb-12 md:mb-16",
            children: [e.jsx("span", {
                className: "section-label",
                children: "Testimonials"
            }), e.jsxs("h2", {
                className: "text-3xl sm:text-4xl md:text-5xl font-medium mb-4 md:mb-6 leading-tight px-4 md:px-0",
                style: {
                    color: "#ffffff"
                },
                children: ['What Our Clients Say ', e.jsx("span", {
                    className: "serif-italic",
                    children: "about us"
                }), '"']
            }), e.jsx("p", {
                className: "text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4 md:px-0 leading-relaxed",
                children: "Hear from our clients who have saved time and moneey."
            })]
        }), e.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0",
            children: [{
                icon: e.jsx("span", { // Using a simple quote icon placeholder; replace with actual icon component if available
                    className: "text-amber-400",
                    children: "“"
                }),
                title: "Shloka Sudhakar - CEO, Besu India",
                description: "'Integrating AI automations into our Shopify store has significantly improved operational efficiency. Customers are able to refine their search, leading to quicker decision making and 23% increase in conversions.'"
            }, {
                icon: e.jsx("span", {
                    className: "text-amber-400",
                    children: "“"
                }),
                title: "Jane Smith - Marketing Director, Growth Labs",
                description: "With AI SEO, we've seen a 300% increase in organic leads within months. Incredible!"
            }, {
                icon: e.jsx("span", {
                    className: "text-amber-400",
                    children: "“"
                }),
                title: "Alex Johnson - Operations Manager, ScaleUp Inc.",
                description: "Custom workflows and CRM integration have streamlined our operations like never before."
            }].map((t, s) => e.jsx(f.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0,
                    margin: "-50px"
                },
                transition: {
                    duration: .6,
                    delay: .1 * s
                },
                whileHover: {
                    y: -5
                },
                children: e.jsx(O, {  // Assuming O is a reusable FeatureCard component that accepts icon, title, description
                    className: "glowing-card",  // Incorporating glowing-card style with shadow and hover effects for visibility [1]
                    icon: t.icon,
                    title: t.title,
                    description: t.description,
                    style: { color: "#ffffff" }  // Ensure high contrast text for dark background [1]
                })
            }, s))
        })]
    })
}),        
                       
                       e.jsx(u, {
                id: "faqs",
                className: "bg-dark",
                children: e.jsx(I, {
                    children: e.jsx(W, {})
                })
            }), e.jsx(u, {
                className: "bg-dark",
                children: e.jsx(I, {
                    children: e.jsxs("div", {
                        className: "max-w-4xl mx-auto text-center",
                        children: [e.jsxs("h2", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-medium mb-4 md:mb-6 leading-tight px-4 md:px-0",
                            style: {
                                color: "#ffffff"
                            },
                            children: ["Want to See It ", e.jsx("span", {
                                className: "serif-italic",
                                children: "in action?"
                            })]
                        }), e.jsxs("p", {
                            className: "text-lg sm:text-xl text-gray-300 mb-8 md:mb-12 px-4 md:px-0 leading-relaxed max-w-2xl mx-auto",
                            children: ["Book a free call. We'll build you a demo.", " ", e.jsx("span", {
                                className: "sm:hidden",
                                children: "No pressure. No commitment. Just results."
                            }), e.jsxs("span", {
                                className: "hidden sm:inline",
                                children: [e.jsx("br", {}), "No pressure. No commitment. Just results."]
                            })]
                        }), e.jsx(f.div, {
                            className: "px-4 md:px-0",
                            initial: {
                                opacity: 0,
                                scale: .9
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: .6,
                                delay: .2
                            },
                            whileHover: {
                                scale: 1.05
                            },
                            children: e.jsx(t, {
                                to: "/contact",
                                primary: !0,
                                className: "text-base md:text-lg px-8 md:px-12 py-3 md:py-4 w-full sm:w-auto shadow-[0_0_30px_rgba(255,155,5,0.4)] hover:shadow-[0_0_40px_rgba(255,155,5,0.6)]",
                                children: "Book Now"
                            })
                        })]
                    })
                })
            })]
        })
    },
    q = ({
        number: t,
        icon: s,
        title: i,
        description: a
    }) => e.jsx("div", {
        className: "process-card process-card-content p-6 md:p-8",
        children: e.jsxs("div", {
            className: "process-card-body",
            children: [e.jsxs("div", {
                className: "flex justify-center items-center mb-6",
                children: [e.jsx("div", {
                    className: "w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-full flex items-center justify-center text-xl md:text-2xl font-medium text-white mr-4",
                    children: t
                }), e.jsx("div", {
                    className: "text-amber-400",
                    children: s
                })]
            }), e.jsx("h3", {
                className: "text-xl md:text-2xl font-medium mb-3 md:mb-4",
                style: {
                    color: "#ffffff"
                },
                children: i
            }), e.jsx("p", {
                className: "text-gray-300 leading-relaxed text-sm md:text-base",
                children: a
            })]
        })
    }),
    O = ({
        icon: t,
        title: s,
        description: i
    }) => e.jsx("div", {
        className: "glowing-card feature-card-content p-5 md:p-6",
        children: e.jsxs("div", {
            className: "feature-card-body",
            children: [e.jsxs("div", {
                children: [e.jsx("div", {
                    className: "text-amber-400 mb-4",
                    children: t
                }), e.jsx("h3", {
                    className: "text-lg md:text-xl font-medium mb-3",
                    style: {
                        color: "#ffffff"
                    },
                    children: s
                })]
            }), e.jsx("p", {
                className: "text-gray-300 text-sm md:text-base leading-relaxed",
                children: i
            })]
        })
    }),
    _ = ({
        icon: t,
        title: s,
        description: i,
        negative: a = !1
    }) => e.jsxs("div", {
        className: (a ? "card-red" : "glowing-card") + " p-5 md:p-6",
        children: [e.jsx("div", {
            className: (a ? "text-red-400" : "text-amber-400") + " mb-4",
            children: t
        }), e.jsx("h3", {
            className: "text-lg md:text-xl font-medium mb-3 leading-tight",
            style: {
                color: "#ffffff"
            },
            children: s
        }), e.jsx("p", {
            className: "text-gray-300 text-sm md:text-base leading-relaxed",
            children: i
        })]
    }),
    M = ({
        title: t,
        items: s,
        negative: i = !1
    }) => e.jsxs("div", {
        className: (i ? "card-red" : "card-green") + " p-6 md:p-8 h-full flex flex-col",
        children: [e.jsx("h3", {
            className: "text-xl md:text-2xl font-medium mb-4 md:mb-6",
            style: {
                color: "#ffffff"
            },
            children: t
        }), e.jsx("ul", {
            className: "space-y-3 md:space-y-4 flex-1",
            children: s.map((t, s) => e.jsxs("li", {
                className: "flex items-center",
                children: [e.jsx("span", {
                    className: "mr-3 " + (t.negative ? "text-red-400" : "text-green-400"),
                    children: t.icon
                }), e.jsx("span", {
                    className: "text-gray-300 text-sm md:text-base",
                    children: t.text
                })]
            }, s))
        })]
    });
export {
    z as
    default
};
