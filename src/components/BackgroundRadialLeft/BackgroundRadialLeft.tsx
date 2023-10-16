import Image from "next/image";

export function BackgroundRadialLeft() {
    return (
        <div className="left-0 absolute -z-50 top-0">
            <Image src="/assets/background-floated-left.png" width={850} height={650} alt="Circle Left" />
        </div>
    )
}
