import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	// { name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
  ];
  

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black to-blue-800">
			<nav className="my-16 animate-fade-in">
				<ul className="flex flex-wrap items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-transparent bg-white bg-clip-text hover:text-transparent hover:bg-white"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={200}
				staticity={30}
				ease={20}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				~/vivek
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-transparent bg-white bg-clip-text mx-6">
					Hi, I'm Vivek, automating networks and infrastructure at
					{" "}
					<Link
						target="_blank"
						href="https://www.resibridge.com/about-us"
						className="underline duration-500 text-transparent bg-white bg-clip-text hover:text-transparent hover:bg-white"
					>
						ResiBridge
					</Link>

					
					<wbr /> when the sun's up, and diving into code adventures on GitHub when the stars take over.{" "}
					<Link
						target="_blank"
						href="https://github.com/vivek-dodia"
						className="underline duration-500 text-transparent bg-white bg-clip-text hover:text-transparent hover:bg-white"
					>
						Git
					</Link>{" "}
					at night.
				</h2>
			</div>
		</div>
	);
}