import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Team = () => {
  const players = {
    forwards: [
      { name: 'Иван Петров', number: 10, position: 'Нападающий', goals: 18, assists: 22 },
      { name: 'Алексей Смирнов', number: 23, position: 'Нападающий', goals: 15, assists: 19 },
      { name: 'Дмитрий Соколов', number: 91, position: 'Нападающий', goals: 21, assists: 16 },
      { name: 'Сергей Кузнецов', number: 17, position: 'Нападающий', goals: 12, assists: 25 },
      { name: 'Максим Волков', number: 77, position: 'Нападающий', goals: 14, assists: 18 },
      { name: 'Андрей Морозов', number: 88, position: 'Нападающий', goals: 9, assists: 14 },
    ],
    defensemen: [
      { name: 'Николай Зайцев', number: 5, position: 'Защитник', goals: 4, assists: 15 },
      { name: 'Владимир Попов', number: 27, position: 'Защитник', goals: 3, assists: 12 },
      { name: 'Артем Новиков', number: 44, position: 'Защитник', goals: 6, assists: 18 },
      { name: 'Павел Лебедев', number: 2, position: 'Защитник', goals: 2, assists: 10 },
      { name: 'Роман Федоров', number: 7, position: 'Защитник', goals: 5, assists: 14 },
      { name: 'Евгений Козлов', number: 55, position: 'Защитник', goals: 1, assists: 8 },
    ],
    goalies: [
      { name: 'Михаил Васильев', number: 30, position: 'Вратарь', saves: 892, savePct: '92.5%' },
      { name: 'Станислав Егоров', number: 1, position: 'Вратарь', saves: 456, savePct: '91.2%' },
    ],
  };

  const staff = [
    { name: 'Виктор Иванов', role: 'Главный тренер', experience: '12 лет' },
    { name: 'Олег Петров', role: 'Ассистент тренера', experience: '8 лет' },
    { name: 'Сергей Михайлов', role: 'Тренер вратарей', experience: '10 лет' },
    { name: 'Анна Соколова', role: 'Физиотерапевт', experience: '6 лет' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://cdn.poehali.dev/projects/114759d8-ec9e-49de-afee-8c63ef1de9d7/files/ad3c9e66-d74d-4be4-9f07-bbca69d5d931.jpg)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-black mb-4">НАША КОМАНДА</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Профессионалы, объединенные общей целью — побеждать
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="forwards" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="forwards">Нападающие</TabsTrigger>
              <TabsTrigger value="defensemen">Защитники</TabsTrigger>
              <TabsTrigger value="goalies">Вратари</TabsTrigger>
            </TabsList>

            <TabsContent value="forwards">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {players.forwards.map((player, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{player.name}</CardTitle>
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{player.number}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{player.position}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-2xl font-bold text-primary">{player.goals}</p>
                          <p className="text-xs text-muted-foreground">Голы</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-primary">{player.assists}</p>
                          <p className="text-xs text-muted-foreground">Передачи</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="defensemen">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {players.defensemen.map((player, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{player.name}</CardTitle>
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{player.number}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{player.position}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-2xl font-bold text-primary">{player.goals}</p>
                          <p className="text-xs text-muted-foreground">Голы</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-primary">{player.assists}</p>
                          <p className="text-xs text-muted-foreground">Передачи</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="goalies">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {players.goalies.map((player, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{player.name}</CardTitle>
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{player.number}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{player.position}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-2xl font-bold text-primary">{player.saves}</p>
                          <p className="text-xs text-muted-foreground">Сейвы</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-primary">{player.savePct}</p>
                          <p className="text-xs text-muted-foreground">% отраж.</p>
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

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Тренерский штаб</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {staff.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-white font-bold">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium">Опыт: {member.experience}</p>
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

export default Team;
