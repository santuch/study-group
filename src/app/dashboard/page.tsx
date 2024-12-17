"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
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
        members: 15,
    },
    {
        id: 2,
        name: "Machine Learning Basics",
        description: "Introduction to ML algorithms",
        tags: ["AI", "Programming"],
        members: 28,
    },
    {
        id: 3,
        name: "Web Development Workshop",
        description: "Building modern web apps",
        tags: ["Programming", "Web"],
        members: 22,
    },
    {
        id: 4,
        name: "Data Structures & Algorithms",
        description: "Preparing for coding interviews",
        tags: ["Programming", "Computer Science"],
        members: 18,
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

    const toggleNotificationRead = (id: number) => {
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
                <h2 className="text-xl font-semibold mb-4">
                    Recommended Study Groups
                </h2>
                <Carousel
                    showArrows={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    centerMode={true}
                    centerSlidePercentage={30} // Increased from 33.33 to 40 for more space per card
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <Button
                                variant="outline"
                                className="absolute left-0 top-1/2 z-10 -translate-y-1/2"
                                onClick={onClickHandler}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <Button
                                variant="outline"
                                className="absolute right-0 top-1/2 z-10 -translate-y-1/2"
                                onClick={onClickHandler}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        )
                    }
                >
                    {mockStudyGroups.map((group) => (
                        <Card key={group.id} className="m-2 shadow-lg">
                            {" "}
                            {/* Added shadow for better visibility */}
                            <CardHeader>
                                <CardTitle>{group.name}</CardTitle>
                                <CardDescription>
                                    {group.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {group.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {group.members} members
                                </p>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="outline">View Details</Button>
                                <Button>Join</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </Carousel>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-4">
                    Upcoming Sessions
                </h2>
                <div className="flex space-x-4">
                    <Calendar
                        mode="single"
                        selected={currentTime}
                        className="rounded-md border shadow"
                    />
                    <Card className="flex-grow">
                        <CardHeader>
                            <CardTitle>Sessions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {mockSessions.map((session) => (
                                    <li
                                        key={session.id}
                                        className="flex justify-between items-center"
                                    >
                                        <div>
                                            <p className="font-semibold">
                                                {session.groupName}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {format(
                                                    session.date,
                                                    "MMM d, yyyy 'at' h:mm a"
                                                )}
                                            </p>
                                        </div>
                                        <Button
                                            variant={
                                                session.status === "active"
                                                    ? "default"
                                                    : "outline"
                                            }
                                        >
                                            {session.status === "active"
                                                ? "Join Now"
                                                : "Set Reminder"}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-4">Notifications</h2>
                <Tabs defaultValue="unread">
                    <TabsList>
                        <TabsTrigger value="unread">Unread</TabsTrigger>
                        <TabsTrigger value="read">Read</TabsTrigger>
                    </TabsList>
                    <TabsContent value="unread">
                        <Card>
                            <CardContent className="pt-6">
                                <ul className="space-y-2">
                                    {notifications
                                        .filter((n) => !n.read)
                                        .map((notif) => (
                                            <li
                                                key={notif.id}
                                                className="flex items-center justify-between"
                                            >
                                                <span>{notif.message}</span>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() =>
                                                        toggleNotificationRead(
                                                            notif.id
                                                        )
                                                    }
                                                >
                                                    <Bell className="h-4 w-4" />
                                                </Button>
                                            </li>
                                        ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="read">
                        <Card>
                            <CardContent className="pt-6">
                                <ul className="space-y-2">
                                    {notifications
                                        .filter((n) => n.read)
                                        .map((notif) => (
                                            <li
                                                key={notif.id}
                                                className="flex items-center justify-between text-muted-foreground"
                                            >
                                                <span>{notif.message}</span>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() =>
                                                        toggleNotificationRead(
                                                            notif.id
                                                        )
                                                    }
                                                >
                                                    <Bell className="h-4 w-4" />
                                                </Button>
                                            </li>
                                        ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </section>
        </div>
    );
}
