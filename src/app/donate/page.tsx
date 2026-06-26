"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShieldCheck, Info, Check, Lock } from 'lucide-react';

const DONATION_AMOUNTS = [10, 25, 50, 100, 250];

export default function DonatePage() {
  const [amount, setAmount] = useState<number | ''>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'fiat' | 'crypto'>('fiat');

  const handleAmountClick = (value: number) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount('');
  };

  const currentAmount = amount || Number(customAmount) || 0;

  // Determine NFT Tier based on amount
  let nftTier = 'None';
  let nftColor = 'text-muted-foreground border-border bg-transparent';
  if (currentAmount >= 10 && currentAmount <= 50) {
    nftTier = 'Bronze Supporter';
    nftColor = 'text-orange-500 border-orange-200 bg-orange-500/10';
  } else if (currentAmount >= 51 && currentAmount <= 200) {
    nftTier = 'Silver Guardian';
    nftColor = 'text-slate-400 border-slate-200 bg-slate-500/10';
  } else if (currentAmount > 200) {
    nftTier = 'Gold Savior';
    nftColor = 'text-yellow-500 border-yellow-300 bg-yellow-500/10';
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6 text-primary">
          <HeartIcon className="h-6 w-6" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight text-foreground mb-4">
          Make a Difference Today
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your donation goes directly to verified shelters. In return, you'll receive a unique NFT as a token of our gratitude and proof of your impact.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-7">
          <Card className="border-none shadow-xl bg-background/50 backdrop-blur-sm rounded-3xl overflow-hidden">
            <CardHeader className="bg-muted/30 pb-8 pt-8 px-8">
              <CardTitle className="text-2xl font-display">Donation Details</CardTitle>
              <CardDescription>Choose how much you'd like to contribute.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 p-8">
              <div>
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Select Amount</h3>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                  {DONATION_AMOUNTS.map((val) => (
                    <Button
                      key={val}
                      variant={amount === val ? 'default' : 'outline'}
                      onClick={() => handleAmountClick(val)}
                      className={`h-14 rounded-2xl text-lg transition-all ${amount === val ? 'shadow-md scale-[1.02]' : ''}`}
                    >
                      ${val}
                    </Button>
                  ))}
                </div>
                
                <div className="mt-6 flex items-center space-x-4">
                  <div className="flex-grow h-px bg-border"></div>
                  <span className="text-muted-foreground text-sm font-medium uppercase">Or Custom</span>
                  <div className="flex-grow h-px bg-border"></div>
                </div>

                <div className="relative mt-6">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-muted-foreground text-lg font-medium">$</span>
                  </div>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    className="pl-8 h-14 rounded-2xl text-lg bg-muted/30 border-transparent focus-visible:ring-primary focus-visible:border-primary transition-all"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                  />
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Payment Method</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setPaymentMethod('fiat')}
                    className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all ${
                      paymentMethod === 'fiat' 
                        ? 'border-primary bg-primary/5 text-primary' 
                        : 'border-border text-muted-foreground hover:bg-muted/50'
                    }`}
                  >
                    {paymentMethod === 'fiat' && (
                      <div className="absolute top-3 right-3">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                    <CreditCardIcon className="h-8 w-8 mb-3" />
                    <span className="font-medium">Credit Card</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('crypto')}
                    className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all ${
                      paymentMethod === 'crypto' 
                        ? 'border-primary bg-primary/5 text-primary' 
                        : 'border-border text-muted-foreground hover:bg-muted/50'
                    }`}
                  >
                    {paymentMethod === 'crypto' && (
                      <div className="absolute top-3 right-3">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                    <BitcoinIcon className="h-8 w-8 mb-3" />
                    <span className="font-medium">Crypto</span>
                  </button>
                </div>
              </div>
              
              <Button className="w-full h-14 rounded-full text-lg shadow-lg font-semibold mt-8">
                Continue to Payment
                <Lock className="ml-2 h-4 w-4 text-white/70" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-5">
          <Card className="sticky top-24 border-border/50 shadow-md rounded-3xl overflow-hidden bg-background">
            <CardHeader className="bg-muted/30 px-6 py-6 border-b border-border">
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                NFT Reward Preview
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="aspect-square rounded-2xl bg-muted/30 border border-border flex flex-col items-center justify-center p-8 text-center mb-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {currentAmount >= 10 ? (
                  <>
                    <div className={`p-4 rounded-full mb-4 ${nftColor.split(' ')[2]}`}>
                       <ShieldCheck className={`h-12 w-12 ${nftColor.split(' ')[0]}`} />
                    </div>
                    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold border ${nftColor}`}>
                      {nftTier}
                    </span>
                  </>
                ) : (
                  <>
                    <Info className="h-10 w-10 text-muted-foreground mb-4 opacity-50" />
                    <p className="text-sm text-muted-foreground max-w-[200px]">
                      Donate at least $10 to unlock your first NFT tier.
                    </p>
                  </>
                )}
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground border-b border-border pb-2">Summary</h4>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Donation Amount</span>
                  <span className="font-semibold text-foreground text-base">${currentAmount.toFixed(2)}</span>
                </div>
                {paymentMethod === 'crypto' && (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Estimated Gas</span>
                    <span className="font-semibold text-foreground text-base">~$0.05</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-6 flex items-start gap-3 p-4 rounded-2xl bg-muted/50 text-sm text-muted-foreground">
            <ShieldCheck className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
            <p>Your payment is secure. We use industry-standard encryption to protect your personal information.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function CreditCardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function BitcoinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  )
}
