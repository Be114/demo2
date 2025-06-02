'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Solutions = () => {
  const solutionCategories = [
    {
      id: 'dx',
      title: 'デジタル変革ソリューション',
      description: '企業のDXを包括的に支援し、競争力向上を実現',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      solutions: [
        'DXコンサルティング',
        'システム現代化',
        'クラウド移行支援',
        'データ活用・AI導入'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'industry',
      title: '業界特化ソリューション',
      description: '各業界の特性に応じたカスタマイズされたソリューション',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      solutions: [
        '製造業向けスマートファクトリー',
        '金融業向けデジタルバンキング',
        '小売業向けオムニチャネル',
        '公共・自治体向けデジタル行政'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'technology',
      title: '技術ソリューション',
      description: '最新技術を活用した革新的なソリューション',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      solutions: [
        'クラウドインフラ構築',
        'セキュリティ対策',
        'IoT・エッジコンピューティング',
        '5G活用ソリューション'
      ],
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="solutions" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            ソリューション
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            NTTコムウェアは、様々な業界・分野に対応した
            <br className="hidden md:block" />
            包括的なソリューションを提供しています
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {solutionCategories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <p className="text-white/90">{category.description}</p>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {category.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {solution}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link
                    href={`#${category.id}-details`}
                    className="inline-flex items-center text-primary hover:text-secondary font-medium transition-colors duration-200"
                  >
                    詳細を見る
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              お客様の課題に最適なソリューションをご提案
            </h3>
            <p className="text-gray-600 mb-6">
              豊富な実績と最新技術を組み合わせ、お客様のビジネス成長をサポートします
            </p>
            <Link
              href="#contact"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200 inline-block"
            >
              ご相談・お問い合わせ
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solutions