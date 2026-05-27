"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, CalendarDays, Sparkles, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSizeMediumTitles"
        background="grid"
        cardStyle="inset"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Collection",
          id: "#products",
        },
        {
          name: "Quality",
          id: "#features",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Contact Us",
          id: "#contact",
        },
      ]}
      brandName="Mintu Jewellers"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDualMedia
      background={{
        variant: "radial-gradient",
      }}
      title="Mintu Jewellers: Timeless Elegance Since 1999"
      description="Discover exquisite Hallmark Gold and Silver Jewellery with trending designs. Your trusted jeweller in Bathinda for over two decades."
      tag="Experience Purity & Craftsmanship"
      tagAnimation="blur-reveal"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/silver-aesthetic-wallpaper-with-earrings_23-2149871684.jpg",
          imageAlt: "exquisite gold necklace intricate design",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/sensual-elegant-lady-woman-wearing-stylish-boho-top_291049-25.jpg",
          imageAlt: "closeup gold ring diamond sparkle",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/blueeyed-blonde-curly-woman-touches-hair-demonstrates-her-big-beautiful-white-earrings-attrac_197531-33582.jpg",
          imageAlt: "Blueeyed blonde curly woman touches hair and demonstrates her big beautiful white earrings Attrac",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-aesthetic-earrings_23-2149649133.jpg",
          imageAlt: "Still life of aesthetic earrings",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-aesthetic-silver-earrings_23-2149846572.jpg",
          imageAlt: "High angle aesthetic silver earrings",
        },
      ]}
      mediaAnimation="blur-reveal"
      rating={5}
      ratingText="Trusted by generations of customers"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Legacy of Trust"
      title="Hallmark Gold & Silver Since 1999"
      description="For over 25 years, Mintu Jewellers has been a beacon of trust and quality in Bathinda. We proudly offer 100% Hallmark Gold and certified Silver Jewellery, reflecting our unwavering commitment to purity and exquisite craftsmanship."
      subdescription="Our journey began in 1999, building a legacy based on integrity and customer satisfaction. Every piece from our collection is a testament to our dedication to excellence, ensuring you receive only the finest. Visit our corner showroom at Court Road, Near Bharat Book Store, Arya Samaj Chownk, Bathinda."
      icon={Sparkles}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-portrait-man-dressed-tuxedo_171337-5317.jpg"
      mediaAnimation="blur-reveal"
      imageAlt="hallmark gold stamp close up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={true}
      title="Trending Designs & Unmatched Purity"
      description="Explore a captivating range of jewellery, from the latest trending designs that capture contemporary aesthetics to timeless classics. Our collection includes intricate gold pieces, elegant silver adornments, and bespoke creations, all crafted with precision and passion."
      tag="Our Collections"
      tagAnimation="blur-reveal"
      accordionItems={[
        {
          id: "gold",
          title: "Exquisite Gold Jewellery",
          content: "Discover our stunning collection of 100% Hallmark certified gold pieces. From daily wear to grand bridal collections, each design radiates unmatched quality and elegance.",
        },
        {
          id: "silver",
          title: "Elegant Silver Creations",
          content: "Browse our range of exquisite silver jewellery, featuring both traditional and modern designs. Perfect for every occasion, our silver pieces are crafted with meticulous attention to detail.",
        },
        {
          id: "custom",
          title: "Bespoke Custom Designs",
          content: "Bring your unique vision to life with our custom jewellery design service. Our expert artisans work closely with you to create personalized pieces that tell your individual story.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-gold-chains-still-life_23-2149560613.jpg"
      mediaAnimation="blur-reveal"
      mediaPosition="right"
      imageAlt="trending gold jewellery designs"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "prod-1",
          name: "Classic Gold Wedding Ring",
          price: "₹ 55,000",
          imageSrc: "http://img.b2bpic.net/free-photo/expensive-golden-ring-with-white-powder-background_23-2150347035.jpg",
          imageAlt: "Classic Gold Wedding Ring",
        },
        {
          id: "prod-2",
          name: "Sterling Silver Charm Bracelet",
          price: "₹ 8,500",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-bride-s-hands_181624-40806.jpg",
          imageAlt: "Sterling Silver Charm Bracelet",
        },
        {
          id: "prod-3",
          name: "Diamond Solitaire Pendant",
          price: "₹ 1,20,000",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-small-silver-screws-brown-cardboard-surface_1308-189284.jpg",
          imageAlt: "Diamond Solitaire Pendant",
        },
        {
          id: "prod-4",
          name: "Antique Gold Temple Necklace",
          price: "₹ 3,50,000",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-gold-chain-jewellery-presentation_23-2149599109.jpg",
          imageAlt: "Antique Gold Temple Necklace",
        },
        {
          id: "prod-5",
          name: "Modern Geometric Gold Earrings",
          price: "₹ 32,000",
          imageSrc: "http://img.b2bpic.net/free-photo/expensive-golden-ring-with-white-powder-background_23-2150347031.jpg",
          imageAlt: "Modern Geometric Gold Earrings",
        },
        {
          id: "prod-6",
          name: "Personalized Custom-Designed Ring",
          price: "Price on Request",
          imageSrc: "http://img.b2bpic.net/free-photo/craftswoman-using-blow-torch_107420-65200.jpg",
          imageAlt: "Personalized Custom-Designed Ring",
        },
      ]}
      title="Discover Our Dazzling Collection"
      description="Dive into the world of Mintu Jewellers and find the perfect piece that resonates with your style. Our meticulously curated selection ensures quality and beauty in every ornament."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "metric-1",
          value: "25+",
          title: "Years of Legacy",
          description: "Trusted in Bathinda since 1999, serving generations with integrity.",
          icon: CalendarDays,
        },
        {
          id: "metric-2",
          value: "100%",
          title: "Hallmark Purity",
          description: "Guaranteed Hallmark Gold and certified Silver Jewellery for peace of mind.",
          icon: Award,
        },
        {
          id: "metric-3",
          value: "Thousands",
          title: "Happy Customers",
          description: "Our community of satisfied clients continues to grow, built on exceptional service.",
          icon: Users,
        },
      ]}
      title="Decades of Trust & Excellence"
      description="Our journey is marked by milestones of purity, craftsmanship, and the unwavering trust of our cherished customers. We are committed to upholding the highest standards in every aspect of our service."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Mintu Jewellers is my go-to for all occasions! The designs are stunning, the quality is impeccable, and the staff are incredibly knowledgeable and friendly. Truly the best jeweller in Bathinda."
      rating={5}
      author="Deepika Kumari, Loyal Customer"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/expressive-teenage-girl-striped-blouse_176420-32022.jpg",
          alt: "indian woman portrait smiling professional",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-indian-man_1098-18167.jpg",
          alt: "indian man portrait smiling confident",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-woman-cafe_273609-12706.jpg",
          alt: "young indian woman smiling natural",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-man-woman-dressed-yellow_273609-23103.jpg",
          alt: "indian couple smiling happy together",
        },
        {
          src: "http://img.b2bpic.net/free-photo/expressive-teenage-girl-striped-blouse_176420-32024.jpg",
          alt: "An expressive teenage girl in a striped blouse",
        },
      ]}
      ratingAnimation="reveal-blur"
      avatarsAnimation="reveal-blur"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",
          title: "What is Hallmark Gold and why is it important?",
          content: "Hallmark Gold guarantees the purity of gold, certified by the Bureau of Indian Standards (BIS). All our gold jewellery is 100% hallmarked, ensuring authenticity and trust in every purchase.",
        },
        {
          id: "faq-2",
          title: "Do you offer custom jewellery designs?",
          content: "Yes, we specialize in bespoke design services. Share your vision with us, and our expert designers and artisans will collaborate with you to create unique, personalized pieces that perfectly match your dreams.",
        },
        {
          id: "faq-3",
          title: "What is your return and exchange policy?",
          content: "We offer a flexible return and exchange policy to ensure your complete satisfaction. Please visit our showroom or contact us directly at 7986599836 for detailed information regarding our terms and conditions.",
        },
      ]}
      sideTitle="Your Questions, Our Answers"
      sideDescription="We're here to provide clarity on your jewellery queries, from hallmarking to care and custom orders, ensuring a seamless shopping experience."
      faqsAnimation="reveal-blur"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Visit Us in Bathinda"
      title="Experience Mintu Jewellers Firsthand"
      description="We invite you to our corner showroom on Court Road, Bathinda, to explore our extensive collection and receive personalized service. For any inquiries, feel free to call us at 7986599836."
      inputPlaceholder="Your Name"
      buttonText="Send Inquiry"
      termsText="By sending an inquiry, you agree to our privacy policy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Mintu Jewellers"
      columns={[
        {
          title: "Our Store",
          items: [
            {
              label: "Home",
              href: "#home",
            },
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Collections",
              href: "#products",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Hallmarking",
              href: "#features",
            },
            {
              label: "Custom Designs",
              href: "#features",
            },
            {
              label: "Repairs & Maintenance",
              href: "#",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Call Us: 7986599836",
              href: "tel:+917986599836",
            },
            {
              label: "Our Location",
              href: "https://maps.app.goo.gl/YourGoogleMapsLink",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Mintu Jewellers. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
