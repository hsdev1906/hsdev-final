"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos: string[] = [
	"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1770361958/VR_KP_Logo_zgv7j5.png",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1752675634/VR_KISAN_PARIVAAR-04_1_rbcvyz.png",
	"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1771917357/ULHC_Logo_-_PNG_yjb2jy.png",
	"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1767159149/vr_greentek_enegrgy_orange_bold_zzwnkq.png",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1758015372/3_rua9gv.png",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1752936899/4_bgqtwl.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1752936895/3_r2tlqy.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1752936892/1_teiasc.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744796359/Logos_For_We_Work_t24ef3.png",
];

export default function LogoCarousel() {
	const duplicatedLogos = [...logos, ...logos];

	return (
		<section className="relative overflow-hidden bg-white py-16 md:py-24">
			<div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
				{/* Heading */}
				<h2 className="text-2xl font-semibold text-[#0E3C6E] sm:text-3xl md:text-4xl">
					Trusted By{" "}
					<span className="bg-gradient-to-r from-[#0365D0] to-[#0E3C6E] bg-clip-text text-transparent">
						Leading Organizations
					</span>
				</h2>

				{/* Marquee */}
				<div className="relative mt-12 overflow-hidden md:mt-16">
					<motion.div
						className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20"
						animate={{ x: ["0%", "-50%"] }}
						transition={{
							repeat: Infinity,
							duration: 28,
							ease: "linear",
						}}>
						{duplicatedLogos.map((logo, index) => (
							<LogoItem key={index} src={logo} />
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}

/* ================= Logo Item ================= */

function LogoItem({ src }: { src: string }) {
	return (
		<motion.div
			whileHover={{ y: -6 }}
			transition={{ type: "spring", stiffness: 200, damping: 18 }}
			className="flex items-center justify-center">
			<div
				className="
				flex items-center justify-center
				h-16 w-32
				sm:h-20 sm:w-40
				md:h-24 md:w-48
				p-4 sm:p-5
				rounded-xl
				bg-white
				border border-slate-200
				shadow-sm
				transition-all duration-300
				hover:shadow-lg
				hover:border-[#0365D0]/30
			">
				<Image
					src={src}
					alt="Client Logo"
					width={120}
					height={60}
					className="mx-auto max-h-[40px] w-auto object-contain sm:max-h-[50px] md:max-h-[60px]"
				/>
			</div>
		</motion.div>
	);
}
