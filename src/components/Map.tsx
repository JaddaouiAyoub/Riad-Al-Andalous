import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export const Map = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { isRtl } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 text-sm tracking-[0.3em] uppercase">
            {isRtl ? 'موقعنا' : 'Location'}
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4 mb-4"
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            {isRtl ? 'أين تجدنا' : 'Find Us'}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {isRtl
              ? 'في قلب المدينة العتيقة بمراكش'
              : 'In the heart of Marrakech Medina'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.1234567890123!2d-7.989012345678901!3d31.629012345678902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee1234567890%3A0x1234567890abcdef!2sMedina%2C%20Marrakech%2C%20Morocco!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%]"
              />
              
              {/* Map Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-72 bg-white rounded-2xl shadow-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Riad Al Andalous</h4>
                    <p className="text-sm text-slate-600">
                      12 Derb El Hammam, Medina, Marrakech
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    {isRtl ? 'العنوان' : 'Address'}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    12 Derb El Hammam<br />
                    Medina, Marrakech<br />
                    Morocco
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    {isRtl ? 'الهاتف' : 'Phone'}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    +212 524 123 456<br />
                    +212 661 234 567
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    {isRtl ? 'البريد' : 'Email'}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    contact@riadalandalous.ma<br />
                    reservations@riadalandalous.ma
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    {isRtl ? 'ساعات العمل' : 'Hours'}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {isRtl ? 'استقبال: 24/7' : 'Reception: 24/7'}<br />
                    {isRtl ? 'تسجيل الوصول: 14:00' : 'Check-in: 2:00 PM'}<br />
                    {isRtl ? 'تسجيل المغادرة: 12:00' : 'Check-out: 12:00 PM'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
