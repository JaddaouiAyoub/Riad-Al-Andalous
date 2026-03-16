import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Users, Bed, Mail, User, Check } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const roomTypes = [
  { value: 'royalSuite', label: 'Royal Suite' },
  { value: 'deluxeRoom', label: 'Deluxe Room' },
  { value: 'standardRoom', label: 'Standard Room' },
];

export const Booking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, isRtl } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    roomType: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-amber-600 text-sm tracking-[0.3em] uppercase">
              {isRtl ? 'الحجز' : 'Reservation'}
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4 mb-6"
              style={{ direction: isRtl ? 'rtl' : 'ltr' }}
            >
              {t('booking.title')}
            </h2>
            <p
              className="text-lg text-slate-600 mb-8"
              style={{ direction: isRtl ? 'rtl' : 'ltr' }}
            >
              {t('booking.subtitle')}
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                isRtl ? 'أفضل سعر مضمون' : 'Best Price Guaranteed',
                isRtl ? 'إفطار مجاني' : 'Free Breakfast',
                isRtl ? 'إلغاء مجاني' : 'Free Cancellation',
                isRtl ? 'دعم على مدار الساعة' : '24/7 Support',
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg">
              <p className="text-sm text-slate-500 mb-2">
                {isRtl ? 'هل لديك أسئلة؟' : 'Have questions?'}
              </p>
              <p className="text-lg font-bold text-slate-900">
                +212 524 123 456
              </p>
              <p className="text-sm text-amber-600">
                contact@riadalandalous.ma
              </p>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {t('booking.success')}
                  </h3>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-amber-600" />
                      {t('booking.name')}
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="rounded-xl"
                      placeholder={t('booking.name')}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-amber-600" />
                      {t('booking.email')}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="rounded-xl"
                      placeholder="email@example.com"
                    />
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="checkIn" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-amber-600" />
                        {t('booking.checkIn')}
                      </Label>
                      <Input
                        id="checkIn"
                        type="date"
                        required
                        value={formData.checkIn}
                        onChange={(e) => handleChange('checkIn', e.target.value)}
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="checkOut" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-amber-600" />
                        {t('booking.checkOut')}
                      </Label>
                      <Input
                        id="checkOut"
                        type="date"
                        required
                        value={formData.checkOut}
                        onChange={(e) => handleChange('checkOut', e.target.value)}
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Guests & Room Type */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="guests" className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-amber-600" />
                        {t('booking.guests')}
                      </Label>
                      <Select
                        value={formData.guests}
                        onValueChange={(value) => handleChange('guests', value)}
                      >
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="1-2" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <SelectItem key={num} value={String(num)}>
                              {num} {num === 1 ? 'person' : 'people'}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="roomType" className="flex items-center gap-2">
                        <Bed className="w-4 h-4 text-amber-600" />
                        {t('booking.roomType')}
                      </Label>
                      <Select
                        value={formData.roomType}
                        onValueChange={(value) => handleChange('roomType', value)}
                      >
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder={t('booking.selectRoom')} />
                        </SelectTrigger>
                        <SelectContent>
                          {roomTypes.map((room) => (
                            <SelectItem key={room.value} value={room.value}>
                              {room.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-xl py-6 text-lg"
                  >
                    {t('booking.submit')}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
