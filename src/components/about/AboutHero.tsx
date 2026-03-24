"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutHero() {
	return (
		<section className="relative overflow-hidden bg-[#0B1220] text-white py-28">
			{/* ===== Unique Pattern Background ===== */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Soft radial brand glow */}
				<div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] bg-[#0365D0]/15 blur-[120px] rounded-full" />

				{/* Secondary glow */}
				<div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-[#00A0E3]/10 blur-[120px] rounded-full" />

				{/* Subtle grid pattern */}
				<svg
					className="absolute inset-0 h-full w-full opacity-[0.06]"
					xmlns="http://www.w3.org/2000/svg">
					<defs>
						<pattern
							id="grid"
							width="40"
							height="40"
							patternUnits="userSpaceOnUse">
							<path
								d="M 40 0 L 0 0 0 40"
								fill="none"
								stroke="#0365D0"
								strokeWidth="1"
							/>
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#grid)" />
				</svg>
			</div>

			{/* ===== Content ===== */}
			<div className="relative mx-auto max-w-6xl px-6 text-center">
				{/* Small Tag */}
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-sm tracking-[0.25em] uppercase text-[#00A0E3] font-medium">
					About HS Dev
				</motion.p>

				{/* Heading */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.1 }}
					className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
					Engineering the Future with{" "}
					<span className="bg-gradient-to-r from-[#00A0E3] to-[#0365D0] bg-clip-text text-transparent">
						Intelligent Technology
					</span>
				</motion.h1>

				{/* Subtext */}
				<motion.p
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="mt-8 mx-auto max-w-3xl text-lg text-white/70 leading-relaxed">
					HS Dev is a next-generation technology company building modern,
					scalable, and AI-powered digital solutions for businesses worldwide.
				</motion.p>

				{/* CTA Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9, delay: 0.3 }}
					className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
					<Link
						href="/contact"
						className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#00A0E3] to-[#0365D0] px-8 py-4 text-sm font-semibold text-white shadow-[0_0_25px_rgba(3,101,208,0.45)] hover:shadow-[0_0_40px_rgba(3,101,208,0.65)] transition active:scale-[0.98]">
						Work With Us
					</Link>

					<Link
						href="/services"
						className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition">
						Explore Our Services
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
