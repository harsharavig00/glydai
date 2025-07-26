import { motion } from 'framer-motion';
import { Section } from '../components/Section';

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Section className="py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container"
        >
          <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Case study cards */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Client Success Story</h3>
              <p className="text-gray-400">
                How we helped transform their business with innovative solutions...
              </p>
            </div>
            {/* Add more case studies */}
          </div>
        </motion.div>
      </Section>
    </div>
  );
}