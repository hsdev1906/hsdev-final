"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

type Testimonial = {
	name: string;
	role: string;
	quote: string;
	avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
	{
		name: "Narayana Swamy",
		role: "Founder, Biz-Network®",
		quote:
			"Working with HS Dev has been a game-changer for Biz-Network®. We’ve taken several full-stack and front-end applications from Tech Forz. Each one delivered with precision, performance, and attention to detail. From our main Biz-Network® platform to supporting tools, their work has consistently exceeded expectations.",
		avatar:
			"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741327062/n_f2djcv.jpg",
	},
	{
		name: "Mahesh Devarakonda",
		role: "Business Owner",
		quote:
			"I'm really happy with how the Rolanplast website turned out. The design is clean, smooth, and interactive. The team was quick to respond, made all the changes I asked for, and made the whole process easy and stress-free.",
		avatar:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1744695457/mahesh_vgalio.jpg",
	},
	{
		name: "Rajesh",
		role: "Operations Manager",
		quote:
			"The admin panel is really easy to use. I can add new spaces, update the gallery, and control availability without any trouble. The user side is smooth too, and everything works perfectly. HS Dev made it simple and efficient for both admins and users.",
		avatar:
			"https://res.cloudinary.com/dk0smdu0d/image/upload/v1758024373/WhatsApp_Image_2025-09-16_at_17.19.30_bfd962e4_ykyf5n.jpg",
	},
];

const POSITIONS = [
	"left-[8%] top-[25%]",
	"right-[8%] top-[25%]",
	"left-[18%] bottom-[28%]",
	"right-[18%] bottom-[28%]",
];

export default function Testimonials() {
	const [active, setActive] = useState(0);
	const total = TESTIMONIALS.length;

	useEffect(() => {
		const interval = setInterval(() => {
			setActive((prev) => (prev + 1) % total);
		}, 4000);

		return () => clearInterval(interval);
	}, [total]);

	const current = TESTIMONIALS[active];

	return (
		<section className="relative overflow-hidden py-24 bg-white">
			{/* Background */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute inset-0 bg-gradient-to-b from-[#0365D0]/5 via-white to-[#0E3C6E]/5" />
			</div>

			<div className="relative max-w-6xl mx-auto px-6 text-center">
				{/* Heading */}
				<h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1220]">
					Customer{" "}
					<span className="bg-gradient-to-r from-[#00A0E3] to-[#0365D0] bg-clip-text text-transparent">
						Feedbacks
					</span>
				</h2>

				{/* Stage */}
				<div className="relative mt-20 min-h-[520px]">
					{/* Floating Avatars */}
					{TESTIMONIALS.map((t, i) => {
						if (!POSITIONS[i]) return null;

						const isActive = active === i;

						return (
							<motion.button
								key={t.name}
								onClick={() => setActive(i)}
								className={`absolute hidden md:block ${POSITIONS[i]}`}
								whileHover={{ scale: 1.1 }}>
								<motion.div
									animate={{ y: [0, -10, 0] }}
									transition={{
										duration: 3 + i * 0.4,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									className={`relative h-16 w-16 rounded-full bg-white shadow-md transition ${
										isActive
											? "ring-2 ring-[#0365D0] ring-offset-4 ring-offset-white"
											: "ring-1 ring-black/10"
									}`}>
									<Image
										src={t.avatar}
										alt={t.name}
										fill
										sizes="64px"
										className="rounded-full object-cover"
									/>

									{/* Glow */}
									{isActive && (
										<span className="absolute -inset-4 rounded-full bg-[#0365D0]/15 blur-xl -z-10" />
									)}
								</motion.div>
							</motion.button>
						);
					})}

					{/* Quote icon */}
					<div className="absolute left-1/2 top-16 -translate-x-1/2 text-[#0365D0]/10 text-[120px] font-serif select-none">
						“”
					</div>

					{/* Quote */}
					<AnimatePresence mode="wait">
						<motion.p
							key={active}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.4 }}
							className="mx-auto max-w-3xl text-lg md:text-xl text-black/60 leading-relaxed">
							{current.quote}
						</motion.p>
					</AnimatePresence>

					{/* Profile */}
					<div className="mt-16 flex flex-col items-center">
						<div className="relative h-20 w-20 rounded-full bg-white shadow-lg ring-2 ring-[#0365D0]/40 ring-offset-4 ring-offset-white">
							<Image
								src={current.avatar}
								alt={current.name}
								fill
								sizes="80px"
								className="rounded-full object-cover"
							/>
						</div>

						<p className="mt-4 text-xl font-semibold text-[#0B1220]">
							{current.name}
						</p>

						<p className="text-sm text-black/40">{current.role}</p>

						{/* Stars */}
						<div className="flex gap-1 mt-3">
							{Array.from({ length: 5 }).map((_, i) => (
								<Star
									key={i}
									size={18}
									className="fill-[#0365D0] text-[#0365D0]"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
