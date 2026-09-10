import { o as __toESM } from "../_runtime.mjs";
import { a as Canvas, c as require_jsx_runtime, i as MeshDistortMaterial, l as require_react, n as Environment, o as useFrame, r as Float, t as Sparkles } from "../_libs/@react-three/drei+[...].mjs";
import { a as PROFILE, c as STATS, i as MEMBERSHIPS, n as EDUCATION, o as PUBLICATIONS, r as EXPERIENCE, s as SKILLS, t as CERTIFICATIONS } from "./portfolio-data-B-q1YC_y.mjs";
import { B as ArrowDown, C as Linkedin, D as ExternalLink, E as FileText, F as BookOpen, I as Binary, L as Award, M as Check, N as Briefcase, O as Cloud, P as Braces, S as LoaderCircle, T as GraduationCap, a as Sparkles$1, b as MapPin, c as Shield, d as Search, i as SquareFunction, k as Clock, l as ShieldCheck, n as Users, p as Phone, s as Sigma, t as X, u as Send, w as LayoutGrid, x as Mail, z as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as useScroll, i as useMotionValue, n as useSpring, o as motion, r as useTransform, s as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { i as ScrollToTop, n as Nav, r as ScrollProgress, t as Footer } from "./ScrollProgress-tq-ckIso.mjs";
import { _ as useNavigate, h as getRouteApi } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BErIM8nY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Knot() {
	const ref = (0, import_react.useRef)(null);
	useFrame((state, delta) => {
		if (!ref.current) return;
		ref.current.rotation.x += delta * .15;
		ref.current.rotation.y += delta * .2;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		ref,
		position: [
			0,
			0,
			0
		],
		scale: 1.35,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusKnotGeometry", { args: [
			1,
			.32,
			220,
			32
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeshDistortMaterial, {
			color: "#e0b060",
			emissive: "#8a5a1a",
			emissiveIntensity: .35,
			metalness: .85,
			roughness: .18,
			distort: .28,
			speed: 1.4
		})]
	});
}
function Orbits() {
	const g = (0, import_react.useRef)(null);
	useFrame((_, d) => {
		if (g.current) g.current.rotation.z += d * .06;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref: g,
		children: [
			2.4,
			3,
			3.7
		].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				Math.PI / 2 + i * .2,
				i * .4,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				r,
				.006,
				8,
				128
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#c99a4a",
				transparent: true,
				opacity: .35
			})]
		}, i))
	});
}
function Scene3D() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 -z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
			camera: {
				position: [
					0,
					0,
					5
				],
				fov: 45
			},
			dpr: [1, 2],
			gl: {
				antialias: true,
				alpha: true
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Suspense, {
				fallback: null,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .4 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
						position: [
							4,
							5,
							3
						],
						intensity: 1.2,
						color: "#ffe6b0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
						position: [
							-4,
							-3,
							-2
						],
						intensity: .6,
						color: "#5a7cff"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Float, {
						speed: 1.2,
						rotationIntensity: .6,
						floatIntensity: .8,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Knot, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Orbits, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
						count: 80,
						scale: [
							8,
							6,
							4
						],
						size: 2.2,
						speed: .3,
						color: "#f4d38a"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Environment, { preset: "night" })
				]
			})
		})
	});
}
var profile_default = "/assets/profile-8sKkaBiN.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-screen overflow-hidden pt-24 sm:pt-28 md:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.28_0.05_260/0.6),transparent_60%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene3D, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-noise opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-20 sm:px-6 md:gap-12 md:pb-24 lg:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .8 },
						className: "mb-5 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-primary" }),
							"Ph.D. · Applied Mathematics · Since ",
							PROFILE.since
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: .1
						},
						className: "font-display text-[clamp(2.4rem,8vw,5.5rem)] font-medium leading-[1.05] text-foreground",
						children: [
							"Dr. Jogarao",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-gold italic",
								children: "Gunda."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .25
						},
						className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg",
						children: PROFILE.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .4
						},
						className: "mt-9 flex flex-wrap items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#research",
								className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.82_0.13_82/0.8)] transition hover:translate-y-[-2px] hover:shadow-[0_18px_60px_-10px_oklch(0.82_0.13_82/0.9)]",
								children: ["Explore Research", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
									size: 16,
									className: "transition-transform group-hover:translate-y-0.5"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/60 hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 }), " Get in touch"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: PROFILE.linkedin,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold text-foreground transition hover:border-primary/60 hover:text-primary",
								"aria-label": "LinkedIn",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 16 })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.dl, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: 1,
							delay: .6
						},
						className: "mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4",
						children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-3 top-1 h-8 w-px bg-gradient-to-b from-primary/60 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[11px] uppercase tracking-[0.2em] text-muted-foreground",
									children: s.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 font-display text-3xl font-medium text-foreground md:text-4xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient-gold",
										children: s.value
									})
								}),
								i < STATS.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute right-0 top-0 hidden h-full w-px bg-border sm:block" })
							]
						}, s.label))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						scale: .9,
						rotateY: -10
					},
					animate: {
						opacity: 1,
						scale: 1,
						rotateY: 0
					},
					transition: {
						duration: 1.1,
						delay: .3,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "relative mx-auto w-full max-w-sm",
					style: { perspective: 1200 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-float-slow",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative rounded-[2rem] p-1.5 [background:conic-gradient(from_140deg,oklch(0.82_0.13_82),oklch(0.55_0.15_40),oklch(0.4_0.06_260),oklch(0.82_0.13_82))]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "glass-panel overflow-hidden rounded-[1.85rem]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: profile_default,
										alt: "Dr. Jogarao Gunda, Associate Professor of Mathematics at AITAM Tekkali",
										className: "aspect-[4/5] w-full object-cover",
										loading: "eager"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-t border-border/50 bg-background/60 p-5 backdrop-blur",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { size: 14 }), " AITAM · Tekkali"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 font-display text-lg text-foreground",
												children: "Associate Professor"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted-foreground",
												children: "Department of BS&H (Mathematics)"
											})
										]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -right-6 -top-6 hidden rounded-2xl border border-primary/30 bg-background/80 px-4 py-3 text-xs font-medium text-primary backdrop-blur md:block",
								children: "Scopus Q2 · 2025"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-background/80 px-4 py-3 text-xs text-muted-foreground backdrop-blur md:block",
								children: ["ORCID ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: "0000-0002-9008-7183"
								})]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
				href: "#about",
				initial: { opacity: 0 },
				animate: { opacity: .7 },
				transition: { delay: 1.2 },
				className: "absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground hover:text-primary",
				children: ["Scroll", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-10 w-px animate-pulse bg-gradient-to-b from-primary to-transparent" })]
			})
		]
	});
}
function Reveal({ children, delay = 0, y = 24, className }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: reduce ? false : {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .8,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
function SectionHeader({ eyebrow, title, intro }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto mb-16 max-w-3xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-3 text-xs font-medium uppercase tracking-[0.35em] text-primary/80",
				children: [
					"— ",
					eyebrow,
					" —"
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium text-foreground sm:text-3xl md:text-4xl lg:text-5xl",
					children: title
				})
			}),
			intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base leading-relaxed text-muted-foreground",
					children: intro
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-divider mx-auto mt-8 w-40" })
		]
	});
}
var ORG_LOGO_OVERRIDES = [{
	match: /aitam|aditya institute of technology and management/i,
	src: {
		version: 1,
		asset_id: "831b4927-a297-4d7a-b2aa-c61680c8797a",
		project_id: "08c083af-d250-4f5b-894e-65ae45f1ba82",
		url: "/__l5e/assets-v1/831b4927-a297-4d7a-b2aa-c61680c8797a/aitam-logo.png",
		r2_key: "a/v1/08c083af-d250-4f5b-894e-65ae45f1ba82/831b4927-a297-4d7a-b2aa-c61680c8797a/aitam-logo.png",
		original_filename: "aitam-logo.png",
		size: 258918,
		content_type: "image/png",
		created_at: "2026-07-07T15:15:24Z"
	}.url,
	note: "Official AITAM crest"
}, {
	match: /gitam/i,
	src: {
		version: 1,
		asset_id: "70cc389f-978b-4cd5-870a-de1565c67523",
		project_id: "08c083af-d250-4f5b-894e-65ae45f1ba82",
		url: "/__l5e/assets-v1/70cc389f-978b-4cd5-870a-de1565c67523/gitam-logo.png",
		r2_key: "a/v1/08c083af-d250-4f5b-894e-65ae45f1ba82/70cc389f-978b-4cd5-870a-de1565c67523/gitam-logo.png",
		original_filename: "gitam-logo.png",
		size: 40683,
		content_type: "image/png",
		created_at: "2026-07-07T15:19:31Z"
	}.url,
	note: "Official GITAM logo (user-provided)"
}];
var ORG_DOMAINS = {
	"AITAM, Tekkali": "aitam.edu.in",
	"GITAM (Deemed) University, Visakhapatnam": "gitam.edu",
	"GITAM (Deemed) University, Bangalore": "gitam.edu",
	"GITAM (Deemed to be) University, Visakhapatnam": "gitam.edu",
	"Avanthi Institute of Engineering and Technology": "avanthi.edu.in",
	"SISTAM, Srikakulam": "sistam.ac.in",
	"Dr. B. R. Ambedkar University, Srikakulam": "brau.edu.in",
	"Andhra University, Visakhapatnam": "andhrauniversity.edu.in"
};
/** Resolve the best domain for an org name (exact match, then prefix match). */
function domainForOrg(org) {
	if (ORG_DOMAINS[org]) return ORG_DOMAINS[org];
	const key = Object.keys(ORG_DOMAINS).find((k) => org.includes(k.split(",")[0]));
	return key ? ORG_DOMAINS[key] : void 0;
}
/** Resolve an official logo override URL for an org name, if configured. */
function overrideLogoForOrg(org) {
	return ORG_LOGO_OVERRIDES.find((o) => o.match.test(org))?.src;
}
function initials(org) {
	return org.replace(/\(.*?\)/g, "").split(/[\s,]+/).filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "").join("");
}
function OrgLogo({ org, size = 44, className = "", context }) {
	const override = overrideLogoForOrg(org);
	const domain = domainForOrg(org);
	const [failed, setFailed] = (0, import_react.useState)(false);
	const src = override ?? (domain ? `https://www.google.com/s2/favicons?sz=128&domain=${domain}` : void 0);
	const label = context ? `Official logo of ${org} — ${context}` : `Official logo of ${org}`;
	const fallbackLabel = context ? `${org} — ${context} (logo unavailable)` : `${org} (logo unavailable)`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		role: "img",
		"aria-label": src && !failed ? label : fallbackLabel,
		title: org,
		className: `inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-primary/40 bg-background/70 shadow-sm ${className}`,
		style: {
			width: size,
			height: size
		},
		children: src && !failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt: label,
			width: size,
			height: size,
			loading: "lazy",
			onError: () => setFailed(true),
			className: "h-full w-full object-contain p-1.5"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: "font-display text-sm font-semibold text-primary",
			children: initials(org)
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-20 md:py-28 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "About",
					title: "A mathematician devoted to structure, rigor, and mentorship.",
					intro: "Fourteen years across six institutions have shaped a teaching practice grounded in classical algebra and a research life that lives in the world of almost distributive lattices, filters, and fuzzy structures."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[1.1fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-panel rounded-3xl p-8 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-lg leading-relaxed text-foreground/90",
								children: [
									"I am ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "Dr. Jogarao Gunda"
									}),
									", Associate Professor at ",
									PROFILE.institution,
									". My doctoral work at GITAM (Deemed to be) University explored",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "text-primary/90",
										children: "weak relatively complemented almost distributive lattices"
									}),
									", a thread I've continued through twelve peer-reviewed publications in journals indexed by Scopus and Web of Science."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 leading-relaxed text-muted-foreground",
								children: "Alongside research, I teach engineering mathematics, probability, statistics, discrete mathematics, and graph theory — and mentor two Ph.D. scholars. I believe abstract algebra is a tool for clarity, and clarity is the greatest gift a teacher can offer."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { size: 16 }),
										k: "Domain",
										v: "Applied Mathematics"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { size: 16 }),
										k: "Guiding",
										v: "2 Ph.D. Scholars"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { size: 16 }),
										k: "Category",
										v: "BC-D · Hindu"
									})
								]
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border p-6 sm:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs uppercase tracking-[0.3em] text-primary/80",
								children: "— Academic path —"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-6 space-y-6",
								children: EDUCATION.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "grid grid-cols-[auto_auto_1fr] items-start gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-9 w-9 place-items-center rounded-full border border-primary/50 bg-primary/10 text-[11px] font-semibold text-primary",
												children: e.year
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 h-full w-px bg-border" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrgLogo, {
											org: e.org,
											size: 44,
											context: e.deg
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pb-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-display text-lg text-foreground",
													children: e.deg
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm text-muted-foreground",
													children: e.org
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs uppercase tracking-wider text-primary/70",
													children: e.grade
												})
											]
										})
									]
								}, e.deg))
							})]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 md:grid-cols-2",
						children: MEMBERSHIPS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-panel flex items-start gap-3 rounded-2xl p-5 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground/90",
								children: m
							})]
						}, m))
					})
				})
			]
		})
	});
}
function Fact({ icon, k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
		children: [
			icon,
			" ",
			k
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-sm font-medium text-foreground",
		children: v
	})] });
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "experience",
		className: "relative py-20 md:py-28 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.55_0.15_40/0.14),transparent_55%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Experience",
				title: "Fourteen years, six institutions, one throughline.",
				intro: "A career built quietly, class by class, paper by paper — across coastal Andhra and Bengaluru."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2 md:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-10 md:space-y-16",
					children: EXPERIENCE.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: `relative grid gap-6 md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `flex items-start gap-4 ${i % 2 === 1 ? "md:flex-row-reverse md:text-right" : "md:text-right md:justify-end"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrgLogo, {
									org: e.org,
									size: 52,
									context: e.role
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-mono text-xs uppercase tracking-[0.25em] text-primary",
										children: [
											e.from,
											" — ",
											e.to
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-2xl text-foreground",
										children: e.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: e.org
									}),
									e.detail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs italic text-muted-foreground",
										children: e.detail
									})
								] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-2 top-4 hidden h-4 w-4 rounded-full border-2 border-primary bg-background md:left-[-42px] md:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "glass-panel rounded-2xl p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, {
												size: 14,
												className: "text-primary"
											}),
											" Position #",
											EXPERIENCE.length - i
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-foreground/90",
										children: "Delivered undergraduate & graduate courses in mathematics and statistics; contributed to curriculum design, mentorship, and institutional research culture."
									})]
								})]
							})]
						})
					}, e.from + e.org))
				})]
			})]
		})]
	});
}
var FILTERS = [
	"All",
	"2025",
	"2024",
	"2022",
	"2020",
	"2018",
	"2017"
];
function Publications() {
	const [f, setF] = (0, import_react.useState)("All");
	const list = f === "All" ? PUBLICATIONS : PUBLICATIONS.filter((p) => String(p.year) === f);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "research",
		className: "relative py-20 md:py-28 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Research",
					title: "Selected publications in algebra, lattices & fuzzy structures.",
					intro: "Twelve peer-reviewed papers in Scopus- and Web of Science-indexed journals, plus book chapters and international conferences."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-10 flex flex-wrap justify-center gap-2",
					children: FILTERS.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setF(tag),
						className: `rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition ${f === tag ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"}`,
						children: tag
					}, tag))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "popLayout",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						layout: true,
						className: "grid gap-5 md:grid-cols-2",
						children: list.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
							layout: true,
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -10
							},
							transition: {
								duration: .5,
								delay: i % 6 * .05
							},
							className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_20px_60px_-20px_oklch(0.82_0.13_82/0.4)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition group-hover:opacity-100" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary",
										children: p.tier
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs text-muted-foreground",
										children: p.year
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg leading-snug text-foreground group-hover:text-primary",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 flex items-start gap-2 text-sm italic text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
										size: 14,
										className: "mt-0.5 shrink-0 text-primary/70"
									}), p.venue]
								}),
								p.doi && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://doi.org/${p.doi}`,
									target: "_blank",
									rel: "noreferrer",
									className: "mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary/90 hover:text-primary",
									children: [
										"DOI: ",
										p.doi,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 12 })
									]
								})
							]
						}, p.title))
					})
				})
			]
		})
	});
}
var SUBJECT_GROUPS = [
	{
		key: "algebra",
		label: "Algebra & Lattices",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sigma, { size: 14 }),
		items: [
			"Almost Distributive Lattices",
			"Modern Algebra",
			"Fuzzy Set Theory"
		]
	},
	{
		key: "discrete",
		label: "Discrete Structures",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Binary, { size: 14 }),
		items: [
			"Discrete Mathematics",
			"Graph Theory",
			"Mathematical Foundation of CS"
		]
	},
	{
		key: "analysis",
		label: "Analysis & Methods",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareFunction, { size: 14 }),
		items: [
			"Single & Several Variable Calculus",
			"Mathematical Methods",
			"Engineering Mathematics"
		]
	},
	{
		key: "stats",
		label: "Statistics & Method",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Braces, { size: 14 }),
		items: [
			"Probability & Statistics",
			"Statistical Inference",
			"Research Methodology"
		]
	}
];
var ALL_SUBJECTS = SUBJECT_GROUPS.flatMap((g) => g.items.map((name) => ({
	name,
	group: g
})));
function Expertise() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "expertise",
		className: "relative py-16 md:py-20 lg:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,oklch(0.82_0.13_82/0.08),transparent_55%),radial-gradient(ellipse_at_80%_90%,oklch(0.55_0.15_40/0.08),transparent_55%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Expertise",
					title: "Teaching areas, technical craft, and continuing education."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 lg:gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubjectExplorer, {}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-panel relative overflow-hidden rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldCorner, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-5 flex flex-wrap items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] uppercase tracking-[0.25em] text-primary sm:text-xs sm:tracking-[0.3em]",
											children: "— Technical Craft —"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] tracking-widest text-muted-foreground",
											children: "PROFICIENCY"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 md:gap-x-8 md:gap-y-5",
										children: SKILLS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillMeter, {
											name: s.name,
											level: s.level,
											idx: i
										}, s.name))
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .15,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-panel relative overflow-hidden rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldCorner, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-5 flex flex-wrap items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary sm:text-xs sm:tracking-[0.3em]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { size: 14 }), " Certifications & Continuing Education"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-[10px] tracking-widest text-muted-foreground",
											children: [CERTIFICATIONS.length, " RECORDS"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3",
										children: CERTIFICATIONS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "group relative flex min-w-0 gap-3 rounded-xl border border-border bg-background/40 p-3.5 text-[13px] leading-snug transition hover:-translate-y-0.5 hover:border-primary/50 sm:p-4 sm:text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "shrink-0 font-mono text-[10px] text-primary/70",
												children: ["0", i + 1]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "min-w-0 break-words text-foreground/90 group-hover:text-foreground",
												children: c
											})]
										}, c))
									})
								]
							})
						})
					]
				})]
			})
		]
	});
}
function SkillMeter({ name, level, idx }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex items-baseline justify-between text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2 font-medium text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] text-primary/60",
					children: String(idx + 1).padStart(2, "0")
				}), name]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono text-[11px] text-primary",
				children: [level, "%"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-1.5 overflow-hidden rounded-full bg-border/60",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: reduce ? false : { width: 0 },
				whileInView: { width: `${level}%` },
				viewport: {
					once: true,
					margin: "-40px"
				},
				transition: {
					duration: 1.2,
					delay: .05 * idx,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "relative h-full rounded-full bg-[linear-gradient(90deg,oklch(0.9_0.09_88),oklch(0.82_0.13_82),oklch(0.55_0.15_40))] shadow-[0_0_20px_-2px_oklch(0.82_0.13_82/0.7)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 right-0 w-6 bg-gradient-to-r from-transparent to-white/20" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 flex justify-between px-[10%]",
				children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-full w-px bg-background/50" }, i))
			})]
		})]
	});
}
function GoldCorner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-primary/50" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute right-4 top-4 h-3 w-3 border-r border-t border-primary/50" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute bottom-4 left-4 h-3 w-3 border-b border-l border-primary/50" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute bottom-4 right-4 h-3 w-3 border-b border-r border-primary/50" })
	] });
}
function SubjectExplorer() {
	const reduce = useReducedMotion();
	const search = getRouteApi("/").useSearch();
	const navigate = useNavigate({ from: "/" });
	const active = search.cat || "all";
	const query = search.q || "";
	const setActive = (cat) => navigate({
		search: (prev) => ({
			...prev,
			cat
		}),
		replace: true,
		resetScroll: false
	});
	const setQuery = (q) => navigate({
		search: (prev) => ({
			...prev,
			q
		}),
		replace: true,
		resetScroll: false
	});
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return ALL_SUBJECTS.filter((s) => {
			const groupOk = active === "all" || s.group.key === active;
			const queryOk = !q || s.name.toLowerCase().includes(q);
			return groupOk && queryOk;
		});
	}, [active, query]);
	const tabs = [{
		key: "all",
		label: "All",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { size: 13 })
	}, ...SUBJECT_GROUPS.map((g) => ({
		key: g.key,
		label: g.label,
		icon: g.icon
	}))];
	const marqueeItems = [...ALL_SUBJECTS, ...ALL_SUBJECTS];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-panel relative overflow-hidden rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldCorner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary sm:text-xs sm:tracking-[0.3em]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles$1, { size: 14 }), " Subject Areas"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-lg leading-tight text-foreground sm:text-xl md:text-2xl",
						children: "Explore teaching & research domains"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-2 font-mono text-[10px] tracking-widest text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-6 min-w-6 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10 px-2 text-primary",
							children: filtered.length
						}),
						"/ ",
						ALL_SUBJECTS.length,
						" MATCHING"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-full min-w-0 flex-nowrap gap-1.5 overflow-x-auto pb-1 sm:flex-wrap sm:gap-2 sm:overflow-visible sm:pb-0 [-ms-overflow-style:none] [scrollbar-width:none]",
					children: tabs.map((t) => {
						const on = active === t.key;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActive(t.key),
							className: `group relative inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-1 text-[10px] font-medium transition sm:px-2.5 sm:py-1 sm:text-[11px] md:px-3 md:py-1.5 ${on ? "border-primary/70 text-primary-foreground" : "border-border bg-background/40 text-foreground/80 hover:border-primary/60 hover:text-primary"}`,
							children: [
								on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									layoutId: "subj-tab-bg",
									className: "absolute inset-0 -z-10 rounded-full bg-[linear-gradient(135deg,oklch(0.9_0.09_88),oklch(0.82_0.13_82),oklch(0.55_0.15_40))] shadow-[0_10px_30px_-10px_oklch(0.82_0.13_82/0.8)]",
									transition: {
										type: "spring",
										stiffness: 400,
										damping: 34
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: on ? "text-primary-foreground" : "",
									children: t.icon
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "whitespace-nowrap",
									children: t.label
								})
							]
						}, t.key);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative w-full lg:w-72",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							size: 14,
							className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition group-focus-within:text-primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Search keywords…",
							className: "w-full rounded-full border border-border bg-background/50 py-2 pl-9 pr-9 text-[12px] text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
						}),
						query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setQuery(""),
							className: "absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:text-primary",
							"aria-label": "Clear search",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 13 })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.ul, {
				layout: true,
				className: "flex flex-wrap gap-1.5 sm:gap-2 [perspective:1000px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "popLayout",
					children: filtered.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltPill, {
						index: i,
						reduce: !!reduce,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary/70 transition group-hover:text-primary",
							children: s.group.icon
						}), highlight(s.name, query)]
					}, s.name))
				}), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "w-full rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground",
					children: [
						"No subjects match “",
						query,
						"”. Try clearing the filters."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxMarquee, {
				items: marqueeItems,
				reduce: !!reduce
			})
		]
	});
}
function TiltPill({ children, index, reduce }) {
	const ref = (0, import_react.useRef)(null);
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const rx = useSpring(useTransform(my, [-1, 1], [10, -10]), {
		stiffness: 220,
		damping: 18
	});
	const ry = useSpring(useTransform(mx, [-1, 1], [-14, 14]), {
		stiffness: 220,
		damping: 18
	});
	const glareX = useTransform(mx, [-1, 1], ["0%", "100%"]);
	const onMove = (e) => {
		if (reduce) return;
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		mx.set((e.clientX - r.left) / r.width * 2 - 1);
		my.set((e.clientY - r.top) / r.height * 2 - 1);
	};
	const onLeave = () => {
		mx.set(0);
		my.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
		ref,
		layout: true,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		initial: reduce ? false : {
			opacity: 0,
			x: -36,
			rotateY: -18,
			filter: "blur(8px)"
		},
		animate: {
			opacity: 1,
			x: 0,
			rotateY: 0,
			filter: "blur(0px)"
		},
		exit: {
			opacity: 0,
			x: -36,
			rotateY: -18,
			filter: "blur(8px)",
			transition: {
				duration: .22,
				ease: [
					.4,
					0,
					1,
					1
				]
			}
		},
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 26,
			mass: .6,
			delay: Math.min(index * .02, .24)
		},
		style: {
			rotateX: reduce ? 0 : rx,
			rotateY: reduce ? 0 : ry,
			transformStyle: "preserve-3d"
		},
		className: "group relative inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full border border-border bg-background/50 px-3 py-1.5 text-[11.5px] leading-snug text-foreground/85 transition-colors will-change-transform hover:border-primary/70 hover:bg-primary/10 hover:text-primary sm:px-3.5 sm:text-[12px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			"aria-hidden": true,
			style: { x: glareX },
			className: "pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(1_0_0/0.35),transparent_60%)] opacity-0 mix-blend-overlay transition-opacity duration-200 group-hover:opacity-100"
		}), children]
	});
}
function ParallaxMarquee({ items, reduce }) {
	const wrapRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: wrapRef,
		offset: ["start end", "end start"]
	});
	const parallax = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
	const tilt = useSpring(useTransform(scrollYProgress, [0, 1], [6, -6]), {
		stiffness: 80,
		damping: 20
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: wrapRef,
		className: "relative mt-8 border-t border-border/60 pt-6 [perspective:1400px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
			children: "— Keyword stream —"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: {
				rotateX: reduce ? 0 : tilt,
				transformStyle: "preserve-3d"
			},
			className: "group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { x: reduce ? 0 : parallax },
				className: "w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "flex w-max gap-3 whitespace-nowrap",
					initial: { x: "0%" },
					animate: reduce ? void 0 : { x: "-50%" },
					transition: {
						duration: 40,
						ease: "linear",
						repeat: Infinity
					},
					children: items.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3.5 py-1.5 text-[11px] text-foreground/75 shadow-[0_6px_18px_-12px_oklch(0_0_0/0.6)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-primary/70" }), s.name]
					}, `${s.name}-${i}`))
				})
			})
		})]
	});
}
function highlight(text, q) {
	const query = q.trim();
	if (!query) return text;
	const idx = text.toLowerCase().indexOf(query.toLowerCase());
	if (idx === -1) return text;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		text.slice(0, idx),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mark", {
			className: "rounded bg-primary/25 px-0.5 text-primary",
			children: text.slice(idx, idx + query.length)
		}),
		text.slice(idx + query.length)
	] });
}
function formatWhatsAppText(data) {
	const host = typeof window !== "undefined" ? window.location.host : "portfolio";
	return [
		`*New enquiry via portfolio*`,
		``,
		`*Name:* ${data.name}`,
		`*Email:* ${data.email}`,
		`*Subject:* ${data.subject}`,
		``,
		`*Message:*`,
		data.message,
		``,
		`— Sent from ${host}`
	].join("\n");
}
function Contact() {
	const [state, setState] = (0, import_react.useState)("idle");
	const [err, setErr] = (0, import_react.useState)(null);
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		subject: "",
		message: ""
	});
	function updateField(field, value) {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
	}
	async function onSubmit(e) {
		e.preventDefault();
		const data = {
			name: formData.name.trim(),
			email: formData.email.trim(),
			subject: formData.subject.trim(),
			message: formData.message.trim()
		};
		if (!data.name || !data.email || !data.subject || !data.message) return;
		setState("sending");
		setErr(null);
		try {
			const text = encodeURIComponent(formatWhatsAppText(data));
			const url = `https://wa.me/${PROFILE.phone.replace(/\D/g, "")}?text=${text}`;
			setState("sent");
			e.currentTarget.reset();
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: ""
			});
			window.open(url, "_blank", "noopener,noreferrer");
			setTimeout(() => setState("idle"), 4e3);
		} catch (ex) {
			setErr(ex instanceof Error ? ex.message : "Something went wrong");
			setState("error");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative py-20 md:py-28 lg:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.82_0.13_82/0.14),transparent_60%),radial-gradient(ellipse_at_bottom_left,oklch(0.55_0.15_40/0.10),transparent_55%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Contact",
					title: "Open to research collaboration, guest lectures, and doctoral guidance."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						y: 16,
						className: "lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full flex-col gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/60 bg-background/40 p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										y: 12,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mb-2 text-[10px] uppercase tracking-[0.32em] text-muted-foreground",
											children: "Direct channels"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										y: 12,
										delay: .04,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-2xl font-normal text-foreground",
											children: "Let's begin a conversation."
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										y: 12,
										delay: .08,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 max-w-md text-sm leading-relaxed text-muted-foreground",
											children: "Preferred for research proposals, workshop invites, and doctoral co-supervision enquiries."
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 divide-y divide-border/50 border-y border-border/50",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
												y: 10,
												delay: .12,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
													icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 }),
													label: "Personal email",
													value: PROFILE.email,
													href: `mailto:${PROFILE.email}`
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
												y: 10,
												delay: .16,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
													icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 }),
													label: "Institutional",
													value: PROFILE.emailInst,
													href: `mailto:${PROFILE.emailInst}`
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
												y: 10,
												delay: .2,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
													icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 }),
													label: "Phone",
													value: PROFILE.phone,
													href: `tel:${PROFILE.phone.replace(/\s/g, "")}`
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
												y: 10,
												delay: .24,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
													icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 16 }),
													label: "LinkedIn",
													value: "/in/dr-jogarao-gunda-59994652",
													href: PROFILE.linkedin
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
												y: 10,
												delay: .28,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
													icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 16 }),
													label: "Campus",
													value: `${PROFILE.institution}`,
													hint: PROFILE.location
												})
											})
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-panel rounded-2xl p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									y: 12,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] uppercase tracking-[0.25em] text-primary/80",
										children: "— Research identifiers —"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-4 grid grid-cols-2 gap-4 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
											y: 10,
											delay: .06,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdRow, {
												label: "Scopus",
												value: PROFILE.scopusId
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
											y: 10,
											delay: .1,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdRow, {
												label: "ORCID",
												value: PROFILE.orcid
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
											y: 10,
											delay: .14,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdRow, {
												label: "Web of Science",
												value: PROFILE.wosId
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
											y: 10,
											delay: .18,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdRow, {
												label: "Languages",
												value: PROFILE.languages.join(", ")
											})
										})
									]
								})]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						y: 16,
						delay: .1,
						className: "lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit,
							className: "glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-8 flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										y: 12,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] uppercase tracking-[0.3em] text-primary/80",
											children: "— Send a message —"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 font-display text-2xl text-foreground",
											children: "Compose your enquiry"
										})] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "hidden shrink-0 items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary sm:inline-flex",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-primary" }), "Accepting"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 md:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										y: 10,
										delay: .05,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											name: "name",
											label: "Your name",
											placeholder: "Full name",
											required: true,
											value: formData.name,
											onChange: (v) => updateField("name", v)
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										y: 10,
										delay: .1,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											name: "email",
											label: "Email",
											type: "email",
											placeholder: "you@domain.edu",
											required: true,
											value: formData.email,
											onChange: (v) => updateField("email", v)
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									y: 10,
									delay: .15,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											name: "subject",
											label: "Subject",
											placeholder: "Collaboration on lattice theory…",
											required: true,
											value: formData.subject,
											onChange: (v) => updateField("subject", v)
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									y: 10,
									delay: .2,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "mb-2 block text-[11px] uppercase tracking-[0.25em] text-muted-foreground",
											children: "Message"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											name: "message",
											required: true,
											minLength: 10,
											rows: 6,
											placeholder: "Tell me about your project, workshop, or research question…",
											value: formData.message,
											onChange: (e) => updateField("message", e.target.value),
											className: "w-full resize-none rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/70 focus:ring-2 focus:ring-primary/20"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									y: 10,
									delay: .25,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppPreview, { data: formData })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-7 flex flex-wrap items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										disabled: state === "sending",
										type: "submit",
										className: "group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,oklch(0.9_0.09_88),oklch(0.82_0.13_82),oklch(0.55_0.15_40))] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_20px_60px_-15px_oklch(0.82_0.13_82/0.8)] transition hover:translate-y-[-2px] hover:shadow-[0_25px_70px_-15px_oklch(0.82_0.13_82/0.95)] disabled:opacity-70",
										children: state === "sending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
											size: 16,
											className: "animate-spin"
										}), " Sending…"] }) : state === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 16 }), " Message received"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
											size: 16,
											className: "transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
										}), "Send message"] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
													size: 13,
													className: "text-primary/80"
												}), " Private inbox"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
													size: 13,
													className: "text-primary/80"
												}), " Reply in 3–5 days"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1.5",
												title: "Traffic protected by Cloudflare",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, {
													size: 13,
													className: "text-primary/80"
												}), " Secured by Cloudflare"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1.5",
												title: "Zero-trust routing via Cloudflare WARP",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
													size: 13,
													className: "text-primary/80"
												}), " Cloudflare WARP"]
											})
										]
									})]
								}),
								err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs text-destructive",
									children: err
								})
							]
						})
					})]
				})]
			})
		]
	});
}
function Field({ name, label, type = "text", placeholder, required, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-2 block text-[11px] uppercase tracking-[0.25em] text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		placeholder,
		value,
		onChange: (e) => onChange?.(e.target.value),
		className: "w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/70 focus:ring-2 focus:ring-primary/20"
	})] });
}
var WALLPAPERS = {
	default: {
		label: "Default",
		light: {
			backgroundColor: "#efeae2",
			backgroundImage: "radial-gradient(circle, #d1cdc5 1.2px, transparent 1.2px)",
			backgroundSize: "20px 20px"
		},
		dark: {
			backgroundColor: "#0b141a",
			backgroundImage: "radial-gradient(circle, #1f2c34 1.2px, transparent 1.2px)",
			backgroundSize: "20px 20px"
		}
	},
	doodles: {
		label: "Doodles",
		light: {
			backgroundColor: "#ece5dd",
			backgroundImage: "radial-gradient(circle at 20% 30%, #d7ccb9 2px, transparent 2px), radial-gradient(circle at 70% 60%, #cfc3ae 1.5px, transparent 1.5px), radial-gradient(circle at 40% 80%, #c9bda6 1.8px, transparent 1.8px)",
			backgroundSize: "60px 60px, 45px 45px, 80px 80px"
		},
		dark: {
			backgroundColor: "#0a1014",
			backgroundImage: "radial-gradient(circle at 20% 30%, #1a252b 2px, transparent 2px), radial-gradient(circle at 70% 60%, #17222a 1.5px, transparent 1.5px), radial-gradient(circle at 40% 80%, #131c22 1.8px, transparent 1.8px)",
			backgroundSize: "60px 60px, 45px 45px, 80px 80px"
		}
	},
	solid: {
		label: "Solid",
		light: { backgroundColor: "#e5ddd5" },
		dark: { backgroundColor: "#0b141a" }
	},
	sunset: {
		label: "Sunset",
		light: { backgroundImage: "linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)" },
		dark: { backgroundImage: "linear-gradient(135deg, #2b1055 0%, #7597de 100%)" }
	}
};
function formatWhatsAppTime(date) {
	let h = date.getHours();
	const m = date.getMinutes();
	const ampm = h >= 12 ? "pm" : "am";
	h = h % 12;
	if (h === 0) h = 12;
	return `${h}:${m.toString().padStart(2, "0")} ${ampm}`;
}
function formatWhatsAppDatePill(date) {
	const now = /* @__PURE__ */ new Date();
	const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
	const diffDays = Math.round((startOfDay(now) - startOfDay(date)) / 864e5);
	if (diffDays === 0) return "Today";
	if (diffDays === 1) return "Yesterday";
	if (diffDays > 1 && diffDays < 7) return date.toLocaleDateString(void 0, { weekday: "long" });
	return date.toLocaleDateString(void 0, {
		day: "2-digit",
		month: "2-digit",
		year: "numeric"
	});
}
function WhatsAppPreview({ data }) {
	const previewText = data.name || data.email || data.subject || data.message ? formatWhatsAppText(data) : `*New enquiry via portfolio*\n\n*Name:*\n*Email:*\n*Subject:*\n\n*Message:*\n\n— Sent from portfolio`;
	const [mode, setMode] = (0, import_react.useState)("light");
	const [wallpaper, setWallpaper] = (0, import_react.useState)("default");
	const [now, setNow] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	const [isTyping, setIsTyping] = (0, import_react.useState)(false);
	const [sendPulse, setSendPulse] = (0, import_react.useState)(0);
	const typingTimer = (0, import_react.useRef)(null);
	const lastMessage = (0, import_react.useRef)(data.message);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setNow(/* @__PURE__ */ new Date()), 3e4);
		return () => clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		if (data.message !== lastMessage.current) {
			lastMessage.current = data.message;
			setIsTyping(true);
			if (typingTimer.current) clearTimeout(typingTimer.current);
			typingTimer.current = setTimeout(() => {
				setIsTyping(false);
				setSendPulse((n) => n + 1);
			}, 900);
		}
		return () => {
			if (typingTimer.current) clearTimeout(typingTimer.current);
		};
	}, [data.message]);
	const isDark = mode === "dark";
	const wp = WALLPAPERS[wallpaper];
	const wpStyle = isDark ? wp.dark : wp.light;
	const headerBg = isDark ? "#1f2c34" : "#008069";
	const footerBg = isDark ? "#1f2c34" : "#f0f2f5";
	const bubbleBg = isDark ? "#005c4b" : "#d9fdd3";
	const bubbleText = isDark ? "#e9edef" : "#111b21";
	const metaText = isDark ? "#8696a0" : "#667781";
	const pillBg = isDark ? "#182229" : "#ffffff";
	const pillText = isDark ? "#8696a0" : "#54656f";
	const inputBg = isDark ? "#2a3942" : "#ffffff";
	const iconMuted = isDark ? "#8696a0" : "#54656f";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2 text-[11px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "uppercase tracking-[0.22em] text-muted-foreground",
					children: "Preview"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex overflow-hidden rounded-full border border-border",
					children: ["light", "dark"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMode(m),
						className: `px-3 py-1 text-[11px] capitalize transition ${mode === m ? "bg-primary text-primary-foreground" : "bg-transparent text-muted-foreground hover:text-foreground"}`,
						children: m
					}, m))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex overflow-hidden rounded-full border border-border",
					children: Object.keys(WALLPAPERS).map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setWallpaper(w),
						className: `px-3 py-1 text-[11px] transition ${wallpaper === w ? "bg-primary text-primary-foreground" : "bg-transparent text-muted-foreground hover:text-foreground"}`,
						children: WALLPAPERS[w].label
					}, w))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-2xl shadow-lg",
			style: { border: `1px solid ${isDark ? "#222c32" : "#d1d7db"}` },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 px-3 py-2.5",
					style: { backgroundColor: headerBg },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "h-5 w-5 text-white/90",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor",
							strokeWidth: "2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M15 19l-7-7 7-7"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold",
							style: {
								backgroundColor: isDark ? "#005c4b" : "#d9fdd3",
								color: isDark ? "#e9edef" : "#008069"
							},
							children: "JG"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-[15px] font-medium text-white",
								children: "Dr. Jogarao Gunda"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-white/70",
								children: isTyping ? "typing…" : "online"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 text-white/90",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "h-5 w-5",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									strokeWidth: "2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 18 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "h-5 w-5",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									strokeWidth: "2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
									})
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-h-[220px] p-3",
					style: wpStyle,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-4 w-fit rounded-lg px-3 py-1 text-[11px] font-medium shadow-sm",
							style: {
								backgroundColor: pillBg,
								color: pillText
							},
							children: formatWhatsAppDatePill(now)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative max-w-[88%] animate-scale-in rounded-lg rounded-tr-sm px-2.5 py-1.5 shadow-sm",
								style: { backgroundColor: bubbleBg },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "absolute -right-[5px] top-0 h-3 w-2",
										viewBox: "0 0 8 12",
										fill: bubbleBg,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 0 C4 0, 8 4, 8 10 L0 10 Z" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "whitespace-pre-wrap pr-16 text-[13.5px] leading-relaxed",
										style: { color: bubbleText },
										children: previewText.split("\n").map((line, i) => {
											if (!line.trim()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2" }, i);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[13.5px] leading-relaxed",
												children: line.split(/(\*[^*]+\*)/g).map((part, j) => part.startsWith("*") && part.endsWith("*") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold",
													children: part.slice(1, -1)
												}, j) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, j))
											}, i);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-1 right-2 flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px]",
											style: { color: metaText },
											children: formatWhatsAppTime(now)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											className: "h-3.5 w-3.5 text-[#53bdeb]",
											viewBox: "0 0 16 11",
											fill: "currentColor",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11.39 1.73L6.36 6.76 4.61 5.01a1 1 0 00-1.41 1.41l2.45 2.45a1 1 0 001.41 0l5.73-5.73a1 1 0 00-1.41-1.41z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15.39 1.73L10.36 6.76 8.61 5.01a1 1 0 00-1.41 1.41l2.45 2.45a1 1 0 001.41 0l5.73-5.73a1 1 0 00-1.41-1.41z" })]
										})]
									})
								]
							}, sendPulse)
						}),
						isTyping && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex justify-start animate-fade-in",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 rounded-lg rounded-tl-sm px-3 py-2 shadow-sm",
								style: { backgroundColor: isDark ? "#202c33" : "#ffffff" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingDot, {
										delay: "0ms",
										color: metaText
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingDot, {
										delay: "150ms",
										color: metaText
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingDot, {
										delay: "300ms",
										color: metaText
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 px-3 py-2",
					style: { backgroundColor: footerBg },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "h-5 w-5",
							style: { color: iconMuted },
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor",
							strokeWidth: "2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "h-5 w-5",
							style: { color: iconMuted },
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor",
							strokeWidth: "2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 rounded-full px-3 py-1.5 text-[13px]",
							style: {
								backgroundColor: inputBg,
								color: iconMuted
							},
							children: isTyping ? "typing…" : "Message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-8 w-8 place-items-center rounded-full text-white transition",
							style: {
								backgroundColor: isDark ? "#00a884" : "#008069",
								transform: isTyping ? "scale(1.08)" : "scale(1)"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 14 })
						})
					]
				})
			]
		})]
	});
}
function TypingDot({ delay, color }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-block h-1.5 w-1.5 rounded-full",
		style: {
			backgroundColor: color,
			animation: "wa-typing 1s ease-in-out infinite",
			animationDelay: delay
		}
	});
}
function ContactRow({ icon, label, value, href, hint }) {
	const Wrap = href ? "a" : "div";
	const isExternal = href?.startsWith("http");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
		href,
		target: isExternal ? "_blank" : void 0,
		rel: isExternal ? "noreferrer" : void 0,
		className: "group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-lg py-3.5 px-2 -mx-2 transition-colors duration-300 hover:bg-primary/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-8 w-8 shrink-0 place-items-center text-muted-foreground transition duration-300 group-hover:text-foreground group-hover:scale-105",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.28em] text-muted-foreground/80 transition-colors duration-300 group-hover:text-muted-foreground",
						children: label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 truncate text-sm text-foreground transition-colors duration-300 group-hover:text-foreground/90",
						children: value
					}),
					hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-[11px] text-muted-foreground",
						children: hint
					})
				]
			}),
			href && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
				size: 14,
				className: "shrink-0 text-muted-foreground/60 opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground group-hover:opacity-100"
			})
		]
	});
}
function IdRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border/70 bg-background/30 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 truncate font-mono text-[13px] text-foreground",
			children: value
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Publications, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expertise, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollToTop, {})
		]
	});
}
//#endregion
export { Index as component };
