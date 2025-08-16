'use client'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface props {
    href: string;
}

const links = [
    { name: "MPower", link: "/portfolio-mpower" },
    { name: "Spotify", link: "/portfolio-spotify" },
    { name: "Braith", link: "/portfolio-braith" }
]

export default function HeaderPortfolio({ href }: props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="absolute inset-x-0 top-0 z-50 text-white">
            <nav aria-label="Global" className="flex items-center p-6 lg:px-8">
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="flex flex-1 justify-center lg:gap-x-12">
                    <Link
                        href={href}
                        className="text-sm/6 font-semibold"
                    >Home</Link>
                    {links.map(link => <Link
                        key={uuidv4()}
                        href={link.link}
                        className="text-sm/6 font-semibold"
                    >{link.name}</Link>)}
                </div>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    href={href}
                                    className="text-sm/6 font-semibold"
                                >Home</Link>
                                {links.map(link => <Link
                                    key={uuidv4()}
                                    href={link.link}
                                    className="text-sm/6 font-semibold"
                                >{link.name}</Link>)}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}