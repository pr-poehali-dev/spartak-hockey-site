import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Победа над "Динамо" со счетом 4:2',
      date: '15 октября 2025',
      category: 'Матчи',
      image: 'https://cdn.poehali.dev/projects/114759d8-ec9e-49de-afee-8c63ef1de9d7/files/44be7660-e942-457e-920d-be4fb00dd018.jpg',
      excerpt: 'Наша команда одержала уверенную победу в принципиальном матче против "Динамо". Хет-трик Дмитрия Соколова стал ключом к успеху.',
    },
    {
      id: 2,
      title: 'Новый контракт с нападающим Петровым',
      date: '12 октября 2025',
      category: 'Трансферы',
      image: 'https://cdn.poehali.dev/projects/114759d8-ec9e-49de-afee-8c63ef1de9d7/files/ad3c9e66-d74d-4be4-9f07-bbca69d5d931.jpg',
      excerpt: 'Иван Петров продлил контракт с клубом на три года. Лидер атак команды останется в красно-белых цветах до 2028 года.',
    },
    {
      id: 3,
      title: 'Тренировочный сбор завершен успешно',
      date: '10 октября 2025',
      category: 'Команда',
      image: 'https://cdn.poehali.dev/projects/114759d8-ec9e-49de-afee-8c63ef1de9d7/files/a31e744e-789a-4fea-9206-9a76dbc9c0a5.jpg',
      excerpt: 'Команда вернулась с тренировочного сбора в отличной форме. Главный тренер отметил высокий уровень подготовки всех игроков.',
    },
    {
      id: 4,
      title: 'Михаил Васильев — лучший вратарь месяца',
      date: '8 октября 2025',
      category: 'Награды',
      image: 'https://cdn.poehali.dev/projects/114759d8-ec9e-49de-afee-8c63ef1de9d7/files/ad3c9e66-d74d-4be4-9f07-bbca69d5d931.jpg',
      excerpt: 'Наш вратарь признан лучшим игроком месяца по версии лиги. В сентябре он отразил 95% бросков.',
    },
    {
      id: 5,
      title: 'Молодежная команда победила в турнире',
      date: '5 октября 2025',
      category: 'Молодежка',
      image: 'https://cdn.poehali.dev/projects/114759d8-ec9e-49de-afee-8c63ef1de9d7/files/a31e744e-789a-4fea-9206-9a76dbc9c0a5.jpg',
      excerpt: 'Молодежный состав Спартак-Спорттех выиграл региональный турнир, победив в финале со счетом 5:3.',
    },
    {
      id: 6,
      title: 'Обновление домашней арены завершено',
      date: '1 октября 2025',
      category: 'Инфраструктура',
      image: 'https://cdn.poehali.dev/projects/114759d8-ec9e-49de-afee-8c63ef1de9d7/files/44be7660-e942-457e-920d-be4fb00dd018.jpg',
      excerpt: 'Завершена модернизация домашнего стадиона. Болельщиков ждут новые удобства и улучшенная инфраструктура.',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Матчи':
        return 'bg-primary text-white';
      case 'Трансферы':
        return 'bg-blue-500 text-white';
      case 'Команда':
        return 'bg-green-500 text-white';
      case 'Награды':
        return 'bg-yellow-500 text-white';
      case 'Молодежка':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black mb-4">НОВОСТИ КЛУБА</h1>
          <p className="text-xl">Следите за последними событиями команды</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((news) => (
              <Card key={news.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(news.category)}>
                      {news.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={16} />
                    <span>{news.date}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {news.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
