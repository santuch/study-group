import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Book, MapPin, Calendar, Bookmark } from "lucide-react";

export default function UserDataDisplay() {
    // This would typically come from a database or API
    const userData = {
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        major: "Computer Science",
        location: "San Francisco, CA",
        year: "Junior",
        bio: "Passionate about coding and always looking for new study partners. I love working on group projects and learning from others.",
        interests: ["Machine Learning", "Web Development", "Data Structures"],
        avatar: "/placeholder.svg?height=128&width=128",
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold">
                        User Profile
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex justify-center">
                        <Avatar className="w-32 h-32">
                            <AvatarImage
                                src={userData.avatar}
                                alt={userData.name}
                            />
                            <AvatarFallback>
                                {userData.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <User className="w-5 h-5 text-gray-500" />
                            <div>
                                <h3 className="font-semibold">Name</h3>
                                <p>{userData.name}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Mail className="w-5 h-5 text-gray-500" />
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p>{userData.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Book className="w-5 h-5 text-gray-500" />
                            <div>
                                <h3 className="font-semibold">Major</h3>
                                <p>{userData.major}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Calendar className="w-5 h-5 text-gray-500" />
                            <div>
                                <h3 className="font-semibold">Year</h3>
                                <p>{userData.year}</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-semibold">Bio</h3>
                            <p className="text-gray-700">{userData.bio}</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-semibold flex items-center">
                                <Bookmark className="w-5 h-5 text-gray-500 mr-2" />
                                Interests
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {userData.interests.map((interest, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
