"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Mic,
    MicOff,
    Video,
    VideoOff,
    PhoneOff,
    UserPlus,
    MessageSquare,
    ScreenShare,
} from "lucide-react";

export default function VideoConferenceApp() {
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOn, setIsVideoOn] = useState(true);
    const [isParticipantListVisible, setIsParticipantListVisible] =
        useState(false);
    const [isChatVisible, setIsChatVisible] = useState(false);
    const [messages, setMessages] = useState([]);

    const participants = [
        { id: 1, name: "You" },
        { id: 2, name: "John Doe" },
        { id: 3, name: "Jane Smith" },
        { id: 4, name: "Alice Johnson" },
        { id: 5, name: "Bob Williams" },
    ];

    const sendMessage = () => {
        const message = prompt("Enter your message:");
        if (message) {
            setMessages([...messages, { sender: "You", content: message }]);
        }
    };

    return (
        <div className="flex h-screen w-screen bg-gray-50">
            <div className="flex-1 flex flex-col p-6 overflow-hidden">
                <h1 className="text-2xl font-bold mb-4">
                    Study Group Video Conference
                </h1>
                <div className="flex-1 grid grid-cols-2 gap-6 overflow-auto">
                    <Card className="aspect-video bg-blue-800 flex items-center justify-center text-white">
                        You
                    </Card>
                    <Card className="aspect-video bg-blue-700 flex items-center justify-center text-white">
                        Jane Smith
                    </Card>
                    <Card className="aspect-video bg-blue-700 flex items-center justify-center text-white">
                        Alice Johnson
                    </Card>
                    <Card className="aspect-video bg-blue-700 flex items-center justify-center text-white">
                        Bob Williams
                    </Card>
                </div>
                <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
                    <div className="flex justify-center space-x-6">
                        <Button
                            variant={isMuted ? "destructive" : "primary"}
                            size="icon"
                            onClick={() => setIsMuted(!isMuted)}
                        >
                            {isMuted ? <MicOff /> : <Mic />}
                        </Button>
                        <Button
                            variant={isVideoOn ? "primary" : "destructive"}
                            size="icon"
                            onClick={() => setIsVideoOn(!isVideoOn)}
                        >
                            {isVideoOn ? <Video /> : <VideoOff />}
                        </Button>
                        <Button variant="outline" size="icon">
                            <ScreenShare />
                        </Button>
                        <Button variant="destructive" size="icon">
                            <PhoneOff />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                                setIsParticipantListVisible(
                                    !isParticipantListVisible
                                )
                            }
                        >
                            <UserPlus />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setIsChatVisible(!isChatVisible)}
                        >
                            <MessageSquare />
                        </Button>
                    </div>
                </div>
            </div>
            {isParticipantListVisible && (
                <Card className="w-72 p-6 m-6 bg-white rounded-lg shadow-md h-full">
                    <h2 className="text-xl font-semibold mb-4">Participants</h2>
                    <ScrollArea className="h-full">
                        <ul className="space-y-3">
                            {participants.map((participant) => (
                                <li
                                    key={participant.id}
                                    className="flex items-center space-x-4"
                                >
                                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                    <span className="font-medium text-gray-800">
                                        {participant.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </ScrollArea>
                </Card>
            )}
            {isChatVisible && (
                <Card className="w-72 p-6 m-6 bg-white rounded-lg shadow-md h-full">
                    <h2 className="text-xl font-semibold mb-4">Messages</h2>
                    <ScrollArea className="h-full">
                        <ul className="space-y-3">
                            {messages.map((msg, idx) => (
                                <li key={idx} className="text-sm text-gray-800">
                                    <strong>{msg.sender}:</strong> {msg.content}
                                </li>
                            ))}
                        </ul>
                    </ScrollArea>
                </Card>
            )}
        </div>
    );
}
