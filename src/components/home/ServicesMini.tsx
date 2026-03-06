"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
	{
		title: "Web Development",
		description:
			"High-performance websites and scalable web platforms built for growth.",
		slug: "/services",
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766996535/ChatGPT_Image_Dec_29_2025_01_52_03_PM_c2t58z.png",
	},
	{
		title: "Custom Web Applications",
		description:
			"Enterprise-grade applications engineered for performance and security.",
		slug: "/services",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1752942492/zonkey-ai-generated-website-content_uwwet5.jpg",
	},
	{
		title: "Mobile App Development",
		description:
			"Modern iOS & Android applications with seamless user experience.",
		slug: "/services",
		image:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1767000149/photo-1556155092-8707de31f9c4_epsvvb.jpg",
	},
];

export default function ServicesMini() {
	return (
		<section className="relative bg-white py-28 overflow-hidden">
			{/* Soft brand glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute left-1/2 -translate-x-1/2 top-0 h-72 w-[600px] bg-[#0365D0]/5 blur-3xl rounded-full" />
			</div>

			<div className="relative mx-auto max-w-7xl px-6">
				{/* Heading */}
				<div className="max-w-3xl">
					<p className="text-sm tracking-widest text-[#0365D0] font-medium">
						SERVICES
					</p>

					<h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#0E3C6E] leading-tight">
						We engineer digital products
						<br />
						that scale with confidence.
					</h2>

					<Link
						href="/services"
						className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#0365D0] hover:text-[#0E3C6E] transition">
						View All Services
						<ArrowRight size={16} />
					</Link>
				</div>

				{/* Cards */}
				<div className="mt-16 grid gap-8 lg:grid-cols-3">
					{/* Featured Card */}
					<motion.div
						whileHover={{ y: -8 }}
						transition={{ duration: 0.3 }}
						className="group relative overflow-hidden rounded-3xl lg:col-span-2">
						<Link href={services[0].slug}>
							<div className="relative h-[420px] w-full">
								<Image
									src={services[0].image}
									alt={services[0].title}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-105"
								/>

								<div className="absolute inset-0 bg-gradient-to-t from-[#0E3C6E]/85 via-[#0E3C6E]/40 to-transparent" />

								{/* Content */}
								<div className="absolute bottom-10 left-10 right-10 text-white flex items-end justify-between">
									<div>
										<h3 className="text-2xl font-semibold">
											{services[0].title}
										</h3>
										<p className="mt-3 max-w-md text-white/80 text-sm">
											{services[0].description}
										</p>
									</div>

									{/* Arrow */}
									<motion.div
										whileHover={{ x: 4 }}
										className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0365D0] transition group-hover:bg-[#0E3C6E]">
										<ArrowRight size={20} className="text-white" />
									</motion.div>
								</div>
							</div>
						</Link>
					</motion.div>

					{/* Smaller Cards */}
					<div className="space-y-8">
						{services.slice(1).map((service, index) => (
							<motion.div
								key={index}
								whileHover={{ y: -6 }}
								transition={{ duration: 0.3 }}
								className="group relative overflow-hidden rounded-3xl">
								<Link href={service.slug}>
									<div className="relative h-[200px] w-full">
										<Image
											src={service.image}
											alt={service.title}
											fill
											className="object-cover transition-transform duration-700 group-hover:scale-105"
										/>

										<div className="absolute inset-0 bg-gradient-to-t from-[#0E3C6E]/85 to-transparent" />

										<div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
											<h3 className="text-lg font-semibold">{service.title}</h3>

											{/* Arrow */}
											<motion.div
												whileHover={{ x: 4 }}
												className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0365D0] transition group-hover:bg-[#0E3C6E]">
												<ArrowRight size={18} className="text-white" />
											</motion.div>
										</div>
									</div>
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
