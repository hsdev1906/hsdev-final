"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Role = {
	title: string;
	desc: string;
};

const roles: Role[] = [
	{
		title: "Frontend Developer (React / Next.js)",
		desc: "Build modern, high-performance interfaces using React, TypeScript, and Tailwind.",
	},
	{
		title: "Full-Stack Developer (Next.js + Node/FastAPI)",
		desc: "Design scalable end-to-end systems with clean architecture.",
	},
	{
		title: "Backend Engineer (Node.js / FastAPI / Prisma)",
		desc: "Architect secure APIs and scalable backend systems.",
	},
	{
		title: "UI/UX Designer",
		desc: "Craft intuitive digital experiences aligned with brand identity.",
	},
	{
		title: "DevOps & Cloud Engineer",
		desc: "Automate infrastructure and optimize deployment pipelines.",
	},
	{
		title: "AI Engineer",
		desc: "Build AI assistants, automation systems, and data pipelines.",
	},
];

export default function OpenPositions() {
	const [selectedRole, setSelectedRole] = useState<Role | null>(null);

	return (
		<section id="open-roles" className="bg-white py-10">
			<div className="mx-auto max-w-7xl px-6">
				{/* ===== Header ===== */}
				<div className="mx-auto max-w-3xl text-center">
					<p className="text-sm uppercase tracking-[0.3em] text-[#0365D0] font-semibold">
						Careers
					</p>

					<h2 className="mt-6 text-4xl font-semibold text-gray-900 md:text-5xl">
						Open{" "}
						<span className="bg-gradient-to-r from-[#00A0E3] to-[#0365D0] bg-clip-text text-transparent">
							Positions
						</span>
					</h2>

					<p className="mt-6 text-gray-600">
						We’re looking for builders who care about impact, ownership, and
						engineering excellence.
					</p>

					<div className="mt-8 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-[#00A0E3] to-[#0365D0]" />
				</div>

				{/* ===== Roles Grid ===== */}
				<div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{roles.map((role, index) => (
						<motion.button
							key={role.title}
							onClick={() => setSelectedRole(role)}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: index * 0.05 }}
							viewport={{ once: true }}
							className="group relative rounded-2xl border border-gray-200 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
							{/* Top Accent */}
							<div className="absolute left-0 top-0 h-1 w-full rounded-t-2xl bg-gradient-to-r from-[#00A0E3] to-[#0365D0]" />

							<h3 className="text-lg font-semibold text-gray-900">
								{role.title}
							</h3>

							<p className="mt-4 text-sm text-gray-600">{role.desc}</p>

							<div className="mt-6 text-sm font-medium text-[#0365D0] group-hover:translate-x-1 transition">
								View Details →
							</div>
						</motion.button>
					))}
				</div>

				{/* ===== CTA Section ===== */}
				<div className="mt-24 text-center">
					<h3 className="text-3xl font-semibold text-gray-900">
						Build the Future With Us
					</h3>

					<p className="mt-4 text-gray-600 max-w-xl mx-auto">
						At HS Dev, you don’t just build software — you build high-impact
						systems shaping industries.
					</p>
				</div>
			</div>

			{/* ===== Modal ===== */}
			<AnimatePresence>
				{selectedRole && (
					<motion.div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedRole(null)}>
						<motion.div
							initial={{ scale: 0.95, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.95, opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="relative w-full max-w-lg rounded-2xl bg-white p-10 shadow-2xl"
							onClick={(e) => e.stopPropagation()}>
							<div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#00A0E3] to-[#0365D0]" />

							<h4 className="mt-6 text-xl font-semibold text-gray-900">
								Apply for {selectedRole.title}
							</h4>

							<p className="mt-4 text-gray-600 text-sm">
								Send your resume to{" "}
								<a
									href="mailto:info@vrtechforz.com"
									className="text-[#0365D0] font-medium hover:underline">
									info@vrtechforz.com
								</a>{" "}
								with subject:
							</p>

							<p className="mt-2 font-medium text-gray-800 text-sm">
								Application for {selectedRole.title}
							</p>

							<div className="mt-8 flex justify-end">
								<button
									onClick={() => setSelectedRole(null)}
									className="rounded-lg bg-gradient-to-r from-[#0E3C6E] to-[#0365D0] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg transition">
									Close
								</button>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
