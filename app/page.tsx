"use client";
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function IndexPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/boy-meditation.jpg"
            alt="冥想背景"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-30 text-center">
          <div className="relative rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 backdrop-blur-md" />
            <div className="absolute inset-0 bg-white/5" />
            <div className="relative z-10 p-12 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-medium tracking-wide text-white mb-6 drop-shadow-lg"
              >
                开启您的冥想之旅
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-10 text-white font-medium tracking-wide drop-shadow-lg"
              >
                让内心平静，找回生活的平衡
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-emerald-500/20 blur-2xl transform scale-150" />
                <Link href="/meditation" className="relative z-10 inline-block">
                  <Button 
                    size="lg" 
                    className="text-lg px-12 py-6 bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
                  >
                    开始冥想
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">关于冥想小组</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">每周聚会</h3>
              <p className="text-muted-foreground">我们每周举行线上冥想聚会，共同练习和分享冥想体验。</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">专业指导</h3>
              <p className="text-muted-foreground">经验丰富的导师提供个性化指导，帮助您更好地理解和实践冥想。</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">社区支持</h3>
              <p className="text-muted-foreground">加入我们的社区，与志同道合的伙伴一起成长。</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-green-100 to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>冥想对初学者来说难吗？</AccordionTrigger>
              <AccordionContent>
                不会很难。我们为初学者准备了简单的引导冥想，通过循序渐进的方式帮助您掌握基本技巧。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>每天需要冥想多长时间？</AccordionTrigger>
              <AccordionContent>
                建议初学者从每天5-10分钟开始，随着练习逐渐增加时间。关键是保持规律性，而不是时间长短。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>如何加入冥想小组？</AccordionTrigger>
              <AccordionContent>
                您可以通过网站报名参加我们的线上活动，或者关注我们的社交媒体获取最新活动信息。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">加入我们</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            无论您是冥想新手还是有经验的练习者，我们都欢迎您加入我们的社区。
            一起探索内心的平静，提升生活品质。
          </p>
          <Button size="lg" className="text-lg px-8">
            立即加入
          </Button>
        </div>
      </section>
    </div>
  )
}
