import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageSquare, Code, Bot, Database, GitBranch, Github } from "lucide-react";

const Index = () => {
  const services = [
    { 
      icon: Code, 
      title: "Парсеры", 
      description: "Разработка эффективных парсеров для сбора данных",
      projects: [
        {
          title: "Web Scraper Pro",
          description: "Высокопроизводительный парсер с поддержкой прокси и многопоточности",
          link: "https://github.com/TheMishaBabich/web-scraper-pro"
        }
      ]
    },
    { 
      icon: GitBranch, 
      title: "Чекеры", 
      description: "Создание надежных чекеров для валидации данных",
      projects: [
        {
          title: "Multi Checker",
          description: "Универсальный чекер с поддержкой различных сервисов",
          link: "https://github.com/TheMishaBabich/multi-checker"
        }
      ]
    },
    { 
      icon: Database, 
      title: "Логеры", 
      description: "Разработка систем логирования и мониторинга",
      projects: [
        {
          title: "Advanced Logger",
          description: "Система логирования с веб-интерфейсом и аналитикой",
          link: "https://github.com/TheMishaBabich/advanced-logger"
        }
      ]
    },
    { 
      icon: Bot, 
      title: "Боты", 
      description: "Создание ботов для различных платформ и задач",
      projects: [
        {
          title: "Telegram Bot Framework",
          description: "Фреймворк для быстрой разработки Telegram ботов",
          link: "https://github.com/TheMishaBabich/tg-bot-framework"
        }
      ]
    },
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
          <div className="flex justify-center gap-4 mt-6">
            <Button 
              variant="outline" 
              className="hover:bg-blue-500/10"
              onClick={() => window.open('https://github.com/TheMishaBabich', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button 
              variant="outline"
              className="hover:bg-blue-500/10"
              onClick={() => window.open('https://lolz.live/threads/7966273/#post-53192983', '_blank')}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Отзывы
            </Button>
          </div>
        </div>

        {/* Experience Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card 
                  className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
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
              </DialogTrigger>
              <DialogContent className="bg-gray-800/95 border-gray-700 text-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl flex items-center gap-2">
                    <service.icon className="w-6 h-6 text-blue-400" />
                    {service.title}
                  </DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Мои проекты в категории {service.title.toLowerCase()}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  {service.projects.map((project, idx) => (
                    <Card 
                      key={idx} 
                      className="bg-gray-700/50 border-gray-600 hover:bg-gray-700/70 transition-colors cursor-pointer"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <CardHeader>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <CardDescription className="text-gray-300">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
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
      </div>
    </div>
  );
};

export default Index;