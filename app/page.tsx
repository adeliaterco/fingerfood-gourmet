"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Check, Star } from "lucide-react"

export default function GourmetComboSalesPage() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 4, seconds: 57 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Countdown Timer Bar */}
      <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-0 z-50">
        <p className="text-sm font-semibold mb-1">Your 14x1 Offer ends in:</p>
        <div className="flex items-center justify-center gap-2 text-2xl font-bold">
          <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
          <span>:</span>
          <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Create Irresistible Gourmet Snacks Like a Pro in Less Than 24 Hours with a Collection of 160+ Exclusive
          Gourmet Recipes
        </h1>

        <div className="relative w-full max-w-2xl mx-auto aspect-video mb-8 rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="/hero-gourmet-snacks.jpg"
            alt="Gourmet Snacks Collection"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
          No previous experience is necessary. With our step-by-step guide, you'll create appetizers so spectacular your
          clients and friends will think they came from a luxury catering establishment.
        </p>

        <a
          href="https://pay.hotmart.com/A102283812X?off=ysr0rs38"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-12 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
        >
          DOWNLOAD RECIPES NOW!
        </a>
      </section>

      {/* This ebook is for you if... */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">This ebook is for you if...</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">
                Are you tired of your bites always being the same and you need to really surprise?
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">
                You're dying to be congratulated, but the insecurity that something might go wrong or not knowing where
                to start stops you.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">
                It makes you angry to spend time and money on internet recipes that end in disappointment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">
                You think that to achieve gourmet results you need to be a chef or spend a fortune?
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
              <p className="text-gray-700">
                You want to start a business, but you're stressed about not having proven recipes that guarantee
                profitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What are you going to achieve? */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What are you going to achieve?</h2>

          <div className="space-y-4">
            {[
              "Dazzle at every gathering and become the host everyone admires.",
              "Cook with complete confidence, knowing that each recipe is tested so you can excel.",
              "Master 160+ recipes that work every time, with guaranteed gourmet results.",
              "Create professional-level presentations with easy-to-find ingredients.",
              "Build the foundation of your gourmet business with proven, profitable recipes.",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-green-50 p-4 rounded-lg">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What will you find in our collection? */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What will you find in our collection?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Ebook 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image src="/ebook-1-cover.jpg" alt="Ebook 1" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ebook 1:</h3>
                <h4 className="text-lg font-semibold text-purple-600 mb-3">+80 Gourmet Snack Recipes</h4>
                <p className="text-gray-700 mb-4">
                  You will learn how to make irresistible snacks that turn any table into a gourmet spectacle.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 80 exclusive recipes</li>
                  <li>• Professional techniques</li>
                  <li>• Impactful presentations</li>
                </ul>
              </div>
            </div>

            {/* Ebook 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image src="/ebook-2-cover.jpg" alt="Ebook 2" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ebook 2:</h3>
                <h4 className="text-lg font-semibold text-purple-600 mb-3">Cheese and Cold Cuts Boards</h4>
                <p className="text-gray-700 mb-4">
                  You will learn how to set up gourmet tables to impress your guests and make each event unique.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 30 professional designs</li>
                  <li>• Product selection</li>
                  <li>• Perfect combinations</li>
                </ul>
              </div>
            </div>

            {/* Ebook 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image src="/ebook-3-cover.jpg" alt="Ebook 3" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ebook 3:</h3>
                <h4 className="text-lg font-semibold text-purple-600 mb-3">International Recipes</h4>
                <p className="text-gray-700 mb-4">
                  Recipes for sophisticated but easy-to-make international dishes that will surprise everyone.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 50 recipes from 5 continents</li>
                  <li>• Techniques explained step by step</li>
                  <li>• Adapted ingredients</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-2xl font-bold text-gray-800">+3,370 DOWNLOADS</p>
        </div>
      </section>

      {/* Pricing Section 1 */}
      <section id="checkout" className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-6">
              📦 14x1 Gourmet Combo → 3 Ebooks with 160 Recipes + 11 Gifts 🎁
            </h2>

            <div className="bg-white/20 rounded-lg p-6 mb-6">
              <p className="text-center text-sm mb-2">SAVINGS OF $35.00</p>
              <div className="flex items-center justify-center gap-4">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full font-bold">60% off</span>
                <div>
                  <p className="text-4xl font-bold">$14.99</p>
                  <p className="line-through text-xl">$49.99</p>
                </div>
              </div>
            </div>

            <p className="text-center font-semibold mb-4">OFFER FOR TODAY ONLY!</p>
            <p className="text-center text-sm mb-6">
              Your spot with the 11 BONUS GIFTS is only reserved for the next few minutes. Don't miss out!
            </p>

            <div className="bg-white/20 rounded-lg p-4 mb-6 text-center">
              <p className="text-sm mb-2">Offer ends in:</p>
              <div className="flex items-center justify-center gap-4 text-3xl font-bold">
                <div>
                  <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
                  <p className="text-xs">Minutes</p>
                </div>
                <span>:</span>
                <div>
                  <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
                  <p className="text-xs">Seconds</p>
                </div>
              </div>
            </div>

            <p className="text-center text-sm mb-6">👀 196 people are viewing this offer right now!</p>

            <a
              href="https://pay.hotmart.com/A102283812X?off=ysr0rs38"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xl py-4 rounded-full text-center transition-all transform hover:scale-105 shadow-lg"
            >
              ACCESS THE PACK RIGHT NOW!
            </a>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Plus, when you buy TODAY we'll give you 11 Exclusive BONUSES
          </h2>
          <p className="text-center text-lg text-gray-700 mb-12">
            This isn't just a book, it's a complete experience ✨. That's why we've included 11 unique gifts 🎁 to help
            you shine at any gathering 🌟
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "🎁 Gourmet Patés & Mousses", tag: "FREE TODAY" },
              { title: "🎁 Gourmet Pairings", tag: "FREE TODAY" },
              { title: "🎁 From Host to Entrepreneur", tag: "FREE TODAY" },
              { title: "🎁 Calculator + Shopping List", tag: "FREE TODAY" },
              { title: "🎁 The Most Loved Snacks", tag: "FREE TODAY" },
              { title: "🎁 Express Combo in 10 Minutes", tag: "FREE TODAY" },
              { title: "🎁 4-Course Gourmet Dinners", tag: "FREE TODAY" },
              { title: "🎁 +40 Gourmet Breakfasts", tag: "FREE TODAY" },
              { title: "🎁 Gourmet Drinks & Cocktails", tag: "FREE TODAY" },
              { title: "🎁 Event Planning Guide", tag: "FREE TODAY" },
              { title: "🎁 Gourmet Conservation", tag: "FREE TODAY" },
            ].map((bonus, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-40 bg-gradient-to-br from-purple-400 to-pink-400">
                  <Image src={`/bonus-${index + 1}.jpg`} alt={bonus.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{bonus.title}</h3>
                  <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {bonus.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl font-bold mb-2">Total value 11 bonds:</p>
            <p className="text-4xl font-bold text-red-600 line-through mb-2">$220.00</p>
            <p className="text-3xl font-bold text-green-600 mb-8">TODAY ONLY: FREE</p>
          </div>
        </div>
      </section>

      {/* Pricing Section 2 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl p-8 shadow-2xl">
            <p className="text-center text-xl font-bold mb-4">+3,370 DOWNLOADS</p>

            <h2 className="text-3xl font-bold text-center mb-6">
              📦 14x1 Gourmet Combo → 3 Ebooks with 160 Recipes + 11 Gifts 🎁
            </h2>

            <div className="bg-white/20 rounded-lg p-6 mb-6">
              <p className="text-center text-sm mb-2">SAVINGS OF $35.00</p>
              <div className="flex items-center justify-center gap-4">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full font-bold">60% off</span>
                <div>
                  <p className="text-4xl font-bold">$14.99</p>
                  <p className="line-through text-xl">$49.99</p>
                </div>
              </div>
            </div>

            <a
              href="https://pay.hotmart.com/A102283812X?off=ysr0rs38"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xl py-4 rounded-full text-center transition-all transform hover:scale-105 shadow-lg"
            >
              DOWNLOAD RECIPES NOW!
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">MORE THAN 1,974 SATISFIED CUSTOMERS</h2>
          <div className="flex justify-center mb-12">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "James Miller",
                text: "I loved it. I made my first gourmet snacks, and in less than a month I already had regular orders for events.",
              },
              {
                name: "Christopher B.",
                text: "It's very good and practical; it simplified everything for me. I'm a beginner, and it was easy for me. I achieved professional results.",
              },
              {
                name: "Jessica Taylor",
                text: "I didn't think it would work, but it really helped me correct mistakes. Now my appetizers come out perfect and delicious.",
              },
              {
                name: "Matthew Harris",
                text: "The guides are super detailed, leaving no room for doubt. They explain everything step by step, even including selling tips. 10/10!",
              },
              {
                name: "Ashley Thompson",
                text: "Amazing! The recipes are a guaranteed success. Every time I make something, my family and friends are amazed. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-green-50 border-4 border-green-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Risk-free purchase</h2>
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image src="/guarantee-badge.jpg" alt="30 Day Guarantee" fill className="object-contain" />
            </div>
            <p className="text-lg text-gray-700">
              If you're not happy with the results within the next 30 days, just send us a simple email and we'll refund
              every peso. No questions asked. No hassle.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions (FAQ)</h2>

          <div className="space-y-6">
            {[
              {
                q: "📦 What is the 3-for-1 Gourmet Combo and what does it include?",
                a: "The Gourmet Combo is an exclusive offer that includes three digital ebooks and 11 additional bonuses to help you improve your cooking skills and wow your guests. The complete package includes: Ebook 1: Finger Food Recipes for Parties and Events, Ebook 2: How to Assemble Deli Boards, Ebook 3: Easy and Elegant International Recipes, plus 11 bonus ebooks. With over 180 tested and detailed recipes, you'll learn how to create gourmet dishes at home. There are 14 ebooks in total to elevate your events and your cooking!",
              },
              {
                q: "📥 Can I access the ebooks immediately?",
                a: "Yes! After completing your purchase, you'll receive instant access to all 14 ebooks. You can download them immediately and start creating gourmet dishes right away.",
              },
              {
                q: "✅ Are the recipes easy to follow?",
                a: "All recipes are written with step-by-step instructions and are designed for people of all skill levels, from beginners to experienced cooks.",
              },
              {
                q: "💰 Can I sell the recipes I learn?",
                a: "Yes! You can use these recipes to start your own gourmet business. Many of our customers have successfully launched catering services using these recipes.",
              },
              {
                q: "❌ What if I don't like the ebooks or am not satisfied with the purchase?",
                a: "We offer a 30-day money-back guarantee. If you're not satisfied for any reason, simply contact us and we'll refund your purchase, no questions asked.",
              },
              {
                q: "🧐 Do I need any special equipment or expensive ingredients for the recipes?",
                a: "No! All recipes are designed to use common kitchen equipment and ingredients that are easy to find at your local grocery store.",
              },
              {
                q: "🥖 What if I don't have any cooking experience?",
                a: "Perfect! These ebooks are designed for beginners. Each recipe includes detailed instructions and tips to ensure success, even if you've never cooked gourmet food before.",
              },
              {
                q: "📲 Can I use ebooks on my phone or tablet?",
                a: "Yes! The ebooks are in PDF format and can be viewed on any device - phone, tablet, computer, or even printed out.",
              },
              {
                q: "🚨 How long do I have to take advantage of the offer?",
                a: "This special offer with 60% discount and 11 free bonuses is only available for a limited time. Don't miss out!",
              },
              {
                q: "💵 Why is the offer so cheap compared to the actual value of the ebooks?",
                a: "We're running a special promotional campaign to help more people discover the joy of gourmet cooking. This discounted price won't last long!",
              },
              {
                q: "✨ Is this combo only for people who organize events?",
                a: "No! Whether you want to impress at family gatherings, start a business, or simply improve your cooking skills, this combo is perfect for you.",
              },
              {
                q: "📤 Can I share ebooks with other people?",
                a: "The ebooks are for personal use only. Sharing or distributing them is not permitted under our terms of use.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Immediate Access to the 14 Ebooks!</h2>
          <p className="text-xl text-gray-700 mb-8">
            Get the complete collection with +160 recipes and 11 exclusive bonuses for a single payment.
          </p>

          <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl p-8 shadow-2xl mb-8">
            <p className="text-xl font-bold mb-4">+3,370 DOWNLOADS</p>

            <h3 className="text-2xl font-bold mb-6">📦 14x1 Gourmet Combo → 3 Ebooks with 160 Recipes + 11 Gifts 🎁</h3>

            <div className="bg-white/20 rounded-lg p-6 mb-6">
              <p className="text-center text-sm mb-2">SAVINGS OF $35.00</p>
              <div className="flex items-center justify-center gap-4">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full font-bold">60% off</span>
                <div>
                  <p className="text-4xl font-bold">$14.99</p>
                  <p className="line-through text-xl">$49.99</p>
                </div>
              </div>
            </div>

            <p className="text-sm mb-4">👀 People are viewing this offer right now!</p>

            <a
              href="https://pay.hotmart.com/A102283812X?off=ysr0rs38"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xl py-4 rounded-full text-center transition-all transform hover:scale-105 shadow-lg"
            >
              BUY NOW!
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Policies */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Refund Policy */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Refund Policy</h3>
            <p className="text-sm leading-relaxed mb-4">
              We offer a full 60-day money-back guarantee from the date of purchase. If, for any reason, you are not
              satisfied with your product, simply contact our support team, providing your order number and the email
              used during the purchase.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              The refund will be processed using the same payment method used for the purchase, within 5 business days
              after your request is confirmed.
            </p>
            <p className="text-sm">
              To request your refund, please send an email to:{" "}
              <a href="mailto:sflourcraft@gmail.com" className="text-blue-400 hover:underline">
                sflourcraft@gmail.com
              </a>
            </p>
          </div>

          {/* Terms of Use */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Terms of Use</h3>
            <p className="text-sm mb-2">By purchasing our products, you agree that:</p>
            <ul className="text-sm space-y-2 list-disc list-inside">
              <li>The content is for personal, non-transferable use.</li>
              <li>Reproduction, distribution, or resale without prior authorization is prohibited.</li>
              <li>Access will be provided as described on the sales page and may be suspended in case of misuse.</li>
            </ul>
          </div>

          {/* Privacy Policy */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Privacy Policy</h3>
            <p className="text-sm mb-2">We respect your privacy and comply with all data protection regulations.</p>
            <ul className="text-sm space-y-2 list-disc list-inside">
              <li>We collect only the information necessary to process your order and provide support.</li>
              <li>
                Your data will not be sold or shared with third parties without your consent, except when required by
                law.
              </li>
              <li>
                You may unsubscribe from our promotional emails at any time by clicking the unsubscribe link in the
                footer of our messages.
              </li>
            </ul>
            <p className="text-sm mt-4">
              To cancel a subscription or request data removal, please send an email to:{" "}
              <a href="mailto:sflourcraft@gmail.com" className="text-blue-400 hover:underline">
                sflourcraft@gmail.com
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-sm">© 2025 Gourmet Combo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
