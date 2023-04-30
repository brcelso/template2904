"use client"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ExamplesNav } from "@/components/examples-nav"
import { Icons } from "@/components/icons"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
//import { PromoVideo } from "@/components/promo-video"
import { StyleSwitcher } from "@/components/style-switcher"
//import DashboardPage from "@/app/examples/dashboard/page"
import TradingViewWidget from "@/app/charts/page"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"



export default function IndexPage() {
  return (
    <>
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
      {/*<section className="space-y-6">
      <div className=" overflow-hidden rounded-lg container flex max-w-[64rem] flex-col items-center gap-4 text-center">

      <StyleSwitcher /> 
      <PageHeader>
        <PageHeaderHeading>This is the New Age.</PageHeaderHeading>
        <PageHeaderDescription>This is my page. Just Code.</PageHeaderDescription>
  </PageHeader> */}

          <h1 className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            This is the New Age.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            The future is Coding.
          </p>
      
      
          <TradingViewWidget />
          </div>
      
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
      <Calendar />
      {/*<Avatar>
      <AvatarImage src="https://github.com/brcelso.png" />
      <AvatarFallback>CN</AvatarFallback>
      </Avatar> */}
            <Link href="/docs" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>

            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }))}>
              <Icons.gitHub className="mr-2 h-4 w-4" />
              GitHub
            </Link>
            
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.vercel}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }))}>
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Vercel
            </Link>

            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.twitter}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }))}>
              <Icons.twitter className="mr-2 h-4 w-4" />
              Twitter
            </Link>

            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.whatsapp}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }))}>
              <Icons.whatsapp className="mr-2 h-4 w-4" />
              WhatsApp
            </Link>

            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.instagram}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }))}>
              <Icons.instagram className="mr-2 h-4 w-4" />
              Instagram
            </Link>
            
             </div>
            </section>

      <ExamplesNav className="[&>a:first-child]:text-primary" />
      
        </>
  )
}
        {/*<section className="overflow-hidden rounded-lg border bg-background shadow-xl">
        <TradingViewWidget />
              </section>*/}


        {/*<section className="space-y-8 overflow-hidden rounded-lg border-2 border-primary dark:border-muted md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
              </section> */}
              
        {/*<div className="overflow-hidden rounded-lg border bg-background shadow-xl">
          <DashboardPage />
        </div>*/}
      






