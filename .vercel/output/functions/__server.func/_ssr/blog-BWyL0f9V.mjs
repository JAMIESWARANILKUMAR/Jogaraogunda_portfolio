import { c as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { a as PROFILE, n as EDUCATION, r as EXPERIENCE } from "./portfolio-data-B-q1YC_y.mjs";
import { E as FileText, N as Briefcase, T as GraduationCap, V as Activity, n as Users } from "../_libs/lucide-react.mjs";
import { i as ScrollToTop, n as Nav, r as ScrollProgress, t as Footer } from "./ScrollProgress-tq-ckIso.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-BWyL0f9V.js
var import_jsx_runtime = require_jsx_runtime();
function Blog() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-4xl px-4 pt-32 pb-20 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-16 rounded-2xl border border-white/10 bg-zinc-900/40 p-8 shadow-2xl backdrop-blur-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mb-2 text-3xl font-bold tracking-tight text-white md:text-5xl",
								children: PROFILE.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-medium text-primary",
								children: PROFILE.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-zinc-400",
								children: [
									"Assistant Head of Training and Placement (Asst. HOD of TPC)",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									PROFILE.department,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									PROFILE.institution,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									PROFILE.location
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-4 text-sm text-zinc-300",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `mailto:${PROFILE.email}`,
										className: "flex items-center gap-2 hover:text-primary",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-primary" }),
											" ",
											PROFILE.email
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://www.jogaraogunda.in",
										target: "_blank",
										className: "flex items-center gap-2 hover:text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-primary" }), " www.jogaraogunda.in"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-primary" }),
											" ",
											PROFILE.phone
										]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {
								className: "text-primary",
								size: 28
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold text-white",
								children: "Academic Excellence"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: EDUCATION.map((edu, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-white/5 bg-zinc-900/30 p-5 transition-colors hover:bg-zinc-900/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-white",
										children: edu.deg
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-zinc-400",
										children: edu.org
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: edu.year }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: edu.grade })]
									})
								]
							}, idx))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, {
								className: "text-primary",
								size: 28
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold text-white",
								children: "Professional Journey"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative space-y-8 before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-white/10",
							children: EXPERIENCE.map((exp, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative pl-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 top-1.5 h-6 w-6 -translate-x-[5px] rounded-full border-4 border-background bg-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-bold text-white",
										children: exp.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium text-primary",
										children: exp.org
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-zinc-400",
										children: [
											exp.from,
											" — ",
											exp.to
										]
									}),
									exp.detail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-zinc-500",
										children: exp.detail
									})
								]
							}, idx))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-16 grid gap-8 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
								className: "text-primary",
								size: 24
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold text-white",
								children: "Professional Memberships"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm text-zinc-400",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), " Life member: AP Council for Mathematical Science (ID: 1171)"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), " International Association of Engineers (IAENG, ID: 366807)"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), " IFERP (ID: PROF-34338395)"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), " ISTE (ID: LM 147433)"]
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
								className: "text-primary",
								size: 24
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold text-white",
								children: "Other Responsibilities"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm text-zinc-400",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), " Counseling and guidance"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), " Aptitude (Arithmetic & Reasoning) Trainer TPC"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), " Dept timetable coordinator (AITAM) from June 2025"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), " Dept timetable coordinator (GITAM) June 2022 - April 2024"]
								})
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
								className: "text-primary",
								size: 28
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold text-white",
								children: "Selected Conferences & FDPs"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-white/5 bg-zinc-900/30 p-6 text-sm text-zinc-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-6",
								children: "Participated in over 49 National and International Conferences, Workshops, and Faculty Development Programs. Key highlights include:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "border-l-2 border-primary/30 pl-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-white",
											children: "AI-Assisted Research Writing & LLMs"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "National Level FDP by AMIEE & CMAOI in collaboration with Heritage Institute of Technology (2026)." })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "border-l-2 border-primary/30 pl-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-white",
											children: "Next Generation Mathematical Sciences through AI"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "International FDP Organized by NPSBCET (2026)." })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "border-l-2 border-primary/30 pl-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-white",
											children: "Role of Mathematics in Emerging Technologies (NCRMET)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "National Conference by GIET University (2026, 2024)." })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "border-l-2 border-primary/30 pl-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-white",
											children: "Big Data Analysis and Circular Statistics using R"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Organized Two-day National Workshop at GITAM Visakhapatnam (2023)." })]
									})
								]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollToTop, {})
		]
	});
}
//#endregion
export { Blog as component };
