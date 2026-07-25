import { motion } from 'framer-motion'
import NeedHelp from '../components/shared/NeedHelp'
import Copyright from '../components/shared/Copyright'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: 'easeOut' },
})

const massageServices = [
  {
    img: '/service_massage.png',
    title: 'Remedial Massage',
    desc: 'Focuses on fixing underlying issues, whether they are related to muscle injuries, postural imbalances, or chronic pain. Offering long-term benefits that improve recovery and mobility, reduced pain and restore proper function and range of motion.',
  },
  {
    img: '/massage_stones.png',
    title: 'Deep Tissue',
    desc: 'Uses a slow, intense pressure to focus on fascia, knots and adhesions, designed to target deeper layers of muscle and connective tissue. By working on deeper muscle layers, it can release long-held muscle tension and provide lasting relief. Some people may experience soreness or discomfort after a deep tissue massage, similar to the feeling of muscle soreness after exercise.',
  },
  {
    img: '/service_training.png',
    title: 'Sports Specific',
    desc: 'Uses incredibly effective tools for athletes and individuals involved in physical activity, helping improve flexibility, strength, and overall muscle health. Sports massage is aimed at preventing injury, enhancing performance, and reducing recovery time after physical exertion.',
  },
  {
    img: '/massage_pregnancy.png',
    title: 'Pregnancy Massage',
    desc: 'Is a specialised form of massage therapy designed for expectant mothers. Side laying, to ensure comfort and safety, gentle strokes and kneading are applied to relieve common pregnancy discomforts such as pain caused by posture changes and swollen feet. Regulate hormones and enhancing blood flow promotes better oxygen flow for both mother and baby. (Recommended after the first trimester).',
  },
  {
    img: '/service_seated.png',
    title: 'Lymphatic Drainage',
    desc: 'Is a gentle, yet powerful technique aimed at stimulating the lymphatic system to encourage the removal of toxins, waste, and excess fluids from the body. It is particularly useful in boosting immune function, reducing swelling, and enhancing overall health. Great for people pre/post surgery and those living sedentary lifestyles.',
  },
  {
    img: '/service_massage.png',
    title: 'Aromatherapy And Hot Stones',
    desc: 'Is a holistic therapy that blends the benefits of massage with the therapeutic properties of essential oils. Hot stones work to ease muscle tension and pain, while essential oils target specific physical or emotional concerns. The combination of aromatherapy and heat promotes a deep sense of relaxation, calming both the body and mind.',
  },
  {
    img: '/service_beauty.png',
    title: 'Infant/Toddler/Child Massage',
    desc: 'Helps you incorporate nurturing touch into your daily routine. Techniques of soft, gentle strokes aim to strengthen the bond between child and parent by encouraging the release of oxytocin. A beautiful ritual to promote relaxation by reducing stress for both, whilst boosting the child\'s emotional security and trust. This massage stimulates sensory development, relieves discomfort from gas, colic, and constipation and supports muscle development and flexibility. (Recommended from 2 weeks, once umbilical stump has fallen off).',
  },
  {
    img: '/service_seated.png',
    title: 'Indian Head Massage',
    desc: 'Is an ancient and powerful healing practice with deep roots in Ayurvedic tradition. By focusing on the head, neck, shoulders and upper back, it helps to relieve stress, improve circulation, support hair health, and boost overall well-being. The practice encourages relaxation and a sense of well-being, which, according to Ayurvedic principles, promotes mental clarity, emotional balance, and physical health.',
  },
  {
    img: '/service_beauty.png',
    title: 'Thai Massage',
    desc: 'Is an ancient healing technique that combines elements of stretching, gentle rhythmic pressure, and musculoskeletal manipulation to promote health and relaxation. Performed on a soft mattress on the floor, the yoga-like stretches increase flexibility, improve range of motion, and aligns posture. The calming nature of this massage lowers stress levels, balances energy, and encourages mental clarity.',
  },
  {
    img: '/service_beauty.png',
    title: 'Aged Care',
    desc: 'Treatments improve the quality of life for elderly individuals, particularly those in nursing or aged care homes. Promoting a sense of calm by reducing stress and agitation and alleviating feelings of loneliness, depression, and anxiety. Not only physical comfort, but in providing mental and emotional peace for elderly residents.',
  },
  {
    img: '/service_massage.png',
    title: 'Palliative Care',
    desc: 'Treatments aimed at improving the quality of life for those with serious, chronic, or terminal conditions, focusing on comfort, symptom management, and emotional support. Eases pain and discomfort, especially for individuals with limited mobility or chronic conditions whilst maintaining a sense of dignity and independence.',
  },
  {
    img: '/service_beauty.png',
    title: 'Bereavement Massage',
    desc: 'Is a peaceful massage for people in their early days, weeks and months of grieving. This type of massage can be a powerful component of self-care in meeting you right where you are during the stressful and sensitive time in your grief journey.',
  },
]

export default function Massage() {
  return (
    <div
      className="page-scroll w-full h-full"
      style={{ background: '#000', fontFamily: 'var(--font-family-primary)' }}
    >
      <div className="pt-14 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div
          {...fadeUp(0)}
          className="grid grid-cols-3 border border-sky-500 max-w-3xl mx-auto mb-16 text-center select-none"
          style={{ background: '#000' }}
        >
          <div className="py-4 border-r border-sky-500 flex flex-col justify-center bg-black text-white">
            <span className="text-sm font-semibold tracking-wider uppercase mb-1">60 Minute</span>
            <span className="text-2xl font-bold">£80</span>
          </div>
          <div className="py-4 border-r border-sky-500 flex flex-col justify-center bg-[#0ea5e9] text-black">
            <span className="text-sm font-bold tracking-wider uppercase mb-1">90 Minutes</span>
            <span className="text-2xl font-black">£110</span>
          </div>
          <div className="py-4 flex flex-col justify-center bg-black text-white">
            <span className="text-sm font-semibold tracking-wider uppercase mb-1">120 Minutes</span>
            <span className="text-2xl font-bold">£130</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 mb-20">
          {massageServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center text-center"
            >
              <div
                className="w-full overflow-hidden mb-5 border border-sky-500/10 rounded-lg"
                style={{ height: '220px' }}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <h3
                className="text-xl font-medium mb-3"
                style={{ color: '#ffffff', letterSpacing: '0.02em' }}
              >
                {s.title}
              </h3>

              <p
                className="text-sm font-light leading-relaxed"
                style={{ color: 'var(--color-muted)', lineHeight: 1.8 }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-20">
        <NeedHelp />
      </div>

      <Copyright />
    </div>
  )
}
