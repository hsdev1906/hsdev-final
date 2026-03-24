"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
	const capabilities = [
		{
			title: "High-Performance Engineering",
			desc: "Optimized architectures designed for speed, scalability, and reliability.",
		},
		{
			title: "AI & Intelligent Systems",
			desc: "Data-driven solutions powered by modern AI and automation frameworks.",
		},
		{
			title: "Strategic Digital Architecture",
			desc: "Technology aligned with business growth, long-term vision, and measurable impact.",
		},
		{
			title: "Modern Experience Design",
			desc: "Clean, intuitive, and conversion-focused digital interfaces.",
		},
	];

	return (
		<section className="relative overflow-hidden bg-white py-28">
			{/* ===== Subtle Tech Background Pattern ===== */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Soft radial brand accents */}
				<div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#00A0E3]/5 blur-3xl" />
				<div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#0365D0]/5 blur-3xl" />

				{/* Mesh grid overlay */}
				<svg className="absolute inset-0 h-full w-full opacity-[0.04]">
					<defs>
						<pattern
							id="pattern"
							width="60"
							height="60"
							patternUnits="userSpaceOnUse">
							<circle cx="2" cy="2" r="2" fill="#0365D0" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#pattern)" />
				</svg>
			</div>

			<div className="relative mx-auto max-w-7xl px-6">
				{/* ===== Top Layout ===== */}
				<div className="grid gap-16 lg:grid-cols-2 items-center">
					{/* Left Content */}
					<div>
						<p className="text-sm tracking-[0.3em] uppercase text-[#0365D0] font-medium">
							Who We Are
						</p>

						<h2 className="mt-6 text-4xl md:text-5xl font-semibold text-[#0E3C6E] leading-tight">
							Engineering Intelligent
							<span className="block bg-gradient-to-r from-[#00A0E3] to-[#0365D0] bg-clip-text text-transparent">
								Digital Infrastructure
							</span>
						</h2>

						<p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
							HS Dev is a forward-thinking technology company delivering
							scalable web platforms, AI-powered ecosystems, and
							enterprise-grade digital solutions built for performance and
							long-term growth.
						</p>

						<div className="mt-10 h-[3px] w-24 bg-gradient-to-r from-[#00A0E3] to-[#0365D0] rounded-full" />
					</div>

					{/* Right Visual Tech UI Block */}
					<div className="relative">
						<div className="relative rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
							<div className="space-y-6">
								{capabilities.map((item, i) => (
									<motion.div
										key={i}
										whileHover={{ x: 6 }}
										transition={{ duration: 0.3 }}
										className="group">
										<h3 className="text-lg font-semibold text-[#0E3C6E]">
											{item.title}
										</h3>
										<p className="mt-2 text-sm text-gray-600 leading-relaxed">
											{item.desc}
										</p>

										{/* Animated underline */}
										<div className="mt-3 h-[2px] w-0 bg-gradient-to-r from-[#00A0E3] to-[#0365D0] transition-all duration-500 group-hover:w-16" />
									</motion.div>
								))}
							</div>

							{/* Decorative layered effect */}
							<div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-[#00A0E3]/5 to-[#0365D0]/5 blur-2xl -z-10" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
