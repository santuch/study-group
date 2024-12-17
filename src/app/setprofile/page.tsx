import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Book, MapPin, Calendar } from "lucide-react";

export default function UserProfile() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold">
                        Your Profile
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex justify-center">
                        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                            <User className="w-16 h-16 text-gray-500" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <User className="w-5 h-5 text-gray-500" />
                            <div className="flex-grow">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Your Name" />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Mail className="w-5 h-5 text-gray-500" />
                            <div className="flex-grow">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Book className="w-5 h-5 text-gray-500" />
                            <div className="flex-grow">
                                <Label htmlFor="major">Major</Label>
                                <Input id="major" placeholder="Your Major" />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <MapPin className="w-5 h-5 text-gray-500" />
                            <div className="flex-grow">
                                <Label htmlFor="location">Location</Label>
                                <Input
                                    id="location"
                                    placeholder="Your Location"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Calendar className="w-5 h-5 text-gray-500" />
                            <div className="flex-grow">
                                <Label htmlFor="year">Year</Label>
                                <Input
                                    id="year"
                                    placeholder="Your Academic Year"
                                />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea
                                id="bio"
                                placeholder="Tell us about yourself..."
                                className="mt-1"
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button className="bg-black text-white hover:bg-gray-800">
                        Save Changes
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
