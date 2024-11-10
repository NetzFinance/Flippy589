import React, { useState, useEffect } from 'react';

const memes = [
	"/memes/meme-22.gif",
	"/memes/meme-3.jpg",
	"/memes/meme-23.gif",
	"/memes/meme-4.jpg",
	"/memes/meme-35.jpg",
	"/memes/meme-6.jpg",
	"/memes/meme-42.jpg",
	"/memes/meme-30.gif",
	"/memes/meme-9.jpg",
	"/memes/meme-7.jpg",
	// split
	"/memes/meme-45.jpg",
	"/memes/meme-2.gif",
	"/memes/meme-32.jpg",
	"/memes/meme-10.jpg",
	"/memes/meme-13.jpg",
	"/memes/meme-15.jpg",
	"/memes/meme-16.jpg",
	"/memes/meme-34.jpg",
	"/memes/meme-17.jpg",
	"/memes/meme-18.jpg",
	"/memes/meme-19.jpg",
	"/memes/meme-33.jpg",
	"/memes/meme-12.jpg",
	// split
	"/memes/meme-5.jpg",
	"/memes/meme-28.gif",
	"/memes/meme-25.jpg",
	"/memes/meme-26.gif",
	"/memes/meme-14.jpg",
	"/memes/meme-40.jpg",
	"/memes/meme-27.gif",
	"/memes/meme-8.jpg",
	"/memes/meme-29.gif",
	"/memes/meme-24.jpg",
	// split
	"/memes/meme-21.gif",
	"/memes/meme-11.jpg",
	"/memes/meme-44.jpg",
	"/memes/meme-36.jpg",
	"/memes/meme-37.jpg",
	"/memes/meme-31.jpg",
	"/memes/meme-1.jpg",
	"/memes/meme-41.jpg",
	"/memes/meme-43.jpg",
	"/memes/meme-20.jpg",
]

export const MemeSection = () => {
	
  return (
		<div class="masonry-container">
			{
				memes.map(meme => {
					return(
						<div class="masonry-item">
							<img src={meme} />
						</div>
					)
				})
			}
		</div>
  )
}

