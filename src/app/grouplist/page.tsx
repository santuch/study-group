"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

// Mock data for demonstration
const mockGroups = [
    {
        id: 1,
        name: "Advanced Calculus Study Group",
        description: "Deep dive into multivariable calculus and beyond",
        tags: ["Math", "Calculus"],
        members: 15,
    },
    {
        id: 2,
        name: "Machine Learning Enthusiasts",
        description: "Exploring the latest in AI and ML",
        tags: ["AI", "Programming"],
        members: 20,
    },
    {
        id: 3,
        name: "Quantum Physics Discussion",
        description: "Unraveling the mysteries of quantum mechanics",
        tags: ["Physics", "Quantum"],
        members: 12,
    },
    {
        id: 4,
        name: "Web Development Workshop",
        description: "Hands-on practice with modern web technologies",
        tags: ["Programming", "Web"],
        members: 18,
    },
    {
        id: 5,
        name: "History Buffs Gathering",
        description: "Discussing key historical events and their significance",
        tags: ["History", "Discussion"],
        members: 10,
    },
    {
        id: 6,
        name: "Creative Writing Circle",
        description:
            "Improving writing skills through collaborative storytelling",
        tags: ["Writing", "Creativity"],
        members: 8,
    },
    {
        id: 7,
        name: "Data Science Hackathon Prep",
        description:
            "Preparing for upcoming hackathons with real-world datasets",
        tags: ["Data Science", "Hackathon"],
        members: 22,
    },
    {
        id: 8,
        name: "Fitness & Nutrition Support Group",
        description: "Sharing fitness routines and healthy diet tips",
        tags: ["Fitness", "Health"],
        members: 25,
    },
];

export default function GroupList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const [sortOption, setSortOption] = useState("newest");
    const [filteredGroups, setFilteredGroups] = useState(mockGroups);

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        filterGroups(term, selectedTags);
    };

    const handleTagToggle = (tag) => {
        const updatedTags = selectedTags.includes(tag)
            ? selectedTags.filter((t) => t !== tag)
            : [...selectedTags, tag];
        setSelectedTags(updatedTags);
        filterGroups(searchTerm, updatedTags);
    };

    const filterGroups = (term, tags) => {
        const filtered = mockGroups.filter(
            (group) =>
                (group.name.toLowerCase().includes(term) ||
                    group.description.toLowerCase().includes(term) ||
                    group.tags.some((tag) =>
                        tag.toLowerCase().includes(term)
                    )) &&
                (tags.length === 0 ||
                    tags.every((tag) => group.tags.includes(tag)))
        );
        setFilteredGroups(filtered);
    };

    const sortGroups = (option) => {
        setSortOption(option);
        let sorted = [...filteredGroups];
        switch (option) {
            case "newest":
                sorted.sort((a, b) => b.id - a.id);
                break;
            case "popular":
                sorted.sort((a, b) => b.members - a.members);
                break;
            // Add more sorting options as needed
        }
        setFilteredGroups(sorted);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-between mb-6">
                <div className="relative flex-1 mr-4">
                    <Input
                        type="text"
                        placeholder="Search for groups by tags or topics..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="pl-10"
                    />
                    <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                    />
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">
                            <Filter className="mr-2" size={20} />
                            Filters
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Filter Groups</SheetTitle>
                            <SheetDescription>
                                Refine your group search with these filters.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="py-4">
                            <h3 className="mb-2 font-semibold">Tags</h3>
                            <div className="space-y-2">
                                {[
                                    "Math",
                                    "Physics",
                                    "AI",
                                    "Programming",
                                    "Web",
                                ].map((tag) => (
                                    <div
                                        key={tag}
                                        className="flex items-center"
                                    >
                                        <Checkbox
                                            id={tag}
                                            checked={selectedTags.includes(tag)}
                                            onCheckedChange={() =>
                                                handleTagToggle(tag)
                                            }
                                        />
                                        <label htmlFor={tag} className="ml-2">
                                            {tag}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="py-4">
                            <h3 className="mb-2 font-semibold">Sort By</h3>
                            <Select
                                value={sortOption}
                                onValueChange={sortGroups}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Sort by..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="newest">
                                        Newest
                                    </SelectItem>
                                    <SelectItem value="popular">
                                        Most Popular
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredGroups.map((group) => (
                    <Card key={group.id}>
                        <CardHeader>
                            <CardTitle>{group.name}</CardTitle>
                            <CardDescription>
                                {group.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {group.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">
                                {group.members} members
                            </span>
                            <div className=" gap-2">
                                <Button variant={"secondary"}>
                                    Group Detail
                                </Button>
                                <Button>Join Group</Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
