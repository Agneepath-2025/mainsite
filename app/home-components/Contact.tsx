import Link from 'next/link';
import { Mail, Instagram, Linkedin, Twitter, Phone } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:contact@agneepath.com',
      color: '#d74f2a',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com',
      color: '#9a1b1f',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      color: '#2c355d',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com',
      color: '#242a4a',
    },
    {
      name: 'Phone',
      icon: Phone,
      href: 'tel:+919876543210',
      color: '#2f2f2f',
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#242a4a' }}>
          Get In Touch
        </h2>
        <p className="text-base sm:text-lg px-4" style={{ color: '#2c355d' }}>
          Connect with us on social media or reach out directly
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 sm:gap-8 flex-wrap px-4">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:shadow-lg p-4 sm:p-6 rounded-full"
              style={{
                backgroundColor: '#f3ebe0',
                border: `2px solid ${link.color}`,
              }}
              title={link.name}
            >
              <Icon size={28} className="sm:w-8 sm:h-8" style={{ color: link.color }} />
            </Link>
          );
        })}
      </div>

      <div className="text-center mt-8 sm:mt-12 px-4">
        <p style={{ color: '#2f2f2f' }} className="text-xs sm:text-sm">
          © 2026 Agneepath Sports Fest. All rights reserved.
        </p>
      </div>
    </div>
  );
}
