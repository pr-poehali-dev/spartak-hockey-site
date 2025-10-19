import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Index = () => {
  const stats = [
    { label: 'Побед в сезоне', value: '24', icon: 'Trophy' },
    { label: 'Забитых шайб', value: '186', icon: 'Target' },
    { label: 'Игроков в составе', value: '28', icon: 'Users' },
    { label: 'Лет истории', value: '15', icon: 'Calendar' },
  ];

  const recentNews = [
    {
      title: 'Победа над "Динамо" со счетом 4:2',
      date: '15 октября 2025',
      image: 'https://cdn.poehali.dev/projects/114759d8-ec9e-49de-afee-8c63ef1de9d7/files/44be7660-e942-457e-920d-be4fb00dd018.jpg',
    },
    {
      title: 'Новый контракт с нападающим Петровым',
      date: '12 октября 2025',
      image: 'https://cdn.poehali.dev/projects/114759d8-ec9e-49de-afee-8c63ef1de9d7/files/ad3c9e66-d74d-4be4-9f07-bbca69d5d931.jpg',
    },
    {
      title: 'Тренировочный сбор завершен успешно',
      date: '10 октября 2025',
      image: 'https://cdn.poehali.dev/projects/114759d8-ec9e-49de-afee-8c63ef1de9d7/files/a31e744e-789a-4fea-9206-9a76dbc9c0a5.jpg',
    },
  ];

  const upcomingMatches = [
    { opponent: 'ЦСКА', date: '22 октября', time: '19:00', location: 'Домашний' },
    { opponent: 'СКА', date: '25 октября', time: '18:30', location: 'Выездной' },
    { opponent: 'Локомотив', date: '28 октября', time: '19:30', location: 'Домашний' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section
        className="relative h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://cdn.poehali.dev/projects/114759d8-ec9e-49de-afee-8c63ef1de9d7/files/a31e744e-789a-4fea-9206-9a76dbc9c0a5.jpg)',
        }}
      >
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            СПАРТАК-СПОРТТЕХ
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Сила, честь, победа. Мы создаем историю на льду!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/team">
              <Button size="lg" className="font-semibold">
                Наша команда
              </Button>
            </Link>
            <Link to="/calendar">
              <Button size="lg" variant="outline" className="font-semibold bg-white text-foreground hover:bg-white/90">
                Календарь матчей
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon as any} size={32} className="text-white" />
                  </div>
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Последние новости</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {recentNews.map((news, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{news.date}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/news">
              <Button variant="outline" size="lg">
                Все новости
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Ближайшие матчи</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {upcomingMatches.map((match, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="Shield" size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Спартак-Спорттех vs {match.opponent}</h3>
                        <p className="text-sm text-muted-foreground">{match.location}</p>
                      </div>
                    </div>
                    <div className="text-right md:text-left">
                      <p className="text-lg font-semibold">{match.date}</p>
                      <p className="text-sm text-muted-foreground">{match.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/calendar">
              <Button size="lg">
                Полный календарь
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
