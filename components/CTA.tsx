import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import Link from 'next/link'

const CTA = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <Card className="bg-gradient-to-r from-emerald-900/30 to-emerald-950/20 border-emerald-800/20">
                    <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
                        <div className=" relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Your health deserves attention—without the stress.
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Join thousands who use our platform to connect with doctors and manage care on their terms. It starts with one click.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-emerald-600 text-white hover:bg-emerald-700"
                                >
                                    <Link href="/sign-up">Sign Up Now</Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-emerald-700/30 hover:bg-muted/80"
                                >
                                    <Link href="#pricing">View Pricing</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Decorative healthcare elements */}
                        <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-emerald-800/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        <div className="absolute left-0 bottom-0 w-[200px] h-[200px] bg-emerald-700/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default CTA