import React, { useState, useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Grazie per averci contattato! Ti risponderemo il prima possibile.',
    });
    
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    
    // In a real application, you would send the form data to a backend here
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`py-20 bg-black transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contattaci</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">
            Siamo sempre disponibili per discutere le tue esigenze e trovare la soluzione più adatta al tuo business.
            Compila il form sottostante e ti risponderemo il prima possibile.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">I Nostri Contatti</h3>
              <p className="text-gray-200 mb-8">
                Preferisci parlare direttamente con noi? Contattaci tramite i seguenti canali.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:info@blackaiagency.com" 
                  className="flex items-center text-white hover:text-gray-200 transition-colors"
                >
                  <Mail className="mr-3" size={20} />
                  <span>info@blackaiagency.com</span>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-gray-200 transition-colors"
                >
                  <Linkedin className="mr-3" size={20} />
                  <span>Black AI Agency</span>
                </a>
              </div>
            </div>
            
            <div className="md:col-span-3 p-8">
              {formStatus.submitted && formStatus.success ? (
                <div className="bg-green-900 bg-opacity-20 border border-green-700 text-green-400 rounded-md p-4 mb-6">
                  {formStatus.message}
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
                      placeholder="La tua email"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Messaggio
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-white resize-none"
                      placeholder="Il tuo messaggio"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Invia Messaggio
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};