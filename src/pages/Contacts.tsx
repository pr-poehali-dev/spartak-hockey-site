import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Адрес',
      details: ['Москва, ул. Хоккейная, 1', 'Арена Спартак'],
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      details: ['+7 (495) 123-45-67', '+7 (495) 123-45-68 (пресс-служба)'],
    },
    {
      icon: 'Mail',
      title: 'Email',
      details: ['info@spartak-sporttech.ru', 'press@spartak-sporttech.ru'],
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      details: ['Пн-Пт: 9:00 - 18:00', 'Сб-Вс: выходной'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black mb-4">КОНТАКТЫ</h1>
          <p className="text-xl">Свяжитесь с нами</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Имя
                      </label>
                      <Input id="name" placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Телефон
                      </label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Тема
                      </label>
                      <Input id="subject" placeholder="Тема обращения" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Сообщение
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Ваше сообщение..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Контактная информация</h2>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <Icon name={info.icon as any} size={20} className="text-white" />
                        </div>
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-secondary">
                <CardHeader>
                  <CardTitle>Социальные сети</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                    >
                      <Icon name="Facebook" size={24} className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                    >
                      <Icon name="Instagram" size={24} className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                    >
                      <Icon name="Youtube" size={24} className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                    >
                      <Icon name="Twitter" size={24} className="text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Как нас найти</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="w-full h-96 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold">Москва, ул. Хоккейная, 1</p>
                  <p className="text-sm text-muted-foreground">Арена Спартак</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
