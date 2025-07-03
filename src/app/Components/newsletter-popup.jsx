"use client"

import { useEffect, useState } from "react"
import { X, CheckCircle2, Users, Bell, Gift } from "lucide-react"
import { Dialog, DialogContent } from "./ContactUs/ui/dialog"
import React, { useCallback } from "react";
import { Input } from "./ContactUs/ui/input"
import { cn } from "./ContactUs/lib/utils"
import confetti from "canvas-confetti"
import Link from "next/link"

export default function NewsletterPopup() {
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [shake, setShake] = useState(false)
  
    // Show popup on every page load with a delay
    useEffect(() => {
      const timer = setTimeout(() => {
        setOpen(true)
        setTimeout(() => setHasAnimated(true), 100)
  
        // Play subtle pop sound
        const audio = new Audio("/pop.mp3")
        audio.volume = 0.2
        audio.play().catch(() => {
          // Ignore audio play errors
        })
      }, 1500)
  
      return () => clearTimeout(timer)
    }, [])
  
    const triggerConfetti = useCallback(() => {
      const count = 200
      const defaults = {
        origin: { y: 0.7 },
        colors: ["#4646ff", "#ff46d1", "#46ffb3"],
      }
  
      function fire(particleRatio, opts) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        })
      }
  
      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      })
  
      fire(0.2, {
        spread: 60,
      })
  
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      })
  
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      })
  
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      })
    }, [])
  
    const handleClose = () => {
      setHasAnimated(false)
      setTimeout(() => {
        setOpen(false)
        setIsSuccess(false)
      }, 300)
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!email) return;
  
      setIsLoading(true);
  
     
    const emailData = {
      name: "This is email subscription so no name",
      email: email,
      subject: "New Newsletter Subscription",
      message: "No message",
      phone: "No Phone number",
      date : "No Date",
      time: "No time",
      htmlContent: `<p><strong>New Subscriber:</strong> ${email}</p>`,
    };
  
      try {
        const response = await fetch("https://serverjs-1-pod3.onrender.com/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData)
        });
  
        if (response.ok) {
          setIsSuccess(true);
          triggerConfetti();
          setEmail("");
        } else {
          throw new Error("Subscription failed.");
        }
      } catch (error) {
        console.error("Error subscribing:", error);
      } finally {
        setIsLoading(false);
      }
    }
  
    const shakeAnimation = () => {
      setShake(true)
      setTimeout(() => setShake(false), 600)
    }
  
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 bg-transparent border-0 shadow-none max-w-[95vw] sm:max-w-[500px]">
          <div
            className={cn(
              "relative bg-[#1C1C1C] rounded-2xl overflow-hidden transition-all duration-700 transform perspective-1000",
              hasAnimated ? "scale-100 opacity-100 rotate-0" : "scale-90 opacity-0 rotate-12",
              shake ? "animate-shake" : "",
            )}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/5 to-purple-600/5" />
              <div className="absolute top-10 left-5 w-32 h-32 bg-gradient-to-br from-[#4646ff]/20 to-transparent rounded-xl transform rotate-45 animate-float-slow" />
              <div className="absolute bottom-10 right-5 w-40 h-40 bg-gradient-to-bl from-[#4646ff]/10 to-transparent rounded-xl transform -rotate-12 animate-float" />
              <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-blue-500/5 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
  
              {/* Particle Effects */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 right-10 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                <div
                  className="absolute bottom-20 left-20 w-2 h-2 bg-purple-500 rounded-full animate-ping"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"
                  style={{ animationDelay: "2s" }}
                />
              </div>
            </div>
  
            {/* Content Container */}
            <div className="relative p-8 backdrop-blur-sm">
              {/* Close Button */}
              <button
                onClick={() => {
                  shakeAnimation()
                  handleClose()
                }}
                className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full group"
              >
                <X className="h-5 w-5 transform group-hover:rotate-90 transition-transform duration-200" />
              </button>
  
              <div className="space-y-6">
                {isSuccess ? (
                  // Success State
                  <div className="space-y-4 text-center py-6">
                    <div className="flex justify-center">
                      <div className="rounded-full bg-green-500/10 p-3 animate-bounce">
                        <CheckCircle2 className="h-8 w-8 text-green-500" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white animate-fade-in">Thank You for Subscribing!</h3>
                    <p className="text-white/70 animate-fade-in-delayed">
                      Welcome to our creative community. Check your inbox to confirm your subscription.
                    </p>
                    <button
                      onClick={handleClose}
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  // Subscribe Form State
                  <>
                    {/* Header */}
                    <div className="space-y-4 text-center">
                      <div className="inline-block animate-bounce">
                        <div className="inline-flex items-center justify-center px-4 py-1 space-x-2 bg-white/10 rounded-full backdrop-blur-sm">
                          <Gift className="h-4 w-4 text-blue-400" />
                          <span className="text-sm font-medium text-white">Special Offer Inside!</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text transform hover:scale-105 transition-transform duration-300">
                          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                            Join Our Creative Journey
                          </h2>
                        </div>
                        <p className="text-white/70 text-lg">Get exclusive insights, updates, and special offers</p>
                      </div>
                    </div>
  
                    {/* Social Proof */}
                    <div className="flex items-center justify-center space-x-4 text-white/50">
                      <Users className="h-4 w-4" />
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full border-2 border-[#1C1C1C] bg-gradient-to-br from-neutral-400 to-neutral-600 animate-pulse"
                            style={{ animationDelay: `${i * 200}ms` }}
                          />
                        ))}
                      </div>
                      <span className="text-sm">4 people joined today</span>
                    </div>
  
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="relative h-12 px-4 bg-[#1C1C1C] border-0 text-white placeholder:text-white/50 focus-visible:ring-2 focus-visible:ring-blue-500/50 transition-all duration-300 rounded-xl"
                        />
                      </div>
  
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={cn(
                          "relative w-full text-blue-700 font-semibold px-10 py-3.5 rounded-xl bg-white overflow-hidden group",
                          "hover:bg-transparent hover:text-white hover:border-2 hover:border-white",
                          "transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]",
                          "disabled:opacity-70 disabled:cursor-not-allowed",
                        )}
                      >
                        <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out group-hover:w-full" />
                        <div className="relative flex items-center justify-center gap-2">
                          {isLoading ? (
                            <>
                              <div className="w-5 h-5 border-2 border-blue-700 border-t-transparent rounded-full animate-spin" />
                              <span>Subscribing...</span>
                            </>
                          ) : (
                            <>
                              <Bell className="w-4 h-4" />
                              <span>SUBSCRIBE NOW</span>
                            </>
                          )}
                        </div>
                      </button>
                    </form>
  
                    {/* Footer */}
                    <p className="text-center text-white/50 text-sm">
                      By subscribing, you agree to our{" "}
                      <Link
                        href="/terms"
                        className="underline hover:text-white transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        Terms & Privacy Policy
                      </Link>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  
  

