const owner = {
	firstName: "Venki",
	lastName: "Vijay",
	role: "Full Stack Developer",
	experience: 3,
}

const projects = [
	{
		name: "Xplore",
		description: "Searchable/filterable file browser for a GitHub repo",
		tags: ["Nuxt.js", "PWA"],
		image: "xplore",
		liveURL: "https://xplore.venkivijay.com/",
		sourceURL: "https://github.com/venkivijay/xplore",
	},
	{
		name: "Links",
		description: "Linktree like bio hosting my social links",
		tags: ["Vue", "PostCSS", "Vite"],
		image: "links",
		liveURL: "https://links.venkivijay.com/",
		sourceURL: "https://github.com/venkivijay/links",
	},
	{
		name: "Invoice Tracker",
		description: "A simple app to create and manage invoices",
		tags: ["Vue", "Firebase", "Chart.js"],
		image: "invoice-tracker",
		liveURL: "https://wizardly-tereshkova-b408fe.netlify.app/",
		sourceURL: "https://github.com/venkivijay/invoice-tracker",
	},
]

const socials = [
	{
		name: "GitHub",
		primaryIcon: "github",
		url: "https://github.com/venkivijay",
	},
	{
		name: "LinkedIn",
		primaryIcon: "linkedin",
		url: "https://www.linkedin.com/in/venkivijay/",
	},
	{
		name: "Twitter",
		primaryIcon: "twitter",
		url: "https://twitter.com/venkivijay_",
	},
	{
		name: "WhatsApp",
		primaryIcon: "whatsapp",
		url: "https://wa.me/+918122932334",
	},
]

const contact = {
	location: "Salem - Chennai, TamilNadu, India",
	email: "venkivijay@hotmail.com",
	phone: "+91-6369888030",
}

const skills = [
	{ slug: "html5", name: "HTML5" },
	{ slug: "css3", name: "CSS3" },
	{ slug: "javascript", name: "JavaScript" },
	{ slug: "tailwindcss", name: "Tailwind CSS" },
	{ slug: "vuedotjs", name: "Vue.js" },
	{ slug: "arduino", name: "Arduino" },
	{ slug: "babel", name: "Babel" },
	{ slug: "webpack", name: "Webpack" },
	{ slug: "vite", name: "Vite" },
	{ slug: "bootstrap", name: "Bootstrap" },
	{ slug: "c", name: "C" },
	{ slug: "cplusplus", name: "CPP" },
	{ slug: "docker", name: "Docker" },
	{ slug: "firebase", name: "Firebase" },
	{ slug: "git", name: "Git" },
	{ slug: "github", name: "GitHub" },
	{ slug: "gimp", name: "GIMP" },
	{ slug: "json", name: "JSON" },
	{ slug: "linux", name: "Linux" },
	{ slug: "mongodb", name: "MongoDB" },
	{ slug: "netlify", name: "Netlify" },
	{ slug: "nodedotjs", name: "Node.js" },
	{ slug: "npm", name: "npm" },
	{ slug: "popos", name: "Pop!_OS" },
	{ slug: "postgresql", name: "PostgreSQL" },
	{ slug: "prettier", name: "Prettier" },
	{ slug: "puppet", name: "Puppet" },
	{ slug: "sass", name: "SASS" },
	{ slug: "threedotjs", name: "Three.js" },
	{ slug: "wordpress", name: "Wordpress" },
]

export { owner, projects, socials, contact, skills }
