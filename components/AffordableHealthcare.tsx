import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { creditBenefits, features } from '@/lib/data'
import { Badge } from './ui/badge'
import { Stethoscope } from 'lucide-react'
import Pricing from './Pricing'


const Prices = () => {
    return (
        <section className="py-20 " id='pricing'>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge
                        variant="outline"
                        className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4"
                    >
                        Affordable Healthcare
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Consultation Packages
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Choose the perfect consultation package tailored to your health needs.
                    </p>
                </div>

                <div className="mx-auto">
                    < Pricing />

                    {/* Description */}
                    <Card className="mt-12 bg-muted/20 border-emerald-900/30">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-white flex items-center">
                                <Stethoscope className="h-5 w-5 mr-2 text-emerald-400" />
                                How Our Credit System Works
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {creditBenefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="mr-3 mt-1 bg-emerald-900/20 p-1 rounded-full">
                                            <svg
                                                className="h-4 w-4 text-emerald-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                ></path>
                                            </svg>
                                        </div>
                                        <p
                                            className="text-muted-foreground"
                                            dangerouslySetInnerHTML={{ __html: benefit }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Prices