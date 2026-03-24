"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="relative overflow-hidden border-t border-white/10 bg-[#0B1220] text-white">
			{/* Subtle Brand Glow Background */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#0365D0]/20 blur-3xl" />
				<div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#00A0E3]/20 blur-3xl" />
			</div>

			<div className="relative mx-auto max-w-7xl px-6 py-14">
				{/* Top Row */}
				<div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-3">
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1774331703/HS_Dev_no_bg_HD_ybq7wy.png"
							alt="HS Dev Logo"
							width={140}
							height={35}
							className="brightness-160"
						/>
					</Link>

					{/* Contact & Social */}
					<nav className="flex flex-wrap items-center gap-4 text-sm">
						<a
							href="mailto:info@vrtechforz.com"
							className="rounded-md px-3 py-1 text-white/80 hover:text-white hover:bg-white/10 transition">
							info@vrtechforz.com
						</a>

						<span className="hidden h-4 w-px bg-white/20 md:block" />

						<SocialLink
							href="https://www.linkedin.com/"
							ariaLabel="HS Dev on LinkedIn"
							label="LinkedIn">
							<LinkedInIcon className="h-4 w-4 text-[#00A0E3]" />
							<span className="ml-1.5">LinkedIn</span>
						</SocialLink>

						<SocialLink
							href="https://twitter.com/"
							ariaLabel="HS Dev on Twitter/X"
							label="Twitter">
							<XIcon className="h-4 w-4 text-[#0365D0]" />
							<span className="ml-1.5">Twitter</span>
						</SocialLink>
					</nav>
				</div>

				{/* Divider */}
				<div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-[#0365D0]/40 to-transparent" />

				{/* Bottom */}
				<div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-white/60 md:flex-row md:items-center">
					<p>© {new Date().getFullYear()} HS Dev · Division of The VR Group</p>

					<p>
						Trusted systems.{" "}
						<span className="bg-gradient-to-r from-[#00A0E3] to-[#0365D0] bg-clip-text text-transparent font-medium">
							Built for scale.
						</span>
					</p>
				</div>
			</div>
		</footer>
	);
}

/* ---------- Helpers ---------- */

function SocialLink({
	href,
	ariaLabel,
	children,
	label,
}: {
	href: string;
	ariaLabel: string;
	children: React.ReactNode;
	label: string;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={ariaLabel}
			className="inline-flex items-center rounded-md px-3 py-1 text-white/80 hover:text-white hover:bg-white/10 transition"
			title={label}>
			{children}
		</a>
	);
}

/* ---------- Icons ---------- */

function LinkedInIcon({ className = "" }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" className={className} aria-hidden="true">
			<path
				d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8.5h4.9V24H.5V8.5Zm7.6 0h4.7v2.1h.1c.6-1.1 2-2.3 4.2-2.3 4.5 0 5.3 3 5.3 6.9V24h-4.9v-6.6c0-1.6 0-3.7-2.3-3.7-2.3 0-2.6 1.8-2.6 3.6V24H8.1V8.5Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function XIcon({ className = "" }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" className={className} aria-hidden="true">
			<path
				d="M18.2 2H21l-6.4 7.3L22 22h-6.8l-4.6-6-5.3 6H2.4l6.9-7.8L2 2h6.9l4.2 5.5L18.2 2Zm-2.4 18h1.8L8.4 4H6.5l9.3 16Z"
				fill="currentColor"
			/>
		</svg>
	);
}
