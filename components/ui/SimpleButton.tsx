import React from 'react'

const SimpleButton = ({
    title, icon, position, handleClick, otherClasses }: {
        title: string; icon: React.ReactNode, position: string;
        handleClick?: () => void; otherClasses?: string;
    }
) => {
    return (
        <button
            className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none
           "
            onClick={handleClick}
        >


            {/* remove px-3 py-1, add px-5 gap-2 */}
            <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md
                 bg-blue-950 hover:text-pink-400 px-7 text-base font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
            >
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>
    );
}

export default SimpleButton