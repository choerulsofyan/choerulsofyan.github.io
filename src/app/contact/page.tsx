"use client";

import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-3xl md:text-4xl font-semibold text-primary mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-accent-blue">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-secondary">
                  <span className="font-medium">Email:</span> choerulsofyanmf@gmail.com
                </p>
                <p className="text-secondary">
                  <span className="font-medium">Phone:</span> +62 821 1817 8993
                </p>
                <p className="text-secondary">
                  <span className="font-medium">LinkedIn:</span>{" "}
                  <a 
                    href="https://www.linkedin.com/in/choerulsofyan/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-blue hover:underline"
                  >
                    www.linkedin.com/in/choerulsofyan/
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-accent-blue">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
