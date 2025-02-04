import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Code, Bot, Database, GitBranch } from "lucide-react";

const Index = () => {
  const services = [
    { icon: Code, title: "Парсеры", description: "Разработка эффективных парсеров для сбора данных" },
    { icon: GitBranch, title: "Чекеры", description: "Создание надежных чекеров для валидации данных" },
    { icon: Database, title: "Логеры", description: "Разработка систем логирования и мониторинга" },
    { icon: Bot, title: "Боты", description: "Создание ботов для различных платформ и задач" },
  ];

  const technologies = [
    "Python",
    "Golang",
    "Selenium",
    "Playwright",
    "Pyrogram",
    "Aiogram",
    "SQLAlchemy",
    "PostgreSQL",
    "Docker",
    "SupaBase",
    "Aiohttp",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section with Animation */}
        <div className="text-center space-y-4 py-12 animate-fade-in">
          <div className="inline-block p-2 bg-blue-500/10 rounded-lg mb-4">
            <Code className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Разработка Скриптов и Ботов
          </h1>
          <p className="text-xl text-gray-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Профессиональная разработка под любой запрос
          </p>
        </div>

        {/* Experience Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm animate-fade-in">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-400" />
              Технический стек
            </CardTitle>
            <CardDescription className="text-gray-400">
              Основные технологии, которые я использую в разработке
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact & Pricing Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                💸 Стоимость
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-400">от 10$</p>
              <p className="text-gray-400 mt-2">Индивидуальный подход к каждому проекту</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                📱 Связь
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-400">Telegram: @theazot_lzt</p>
              <Button 
                className="w-full bg-blue-500 hover:bg-blue-600 transition-colors"
                onClick={() => window.open('https://t.me/theazot_lzt', '_blank')}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Написать в Telegram
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Reviews Section */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm animate-fade-in">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              📝 Отзывы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">
              Отзывы доступны на площадке Lolz.live
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;