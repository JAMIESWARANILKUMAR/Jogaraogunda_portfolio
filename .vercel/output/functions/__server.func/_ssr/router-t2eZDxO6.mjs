import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { a as PROFILE, l as ThemeProvider } from "./portfolio-data-B-q1YC_y.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { i as string, n as zodValidator, r as object, t as fallback } from "../_libs/tanstack__zod-adapter+zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-t2eZDxO6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-olhKHbN2.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Dr. Jogarao Gunda — Associate Professor, Applied Mathematics" },
			{
				name: "description",
				content: "Portfolio of Dr. Jogarao Gunda, Associate Professor of Mathematics at AITAM Tekkali — 14+ years of teaching, Ph.D. in Applied Mathematics, Scopus-indexed research on almost distributive lattices."
			},
			{
				name: "author",
				content: "Dr. Jogarao Gunda"
			},
			{
				property: "og:title",
				content: "Dr. Jogarao Gunda — Associate Professor, Applied Mathematics"
			},
			{
				property: "og:description",
				content: "14+ years in academia · Ph.D. GITAM University · 12+ Scopus/WoS publications · Guiding 2 doctoral scholars."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.jpg",
				type: "image/jpeg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var BASE_URL = "";
var Route$3 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: () => {
	const entries = [{
		path: "/",
		changefreq: "weekly",
		priority: "1.0"
	}];
	const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$2 = () => import("./preview-C8siqyrl.mjs");
var Route$2 = createFileRoute("/preview")({
	head: () => ({ meta: [
		{ title: "Device Preview — Multi-device audit" },
		{
			name: "description",
			content: "Preview the portfolio across 25+ device presets and orientations."
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./blog-BWyL0f9V.mjs");
var Route$1 = createFileRoute("/blog")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: `Blog & Comprehensive Profile — ${PROFILE.name}` }, {
		name: "description",
		content: "Comprehensive professional profile and blog of Dr. Jogarao Gunda."
	}] })
});
var $$splitComponentImporter = () => import("./routes-BErIM8nY.mjs");
var TITLE = "Dr. Jogarao Gunda — Associate Professor of Applied Mathematics, AITAM Tekkali";
var DESCRIPTION = "Portfolio of Dr. Jogarao Gunda: Ph.D. in Applied Mathematics (GITAM), 14+ years in academia, 12+ Scopus/Web of Science publications on almost distributive lattices, filters and fuzzy structures. Associate Professor at AITAM Tekkali.";
var Route = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	validateSearch: zodValidator(object({
		cat: fallback(string(), "all").default("all"),
		q: fallback(string(), "").default("")
	})),
	head: () => ({
		meta: [
			{ title: TITLE },
			{
				name: "description",
				content: DESCRIPTION
			},
			{
				name: "keywords",
				content: "Dr. Jogarao Gunda, Associate Professor, Applied Mathematics, AITAM Tekkali, Almost Distributive Lattices, Fuzzy Sets, Discrete Mathematics, Research Portfolio, GITAM Ph.D."
			},
			{
				name: "author",
				content: PROFILE.name
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large"
			},
			{
				property: "og:title",
				content: TITLE
			},
			{
				property: "og:description",
				content: DESCRIPTION
			},
			{
				property: "og:type",
				content: "profile"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				property: "og:image",
				content: "/og-image.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: `${PROFILE.name} — ${PROFILE.title}`
			},
			{
				property: "profile:first_name",
				content: "Jogarao"
			},
			{
				property: "profile:last_name",
				content: "Gunda"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: TITLE
			},
			{
				name: "twitter:description",
				content: DESCRIPTION
			},
			{
				name: "twitter:image",
				content: "/og-image.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Person",
				name: PROFILE.name,
				jobTitle: PROFILE.title,
				email: `mailto:${PROFILE.email}`,
				telephone: PROFILE.phone,
				url: "/",
				image: "/og-image.jpg",
				sameAs: [
					PROFILE.linkedin,
					`https://orcid.org/${PROFILE.orcid}`,
					`https://www.scopus.com/authid/detail.uri?authorId=${PROFILE.scopusId}`
				],
				worksFor: {
					"@type": "CollegeOrUniversity",
					name: PROFILE.institution,
					address: PROFILE.location
				},
				alumniOf: {
					"@type": "CollegeOrUniversity",
					name: "GITAM (Deemed to be) University, Visakhapatnam"
				},
				knowsAbout: [
					"Almost Distributive Lattices",
					"Fuzzy Set Theory",
					"Discrete Mathematics",
					"Graph Theory",
					"Modern Algebra",
					"Engineering Mathematics"
				],
				nationality: "Indian"
			})
		}]
	})
});
var SitemapDotxmlRoute = Route$3.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$4
});
var PreviewRoute = Route$2.update({
	id: "/preview",
	path: "/preview",
	getParentRoute: () => Route$4
});
var BlogRoute = Route$1.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$4
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	BlogRoute,
	PreviewRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
