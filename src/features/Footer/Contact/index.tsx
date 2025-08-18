"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Send, ArrowRight } from "lucide-react"

export default function Contact() {
    const [formData, setFormData] = useState({
        nom: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Handle form submission here
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold font-clashdisplay bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
                    Contactez-nous
                </h2>
                <p className="text-gray-300 text-lg font-DM_Sans">
                    Prêt à transformer votre présence digitale ? Parlons de votre projet !
                </p>
            </div>

            <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-white mb-1">Adresse</h3>
                        <p className="text-gray-300">Avédjii, Lomé – TG</p>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-white mb-1">Téléphone</h3>
                        <a href="tel:+22897999943" className="text-gray-300 hover:text-orange-400 transition-colors">
                            +228 97 99 99 43
                        </a>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-white mb-1">Email</h3>
                        <a
                            href="mailto:contact@jaxe-tech.com"
                            className="text-gray-300 hover:text-orange-400 transition-colors"
                        >
                            contact@jaxe-tech.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
