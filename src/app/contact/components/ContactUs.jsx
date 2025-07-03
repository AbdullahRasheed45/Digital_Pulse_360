"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Code2,
  Palette,
  Globe2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useToast } from "./ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

function StatsDisplay({ number, label }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: countRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest > 0.2) {
        const interval = setInterval(() => {
          setCount((c) => {
            if (c >= number) {
              clearInterval(interval);
              return number;
            }
            return c + 1;
          });
        }, 2000 / number);
        return () => clearInterval(interval);
      }
    });
  }, [scrollYProgress, number]);

  return (
    <motion.div
      ref={countRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.span
        className="text-4xl font-bold text-white"
        animate={{ scale: count === number ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 0.5 }}
      >
        {count}+
      </motion.span>
      <p className="text-gray-400 mt-2">{label}</p>
    </motion.div>
  );
}

function LeftColumnContent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity }}
      className="relative h-full flex flex-col items-center justify-center space-y-12 p-8"
    >
      <div className="space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center space-x-4 group"
        >
          <div className="w-12 h-12 rounded-xl bg-[#232323] flex items-center justify-center group-hover:bg-[#4646ff] transition-colors duration-300">
            <Palette className="w-6 h-6 text-[#4646ff] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">
              Design Excellence
            </h3>
            <p className="text-gray-400">
              Crafting visually stunning experiences
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center space-x-4 group"
        >
          <div className="w-12 h-12 rounded-xl bg-[#232323] flex items-center justify-center group-hover:bg-[#4646ff] transition-colors duration-300">
            <Code2 className="w-6 h-6 text-[#4646ff] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">
              Development Mastery
            </h3>
            <p className="text-gray-400">Building robust digital solutions</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center space-x-4 group"
        >
          <div className="w-12 h-12 rounded-xl bg-[#232323] flex items-center justify-center group-hover:bg-[#4646ff] transition-colors duration-300">
            <Globe2 className="w-6 h-6 text-[#4646ff] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">Global Reach</h3>
            <p className="text-gray-400">Delivering worldwide impact</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="grid grid-cols-2 gap-8 relative z-10"
      >
        <StatsDisplay number={150} label="Projects Completed" />
        <StatsDisplay number={98} label="Satisfied Clients" />
        <StatsDisplay number={15} label="Team Experts" />
        <StatsDisplay number={5} label="Years Experience" />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-[0.03] bg-gradient-conic from-[#4646ff] via-transparent to-[#4646ff] bg-[length:50%_50%]"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-64 h-64 rounded-full bg-[#4646ff]/5 blur-3xl animate-pulse" />
      </div>
    </motion.div>
  );
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    date: "",
    time: "",
    phone: "",
  });
  const { toast } = useToast();
  const formRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: formRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch("https://serverjs-1-pod3.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
  
      if (response.ok) {
        setShowConfirmation(true);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
          date: "",
          time: "",
          phone: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const availableTimes = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#1C1C1C]">
      <div className="absolute inset-0 bg-[#1C1C1C]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#4646ff]/10 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#4646ff]/5 via-transparent to-transparent" />
        </div>
      </div>

      <div className="absolute top-40 left-10 w-32 h-32 bg-gradient-to-br from-[#4646ff]/20 to-transparent rounded-xl transform rotate-45 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-bl from-[#4646ff]/10 to-transparent rounded-xl transform -rotate-12 animate-pulse" />

      <div className="relative container px-4 md:px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="hidden lg:block relative min-h-screen">
            <LeftColumnContent />
          </div>

          <motion.div
            ref={formRef}
            style={{ opacity, y }}
            className="flex flex-col justify-center space-y-4 backdrop-blur-md bg-[#232323]/90 p-8 rounded-2xl border border-[#4646ff]/10 shadow-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4646ff] mb-6 tracking-tight">
                GET IN TOUCH
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Transform your ideas into reality with our expertise
              </p>
            </motion.div>

            <Tabs defaultValue="message" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4 bg-[#2a2a2a] p-1 rounded-xl">
                <TabsTrigger
                  value="message"
                  className="data-[state=active]:bg-[#4646ff] data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  Send Message
                </TabsTrigger>
                <TabsTrigger
                  value="call"
                  className="data-[state=active]:bg-[#4646ff] data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  Schedule Call
                </TabsTrigger>
              </TabsList>

              <TabsContent value="message">
                <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 bg-[#2a2a2a] p-6 rounded-xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4646ff] to-[#4646ff]/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="bg-[#232323] border-[#4646ff]/20 text-white transition-all duration-200 focus:scale-[1.02] focus:border-[#4646ff] hover:border-[#4646ff]/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        placeholder="john@example.com"
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="bg-[#232323] border-[#4646ff]/20 text-white transition-all duration-200 focus:scale-[1.02] focus:border-[#4646ff] hover:border-[#4646ff]/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">
                      Subject
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setFormState((prev) => ({ ...prev, subject: value }))
                      }
                      value={formState.subject}
                    >
                      <SelectTrigger className="bg-[#232323] border-[#4646ff]/20 text-white hover:border-[#4646ff]/50">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#232323] text-white border-[#4646ff]/20">
                        <SelectItem
                          value="general"
                          className="cursor-pointer hover:font-extrabold"
                        >
                          General Inquiry
                        </SelectItem>
                        <SelectItem
                          value="support"
                          className="cursor-pointer hover:font-extrabold"
                        >
                          Technical Support
                        </SelectItem>
                        <SelectItem
                          value="billing"
                          className="cursor-pointer hover:font-extrabold"
                        >
                          Billing Question
                        </SelectItem>
                        <SelectItem
                          value="partnership"
                          className="cursor-pointer hover:font-extrabold"
                        >
                          Partnership Opportunity
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      className="min-h-[150px] resize-none bg-[#232323] border-[#4646ff]/20 text-white transition-all duration-200 focus:scale-[1.02] focus:border-[#4646ff] hover:border-[#4646ff]/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#4646ff] hover:bg-[#4646ff]/90 text-white transition-all duration-300 hover:scale-[1.02]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center space-x-2"
                      >
                        <span>Sending...</span>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        >
                          <Send className="h-4 w-4" />
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.span
                        className="flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                      </motion.span>
                    )}
                  </Button>
                </motion.form>
              </TabsContent>

              <TabsContent value="call">
                <motion.form
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 bg-[#2a2a2a] p-6 rounded-xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4646ff] to-[#4646ff]/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="call-name" className="text-white">
                        Name
                      </Label>
                      <Input
                        id="call-name"
                        placeholder="John Doe"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="bg-[#232323] border-[#4646ff]/20 text-white transition-all duration-200 focus:scale-[1.02] focus:border-[#4646ff] hover:border-[#4646ff]/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="call-email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="call-email"
                        placeholder="john@example.com"
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="bg-[#232323] border-[#4646ff]/20 text-white transition-all duration-200 focus:scale-[1.02] focus:border-[#4646ff] hover:border-[#4646ff]/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      required
                      type="tel"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      className="bg-[#232323] border-[#4646ff]/20 text-white transition-all duration-200 focus:scale-[1.02] focus:border-[#4646ff] hover:border-[#4646ff]/50"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-white">
                        Preferred Date
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        required
                        value={formState.date}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            date: e.target.value,
                          }))
                        }
                        min={new Date().toISOString().split("T")[0]}
                        className="bg-[#232323] border-[#4646ff]/20 text-white transition-all duration-200 focus:scale-[1.02] focus:border-[#4646ff] hover:border-[#4646ff]/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-white">
                        Preferred Time
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          setFormState((prev) => ({ ...prev, time: value }))
                        }
                        value={formState.time}
                      >
                        <SelectTrigger className="bg-[#232323] border-[#4646ff]/20 text-white hover:border-[#4646ff]/50">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#232323] border-[#4646ff]/20 text-white">
                          {availableTimes.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#4646ff] hover:bg-[#4646ff]/90 text-white transition-all duration-300 hover:scale-[1.02]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center space-x-2"
                      >
                        <span>Scheduling...</span>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        >
                          <Calendar className="h-4 w-4" />
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.span
                        className="flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Schedule Call</span>
                        <Calendar className="h-4 w-4" />
                      </motion.span>
                    )}
                  </Button>
                </motion.form>
              </TabsContent>
            </Tabs>

            <div className="grid gap-2 text-sm">
              <motion.p
                className="flex items-center space-x-2 text-gray-400"
                whileHover={{ x: 5 }}
              >
                <CheckCircle2 className="h-4 w-4 text-[#4646ff]" />
                <span>Your data is always secure and encrypted</span>
              </motion.p>
              <motion.p
                className="flex items-center space-x-2 text-gray-400"
                whileHover={{ x: 5 }}
              >
                <AlertCircle className="h-4 w-4 text-[#4646ff]" />
                <span>We'll respond within 24-48 business hours</span>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Message Sent Successfully!</DialogTitle>
            <DialogDescription>
              Thank you for reaching out. We'll get back to you within 24-48
              business hours.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowConfirmation(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
