import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Calendar = () => {
  const upcomingMatches = [
    {
      id: 1,
      date: '22 октября 2025',
      time: '19:00',
      opponent: 'ЦСКА',
      location: 'Домашний',
      venue: 'Арена Спартак',
    },
    {
      id: 2,
      date: '25 октября 2025',
      time: '18:30',
      opponent: 'СКА',
      location: 'Выездной',
      venue: 'Ледовый дворец',
    },
    {
      id: 3,
      date: '28 октября 2025',
      time: '19:30',
      opponent: 'Локомотив',
      location: 'Домашний',
      venue: 'Арена Спартак',
    },
    {
      id: 4,
      date: '1 ноября 2025',
      time: '18:00',
      opponent: 'Металлург',
      location: 'Выездной',
      venue: 'Металлург Арена',
    },
    {
      id: 5,
      date: '5 ноября 2025',
      time: '19:00',
      opponent: 'Авангард',
      location: 'Домашний',
      venue: 'Арена Спартак',
    },
  ];

  const recentMatches = [
    {
      id: 1,
      date: '15 октября 2025',
      opponent: 'Динамо',
      score: '4:2',
      result: 'Победа',
      location: 'Домашний',
    },
    {
      id: 2,
      date: '12 октября 2025',
      opponent: 'Торпедо',
      score: '2:3',
      result: 'Поражение',
      location: 'Выездной',
    },
    {
      id: 3,
      date: '8 октября 2025',
      opponent: 'Салават Юлаев',
      score: '3:1',
      result: 'Победа',
      location: 'Домашний',
    },
    {
      id: 4,
      date: '5 октября 2025',
      opponent: 'Ак Барс',
      score: '2:2',
      result: 'Ничья',
      location: 'Выездной',
    },
    {
      id: 5,
      date: '1 октября 2025',
      opponent: 'Трактор',
      score: '5:2',
      result: 'Победа',
      location: 'Домашний',
    },
  ];

  const getResultBadge = (result: string) => {
    switch (result) {
      case 'Победа':
        return <Badge className="bg-green-500 text-white">Победа</Badge>;
      case 'Поражение':
        return <Badge className="bg-red-500 text-white">Поражение</Badge>;
      case 'Ничья':
        return <Badge className="bg-gray-500 text-white">Ничья</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black mb-4">КАЛЕНДАРЬ МАТЧЕЙ</h1>
          <p className="text-xl">Расписание игр сезона 2024/2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="upcoming">Предстоящие</TabsTrigger>
              <TabsTrigger value="recent">Прошедшие</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <div className="max-w-4xl mx-auto space-y-4">
                {upcomingMatches.map((match) => (
                  <Card key={match.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Calendar" size={20} className="text-primary" />
                            <span className="text-lg font-semibold">{match.date}</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-lg font-semibold">{match.time}</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-2">
                            Спартак-Спорттех vs {match.opponent}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Icon name="MapPin" size={16} />
                              <span>{match.venue}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center md:text-right">
                          <Badge
                            variant="outline"
                            className={`text-lg px-4 py-2 ${
                              match.location === 'Домашний'
                                ? 'border-primary text-primary'
                                : 'border-muted-foreground text-muted-foreground'
                            }`}
                          >
                            {match.location}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recent">
              <div className="max-w-4xl mx-auto space-y-4">
                {recentMatches.map((match) => (
                  <Card key={match.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Calendar" size={20} className="text-primary" />
                            <span className="text-lg font-semibold">{match.date}</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-2">
                            Спартак-Спорттех vs {match.opponent}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <Badge
                              variant="outline"
                              className={
                                match.location === 'Домашний'
                                  ? 'border-primary text-primary'
                                  : 'border-muted-foreground text-muted-foreground'
                              }
                            >
                              {match.location}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <p className="text-4xl font-black text-primary">{match.score}</p>
                          </div>
                          <div>{getResultBadge(match.result)}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calendar;
