import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { a as PROFILE, u as useTheme } from "./portfolio-data-B-q1YC_y.mjs";
import { A as ChevronRight, C as Linkedin, R as ArrowUp, _ as MessageSquare, a as Sparkles, h as Moon, j as ChevronDown, m as Palette, t as X, v as Menu } from "../_libs/lucide-react.mjs";
import { a as useScroll, n as useSpring, o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ScrollProgress-tq-ckIso.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var OPTIONS = [
	{
		key: "dark",
		label: "Dark mode",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 14 })
	},
	{
		key: "colorful",
		label: "Vivid mode",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 14 })
	},
	{
		key: "professional",
		label: "Professional mode",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { size: 14 })
	}
];
function ThemeToggle() {
	const { mode, setMode } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "radiogroup",
		"aria-label": "Color mode",
		className: "relative inline-flex items-center gap-0.5 rounded-full border border-border bg-background/60 p-1 backdrop-blur-md",
		children: OPTIONS.map((o) => {
			const on = mode === o.key;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				role: "radio",
				"aria-checked": on,
				"aria-label": o.label,
				title: o.label,
				onClick: () => setMode(o.key),
				className: "group relative grid h-8 w-8 place-items-center rounded-full outline-none transition",
				children: [
					on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						layoutId: "theme-pill",
						className: "absolute inset-0 -z-10 rounded-full bg-[linear-gradient(135deg,var(--gold-soft),var(--gold),var(--accent))] shadow-[0_10px_24px_-10px_oklch(0.82_0.13_82/0.9)]",
						transition: {
							type: "spring",
							stiffness: 420,
							damping: 32
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						animate: on ? {
							rotate: [
								0,
								-12,
								12,
								0
							],
							scale: 1.05
						} : {
							rotate: 0,
							scale: 1
						},
						transition: {
							duration: .5,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: on ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary",
						children: o.icon
					}),
					!on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 rounded-full opacity-0 ring-1 ring-primary/40 transition-opacity duration-200 group-hover:opacity-100" })
				]
			}, o.key);
		})
	});
}
var MENU = [
	{
		label: "Blog",
		href: "/blog"
	},
	{
		label: "Explore",
		groups: [
			{
				label: "Profile",
				children: [
					{
						label: "About the Professor",
						href: "#about"
					},
					{
						label: "Academic Journey",
						href: "#about"
					},
					{
						label: "Teaching Philosophy",
						href: "#about"
					}
				]
			},
			{
				label: "Experience",
				children: [
					{
						label: "AITAM — Present Role",
						href: "#experience"
					},
					{
						label: "GITAM University",
						href: "#experience"
					},
					{
						label: "Earlier Positions",
						href: "#experience"
					}
				]
			},
			{
				label: "Research",
				children: [
					{
						label: "Publications (Scopus / WoS)",
						href: "#research"
					},
					{
						label: "Almost Distributive Lattices",
						href: "#research"
					},
					{
						label: "Fuzzy Structures & Filters",
						href: "#research"
					}
				]
			},
			{
				label: "Expertise",
				children: [
					{
						label: "Subject Areas",
						href: "#expertise"
					},
					{
						label: "Technical Craft",
						href: "#expertise"
					},
					{
						label: "Certifications",
						href: "#expertise"
					}
				]
			}
		]
	},
	{
		label: "About",
		groups: [{
			label: "Profile",
			children: [{
				label: "Biography",
				href: "#about"
			}, {
				label: "Education",
				href: "#about"
			}]
		}, {
			label: "Affiliations",
			children: [{
				label: "AITAM, Tekkali",
				href: "#experience"
			}, {
				label: "Memberships",
				href: "#expertise"
			}]
		}]
	},
	{
		label: "Resources",
		groups: [{
			label: "Scholar",
			children: [
				{
					label: "Scopus Profile",
					href: `https://www.scopus.com/authid/detail.uri?authorId=${PROFILE.scopusId}`
				},
				{
					label: "ORCID",
					href: `https://orcid.org/${PROFILE.orcid}`
				},
				{
					label: "Web of Science",
					href: "#research"
				}
			]
		}, {
			label: "Community",
			children: [{
				label: "LinkedIn",
				href: PROFILE.linkedin
			}, {
				label: "Email",
				href: `mailto:${PROFILE.email}`
			}]
		}]
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [openMobileGroup, setOpenMobileGroup] = (0, import_react.useState)(null);
	const [hover, setHover] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const isExternal = (h) => !!h && (h.startsWith("http") || h.startsWith("mailto:"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "pointer-events-none fixed inset-x-0 top-0 z-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_at_center_top,oklch(0.82_0.13_82/0.18),transparent_70%)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-auto mx-auto w-[96%] max-w-7xl px-1 pt-3 sm:pt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.nav, {
					initial: {
						y: -18,
						opacity: 0
					},
					animate: {
						y: 0,
						opacity: 1
					},
					transition: {
						duration: .7,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: `relative flex items-center justify-between gap-3 rounded-full border border-white/10 bg-zinc-900/60 px-3 py-2 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.85)] backdrop-blur-xl transition-all duration-500 sm:px-5 sm:py-2.5 ${scrolled ? "border-primary/25 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex shrink-0 items-center pl-2 text-[12px] font-medium tracking-[0.22em] text-white transition-opacity hover:opacity-80 sm:text-[13px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "JOGARAO" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1.5 font-bold text-primary",
								children: "GUNDA"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "hidden items-center gap-8 lg:flex",
							children: MENU.map((item) => {
								const hasMenu = !!item.groups;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "relative",
									onMouseEnter: () => hasMenu && setHover(item.label),
									onMouseLeave: () => setHover(null),
									children: [hasMenu ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "group flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white",
										children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
											size: 11,
											strokeWidth: 2.5,
											className: `opacity-50 transition-transform group-hover:opacity-100 ${hover === item.label ? "rotate-180" : ""}`
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: item.href,
										className: "text-[10.5px] font-bold uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white",
										children: item.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: hasMenu && hover === item.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										initial: {
											opacity: 0,
											y: 8
										},
										animate: {
											opacity: 1,
											y: 0
										},
										exit: {
											opacity: 0,
											y: 4
										},
										transition: { duration: .18 },
										style: {
											width: "min(92vw, 640px)",
											maxHeight: "min(70vh, 520px)"
										},
										className: "absolute left-1/2 top-full z-50 mt-4 -translate-x-1/2 overflow-y-auto rounded-2xl border border-white/10 bg-zinc-950/90 p-5 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.9)] backdrop-blur-2xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `grid gap-x-6 gap-y-5 ${(item.groups.length ?? 0) > 2 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`,
											children: item.groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mb-2 flex items-center gap-1.5 border-b border-white/10 pb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
														size: 10,
														className: "shrink-0"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "truncate",
														children: g.label
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
													className: "flex flex-col gap-0.5",
													children: g.children?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
														className: "min-w-0",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
															href: c.href,
															target: isExternal(c.href) ? "_blank" : void 0,
															rel: isExternal(c.href) ? "noreferrer" : void 0,
															className: "block break-words rounded-md px-2 py-1.5 text-[12.5px] leading-snug text-zinc-300 transition-colors hover:bg-white/5 hover:text-primary",
															children: c.label
														})
													}, c.label + c.href))
												})]
											}, g.label))
										})
									}) })]
								}, item.label);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 sm:gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden md:block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: PROFILE.linkedin,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "LinkedIn",
									className: "hidden h-9 w-9 items-center justify-center rounded-full text-zinc-400 transition-colors hover:text-white sm:inline-flex",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 17 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									className: "hidden items-center gap-1.5 rounded-full bg-rose-600 px-4 py-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_12px_28px_-12px_rgba(225,29,72,0.7)] transition-all hover:-translate-y-0.5 hover:bg-rose-500 active:scale-95 sm:inline-flex",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
										size: 12,
										strokeWidth: 2.5
									}), "Talk to Me"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-primary/60 hover:text-primary lg:hidden",
									onClick: () => setOpen((v) => !v),
									"aria-label": open ? "Close menu" : "Open menu",
									children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 17 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 17 })
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: -8
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -8
				},
				transition: { duration: .22 },
				className: "pointer-events-auto mx-auto mt-3 w-[96%] max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.9)] backdrop-blur-2xl lg:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-white/5 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500",
							children: "Menu"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "p-2",
						children: MENU.map((item) => {
							const hasMenu = !!item.groups;
							const isOpen = openMobileGroup === item.label;
							if (!hasMenu) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								onClick: () => setOpen(false),
								className: "block rounded-lg px-3 py-2.5 text-[11.5px] font-bold uppercase tracking-[0.2em] text-zinc-300 hover:bg-white/5 hover:text-primary",
								children: item.label
							}) }, item.label);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border-b border-white/5 last:border-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-[11.5px] font-bold uppercase tracking-[0.2em] text-zinc-300 hover:bg-white/5",
									onClick: () => setOpenMobileGroup(isOpen ? null : item.label),
									children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
										size: 13,
										className: `transition-transform ${isOpen ? "rotate-180" : ""}`
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
									transition: { duration: .22 },
									className: "overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-3 px-3 pb-3",
										children: item.groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-1 text-[9.5px] font-bold uppercase tracking-[0.2em] text-primary",
											children: g.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: g.children?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: c.href,
											target: isExternal(c.href) ? "_blank" : void 0,
											rel: isExternal(c.href) ? "noreferrer" : void 0,
											onClick: () => setOpen(false),
											className: "block rounded-md px-2 py-1.5 text-[12.5px] text-zinc-300 hover:bg-white/5 hover:text-primary",
											children: c.label
										}) }, c.label + c.href)) })] }, g.label))
									})
								}) })]
							}, item.label);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 border-t border-white/5 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: PROFILE.linkedin,
							target: "_blank",
							rel: "noreferrer",
							onClick: () => setOpen(false),
							className: "inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-200 hover:border-primary/50 hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 14 }), " LinkedIn"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							onClick: () => setOpen(false),
							className: "inline-flex items-center justify-center gap-2 rounded-full bg-rose-600 px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:bg-rose-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { size: 14 }), " Talk to Me"]
						})]
					})
				]
			}) })
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative border-t border-border py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 gold-divider" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:px-6 md:flex-row md:text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "whitespace-pre-line text-sm text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						PROFILE.name,
						".",
						"\n",
						"\xA0Mantained By Jami Eswar Anil Kumar"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.25em] text-muted-foreground",
					children: "AITAM · Tekkali · Andhra Pradesh"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-6 flex max-w-7xl items-center justify-center px-4 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://vyntyraconsultancyservices.in/",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "text-xs tracking-wide text-muted-foreground/60 transition-colors hover:text-muted-foreground",
					children: [
						"Designed & Developed by",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground/70 hover:text-foreground",
							children: "Vyntyra Consultancy Services"
						})
					]
				})
			})
		]
	});
}
function ScrollToTop() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setVisible(window.scrollY > 400);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: scrollToTop,
		"aria-label": "Scroll back to top of page",
		title: "Back to top",
		"aria-hidden": !visible,
		tabIndex: visible ? 0 : -1,
		className: `fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/50 bg-background/70 text-foreground shadow-[0_20px_60px_-20px_oklch(0_0_0/0.8)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground focus:outline-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:border-primary ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
			size: 18,
			"aria-hidden": "true",
			focusable: "false"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Scroll to top"
		})]
	});
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 24,
		mass: .4
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": true,
		style: {
			scaleX,
			transformOrigin: "0% 50%"
		},
		className: "fixed left-0 right-0 top-0 z-[100] h-[2px] bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_18px_-2px_oklch(0.82_0.13_82/0.9)]"
	});
}
//#endregion
export { ScrollToTop as i, Nav as n, ScrollProgress as r, Footer as t };
