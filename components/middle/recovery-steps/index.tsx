import React from 'react'

const steps = [
    {
        number: "01",
        icon: "bi-headset",
        title: "Contact Recover Crypto",
        description: "Get in touch with our expert team",
        color: "text-blue-500",
        bg: "bg-blue-100"
    },
    {
        number: "02",
        icon: "bi-shield-check",
        title: "Confirm Transaction Details",
        description: "Verify and validate your case",
        color: "text-purple-500",
        bg: "bg-purple-100"
    },
    {
        number: "03",
        icon: "bi-search",
        title: "We Start Tracking",
        description: "Advanced blockchain analysis begins",
        color: "text-amber-500",
        bg: "bg-amber-100"
    },
    {
        number: "04",
        icon: "bi-coin",
        title: "Your Crypto Recovered",
        description: "Successful fund recovery",
        color: "text-green-500",
        bg: "bg-green-100"
    }
]

export default function RecoverySteps() {
    return (
        <div className="bg-colorWhite dark:bg-colorPrimary_DM rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Recovery Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                    <div key={index} className="relative">
                        {/* Connector Line */}
                        {index < steps.length - 1 && (
                            <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 z-0"></div>
                        )}
                        
                        {/* Step Card */}
                        <div className="relative bg-colorWhite dark:bg-colorWhite_DM rounded-2xl p-6 transition-all duration-300 hover:shadow-lg z-10">
                            {/* Step Number */}
                            <div className="absolute -top-4 right-6 text-4xl font-bold opacity-10">
                                {step.number}
                            </div>
                            
                            {/* Icon */}
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${step.bg} mb-4`}>
                                <i className={`bi ${step.icon} text-xl ${step.color}`}></i>
                            </div>
                            
                            {/* Content */}
                            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
