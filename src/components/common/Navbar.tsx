"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

type NavLink = { label: string; href: string };

export default function Navbar() {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [progress, setProgress] = useState(0);

	const links: NavLink[] = useMemo(
		() => [
			{ label: "Home", href: "/" },
			{ label: "About", href: "/about" },
			{ label: "Services", href: "/services" },
			{ label: "Careers", href: "/careers" },
			{ label: "Contact", href: "/contact" },
		],
		[],
	);

	useEffect(() => {
		const onScroll = () => {
			const y = window.scrollY;
			setScrolled(y > 10);

			const doc = document.documentElement;
			const max = doc.scrollHeight - doc.clientHeight;
			const pct = max > 0 ? (y / max) * 100 : 0;
			setProgress(pct);
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const isActive = (href: string) => {
		if (href === "/") return pathname === "/";
		return pathname?.startsWith(href);
	};

	return (
		<header className="fixed top-3 left-0 w-full z-50">
			{/* Scroll Progress */}
			<div className="absolute top-0 left-0 h-[2px] w-full">
				<div
					className="h-full bg-gradient-to-r from-[#0E3C6E] to-[#0365D0] transition-all duration-200"
					style={{ width: `${progress}%` }}
				/>
			</div>

			<div className="mx-auto max-w-6xl px-4">
				<div
					className={`flex items-center justify-between rounded-2xl px-5 py-2 transition-all duration-300 ${
						scrolled
							? "bg-white/30 backdrop-blur-md border border-white/20 shadow-md"
							: "bg-white shadow-sm border border-slate-200"
					}`}>
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2">
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1774331703/HS_Dev_no_bg_HD_ybq7wy.png"
							alt="HS Dev Logo"
							width={115}
							height={32}
							className="object-contain"
						/>
					</Link>

					{/* Desktop Nav */}
					<nav className="hidden md:flex items-center gap-5">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`relative px-2 py-1 text-sm font-medium transition duration-300 ${
									isActive(link.href)
										? "text-[#0E3C6E]"
										: "text-slate-700 hover:text-[#0365D0]"
								} group`}>
								{link.label}

								<span
									className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#0E3C6E] to-[#0365D0] transition-all duration-300 ${
										isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
									}`}
								/>
							</Link>
						))}
					</nav>

					{/* CTA + Mobile */}
					<div className="flex items-center gap-2">
						<Link
							href="/contact"
							className="hidden md:inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#0E3C6E] to-[#0365D0] px-3.5 py-1.5 text-sm font-semibold text-white shadow hover:shadow-md hover:scale-[1.03] transition-all duration-300">
							Get a Quote
						</Link>

						<button
							className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
							onClick={() => setMenuOpen((v) => !v)}
							aria-label="Toggle menu">
							{menuOpen ? <X size={16} /> : <Menu size={16} />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{menuOpen && (
					<div className="md:hidden mt-2 rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden">
						<div className="flex flex-col p-3">
							{links.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => setMenuOpen(false)}
									className={`rounded-md px-3 py-2 text-sm font-medium transition ${
										isActive(link.href)
											? "bg-slate-100 text-[#0E3C6E]"
											: "text-slate-600 hover:bg-slate-100 hover:text-[#0365D0]"
									}`}>
									{link.label}
								</Link>
							))}

							<Link
								href="/contact"
								onClick={() => setMenuOpen(false)}
								className="mt-2 text-center rounded-md bg-gradient-to-r from-[#0E3C6E] to-[#0365D0] px-4 py-2 text-sm font-semibold text-white">
								Get a Quote
							</Link>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
