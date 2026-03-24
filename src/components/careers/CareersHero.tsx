"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CareersHero() {
	return (
		<section className="relative isolate overflow-hidden bg-gradient-to-r from-[#0E3C6E] to-[#0365D0] pt-28 pb-20 md:pt-32 md:pb-28">
			{" "}
			<div className="relative z-10 mx-auto max-w-6xl px-6">
				<div className="grid gap-12 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-center">
					{/* Left Side */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}>
						{/* Badge */}
						<div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
							<span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
							Careers at HS Dev
						</div>

						<h1 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-5xl">
							Build the{" "}
							<span className="bg-white bg-clip-text text-transparent font-bold">
								Future
							</span>{" "}
							With Us
						</h1>

						<p className="mt-5 max-w-xl text-sm text-white/90 md:text-base leading-relaxed">
							At HS Dev, we design intelligent, scalable, cloud-native systems
							that power modern businesses. Join a team where{" "}
							<span className="font-semibold text-white">
								innovation, ownership, and impact
							</span>{" "}
							come first.
						</p>

						{/* Pills */}
						<div className="mt-6 flex flex-wrap gap-3 text-[11px] md:text-[12px]">
							<span className="rounded-full bg-white/20 px-4 py-1 text-white border border-white/30">
								AI-driven products
							</span>
							<span className="rounded-full bg-white/20 px-4 py-1 text-white border border-white/30">
								High-ownership teams
							</span>
							<span className="rounded-full bg-white/20 px-4 py-1 text-white border border-white/30">
								Real business impact
							</span>
						</div>

						{/* Button */}
						<div className="mt-10">
							<Link
								href="#open-roles"
								className="inline-flex items-center justify-center rounded-md bg-white text-[#0365D0] px-6 py-3 text-sm font-semibold shadow-lg hover:bg-white/90 transition">
								View Open Roles
							</Link>
						</div>

						<p className="mt-4 text-xs text-white/80">
							We&apos;re always looking for builders who love shipping
							meaningful products.
						</p>
					</motion.div>

					{/* Right Side Cards */}
					<motion.div
						className="space-y-5"
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}>
						{/* Card 1 */}
						<div className="rounded-2xl border border-white/30 bg-white/20 p-6 backdrop-blur-lg">
							<p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
								Why Join Us
							</p>

							<ul className="mt-4 space-y-3 text-sm text-white/95">
								<li className="flex gap-2">
									<span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
									Work on AI-powered, cloud-native systems.
								</li>
								<li className="flex gap-2">
									<span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
									High ownership, low bureaucracy.
								</li>
								<li className="flex gap-2">
									<span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
									Direct impact on real clients and users.
								</li>
							</ul>
						</div>

						{/* Card 2 */}
						<div className="rounded-2xl border border-white/30 bg-white/20 p-6 backdrop-blur-lg">
							<p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
								Teams Hiring
							</p>

							<div className="mt-4 flex flex-wrap gap-3 text-xs text-white">
								<span className="rounded-full bg-white/25 px-3 py-1">
									Full-stack Engineering
								</span>
								<span className="rounded-full bg-white/25 px-3 py-1">
									Frontend & UI
								</span>
								<span className="rounded-full bg-white/25 px-3 py-1">
									Backend & DevOps
								</span>
								<span className="rounded-full bg-white/25 px-3 py-1">
									AI & Automation
								</span>
							</div>

							<p className="mt-4 text-[11px] text-white/85">
								Don&apos;t see a perfect role? Apply anyway — we review every
								application carefully.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
