import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartPulse, ShieldCheck, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24 bg-background">
      {/* Aesthetic Hero Section */}
      <section className="relative overflow-hidden pt-32 lg:pt-48 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium mb-8 bg-muted/50 text-muted-foreground backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Project Shelter 2.0 is Live
          </div>
          <h1 className="mx-auto max-w-5xl font-display text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl text-balance bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            Save a Life. <br /> Earn a Legacy.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed text-balance">
            The first transparent donation platform for stray animal welfare. 
            Contribute to verified shelters and receive a unique, collectible NFT as immutable proof of your impact.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link href="/donate" className="w-full sm:w-auto">
              <Button size="lg" className="w-full rounded-full h-12 px-8 text-base">
                Donate Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/animals" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full rounded-full h-12 px-8 text-base">
                Meet the Animals
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Aesthetic Image Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
            <Image 
              src="/dog_portrait.png" 
              alt="Sad brown and white dog needing help" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-2xl font-display font-bold mb-2">Bella's Story</h3>
              <p className="text-white/80 line-clamp-2">Found injured near the highway. She needs immediate surgery and your support.</p>
              <Link href="/donate" className="inline-flex items-center mt-4 text-sm font-medium hover:underline">
                Read more <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group md:translate-y-12">
            <Image 
              src="/cat_portrait.png" 
              alt="Hopeful orange tabby cat" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-2xl font-display font-bold mb-2">Oliver's Journey</h3>
              <p className="text-white/80 line-clamp-2">Rescued from a fire, Oliver is showing incredible resilience and hope.</p>
              <Link href="/donate" className="inline-flex items-center mt-4 text-sm font-medium hover:underline">
                Read more <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Stats */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-24">
        <div className="max-w-5xl mx-auto border-y border-border py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-display font-bold tracking-tighter mb-2">1,248</div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Animals Helped</div>
          </div>
          <div className="text-center md:border-x border-border">
            <div className="text-5xl font-display font-bold tracking-tighter mb-2">$45K+</div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Donations Raised</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-display font-bold tracking-tighter mb-2">12</div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Verified Partners</div>
          </div>
        </div>
      </section>

      {/* Minimal NFT Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-5xl mx-auto rounded-3xl bg-muted/50 p-8 md:p-16 text-center">
          <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 tracking-tight">
            Your Impact, Minted Forever
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Every time you donate, a unique NFT is automatically minted directly to your wallet. 
            These aren't just digital art—they are verifiable proofs of your compassion.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
             <div className="p-4 rounded-2xl bg-background border">
               <div className="font-semibold text-lg mb-1">Bronze Tier</div>
               <div className="text-muted-foreground text-sm">$10 - $50</div>
             </div>
             <div className="p-4 rounded-2xl bg-background border">
               <div className="font-semibold text-lg mb-1">Silver Tier</div>
               <div className="text-muted-foreground text-sm">$51 - $200</div>
             </div>
             <div className="p-4 rounded-2xl bg-background border border-primary/50">
               <div className="font-semibold text-lg mb-1 text-primary">Gold Tier</div>
               <div className="text-muted-foreground text-sm">$201+</div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
