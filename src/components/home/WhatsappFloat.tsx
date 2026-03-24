"use client";

import Link from "next/link";

export default function WhatsAppFloat() {
	return (
		<div className="fixed bottom-6 right-6 z-50 group">
			{/* Soft Glow */}
			<span className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-40 animate-pulse"></span>

			{/* Subtle Ring */}
			<span className="absolute inset-0 rounded-full border-2 border-green-400 opacity-60 animate-[ping_2s_infinite]"></span>

			{/* Button */}
			<Link
				href="https://wa.me/918919624323" // replace your number
				target="_blank"
				className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
				{/* WhatsApp SVG Icon */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 32 32"
					className="w-7 h-7 fill-white">
					<path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.887.76 5.703 2.2 8.182L0 32l7.638-2.17A15.93 15.93 0 0 0 16 32c8.836 0 16-7.164 16-16.004C32 7.56 24.836.396 16 .396zm0 29.14a13.1 13.1 0 0 1-6.68-1.83l-.478-.28-4.532 1.288 1.21-4.42-.312-.457a13.14 13.14 0 1 1 10.792 5.699zm7.234-9.772c-.396-.198-2.346-1.157-2.71-1.288-.364-.132-.63-.198-.896.198s-1.028 1.288-1.26 1.554c-.232.264-.462.297-.858.099-.396-.198-1.674-.617-3.188-1.967-1.178-1.05-1.973-2.346-2.205-2.742-.232-.396-.025-.61.173-.807.178-.177.396-.462.594-.693.198-.231.264-.396.396-.66.132-.264.066-.495-.033-.693-.099-.198-.896-2.16-1.228-2.958-.322-.774-.65-.669-.896-.681l-.765-.013c-.264 0-.693.099-1.056.495-.363.396-1.386 1.356-1.386 3.305 0 1.95 1.42 3.833 1.617 4.099.198.264 2.793 4.266 6.768 5.977.946.407 1.683.65 2.259.832.949.302 1.813.259 2.496.157.761-.114 2.346-.958 2.678-1.883.33-.925.33-1.719.231-1.883-.099-.165-.363-.264-.759-.462z" />
				</svg>
			</Link>
		</div>
	);
}
