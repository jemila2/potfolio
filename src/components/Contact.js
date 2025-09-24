import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showEmailLink, setShowEmailLink] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    // Generate and open the email link immediately
    const subject = `New message from ${formData.name} - Portfolio`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent from your portfolio website
    `.trim();

    const mailtoLink = `mailto:jemilaabubakar9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Try multiple methods to open the email client
    let emailOpened = false;
    
    // Method 1: Create and click a link element
    const link = document.createElement('a');
    link.href = mailtoLink;
    link.style.display = 'none';
    document.body.appendChild(link);
    
    try {
      link.click();
      emailOpened = true;
    } catch (error) {
      console.error('Method 1 failed:', error);
    }
    document.body.removeChild(link);
    
    // Method 2: Use window.open if first method failed
    if (!emailOpened) {
      try {
        window.open(mailtoLink, '_blank');
        emailOpened = true;
      } catch (error) {
        console.error('Method 2 failed:', error);
      }
    }
    
    // Method 3: Use window.location as fallback
    if (!emailOpened) {
      try {
        window.location.href = mailtoLink;
        emailOpened = true;
      } catch (error) {
        console.error('Method 3 failed:', error);
      }
    }
    
    // If all methods failed, show the manual link
    if (!emailOpened) {
      setShowEmailLink(true);
    }
    
    // Reset loading state and form
    setTimeout(() => {
      setIsLoading(false);
      if (emailOpened) {
        setFormData({ name: '', email: '', message: '' });
      }
    }, 2000);
  };

  const generateEmailLink = () => {
    const subject = `New message from ${formData.name} - Portfolio`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent from your portfolio website
    `.trim();

    return `mailto:jemilaabubakar9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const copyEmailToClipboard = () => {
    const emailText = `Subject: New message from ${formData.name} - Portfolio

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Please send this to jemilaabubakar9@gmail.com`;

    navigator.clipboard.writeText(emailText).then(() => {
      alert('Email content copied to clipboard! Please paste it into your email client and send to jemilaabubakar9@gmail.com');
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to chat? Feel free to reach out using the form below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-indigo-600 dark:text-indigo-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:jemilaabubakar9@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600">
                    jemilaabubakar9@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-indigo-600 dark:text-indigo-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+2349050367136" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600">
                    +234 9050367136
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-indigo-600 dark:text-indigo-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Abuja Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-indigo-600 dark:text-indigo-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <a href="https://wa.me/2349050367136" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600">
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            {!showEmailLink ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition-colors disabled:bg-indigo-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Opening Email...' : 'Send Message'}
                </button>
              </form>
            ) : (
              <div className="text-center p-6 border-2 border-dashed border-indigo-300 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Email client couldn't open automatically</h3>
                <p className="text-gray-600 mb-4">Please use one of the options below:</p>
                
                <div className="space-y-3">
                  <a 
                    href={generateEmailLink()} 
                    className="block w-full px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition-colors"
                  >
                    Click to Open Email
                  </a>
                  
                  <button 
                    onClick={copyEmailToClipboard}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition-colors"
                  >
                    Copy Email Content
                  </button>
                  
                  <button 
                    onClick={() => setShowEmailLink(false)}
                    className="w-full px-6 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md"
                  >
                    Edit Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;