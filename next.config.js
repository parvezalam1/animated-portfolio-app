/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    images: {
        loader:"custom",
        // loaderFile:"./loader.js",
        remotePatterns: [
            {

                protocol: "https",
                hostname: "img-c.udemycdn.com",
            },
            {

                protocol: "https",
                hostname:"encrypted-tbn0.gstatic.com"
            },
            {

                protocol: "https",
                hostname: "img1.daumcdn.net",
            },
            {

                protocol: "https",
                hostname: "images.prismic.io",
            },
          
        ]
    }
}

module.exports = nextConfig
