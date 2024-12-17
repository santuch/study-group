import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Users } from "lucide-react";

export default function StudyGroupDetail() {
    return (
        <div className="container mx-auto p-4">
            <Card className="w-full max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                        Advanced Calculus
                    </CardTitle>
                    <p className="text-muted-foreground">
                        Deep dive into multivariable calculus
                    </p>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <Users className="text-primary" />
                            <span>15 Members</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="text-primary" />
                            <span>Next session: Apr 25, 2024 at 2:00 PM</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="text-primary" />
                            <span>Duration: 2 hours</span>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-semibold mb-2">Description</h3>
                            <p>
                                This study group focuses on advanced topics in
                                calculus, including multivariable calculus,
                                vector calculus, and differential equations.
                                Participants should have a strong foundation in
                                single-variable calculus.
                            </p>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-semibold mb-2">
                                Topics Covered
                            </h3>
                            <ul className="list-disc list-inside">
                                <li>Partial derivatives</li>
                                <li>Multiple integrals</li>
                                <li>Vector fields</li>
                                <li>Line and surface integrals</li>
                                <li>Green's, Stokes', and Gauss' theorems</li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-semibold mb-2">
                                Group Leaders
                            </h3>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage
                                            src="/placeholder.svg"
                                            alt="Dr. Jane Smith"
                                        />
                                        <AvatarFallback>JS</AvatarFallback>
                                    </Avatar>
                                    <span>Dr. Jane Smith</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage
                                            src="/placeholder.svg"
                                            alt="Prof. John Doe"
                                        />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <span>Prof. John Doe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Back to Groups</Button>
                    <Button>Join Group</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
