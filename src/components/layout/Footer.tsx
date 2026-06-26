import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-primary-100 bg-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary-500" fill="currentColor" />
              <span className="font-display text-xl font-bold tracking-tight text-foreground">
                Project Shelter
              </span>
            </Link>
            <p className="text-primary-700 max-w-sm">
              Empowering stray animal welfare through transparent donations and blockchain technology.
              Every contribution makes a tangible difference.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-700">
              <li><Link href="/about" className="hover:text-primary-900">About Us</Link></li>
              <li><Link href="/animals" className="hover:text-primary-900">Meet the Animals</Link></li>
              <li><Link href="/donate" className="hover:text-primary-900">Donate</Link></li>
              <li><Link href="/dashboard/partner" className="hover:text-primary-900">Partner Shelters</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-primary-700">
              <li><Link href="#" className="hover:text-primary-900">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary-900">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary-900">Smart Contract Audit</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-100 text-center text-sm text-primary-500">
          © {new Date().getFullYear()} Project Shelter. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
