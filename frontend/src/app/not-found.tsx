import GradientButton from "@/components/common/LogoColorButton"
import BackgroundSVG from "../../public/404-BG.svg"

export default function NotFound(){
    const backgroundStyle = {
        backgroundImage: `url(${BackgroundSVG.src})`,
    };
    return(
        <div style={backgroundStyle} className="flex flex-col items-center justify-center min-h-screen gap-4 bg-cover bg-no-repeat bg-center">
            <h1 className="text-4xl font-bold font-['Calibri']">404 - Page Not Found</h1>
            <p className="text-lg">The page you&apos;re looking for doesn&apos;t exist.</p>
            <GradientButton text="Return Home" href="/"/>  
        </div>
    )
}