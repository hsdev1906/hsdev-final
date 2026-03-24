"use client";

import { motion } from "framer-motion";
import {
	ShieldCheck,
	MessageCircle,
	Clock,
	TrendingUp,
	ArrowRight,
} from "lucide-react";

export default function Values() {
	const values = [
		{
			title: "Commitment to Quality",
			icon: ShieldCheck,
			desc: "We maintain strict engineering standards to ensure reliability, scalability, and long-term performance.",
		},
		{
			title: "Honest Communication",
			icon: MessageCircle,
			desc: "Transparent collaboration and clear updates at every stage of the project lifecycle.",
		},
		{
			title: "Timely Delivery",
			icon: Clock,
			desc: "Structured workflows and agile execution ensure projects are delivered on schedule.",
		},
		{
			title: "Continuous Improvement",
			icon: TrendingUp,
			desc: "We constantly refine systems, optimize performance, and adapt to evolving technology.",
		},
	];

	return (
		<section className="relative bg-white py-10 overflow-hidden">
			{/* Subtle Tech Lines */}

			<div className="relative mx-auto max-w-7xl px-6">
				{/* ===== Header ===== */}
				<div className="text-center mb-24">
					<p className="text-sm tracking-[0.35em] uppercase text-[#0365D0] font-medium">
						Our Values
					</p>
					<h2 className="mt-6 text-4xl md:text-5xl font-semibold text-[#0E3C6E]">
						Principles That Drive
						<span className="block bg-gradient-to-r from-[#00A0E3] to-[#0365D0] bg-clip-text text-transparent">
							Everything We Build
						</span>
					</h2>
				</div>

				<div className="grid lg:grid-cols-2 gap-20 items-start">
					{/* ================= LEFT SIDE VALUES ================= */}
					<div className="relative">
						{/* Vertical Line */}
						<div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00A0E3] to-[#0365D0]" />

						<div className="space-y-16">
							{values.map((value, i) => {
								const Icon = value.icon;
								return (
									<motion.div
										key={i}
										whileHover={{ x: 6 }}
										transition={{ duration: 0.3 }}
										className="relative pl-20">
										{/* Icon */}
										<div className="absolute left-0 top-1 h-12 w-12 rounded-full bg-gradient-to-r from-[#00A0E3] to-[#0365D0] flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,160,227,0.4)]">
											<Icon size={20} />
										</div>

										<h3 className="text-xl font-semibold text-[#0E3C6E]">
											{value.title}
										</h3>

										<p className="mt-3 text-gray-600 leading-relaxed max-w-md">
											{value.desc}
										</p>
									</motion.div>
								);
							})}
						</div>
					</div>

					{/* ================= RIGHT SIDE CTA ================= */}
					<div className="relative">
						{/* Gradient Background Accent */}
						<div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-[#00A0E3]/10 blur-3xl" />

						<motion.div
							whileHover={{ y: -6 }}
							transition={{ duration: 0.3 }}
							className="relative rounded-3xl border border-slate-200 p-14 bg-white shadow-lg">
							<h3 className="text-3xl font-semibold text-[#0E3C6E]">
								Let’s Work Together
							</h3>

							<p className="mt-6 text-gray-600 leading-relaxed text-lg">
								We believe technology should
								<span className="text-[#0365D0] font-medium">
									{" "}
									simplify business operations
								</span>{" "}
								and create new opportunities for sustainable growth.
							</p>

							<p className="mt-4 text-gray-600 leading-relaxed">
								If you’re looking for a
								<span className="text-[#00A0E3] font-medium">
									{" "}
									dependable technology partner,
								</span>{" "}
								HS Dev is here to help.
							</p>

							<button className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00A0E3] to-[#0365D0] px-6 py-3 text-white font-medium shadow-[0_0_20px_rgba(0,160,227,0.4)] hover:shadow-[0_0_30px_rgba(0,160,227,0.6)] transition">
								Start a Conversation
								<ArrowRight size={18} />
							</button>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
