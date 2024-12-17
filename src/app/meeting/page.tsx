"use client";

import { useState, useEffect, useRef, memo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
    ArrowLeft,
    Send,
    PlusCircle,
    FileText,
    Link as LinkIcon,
    Image as ImageIcon,
    Calendar as CalendarIcon,
    Video,
} from "lucide-react";

// Mock data for demonstration
const mockMessages = [
    {
        id: 1,
        sender: "Alice",
        content: "Hey everyone! Ready for today’s session?",
        timestamp: "10:00 AM",
    },
    {
        id: 2,
        sender: "Bob",
        content: "Yes, I've got my notes ready!",
        timestamp: "10:02 AM",
    },
    {
        id: 3,
        sender: "Charlie",
        content:
            "I have a question about last week's topic. Can we discuss that first?",
        timestamp: "10:05 AM",
    },
];

const mockResources = [
    { id: 1, name: "Study Guide.pdf", type: "pdf" },
    { id: 2, name: "Lecture Notes", type: "link" },
    { id: 3, name: "Practice Problems.docx", type: "doc" },
];

const mockMembers = [
    { id: 1, name: "Alice", status: "online", initials: "A" },
    { id: 2, name: "Bob", status: "offline", initials: "B" },
    { id: 3, name: "Charlie", status: "online", initials: "C" },
    { id: 4, name: "David", status: "online", initials: "D" },
];

// Helper function to get the appropriate file icon
const getFileIcon = (type) => {
    const icons = {
        pdf: <FileText className="text-red-500" />,
        link: <LinkIcon className="text-blue-500" />,
        doc: <FileText className="text-blue-500" />,
        image: <ImageIcon className="text-green-500" />,
    };
    return icons[type] || <FileText />;
};
const handleStartMeeting = () => {
    alert("Meeting has started!");
    // You can add further logic here to integrate with a video conferencing service.
};

// Group Chat Component (Memoized to prevent unnecessary re-renders)
const GroupChat = memo(
    ({ messages, newMessage, setNewMessage, handleSendMessage }) => {
        const scrollRef = useRef(null);

        useEffect(() => {
            // Scroll to the bottom when messages update
            if (scrollRef.current) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
        }, [messages]);

        return (
            <Card className="md:col-span-2 flex flex-col h-[500px]">
                <CardHeader>
                    <CardTitle>Group Chat</CardTitle>
                </CardHeader>
                <CardContent
                    className="flex-grow overflow-y-auto"
                    ref={scrollRef}
                >
                    <ScrollArea>
                        {messages.map(({ id, sender, content, timestamp }) => (
                            <div key={id} className="mb-4">
                                <div className="font-semibold">{sender}</div>
                                <div>{content}</div>
                                <div className="text-sm text-muted-foreground">
                                    {timestamp}
                                </div>
                            </div>
                        ))}
                    </ScrollArea>
                </CardContent>
                <CardFooter className="border-t border-gray-200">
                    <form onSubmit={handleSendMessage} className="flex w-full">
                        <Input
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-grow mr-2"
                            aria-label="New message"
                        />
                        <Button type="submit" aria-label="Send message">
                            <Send className="mr-2" /> Send
                        </Button>
                    </form>
                </CardFooter>
            </Card>
        );
    }
);

export default function MeetingInterface() {
    const [messages, setMessages] = useState(mockMessages);
    const [newMessage, setNewMessage] = useState("");
    const [date, setDate] = useState(new Date());

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            const newMsg = {
                id: messages.length + 1,
                sender: "You",
                content: newMessage,
                timestamp: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
            };
            setMessages((prevMessages) => [...prevMessages, newMsg]);
            setNewMessage("");
        }
    };

    return (
        <div className="container mx-auto p-4">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">
                    Advanced Calculus Study Group - Week 5 Session
                </h1>
                <div className="flex space-x-4">
                    <Button variant="destructive" onClick={handleStartMeeting}>
                        <Video className="mr-2" /> Start Meeting
                    </Button>
                    <Button variant="outline" aria-label="Back to group list">
                        <ArrowLeft className="mr-2" /> Back to Group List
                    </Button>
                </div>
            </header>

            <div className="grid gap-6 md:grid-cols-3">
                <GroupChat
                    messages={messages}
                    newMessage={newMessage}
                    setNewMessage={setNewMessage}
                    handleSendMessage={handleSendMessage}
                />

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Shared Resources</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {mockResources.map(({ id, name, type }) => (
                                    <li key={id} className="flex items-center">
                                        {getFileIcon(type)}
                                        <span className="ml-2">{name}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" aria-label="Add resource">
                                <PlusCircle className="mr-2" /> Add Resource
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Calendar</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md border"
                            />
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant="outline"
                                aria-label="Schedule new session"
                            >
                                <CalendarIcon className="mr-2" /> Schedule New
                                Session
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Group Members</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {mockMembers.map(
                                    ({ id, name, status, initials }) => (
                                        <li
                                            key={id}
                                            className="flex items-center justify-between"
                                        >
                                            <div className="flex items-center">
                                                <Avatar className="h-8 w-8 mr-2">
                                                    <AvatarImage
                                                        src={`/avatars/${id}.png`}
                                                        alt={name}
                                                    />
                                                    <AvatarFallback>
                                                        {initials}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <span>{name}</span>
                                            </div>
                                            <span
                                                className={`text-sm ${
                                                    status === "online"
                                                        ? "text-green-500"
                                                        : "text-gray-500"
                                                }`}
                                            >
                                                {status}
                                            </span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant="outline"
                                aria-label="Send direct message"
                            >
                                Send Direct Message
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
