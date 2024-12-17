"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Bell, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const mockUser = {
    name: "John Doe",
    interests: ["Math", "Programming", "AI"],
};

const mockStudyGroups = [
    {
        id: 1,
        name: "Advanced Calculus",
        description: "Deep dive into multivariable calculus",
        tags: ["Math", "Advanced"],
    },
    {
        id: 2,
        name: "Machine Learning Basics",
        description: "Introduction to ML algorithms",
        tags: ["AI", "Programming"],
    },
    {
        id: 3,
        name: "Web Development Workshop",
        description: "Building modern web apps",
        tags: ["Programming", "Web"],
    },
    {
        id: 4,
        name: "Data Structures & Algorithms",
        description: "Preparing for coding interviews",
        tags: ["Programming", "Computer Science"],
    },
];

const mockSessions = [
    {
        id: 1,
        groupName: "Advanced Calculus",
        date: new Date(2023, 5, 15, 14, 0),
        status: "upcoming",
    },
    {
        id: 2,
        groupName: "Machine Learning Basics",
        date: new Date(2023, 5, 16, 10, 0),
        status: "active",
    },
    {
        id: 3,
        groupName: "Web Development Workshop",
        date: new Date(2023, 5, 17, 15, 30),
        status: "upcoming",
    },
];

const mockNotifications = [
    {
        id: 1,
        message: "You've been invited to join 'Python for Data Science'",
        read: false,
    },
    {
        id: 2,
        message: "Reminder: 'Advanced Calculus' session starts in 1 hour",
        read: false,
    },
    {
        id: 3,
        message: "'Machine Learning Basics' has posted new study materials",
        read: true,
    },
];

export default function Dashboard() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [notifications, setNotifications] = useState(mockNotifications);

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const toggleNotificationRead = (id) => {
        setNotifications(
            notifications.map((notif) =>
                notif.id === id ? { ...notif, read: !notif.read } : notif
            )
        );
    };

    return (
        <div className="container mx-auto p-4 space-y-6">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">
                        Hello {mockUser.name}, ready to join your next study
                        session?
                    </h1>
                    <p className="text-muted-foreground">
                        {format(
                            currentTime,
                            "EEEE, MMMM do, yyyy 'at' h:mm:ss a"
                        )}
                    </p>
                </div>
            </header>

            <section>
                <h1>THIS IS PAGE.TSX</h1>
            </section>
        </div>
    );
}
