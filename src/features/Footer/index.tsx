"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Send, ArrowRight } from "lucide-react"
import Form from "./Form"
import Contact from "./Contact"

export default function Footer() {
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
        <section id="contact" className="relative scroll-mt-[30px] text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="relative max-w-[1228px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Information */}
                    <Contact />

                    {/* Contact Form */}
                    <Form />
                </div>

                {/* Bottom Section */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">JT</span>
                            </div>
                            <span className="text-white font-bold font-clashdisplay">JAXE TECH</span>
                        </div>
                        <p className="text-gray-400 text-sm">© 2024 JAXE TECH. Tous droits réservés.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
