import React from 'react'

const steps = [
    {
        title: "Contact Recover Crypto",
        icon: "bi-headset",
        status: "Active",
        color: "text-blue-500",
        bg: "bg-blue-100"
    },
    {
        title: "Transaction Details",
        icon: "bi-shield-check",
        status: "Pending",
        color: "text-purple-500",
        bg: "bg-purple-100"
    },
    {
        title: "We Start Tracking",
        icon: "bi-search",
        status: "Pending",
        color: "text-amber-500",
        bg: "bg-amber-100"
    },
    {
        title: "Your Crypto Recovered",
        icon: "bi-coin",
        status: "Pending",
        color: "text-green-500",
        bg: "bg-green-100"
    }
]

export default function RecoverySteps() {
    return (
        <div className="bg-[#18191B] rounded-3xl mb-6 shadow-lg">
            <div className="p-6 pb-2">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-pulse">Recovery Process</h3>
            </div>

            {steps.map((step, index) => (
                <div key={index} 
                    className="flex justify-between items-center p-6 border-b border-gray-800 transition-all duration-300 ease-out last:border-b-0 hover:bg-gray-900 cursor-pointer group">
                    <div className="flex items-center gap-4">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-900 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)]`}>
                            <i className={`bi ${step.icon} text-xl ${step.color} group-hover:animate-pulse drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]`}></i>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-semibold text-lg text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 transition-all duration-300">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">
                                {step.description}
                            </p>
                        </div>
                    </div>
                    <div className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        step.status === 'Active' 
                            ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                            : 'bg-gray-800/50 text-gray-400 group-hover:bg-gray-700/50'
                    }`}>
                        {step.status}
                    </div>
                </div>
            ))}
        </div>
    )
}
