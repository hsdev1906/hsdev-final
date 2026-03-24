"use client";

import { motion } from "framer-motion";

const items = [
	{
		id: 1,
		icon: "⚡",
		title: "We Are Builders First",
		body: "We don’t just write code — we craft products, architect systems, and solve real-world problems.",
		tag: "Product-thinking",
	},
	{
		id: 2,
		icon: "🧠",
		title: "Innovation at the Core",
		body: "AI, automation, cloud-native engineering, and performance-first systems are our daily playground.",
		tag: "AI • Automation • Cloud",
	},
	{
		id: 3,
		icon: "🚀",
		title: "Growth That Moves Fast",
		body: "Work directly with founders, CTOs, and CEOs. Build products that reach thousands — sometimes millions.",
		tag: "Direct founder access",
	},
	{
		id: 4,
		icon: "🤝",
		title: "Culture of Ownership",
		body: "No micromanagement. No bureaucracy. Just ownership, responsibility, and freedom to create.",
		tag: "High ownership",
	},
	{
		id: 5,
		icon: "🌍",
		title: "Impact Beyond Tech",
		body: "We empower FinTech, HealthTech, AgriTech, EduTech, and E-Commerce — touching real lives through the VR ecosystem.",
		tag: "Real-world impact",
	},
];

export default function WhyUs() {
	return (
		<section className="relative isolate bg-white py-10 md:py-12 overflow-hidden">
			{/* Soft brand background accent */}
			<div className="pointer-events-none absolute -top-32 right-[-8rem] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#00A0E3]/15 to-[#0365D0]/15 blur-[120px]" />

			<div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:gap-16">
				{/* Left Side */}
				<div className="md:w-[34%]">
					<div className="inline-flex items-center gap-2 rounded-full border border-[#0365D0]/20 bg-[#0365D0]/5 px-3 py-1 text-[11px] font-medium text-[#0365D0]">
						<span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#00A0E3] to-[#0365D0]" />
						Why work with HS Dev?
					</div>

					<h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
						Why{" "}
						<span className="bg-gradient-to-r from-[#00A0E3] to-[#0365D0] bg-clip-text text-transparent">
							Work With Us
						</span>
						?
					</h2>

					<p className="mt-4 text-sm text-gray-600 md:text-base leading-relaxed">
						We&apos;re a team of builders, operators, and problem-solvers —
						shipping real products that impact businesses and users worldwide.
					</p>

					<div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-5 text-[13px] text-gray-600 shadow-sm">
						<p className="font-medium text-gray-800">
							You&apos;ll fit right in if:
						</p>
						<ul className="mt-3 space-y-2">
							<li className="flex gap-2">
								<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#0365D0]" />
								You care about impact more than job titles.
							</li>
							<li className="flex gap-2">
								<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#0365D0]" />
								You like owning problems end-to-end.
							</li>
							<li className="flex gap-2">
								<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#0365D0]" />
								You ship fast — without compromising quality.
							</li>
						</ul>
					</div>
				</div>

				{/* Right Side Timeline */}
				<div className="md:w-[66%]">
					<div className="relative">
						{/* Vertical brand line */}
						<div className="absolute left-[20px] top-0 h-full w-[2px] bg-gradient-to-b from-[#00A0E3] to-[#0365D0]" />

						<div className="space-y-6">
							{items.map((item, idx) => (
								<motion.article
									key={item.id}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: idx * 0.06 }}
									viewport={{ once: true }}
									className="relative flex gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
									{/* Node */}
									<div className="relative flex flex-col items-center pt-1">
										<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#00A0E3] to-[#0365D0] text-white shadow-md">
											<span className="text-lg">{item.icon}</span>
										</div>
									</div>

									{/* Content */}
									<div className="flex-1">
										<div className="flex flex-wrap items-center justify-between gap-2">
											<h3 className="text-sm font-semibold text-gray-900 md:text-base">
												{item.title}
											</h3>
											<span className="inline-flex items-center rounded-full bg-[#0365D0]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#0365D0]">
												{item.tag}
											</span>
										</div>

										<p className="mt-2 text-sm text-gray-600">{item.body}</p>

										{/* Brand underline */}
										<div className="mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#00A0E3] to-[#0365D0]" />
									</div>
								</motion.article>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
