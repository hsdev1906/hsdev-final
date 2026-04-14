"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="relative isolate overflow-hidden bg-[#030712] pt-32 pb-24 md:pt-40 md:pb-36">
			{/* ===== Background: Animated SVG Globe ===== */}
			<div className="pointer-events-none absolute left-1/2 top-24 -z-0 -translate-x-1/2 sm:top-12">
				<AnimatedGlobe size={560} className="opacity-80" />
			</div>

			{/* ===== Background: Tech wave grid ===== */}
			<motion.div
				aria-hidden
				className="absolute inset-0 opacity-[0.12]"
				initial={{ backgroundPosition: "0% 0%" }}
				animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }}
				transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
				style={{
					backgroundImage:
						"repeating-linear-gradient( to bottom, rgba(3,101,208,0.35) 0px, rgba(3,101,208,0.35) 1px, transparent 1px, transparent 28px ), repeating-linear-gradient( to right, rgba(3,101,208,0.28) 0px, rgba(3,101,208,0.28) 1px, transparent 1px, transparent 28px )",
					maskImage:
						"radial-gradient(1200px 600px at 50% 40%, rgba(0,0,0,0.9), transparent 70%)",
					WebkitMaskImage:
						"radial-gradient(1200px 600px at 50% 40%, rgba(0,0,0,0.9), transparent 70%)",
				}}
			/>

			{/* ===== Soft gradient glows ===== */}
			<motion.div
				aria-hidden
				className="pointer-events-none absolute -top-40 -right-24 h-[42rem] w-[42rem] rounded-full"
				initial={{ rotate: 0 }}
				animate={{ rotate: 360 }}
				transition={{ duration: 80, ease: "linear", repeat: Infinity }}
				style={{
					background:
						"radial-gradient(closest-side, rgba(3,101,208,0.35), transparent 60%), radial-gradient(closest-side, rgba(14,60,110,0.25), transparent 60%)",
					boxShadow: "0 0 120px rgba(3,101,208,0.25)",
				}}
			/>

			<motion.div
				aria-hidden
				className="pointer-events-none absolute -bottom-32 -left-24 h-[36rem] w-[36rem] rounded-full"
				initial={{ rotate: 0 }}
				animate={{ rotate: -360 }}
				transition={{ duration: 90, ease: "linear", repeat: Infinity }}
				style={{
					background:
						"radial-gradient(closest-side, rgba(14,60,110,0.35), transparent 60%), radial-gradient(closest-side, rgba(3,101,208,0.2), transparent 60%)",
					boxShadow: "0 0 120px rgba(14,60,110,0.25)",
				}}
			/>

			{/* ===== Content ===== */}
			<div className="relative z-10 mx-auto max-w-7xl px-6">
				<div className="mx-auto max-w-3xl text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/80 backdrop-blur">
						{/* <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#0365D0] to-[#0E3C6E]" />
						VR Tech Foz • Division of The VR Group */}
					</div>

					<h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
						<span className="bg-[#00A0E3]  bg-clip-text text-transparent">
							Technology
						</span>{" "}
						That Scales With Your Vision.
					</h1>

					<p className="mx-auto mt-5 max-w-2xl text-base text-white/75 md:text-lg">
						We design AI-powered, cloud-native software that scales with your
						vision. From concept to launch — secure, fast, and future-ready.
					</p>

					<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<Link
							href="/contact"
							className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#0365D0] to-[#0E3C6E] px-5 py-3 text-sm font-medium text-white shadow-[0_0_18px_rgba(3,101,208,0.45)] hover:shadow-[0_0_30px_rgba(3,101,208,0.65)] transition">
							Get a Free Consultation
						</Link>

						<Link
							href="/services"
							className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition">
							View Our Services
						</Link>
					</div>
				</div>
			</div>

			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#030712]" />
		</section>
	);
}

/* ================= Animated Globe ================= */

function AnimatedGlobe({ size = 520, className = "" }) {
	const rings = new Array(6).fill(0).map((_, i) => i);

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 200 200"
			className={className}
			style={{ filter: "drop-shadow(0 0 24px rgba(3,101,208,0.5))" }}>
			<defs>
				<radialGradient id="glow" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stopColor="rgba(3,101,208,0.25)" />
					<stop offset="100%" stopColor="rgba(14,60,110,0.08)" />
				</radialGradient>

				<linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="#0365D0" />
					<stop offset="100%" stopColor="#0E3C6E" />
				</linearGradient>
			</defs>

			<circle cx="100" cy="100" r="80" fill="url(#glow)" />
			<circle
				cx="100"
				cy="100"
				r="80"
				fill="none"
				stroke="url(#line)"
				strokeOpacity="0.4"
			/>

			{rings.map((r) => (
				<AnimatedRing
					key={`lat-${r}`}
					cx={100}
					cy={100}
					rx={80}
					ry={80 - r * 10}
					rotate={0}
				/>
			))}

			{rings.map((r) => (
				<AnimatedRing
					key={`lon-${r}`}
					cx={100}
					cy={100}
					rx={80}
					ry={80}
					rotate={r * 15}
				/>
			))}
		</svg>
	);
}

function AnimatedRing({
	cx,
	cy,
	rx,
	ry,
	rotate = 0,
}: {
	cx: number;
	cy: number;
	rx: number;
	ry: number;
	rotate?: number;
}) {
	return (
		<motion.ellipse
			cx={cx}
			cy={cy}
			rx={rx}
			ry={ry}
			transform={`rotate(${rotate} ${cx} ${cy})`}
			stroke="url(#line)"
			strokeWidth={0.8}
			strokeOpacity={0.85}
			fill="none"
			style={{ strokeDasharray: 6, strokeLinecap: "round" }}
			initial={{ strokeDashoffset: 0 }}
			animate={{ strokeDashoffset: -24 }}
			transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
		/>
	);
}
