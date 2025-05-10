"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

export default function TestPage() {
  const form = useForm();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Marketing Platform Components</h1>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>Test out our ShadCN components</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Enter your name" />
              </div>
              <div>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </div>
              <div>
                <FormLabel>Message</FormLabel>
                <Input placeholder="Your message" />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button>Submit</Button>
            <Button variant="outline">Cancel</Button>
            <Button variant="destructive">Delete</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
