"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  MapPin,
  Settings,
  Lightbulb,
  Layers,
  Box,
  FileText,
  Search,
  CheckCircle,
  Globe,
  Building,
  Menu,
  X,
} from "lucide-react"

export default function DeseffWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const services = [
    { name: "Engineering Design Support", icon: Settings },
    { name: "NPD Planning", icon: Lightbulb },
    { name: "Catia Expertise", icon: Box },
    { name: "Advanced Surface Modelling", icon: Layers },
    { name: "3D and 2D", icon: Box },
    { name: "3D Print Sourcing", icon: Settings },
    { name: "Root Cause Analysis", icon: Search },
    { name: "GD&T Consultancy", icon: CheckCircle },
    { name: "Engineering Documentations", icon: FileText },
  ]

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Locations", href: "#locations" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "locations", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#d7de9f] text-[#546c44] font-sans">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#d7de9f]/95 backdrop-blur-sm border-b border-[#546c44]/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-[#546c44]">DESEFF</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors hover:text-[#3d4a2b] ${
                    activeSection === item.href.slice(1) ? "text-[#3d4a2b]" : "text-[#546c44]/80"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#546c44]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#546c44]/20">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-sm font-medium text-[#546c44]/80 hover:text-[#3d4a2b] transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d7de9f] via-[#c8d085] to-[#d7de9f]"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-6xl lg:text-8xl font-bold mb-6 tracking-tight">
                <span className="text-[#546c44]">DESEFF</span>
              </h1>
              <div className="h-1 w-24 bg-[#3d4a2b] mx-auto mb-8"></div>
              <p className="text-2xl lg:text-3xl text-[#546c44]/80 font-light mb-12 leading-relaxed">
                Mechanical Design &<br />
                Engineering Services
              </p>
            </div>

            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-[#546c44]/20 animate-slide-up">
              <h2 className="text-3xl font-semibold mb-6 text-[#3d4a2b]">Amrinder Singh Wadhwa</h2>
              <div className="flex flex-col lg:flex-row gap-8 justify-center items-center text-[#546c44]">
                <div className="flex items-center gap-3 group">
                  <div className="bg-[#546c44]/20 p-2 rounded-lg group-hover:bg-[#546c44]/30 transition-colors">
                    <Mail className="h-5 w-5 text-[#3d4a2b]" />
                  </div>
                  <span className="text-lg">amrinderwadhwa@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="bg-[#546c44]/20 p-2 rounded-lg group-hover:bg-[#546c44]/30 transition-colors">
                    <Phone className="h-5 w-5 text-[#3d4a2b]" />
                  </div>
                  <span className="text-lg">519-991-6355</span>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#546c44] hover:bg-[#3d4a2b] text-white px-12 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105"
              onClick={() => scrollToSection("#contact")}
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#c8d085]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#546c44]/20 text-[#3d4a2b] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                About DESEFF
              </div>
              <h2 className="text-5xl font-bold mb-8 text-[#546c44]">Engineering Excellence</h2>
              <div className="h-1 w-24 bg-[#3d4a2b] mx-auto mb-8"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-[#3d4a2b]">B.E, M.S – Mechanical Engineering</h3>
                  <p className="text-xl text-[#546c44]/90 leading-relaxed mb-8">
                    DESEFF delivers precision-driven mechanical design and engineering solutions, combining advanced
                    technical expertise with innovative problem-solving approaches to transform your concepts into
                    manufacturing-ready designs.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="bg-[#546c44]/20 p-2 rounded-lg group-hover:bg-[#546c44]/30 transition-colors mt-1">
                      <CheckCircle className="h-6 w-6 text-[#3d4a2b]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#546c44] mb-2">Advanced CAD Expertise</h4>
                      <p className="text-[#546c44]/80">
                        Specialized in CATIA and advanced surface modeling for complex engineering challenges
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-[#546c44]/20 p-2 rounded-lg group-hover:bg-[#546c44]/30 transition-colors mt-1">
                      <CheckCircle className="h-6 w-6 text-[#3d4a2b]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#546c44] mb-2">Comprehensive Documentation</h4>
                      <p className="text-[#546c44]/80">
                        Complete engineering documentation and GD&T consultancy for manufacturing precision
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-[#546c44]/20 p-2 rounded-lg group-hover:bg-[#546c44]/30 transition-colors mt-1">
                      <CheckCircle className="h-6 w-6 text-[#3d4a2b]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#546c44] mb-2">End-to-End Solutions</h4>
                      <p className="text-[#546c44]/80">
                        From concept development to production support, including 3D printing and prototyping
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-[#546c44]/20 to-[#3d4a2b]/10 rounded-2xl p-12 h-96 flex items-center justify-center border border-[#546c44]/20">
                  <Settings className="h-40 w-40 text-[#546c44]/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#d7de9f]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#546c44]/20 text-[#3d4a2b] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Services
              </div>
              <h2 className="text-5xl font-bold mb-8 text-[#546c44]">Comprehensive Engineering Solutions</h2>
              <div className="h-1 w-24 bg-[#3d4a2b] mx-auto mb-8"></div>
              <p className="text-xl text-[#546c44]/90 max-w-3xl mx-auto leading-relaxed">
                From initial concept to final production, we provide expert mechanical design and engineering services
                tailored to your specific requirements and industry standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card
                    key={index}
                    className="group bg-white/40 border-[#546c44]/20 hover:border-[#546c44]/50 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/60"
                  >
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="bg-[#546c44]/20 group-hover:bg-[#546c44]/30 rounded-xl p-4 transition-all duration-300">
                          <IconComponent className="h-8 w-8 text-[#3d4a2b]" />
                        </div>
                        <h3 className="font-bold text-[#546c44] group-hover:text-[#3d4a2b] transition-colors text-lg">
                          {service.name}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section id="locations" className="py-24 bg-[#c8d085]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#546c44]/20 text-[#3d4a2b] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Global Presence
              </div>
              <h2 className="text-5xl font-bold mb-8 text-[#546c44]">Office Locations</h2>
              <div className="h-1 w-24 bg-[#3d4a2b] mx-auto mb-8"></div>
              <p className="text-xl text-[#546c44]/90 leading-relaxed">
                Serving clients across North America and Asia with local expertise and global engineering standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/50 border-[#546c44]/20 hover:border-[#546c44]/50 transition-all duration-300 group hover:bg-white/70">
                <CardHeader className="bg-gradient-to-r from-[#546c44] to-[#3d4a2b] text-white rounded-t-lg">
                  <div className="flex items-center gap-3">
                    <Building className="h-6 w-6" />
                    <CardTitle className="text-xl">Canada Office</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#546c44]/20 p-2 rounded-lg group-hover:bg-[#546c44]/30 transition-colors mt-1">
                      <MapPin className="h-5 w-5 text-[#3d4a2b]" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-[#546c44] text-lg">11336 Timber Bay Cres</p>
                      <p className="text-[#546c44]/80">Windsor, N8R 2L3</p>
                      <p className="text-[#546c44]/80">Canada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/50 border-[#546c44]/20 hover:border-[#546c44]/50 transition-all duration-300 group hover:bg-white/70">
                <CardHeader className="bg-gradient-to-r from-[#3d4a2b] to-[#546c44] text-white rounded-t-lg">
                  <div className="flex items-center gap-3">
                    <Globe className="h-6 w-6" />
                    <CardTitle className="text-xl">India Office</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#546c44]/20 p-2 rounded-lg group-hover:bg-[#546c44]/30 transition-colors mt-1">
                      <MapPin className="h-5 w-5 text-[#3d4a2b]" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-[#546c44] text-lg">11-A Race Course</p>
                      <p className="text-[#546c44]/80">Preet Nagar, Patiala, 147001</p>
                      <p className="text-[#546c44]/80">India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-[#d7de9f]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#546c44]/20 text-[#3d4a2b] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Get In Touch
              </div>
              <h2 className="text-5xl font-bold mb-8 text-[#546c44]">Ready to Start Your Project?</h2>
              <div className="h-1 w-24 bg-[#3d4a2b] mx-auto mb-8"></div>
              <p className="text-xl text-[#546c44]/90 leading-relaxed">
                Contact us today to discuss your mechanical design and engineering requirements.
              </p>
            </div>

            <Card className="bg-white/50 border-[#546c44]/20 backdrop-blur-sm">
              <CardContent className="p-10">
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-[#546c44] font-semibold">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        className="bg-white/70 border-[#546c44]/30 text-[#546c44] placeholder:text-[#546c44]/60 focus:border-[#3d4a2b] h-12"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-[#546c44] font-semibold">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-white/70 border-[#546c44]/30 text-[#546c44] placeholder:text-[#546c44]/60 focus:border-[#3d4a2b] h-12"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-[#546c44] font-semibold">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                      rows={6}
                      className="bg-white/70 border-[#546c44]/30 text-[#546c44] placeholder:text-[#546c44]/60 focus:border-[#3d4a2b] resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#546c44] hover:bg-[#3d4a2b] text-white font-semibold py-4 text-lg transition-all hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#c8d085] text-[#546c44] py-16 border-t border-[#546c44]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 text-[#3d4a2b]">DESEFF</h3>
            <p className="text-[#546c44]/80 mb-8 text-lg">Mechanical Design & Engineering Services</p>
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center text-[#546c44] mb-8">
              <div className="flex items-center gap-3 group">
                <div className="bg-[#546c44]/20 p-2 rounded-lg group-hover:bg-[#546c44]/30 transition-colors">
                  <Mail className="h-5 w-5 text-[#3d4a2b]" />
                </div>
                <span>amrinderwadhwa@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-[#546c44]/20 p-2 rounded-lg group-hover:bg-[#546c44]/30 transition-colors">
                  <Phone className="h-5 w-5 text-[#3d4a2b]" />
                </div>
                <span>519-991-6355</span>
              </div>
            </div>
            <div className="pt-8 border-t border-[#546c44]/20">
              <p className="text-[#546c44]/70">© {new Date().getFullYear()} DESEFF. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
