import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShieldCheck, Globe, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Mission Section */}
      <section className="bg-primary-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-6 text-balance">
            Our Mission is Simple: <br/> <span className="text-primary-500">Save Them All.</span>
          </h1>
          <p className="text-xl text-primary-700 leading-relaxed text-balance">
            We believe that every stray animal deserves a fighting chance. 
            By merging the transparency of Web3 with grassroots animal welfare, 
            we're building a future where every donation counts, is tracked, and makes a real difference.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-display">Why We're Different</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, title: '100% Transparent', desc: 'Blockchain technology ensures you see exactly where your money goes.' },
            { icon: Heart, title: 'Direct to Shelters', desc: 'No middlemen. Funds are routed directly to verified shelter wallets.' },
            { icon: Users, title: 'Community Driven', desc: 'Donors, shelters, and volunteers working together in a decentralized ecosystem.' },
            { icon: Globe, title: 'Immutable Proof', desc: 'Your impact is minted as an NFT, creating a permanent record of your kindness.' }
          ].map((val, i) => (
            <Card key={i} className="text-center py-6 border-none shadow-none bg-transparent">
              <CardContent className="flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                  <val.icon className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3">{val.title}</h3>
                <p className="text-primary-600">{val.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Transparency / How Funds are Used */}
      <section className="bg-secondary-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 bg-secondary-200 rounded-3xl overflow-hidden shadow-xl">
               <div className="absolute inset-0 flex items-center justify-center text-secondary-600 font-display font-medium text-lg">
                 Fund Allocation Chart Placeholder
               </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">
                Where Does The Money Go?
              </h2>
              <p className="text-lg text-primary-700 mb-8 leading-relaxed">
                Trust is earned through transparency. We utilize smart contracts to ensure that 
                your donations are utilized exactly as intended.
              </p>
              <ul className="space-y-6">
                {[
                  { percentage: '85%', label: 'Direct Animal Care (Medical, Food, Shelter)' },
                  { percentage: '10%', label: 'Platform Maintenance & Gas Fees' },
                  { percentage: '5%', label: 'Emergency Reserve Fund' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-2xl font-bold font-display text-primary-500 w-20">{item.percentage}</span>
                    <span className="text-lg text-primary-800 font-medium">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Contact */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
         <h2 className="text-3xl font-bold font-display mb-6">Join the Movement</h2>
         <p className="text-lg text-primary-700 mb-8">
           We are a passionate team of developers, animal lovers, and blockchain enthusiasts. 
           If you run a shelter or want to help, we'd love to hear from you.
         </p>
         <button className="bg-primary-500 text-white font-medium px-8 py-3 rounded-full hover:bg-primary-600 transition-colors shadow-soft">
           Contact Us
         </button>
      </section>
    </div>
  );
}
