import React from 'react'
import { Badge } from './ui/badge'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from "next/image";

const HereSection = () => {
    return (
        <section className="relative overflow-hidden py-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <Badge
                            variant="outline"
                            className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium"
                        >
                            Your health, simplified.
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Your health, just a click away!<br />

                            <span className="gradient-title">anytime, anywhere</span>
                        </h1>
                        <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                            Your complete healthcare journey—appointments, video consultations, and records—handled in one trusted platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-emerald-600 text-white hover:bg-emerald-700"
                            >
                                <Link href="/onboarding">
                                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-emerald-700/30 hover:bg-muted/80"
                            >
                                <Link href="/doctors">Find Doctors</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="relative h-[400px] lg:h-[500px] rounded-xl">
                        <Image
                            src="/banner2.png"
                            alt="Doctor consultation"
                            fill
                            priority
                            className="object-cover md:pt-10 rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HereSection