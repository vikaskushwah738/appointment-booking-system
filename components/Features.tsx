import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { features } from '@/lib/data'


const Features = () => {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        How It Works
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Healthcare made accessible—anytime, in just a few taps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="bg-card border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300"
                        >
                            <CardHeader className="pb-2">
                                <div className="bg-emerald-900/20 p-3 rounded-lg w-fit mb-4">
                                    <feature.icon className="h-6 w-6 text-emerald-400" />
                                </div>
                                <CardTitle className="text-xl font-semibold text-white">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features