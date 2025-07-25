import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 bg-white/80 backdrop-blur-sm border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Icon name="Bot" size={16} className="text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">BOT WEBSITE</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Возможности</a>
          <a href="#constructor" className="text-gray-600 hover:text-gray-900 transition-colors">Конструктор</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Цены</a>
        </div>
        <Button variant="outline" className="hidden md:flex">
          Войти
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Создавайте ботов
              <br />
              без кода
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Современная платформа для создания умных чат-ботов. Визуальный конструктор, 
              интеграция с популярными мессенджерами и аналитика в реальном времени.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Создать бота
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              <Icon name="Eye" size={20} className="mr-2" />
              Посмотреть демо
            </Button>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border">
              <img 
                src="/img/c613795f-08f1-482b-ad06-42b68ece5d58.jpg" 
                alt="Bot Constructor Interface" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Bot Constructor Preview */}
      <section id="constructor" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Конструктор ботов</h2>
            <p className="text-xl text-gray-600">Создавайте сложных ботов простым перетаскиванием</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon name="MessageSquare" size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Диалоги и сценарии</CardTitle>
                      <CardDescription>Визуальный редактор для создания логики бота</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 border-purple-100 hover:border-purple-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Icon name="Zap" size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Интеграции</CardTitle>
                      <CardDescription>Подключение к Telegram, WhatsApp, VK и другим</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 border-pink-100 hover:border-pink-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Icon name="BarChart3" size={20} className="text-pink-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Аналитика</CardTitle>
                      <CardDescription>Отслеживание эффективности и пользователей</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                <Icon name="Settings" size={20} className="mr-2" />
                Открыть конструктор
              </Button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <Icon name="Bot" size={16} className="text-gray-600" />
                  </div>
                  <span className="font-semibold text-gray-900">Ваш бот</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-blue-500 text-white p-3 rounded-lg rounded-bl-none max-w-xs">
                    Привет! Я помогу вам выбрать услугу
                  </div>
                  <div className="bg-gray-100 text-gray-900 p-3 rounded-lg rounded-br-none max-w-xs ml-auto">
                    Расскажи о ваших услугах
                  </div>
                  <div className="bg-blue-500 text-white p-3 rounded-lg rounded-bl-none max-w-xs">
                    Конечно! У нас есть несколько вариантов...
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline" className="text-xs">
                    <Icon name="ThumbsUp" size={12} className="mr-1" />
                    Помогло
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    <Icon name="MessageSquare" size={12} className="mr-1" />
                    Написать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Возможности платформы</h2>
            <p className="text-xl text-gray-600">Всё необходимое для создания эффективных ботов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Blocks" size={24} className="text-white" />
                </div>
                <CardTitle>Блочный конструктор</CardTitle>
                <CardDescription>
                  Создавайте логику бота с помощью готовых блоков без программирования
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Brain" size={24} className="text-white" />
                </div>
                <CardTitle>ИИ-помощник</CardTitle>
                <CardDescription>
                  Встроенный искусственный интеллект для умных ответов и обучения
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Smartphone" size={24} className="text-white" />
                </div>
                <CardTitle>Мультиплатформенность</CardTitle>
                <CardDescription>
                  Один бот работает в Telegram, WhatsApp, VK и на вашем сайте
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Database" size={24} className="text-white" />
                </div>
                <CardTitle>База знаний</CardTitle>
                <CardDescription>
                  Загружайте документы и обучайте бота отвечать на вопросы клиентов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={24} className="text-white" />
                </div>
                <CardTitle>Аналитика в реальном времени</CardTitle>
                <CardDescription>
                  Отслеживайте конверсии, популярные запросы и поведение пользователей
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <CardTitle>Командная работа</CardTitle>
                <CardDescription>
                  Приглашайте коллег для совместной работы над ботами
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Начните создавать ботов уже сегодня
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам компаний, которые автоматизируют поддержку клиентов с помощью наших ботов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Icon name="Rocket" size={20} className="mr-2" />
              Создать первого бота
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на демо
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Icon name="Bot" size={16} className="text-white" />
                </div>
                <span className="text-xl font-bold">BOT WEBSITE</span>
              </div>
              <p className="text-gray-400">
                Создавайте умных ботов без кода
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Конструктор</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Интеграции</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аналитика</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BOT WEBSITE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;