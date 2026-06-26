import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-100 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-primary-500" fill="currentColor" />
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Project Shelter
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/about" className="text-primary-700 hover:text-primary-900 transition-colors">
            About
          </Link>
          <Link href="/animals" className="text-primary-700 hover:text-primary-900 transition-colors">
            Animals
          </Link>
          <Link href="/dashboard/user" className="text-primary-700 hover:text-primary-900 transition-colors">
            Dashboard
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/donate">
            <Button variant="default">Donate Now</Button>
          </Link>
          {/* Web3 Connect Button Placeholder */}
          <Button variant="outline" className="hidden sm:flex">
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
}
