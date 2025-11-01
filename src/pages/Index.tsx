import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    interests: '',
    budget: ''
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <nav className="fixed top-0 w-full z-50 glass-card border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Icon name="Gift" className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DreamGift AI
            </span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#quiz" className="text-sm font-medium hover:text-primary transition-colors">Анкета</a>
            <a href="#gifts" className="text-sm font-medium hover:text-primary transition-colors">Топ подарков</a>
            <a href="#partners" className="text-sm font-medium hover:text-primary transition-colors">Партнеры</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Идеальный подарок с помощью{' '}
                <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                  искусственного интеллекта
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Платформа использует AI для анализа предпочтений, интересов, хобби, возраста и социального статуса получателя для генерации идеальных индивидуальных подарков
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  Подобрать подарок
                </Button>
                <Button size="lg" variant="outline">
                  Узнать больше
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="glass-card p-8 rounded-3xl">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-2xl animate-float" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary to-pink-400 rounded-full opacity-20 blur-2xl animate-float" style={{ animationDelay: '3s' }} />
                <img 
                  src="https://cdn.poehali.dev/files/8b9eec69-82bb-4b37-9527-a336f27d2b48.jpg" 
                  alt="AI Gift Selection"
                  className="rounded-2xl w-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quiz" className="py-20 px-6 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Расскажите о получателе</h2>
            <p className="text-lg text-muted-foreground">Заполните анкету, и наш AI подберет идеальный подарок</p>
          </div>
          
          <Card className="glass-card border-0 shadow-2xl animate-scale-in">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя получателя</label>
                    <Input 
                      placeholder="Например, Мария"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="glass bg-white/80"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Возраст</label>
                    <Input 
                      placeholder="25"
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      className="glass bg-white/80"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Интересы и хобби</label>
                  <Textarea 
                    placeholder="Например: любит путешествия, фотографию, йогу и чтение книг"
                    rows={4}
                    value={formData.interests}
                    onChange={(e) => setFormData({...formData, interests: e.target.value})}
                    className="glass bg-white/80 resize-none"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Бюджет (₽)</label>
                  <Input 
                    placeholder="5000"
                    type="number"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="glass bg-white/80"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" size="lg">
                  <Icon name="Wand2" className="mr-2" size={20} />
                  Сгенерировать идеи подарков
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gifts" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Топ подарков</h2>
            <p className="text-lg text-muted-foreground">Самые популярные идеи от нашего AI</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Camera', title: 'Фотокамера Fujifilm', category: 'Техника', price: '45 000 ₽', gradient: 'from-blue-400 to-purple-500' },
              { icon: 'Plane', title: 'Путешествие в Грузию', category: 'Впечатления', price: '85 000 ₽', gradient: 'from-purple-400 to-pink-500' },
              { icon: 'Book', title: 'Коллекция книг', category: 'Образование', price: '8 500 ₽', gradient: 'from-pink-400 to-rose-500' },
              { icon: 'Watch', title: 'Умные часы Apple', category: 'Гаджеты', price: '38 000 ₽', gradient: 'from-rose-400 to-orange-500' },
              { icon: 'Palette', title: 'Мастер-класс живописи', category: 'Творчество', price: '12 000 ₽', gradient: 'from-orange-400 to-yellow-500' },
              { icon: 'Headphones', title: 'Наушники Sony WH-1000XM5', category: 'Аудио', price: '32 000 ₽', gradient: 'from-yellow-400 to-green-500' }
            ].map((gift, index) => (
              <Card 
                key={index} 
                className="glass-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${gift.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={gift.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{gift.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{gift.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{gift.price}</span>
                    <Button size="sm" variant="ghost" className="group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 via-purple-100/50 to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Преимущества</h2>
            <p className="text-lg text-muted-foreground">Почему выбирают DreamGift AI</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: 'Brain', title: 'AI-анализ', desc: 'Глубокое изучение предпочтений' },
              { icon: 'Zap', title: 'Быстро', desc: 'Идеи за 30 секунд' },
              { icon: 'Heart', title: 'Персонально', desc: 'Уникальные решения' },
              { icon: 'ShieldCheck', title: 'Надёжно', desc: 'Проверенные магазины' },
              { icon: 'TrendingUp', title: 'Актуально', desc: 'Свежие тренды 2025' }
            ].map((advantage, index) => (
              <Card 
                key={index}
                className="glass-card border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon as any} className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши партнёры</h2>
            <p className="text-lg text-muted-foreground">Работаем с лучшими магазинами России</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {['Wildberries', 'Ozon', 'Яндекс.Маркет', 'Lamoda', 'М.Видео'].map((partner, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-lg font-semibold text-muted-foreground">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас пользователи</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                name: 'Анна Соколова', 
                role: 'Москва', 
                text: 'Искала подарок мужу на годовщину. AI предложил идеальный вариант - виниловый проигрыватель! Он в восторге!',
                rating: 5
              },
              { 
                name: 'Дмитрий Петров', 
                role: 'Санкт-Петербург', 
                text: 'Сервис сэкономил мне часы раздумий. Подарок маме выбрал за 2 минуты, она была счастлива.',
                rating: 5
              },
              { 
                name: 'Екатерина Волкова', 
                role: 'Казань', 
                text: 'Впечатлена точностью рекомендаций! AI учёл все детали и предложил то, о чём я даже не думала.',
                rating: 5
              }
            ].map((review, index) => (
              <Card 
                key={index}
                className="glass-card border-0 shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-12 rounded-3xl shadow-2xl animate-scale-in">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">Остались вопросы? Мы всегда на связи!</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Mail" className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">hello@dreamgift.ai</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-pink-400 rounded-xl flex items-center justify-center">
                  <Icon name="Phone" className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <p className="font-semibold">+7 (495) 123-45-67</p>
                </div>
              </div>
            </div>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Ваше имя" className="glass bg-white/80" />
                <Input placeholder="Email" type="email" className="glass bg-white/80" />
              </div>
              <Textarea placeholder="Ваше сообщение" rows={4} className="glass bg-white/80 resize-none" />
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" size="lg">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="Gift" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DreamGift AI
              </span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 DreamGift AI. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
