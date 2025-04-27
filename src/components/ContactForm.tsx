"use client";

import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";

// Define the form schema with zod for validation
const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters." })
        .max(1000, { message: "Message must be less than 1000 characters." }),
    subject: z.string().optional(),
});

export default function ContactForm() {
    // Formspree form ID - replace with your actual ID
    const [formspreeState, handleFormspreeSubmit] = useFormspree("xanonlkn");
    
    // State for tracking submission status
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    
    // Reset status messages after 5 seconds
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (submitSuccess || submitError) {
            timer = setTimeout(() => {
                setSubmitSuccess(false);
                setSubmitError(false);
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [submitSuccess, submitError]);

    // Initialize react-hook-form with zod validation
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            setIsSubmitting(true);
            setSubmitSuccess(false);
            setSubmitError(false);
            
            // Convert form data to a regular object that Formspree can handle
            const formData = {
                name: data.name,
                email: data.email,
                message: data.message,
                subject: data.subject || "Contact Form Submission",
                _subject: `New message from ${data.name}`,
            };

            // Using type assertion for Formspree's expected format
            await handleFormspreeSubmit(formData as Record<string, string>);
            
            if (formspreeState.succeeded) {
                setSubmitSuccess(true);
                form.reset();
            } else if (formspreeState.errors) {
                setSubmitError(true);
            }
        } catch (error) {
            setSubmitError(true);
            console.error("Form submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                    aria-label="Contact form"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <FormControl>
                                    <Input 
                                        id="name"
                                        placeholder="Your name" 
                                        {...field} 
                                        aria-required="true"
                                        autoComplete="name"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <FormControl>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Your email"
                                        {...field}
                                        aria-required="true"
                                        autoComplete="email"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="subject">Subject (Optional)</FormLabel>
                                <FormControl>
                                    <Input
                                        id="subject"
                                        placeholder="Subject of your message"
                                        {...field}
                                        autoComplete="off"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="message">Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        id="message"
                                        className="min-h-[150px] resize-y"
                                        placeholder="Your message"
                                        {...field}
                                        aria-required="true"
                                    />
                                </FormControl>
                                <FormDescription>
                                    {field.value?.length || 0}/1000 characters
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                        aria-label="Send message"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </Button>
                </form>
            </Form>

            {submitSuccess && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                >
                    <Alert variant="default" className="bg-green-50 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800">
                        <CheckCircle className="h-4 w-4" />
                        <AlertTitle>Success!</AlertTitle>
                        <AlertDescription>
                            Thank you for your message! I&apos;ll get back to you soon.
                        </AlertDescription>
                    </Alert>
                </motion.div>
            )}

            {submitError && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                >
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            Sorry, there was an error sending your message. Please try again later.
                        </AlertDescription>
                    </Alert>
                </motion.div>
            )}
        </motion.div>
    );
}
