import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Stats = () => {
  const scorers = [
    { rank: 1, name: 'Дмитрий Соколов', number: 91, games: 45, goals: 21, assists: 16, points: 37 },
    { rank: 2, name: 'Иван Петров', number: 10, games: 45, goals: 18, assists: 22, points: 40 },
    { rank: 3, name: 'Алексей Смирнов', number: 23, games: 43, goals: 15, assists: 19, points: 34 },
    { rank: 4, name: 'Максим Волков', number: 77, games: 44, goals: 14, assists: 18, points: 32 },
    { rank: 5, name: 'Сергей Кузнецов', number: 17, games: 45, goals: 12, assists: 25, points: 37 },
  ];

  const defensemenStats = [
    { rank: 1, name: 'Артем Новиков', number: 44, games: 45, goals: 6, assists: 18, plusMinus: 12 },
    { rank: 2, name: 'Роман Федоров', number: 7, games: 44, goals: 5, assists: 14, plusMinus: 8 },
    { rank: 3, name: 'Николай Зайцев', number: 5, games: 45, goals: 4, assists: 15, plusMinus: 10 },
    { rank: 4, name: 'Владимир Попов', number: 27, games: 43, goals: 3, assists: 12, plusMinus: 6 },
    { rank: 5, name: 'Павел Лебедев', number: 2, games: 42, goals: 2, assists: 10, plusMinus: 4 },
  ];

  const goaliesStats = [
    { rank: 1, name: 'Михаил Васильев', number: 30, games: 38, wins: 22, saves: 892, savePct: '92.5%', gaa: '2.15' },
    { rank: 2, name: 'Станислав Егоров', number: 1, games: 18, wins: 9, saves: 456, savePct: '91.2%', gaa: '2.38' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black mb-4">СТАТИСТИКА ИГРОКОВ</h1>
          <p className="text-xl">Сезон 2024/2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Лучшие бомбардиры</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">#</TableHead>
                      <TableHead>Игрок</TableHead>
                      <TableHead className="text-center">№</TableHead>
                      <TableHead className="text-center">И</TableHead>
                      <TableHead className="text-center">Г</TableHead>
                      <TableHead className="text-center">П</TableHead>
                      <TableHead className="text-center">О</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scorers.map((player) => (
                      <TableRow key={player.rank}>
                        <TableCell className="font-bold">{player.rank}</TableCell>
                        <TableCell className="font-medium">{player.name}</TableCell>
                        <TableCell className="text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-bold">
                            {player.number}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">{player.games}</TableCell>
                        <TableCell className="text-center font-semibold text-primary">{player.goals}</TableCell>
                        <TableCell className="text-center font-semibold text-primary">{player.assists}</TableCell>
                        <TableCell className="text-center font-bold">{player.points}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                И — Игры, Г — Голы, П — Передачи, О — Очки
              </div>
            </CardContent>
          </Card>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Лучшие защитники</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">#</TableHead>
                      <TableHead>Игрок</TableHead>
                      <TableHead className="text-center">№</TableHead>
                      <TableHead className="text-center">И</TableHead>
                      <TableHead className="text-center">Г</TableHead>
                      <TableHead className="text-center">П</TableHead>
                      <TableHead className="text-center">+/-</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {defensemenStats.map((player) => (
                      <TableRow key={player.rank}>
                        <TableCell className="font-bold">{player.rank}</TableCell>
                        <TableCell className="font-medium">{player.name}</TableCell>
                        <TableCell className="text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-bold">
                            {player.number}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">{player.games}</TableCell>
                        <TableCell className="text-center font-semibold text-primary">{player.goals}</TableCell>
                        <TableCell className="text-center font-semibold text-primary">{player.assists}</TableCell>
                        <TableCell className="text-center font-bold">
                          <span className={player.plusMinus > 0 ? 'text-green-600' : ''}>
                            +{player.plusMinus}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                И — Игры, Г — Голы, П — Передачи, +/- — Показатель полезности
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Вратари</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">#</TableHead>
                      <TableHead>Игрок</TableHead>
                      <TableHead className="text-center">№</TableHead>
                      <TableHead className="text-center">И</TableHead>
                      <TableHead className="text-center">В</TableHead>
                      <TableHead className="text-center">С</TableHead>
                      <TableHead className="text-center">%С</TableHead>
                      <TableHead className="text-center">ГАА</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {goaliesStats.map((player) => (
                      <TableRow key={player.rank}>
                        <TableCell className="font-bold">{player.rank}</TableCell>
                        <TableCell className="font-medium">{player.name}</TableCell>
                        <TableCell className="text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-bold">
                            {player.number}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">{player.games}</TableCell>
                        <TableCell className="text-center font-semibold text-primary">{player.wins}</TableCell>
                        <TableCell className="text-center">{player.saves}</TableCell>
                        <TableCell className="text-center font-bold">{player.savePct}</TableCell>
                        <TableCell className="text-center font-bold">{player.gaa}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                И — Игры, В — Победы, С — Сейвы, %С — Процент отраженных, ГАА — Пропущенных за игру
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stats;
