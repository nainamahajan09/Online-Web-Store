import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import FeaturedBooks from '@/components/home/FeaturedBooks';
import BestsellersSection from '@/components/home/BestsellersSection';
import NewsletterSection from '@/components/home/NewsletterSection';

const Index: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <FeaturedBooks />
      <BestsellersSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
