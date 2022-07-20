export function LogoIcon ({ color = 'url(#gradient)' }) {
    return (
        <svg viewBox="0 0 200 200" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gradient">
                    <stop stopColor="#4158D0" offset="0" />
                    <stop stopColor="#C850C0" offset="0.5" />
                    <stop stopColor="#FFCC70" offset="1" />
                </linearGradient>
            </defs>
            <path d="M 0, 97.5 C 0, 24.375 24.375, 0 97.5, 0 S 195, 24.375 195, 97.5 170.625, 195 97.5, 195 0, 170.625 0, 97.5"
                  fill={color}
                  transform="rotate(0,100,100) translate(2.5 2.5)"></path>
            <text x="40"
                  y="155"
                  fontSize="150px"
                  fontFamily="Verdana, sans-serif"
                  fill="white"
            >C</text>
        </svg>
    )
}
