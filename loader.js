'use client'
 
export default function myImageLoader({ src, width, quality }) {
    if(src.startsWith("https://img-c.udemycdn.com") || src.startsWith("https://encrypted-tbn0.gstatic.com") || 
    src.startsWith("https://img1.daumcdn.net") || src.startsWith("https://images.prismic.io")) return src
  return `https://animated-portfolio-app.vercel.app/${src}?w=${width}&q=${quality || 75}`
}