'use client'
import { useState } from 'react';
import Image from "next/image";

export default function Home() {
	const images = [
		{ src: '/hips page/hips 1.svg', style: {position: 'absolute', }, alt: 'Image 1' },
		{ src: '/hips page/hips 2.svg', style: {position: 'absolute', }, alt: 'Image 2' },
		{ src: '/hips page/hips 3.svg', style: {position: 'absolute', }, alt: 'Image 3' },
	];

	const generatorImage = { src: '/generate button.svg', style: {position: 'absolute', }, alt: 'Click to go to next image' };

    const [currentIndex, setCurrentIndex] = useState(0);

    const showNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };


    return (
        <div className="flex flex-col items-center">
			<div className="flex flex-row justify-center">
				<Image
					src={images[currentIndex].src}
					alt={images[currentIndex].alt}
					width={0} 
					height={0}
					style={{width: "70%", height: "auto", zIndex: 10, paddingBottom: "15%"}}/>
			</div>

			<div>
				<Image
					src={generatorImage.src} 
					alt={generatorImage.alt}
					width={0} 
					height={0}
					style={{width: "13rem", height: "auto",}}
					className="rounded-full duration-300 hover:scale-125"
					onClick={showNextImage}/>
			</div>
		</div>
    );
}
