import { motion } from 'framer-motion'
import NeedHelp from '../components/shared/NeedHelp'
import Copyright from '../components/shared/Copyright'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const massageServices = [
  {
    img: '/remedial-massage.png',
    title: 'Remedial Massage',
    desc: 'Focuses on fixing underlying issues, whether they are related to muscle injuries, postural imbalances, or chronic pain. Offering long-term benefits that improve recovery and mobility, reduced pain and restore proper function and range of motion.',
  },
  {
    img: '/deep-tissue.png',
    title: 'Deep Tissue',
    desc: 'Uses a slow, intense pressure to focus on fascia, knots and adhesions, designed to target deeper layers of muscle and connective tissue. By working on deeper muscle layers, it can release long-held muscle tension and provide lasting relief. Some people may experience soreness or discomfort after a deep tissue massage, similar to the feeling of muscle soreness after exercise.',
  },
  {
    img: '/sports-specific.png',
    title: 'Sports Specific',
    desc: 'Uses incredibly effective tools for athletes and individuals involved in physical activity, helping improve flexibility, strength, and overall muscle health. Sports massage is aimed at preventing injury, enhancing performance, and reducing recovery time after physical exertion.',
  },
  {
    img: '/massage_pregnancy.png',
    title: 'Pregnancy Massage',
    desc: 'Is a specialised form of massage therapy designed for expectant mothers. Side laying, to ensure comfort and safety, gentle strokes and kneading are applied to relieve common pregnancy discomforts such as pain caused by posture changes and swollen feet. Regulate hormones and enhancing blood flow promotes better oxygen flow for both mother and baby. (Recommended after the first trimester).',
  },
  {
    img: '/lymphatic.png',
    title: 'Lymphatic Drainage',
    desc: 'Is a gentle, yet powerful technique aimed at stimulating the lymphatic system to encourage the removal of toxins, waste, and excess fluids from the body. It is particularly useful in boosting immune function, reducing swelling, and enhancing overall health. Great for people pre/post surgery and those living sedentary lifestyles.',
  },
  {
    img: '/massage_stones.png',
    title: 'Aromatherapy & Hot Stones',
    desc: 'Is a holistic therapy that blends the benefits of massage with the therapeutic properties of essential oils. Hot stones work to ease muscle tension and pain, while essential oils target specific physical or emotional concerns. The combination of aromatherapy and heat promotes a deep sense of relaxation, calming both the body and mind.',
  },
  {
    img: '/infant-toddler.png',
    title: 'Infant/Child Massage',
    desc: 'Helps you incorporate nurturing touch into your daily routine. Techniques of soft, gentle strokes aim to strengthen the bond between child and parent by encouraging the release of oxytocin. A beautiful ritual to promote relaxation by reducing stress for both, whilst boosting the child\'s emotional security and trust. This massage stimulates sensory development, relieves discomfort from gas, colic, and constipation and supports muscle development and flexibility. (Recommended from 2 weeks, once umbilical stump has fallen off).',
  },
  {
    img: '/indian-head-massage.png',
    title: 'Indian Head Massage',
    desc: 'Is an ancient and powerful healing practice with deep roots in Ayurvedic tradition. By focusing on the head, neck, shoulders and upper back, it helps to relieve stress, improve circulation, support hair health, and boost overall well-being. The practice encourages relaxation and a sense of well-being, which, according to Ayurvedic principles, promotes mental clarity, emotional balance, and physical health.',
  },
  {
    img: '/thai-massage.png',
    title: 'Thai Massage',
    desc: 'Is an ancient healing technique that combines elements of stretching, gentle rhythmic pressure, and musculoskeletal manipulation to promote health and relaxation. Performed on a soft mattress on the floor, the yoga-like stretches increase flexibility, improve range of motion, and aligns posture. The calming nature of this massage lowers stress levels, balances energy, and encourages mental clarity.',
  },
  {
    img: '/aged-care.png',
    title: 'Aged Care',
    desc: 'Treatments improve the quality of life for elderly individuals, particularly those in nursing or aged care homes. Promoting a sense of calm by reducing stress and agitation and alleviating feelings of loneliness, depression, and anxiety. Not only physical comfort, but in providing mental and emotional peace for elderly residents.',
  },
  {
    img: '/paliative-care.png',
    title: 'Palliative Care',
    desc: 'Treatments aimed at improving the quality of life for those with serious, chronic, or terminal conditions, focusing on comfort, symptom management, and emotional support. Eases pain and discomfort, especially for individuals with limited mobility or chronic conditions whilst maintaining a sense of dignity and independence.',
  },
  {
    img: '/bereavement-massage.png',
    title: 'Bereavement Massage',
    desc: 'Is a peaceful massage for people in their early days, weeks and months of grieving. This type of massage can be a powerful component of self-care in meeting you right where you are during the stressful and sensitive time in your grief journey.',
  },
]

export default function Massage() {
  return (
    <div className="page-scroll w-full h-full relative" style={{ overflowX: 'hidden' }}>
      <div className="pt-10 md:pt-16 px-4 md:px-12 max-w-6xl mx-auto">
        
        <motion.div
          {...fadeUp(0)}
          className="sketched-border max-w-2xl mx-auto mb-12 md:mb-16 p-3 md:p-4 text-center select-none bg-white/40 shadow-sm relative transform -rotate-1"
        >
          <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-black/10"></div>
          <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-black/10"></div>
          
          <h2 className="font-handwriting text-3xl sm:text-4xl font-bold mb-4 text-[var(--color-ink)]">Massage Treatments</h2>
          
          <div className="grid grid-cols-3 divide-x-2 divide-dashed divide-black/30 font-typewriter">
            <div className="py-2 flex flex-col justify-center">
              <span className="text-[10px] sm:text-xs tracking-wider md:tracking-widest uppercase mb-1 opacity-70">60 Min</span>
              <span className="text-xl sm:text-2xl font-bold">£80</span>
            </div>
            <div className="py-2 flex flex-col justify-center bg-[var(--color-ink)] text-white/90 font-bold transform scale-105 rounded-sm shadow-md">
              <span className="text-[10px] sm:text-xs tracking-wider md:tracking-widest uppercase mb-1 opacity-80">90 Min</span>
              <span className="text-xl sm:text-2xl font-black">£110</span>
            </div>
            <div className="py-2 flex flex-col justify-center">
              <span className="text-[10px] sm:text-xs tracking-wider md:tracking-widest uppercase mb-1 opacity-70">120 Min</span>
              <span className="text-xl sm:text-2xl font-bold">£130</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-16 gap-x-6 md:gap-x-10 mb-20 relative">
          {massageServices.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp(i * 0.05)}
              className="flex flex-col text-center items-center"
            >
              <div
                className="w-full sketched-border mb-5 bg-white/50 p-2 transform transition-transform hover:scale-105 hover:rotate-1 duration-300"
                style={{ height: '200px' }}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover mix-blend-multiply sepia-[0.3]"
                  loading="lazy"
                />
              </div>

              <h3 className="font-handwriting text-3xl font-bold mb-3 text-[var(--color-accent)]">
                {s.title}
              </h3>

              <p className="font-serif text-sm md:text-[1.05rem] leading-relaxed opacity-90 text-left">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 mb-12 border-t border-black/10 pt-10">
        <h3 className="font-handwriting text-3xl md:text-4xl mb-4 text-center">Questions?</h3>
        <NeedHelp />
      </div>

      <div className="opacity-60 pb-8">
        <Copyright />
      </div>
    </div>
  )
}
