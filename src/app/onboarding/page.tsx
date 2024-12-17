"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const interests = ["Math", "Programming", "AI", "Design"];
const fieldOfStudyOptions = [
    "Computer Science",
    "Engineering",
    "Business",
    "Arts",
    "Other",
];

export default function OnboardingFlow() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        interests: [],
        name: "",
        age: "",
        fieldOfStudy: "",
        isOpenToLeading: false,
        availability: [],
        email: "",
        password: "",
    });

    const navigate = (direction) => {
        setStep((prevStep) => {
            const newStep = prevStep + direction;
            return newStep >= 1 && newStep <= 5 ? newStep : prevStep;
        });
    };

    const handleInterestToggle = (interest) => {
        setFormData((prev) => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter((i) => i !== interest)
                : [...prev.interests, interest],
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        setFormData((prev) => ({ ...prev, isOpenToLeading: e.target.checked }));
    };

    const handleAvailabilityChange = (value) => {
        setFormData((prev) => ({ ...prev, availability: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Here you would typically send the data to your backend
    };

    const StepIndicator = ({ currentStep, totalSteps }) => (
        <div className="flex justify-center space-x-2 mb-4">
            {[...Array(totalSteps)].map((_, index) => (
                <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                        index + 1 <= currentStep ? "bg-primary" : "bg-gray-300"
                    }`}
                />
            ))}
        </div>
    );

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <StepIndicator currentStep={step} totalSteps={5} />
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        {step === 1 && (
                            <div className="text-center">
                                <h1 className="text-2xl font-bold mb-4">
                                    Welcome to Studygroup Finder!
                                </h1>
                                <p className="mb-6">
                                    Let's help you connect with the best study
                                    groups!
                                </p>
                                <div className="flex justify-end mt-6">
                                    <Button onClick={() => navigate(1)}>
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">
                                    What are you interested in?
                                </h2>
                                <div className="space-y-2">
                                    {interests.map((interest) => (
                                        <div
                                            key={interest}
                                            className="flex items-center"
                                        >
                                            <Checkbox
                                                id={interest}
                                                checked={formData.interests.includes(
                                                    interest
                                                )}
                                                onCheckedChange={() =>
                                                    handleInterestToggle(
                                                        interest
                                                    )
                                                }
                                            />
                                            <label
                                                htmlFor={interest}
                                                className="ml-2"
                                            >
                                                {interest}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-6">
                                    <Button
                                        onClick={() => navigate(-1)}
                                        disabled={step === 1}
                                        variant="outline"
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        onClick={() => navigate(1)}
                                        disabled={step === 5}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">
                                    Personal Information
                                </h2>
                                <div className="space-y-4">
                                    <Input
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    <Input
                                        name="age"
                                        type="number"
                                        placeholder="Age"
                                        value={formData.age}
                                        onChange={handleInputChange}
                                    />
                                    <Select
                                        name="fieldOfStudy"
                                        value={formData.fieldOfStudy}
                                        onValueChange={(value) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                fieldOfStudy: value,
                                            }))
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Field of Study" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {fieldOfStudyOptions.map(
                                                (option) => (
                                                    <SelectItem
                                                        key={option}
                                                        value={option}
                                                    >
                                                        {option}
                                                    </SelectItem>
                                                )
                                            )}
                                        </SelectContent>
                                    </Select>
                                    <div className="flex items-center">
                                        <Checkbox
                                            id="leadGroup"
                                            checked={formData.isOpenToLeading}
                                            onCheckedChange={
                                                handleCheckboxChange
                                            }
                                        />
                                        <label
                                            htmlFor="leadGroup"
                                            className="ml-2"
                                        >
                                            Are you open to leading a study
                                            group?
                                        </label>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-6">
                                    <Button
                                        onClick={() => navigate(-1)}
                                        variant="outline"
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        onClick={() => navigate(1)}
                                        disabled={step === 5}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">
                                    Availability
                                </h2>
                                <Calendar
                                    onChange={handleAvailabilityChange}
                                    value={formData.availability}
                                    selectRange={true}
                                    className="mb-4"
                                />
                                <div className="flex justify-between mt-6">
                                    <Button
                                        onClick={() => navigate(-1)}
                                        variant="outline"
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        onClick={() => navigate(1)}
                                        disabled={step === 5}
                                    >
                                        Submit & Continue to Login
                                    </Button>
                                </div>
                            </div>
                        )}

                        {step === 5 && (
                            <form onSubmit={handleSubmit}>
                                <h2 className="text-xl font-semibold mb-4">
                                    Login
                                </h2>
                                <div className="space-y-4">
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <Input
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="flex justify-between mt-6">
                                    <Button
                                        onClick={() => navigate(-1)}
                                        variant="outline"
                                    >
                                        Back
                                    </Button>
                                    <Button type="submit">Sign Up</Button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
