import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Code, Bot, Database, Docker, GitBranch } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4 py-12">
          <h1 className="text-4xl font-bold">🚀 Разработка Скриптов и Ботов</h1>
          <p className="text-xl text-gray-300">Профессиональная разработка под любой запрос</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle className="text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies Section */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">💻 Технологии</CardTitle>
            <CardDescription className="text-gray-400">
              Стек технологий, который я использую в разработке
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-blue-500/10 text-blue-400">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pricing & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">💸 Стоимость</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Разработка от 10$</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">📱 Связь</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-400">Telegram: @theazot_lzt</p>
              <Button className="w-full" variant="outline">
                <MessageSquare className="w-4 h-4 mr-2" />
                Написать в Telegram
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Reviews Section */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">📝 Отзывы</CardTitle>
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