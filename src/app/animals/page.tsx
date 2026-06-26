"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Heart } from 'lucide-react';

const MOCK_ANIMALS = [
  { id: 1, name: 'Bella', type: 'Dog', urgency: 'Critical', shelter: 'City Hope', goal: 1000, raised: 450, desc: 'Found injured near highway. Needs surgery.', image: '/dog_portrait.png' },
  { id: 2, name: 'Oliver', type: 'Cat', urgency: 'Critical', shelter: 'Safe Haven', goal: 800, raised: 100, desc: 'Rescued from a fire, requires burn treatments.', image: '/cat_portrait.png' },
  { id: 3, name: 'Max', type: 'Dog', urgency: 'Medium', shelter: 'City Hope', goal: 500, raised: 400, desc: 'Senior dog needing ongoing medication.', image: '/dog_portrait.png' },
  { id: 4, name: 'Luna', type: 'Cat', urgency: 'High', shelter: 'Paws & Claws', goal: 300, raised: 150, desc: 'Requires urgent dental care and vaccinations.', image: '/cat_portrait.png' },
  { id: 5, name: 'Charlie', type: 'Dog', urgency: 'Low', shelter: 'Paws & Claws', goal: 200, raised: 50, desc: 'Needs basic checkup and neutering.', image: '/dog_portrait.png' },
  { id: 6, name: 'Milo', type: 'Cat', urgency: 'High', shelter: 'Safe Haven', goal: 400, raised: 320, desc: 'Feline leukemia treatment.', image: '/cat_portrait.png' },
];

export default function AnimalsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  const filteredAnimals = MOCK_ANIMALS.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          animal.shelter.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || animal.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
      <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-foreground mb-6">
          Meet the Animals
        </h1>
        <p className="text-lg text-muted-foreground">
          Every animal has a story. Browse through the profiles below, read their stories, and choose who you want to support today.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <Input 
            placeholder="Search by name or shelter..." 
            className="pl-10 h-12 rounded-full bg-muted/30"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          {['All', 'Dog', 'Cat'].map(type => (
            <Button 
              key={type} 
              variant={filterType === type ? 'default' : 'secondary'}
              className="rounded-full px-6"
              onClick={() => setFilterType(type)}
            >
              {type}
            </Button>
          ))}
          <Button variant="outline" className="rounded-full px-6 ml-auto md:ml-2">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Animals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {filteredAnimals.map((animal) => (
          <div key={animal.id} className="group relative flex flex-col rounded-3xl bg-card border shadow-sm transition-all hover:shadow-md overflow-hidden">
            <div className="relative aspect-square w-full overflow-hidden bg-muted">
              <Image 
                src={animal.image} 
                alt={animal.name} 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                {animal.urgency}
              </div>
            </div>
            
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold font-display">{animal.name}</h3>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground hover:text-red-500">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm font-medium text-muted-foreground mb-4">{animal.shelter} • {animal.type}</p>
              <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-1">
                {animal.desc}
              </p>
              
              <div className="space-y-3 mt-auto">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold">${animal.raised} <span className="text-muted-foreground font-normal">raised</span></span>
                  <span className="text-muted-foreground">Goal: ${animal.goal}</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-primary transition-all duration-1000" 
                    style={{ width: `${Math.min(100, (animal.raised / animal.goal) * 100)}%` }} 
                  />
                </div>
              </div>
              
              <Link href={`/donate?animal=${animal.id}`} className="mt-8 w-full block">
                <Button className="w-full rounded-full">Support {animal.name}</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {filteredAnimals.length === 0 && (
        <div className="text-center py-24 text-muted-foreground border border-dashed rounded-3xl mt-8">
          No animals found matching your search.
        </div>
      )}
    </div>
  );
}
