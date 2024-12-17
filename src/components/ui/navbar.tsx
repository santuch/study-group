"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Home, Book, Bell, LogOut } from "lucide-react";
export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-background text-foreground shadow-md px-6 py-4 flex justify-between items-center transition-colors">
            <div className="flex items-center space-x-4">
                <Link href="/" className="text-2xl font-bold">
                    <span className="text-primary">Study</span>Hub
                </Link>
            </div>

            <div className="flex items-center space-x-6">
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link
                            href="/"
                            className="hover:text-primary flex items-center"
                        >
                            <Home className="inline-block mr-1" /> Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/groups"
                            className="hover:text-primary flex items-center"
                        >
                            <Book className="inline-block mr-1" /> Study Groups
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/notifications"
                            className="hover:text-primary flex items-center"
                        >
                            <Bell className="inline-block mr-1" /> Notifications
                        </Link>
                    </li>
                </ul>

                <div className="flex items-center space-x-4">
                    <Button
                        variant="outline"
                        className="flex items-center space-x-2 bg-primary text-primary-foreground hover:bg-primary/90"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <User className="h-5 w-5" />
                        <span className="hidden md:inline font-medium">
                            Profile
                        </span>
                    </Button>
                    {isMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-card text-card-foreground shadow-lg rounded-md border">
                            <Link
                                href="/profile"
                                className="block px-4 py-2 hover:bg-accent"
                            >
                                My Profile
                            </Link>
                            <button
                                className="w-full text-left px-4 py-2 text-red-600 hover:bg-destructive/10"
                                onClick={() => alert("Logging out...")}
                            >
                                <LogOut className="inline-block mr-2" /> Log Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
