export default function InfoCard({
    icon: Icon,
    step,
    title,
    description,
    index = 0,
    animate = true,
    withOverlay = true,
    iconContainerStyle = 'w-20 h-20',
}) {
    return (
        <div
            className={`group text-center z-50 cursor-pointer ${
                animate
                    ? 'animate-in slide-in-from-bottom duration-1000'
                    : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 150}ms` }}>
            <div className="relative  mb-6">
                <div
                    className={` bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 ${iconContainerStyle} `}>
                    <Icon className="h-8 w-8 text-white" />
                </div>

                {step !== undefined && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 border-2 border-[#00BBB1] rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-[#00BBB1]">
                            {step}
                        </span>
                    </div>
                )}

                {withOverlay && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                )}
            </div>

            <h3 className="heading-3 text-white mb-4 group-hover:text-[#00BBB1] transition-colors duration-300">
                {title}
            </h3>

            <p className="content-3 text-gray-400">{description}</p>
        </div>
    );
}
