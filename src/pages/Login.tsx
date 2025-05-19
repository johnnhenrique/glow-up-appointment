
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Login = () => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted');
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration submitted');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 flex items-center justify-center">
        <div className="max-w-md w-full">
          <Card className="border-none shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-playfair">Área do Cliente</CardTitle>
              <CardDescription>
                Faça login ou crie sua conta para agendar consultas e ver seu histórico.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Cadastro</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="mt-4">
                  <form onSubmit={handleLogin}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="seu@email.com" required />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Senha</Label>
                          <Link to="/recuperar-senha" className="text-xs text-clinic-primary hover:underline">
                            Esqueceu a senha?
                          </Link>
                        </div>
                        <Input id="password" type="password" required />
                      </div>
                      <Button type="submit" className="w-full bg-clinic-primary hover:bg-clinic-primary/90">
                        Entrar
                      </Button>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="register" className="mt-4">
                  <form onSubmit={handleRegister}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="register-name">Nome Completo</Label>
                        <Input id="register-name" type="text" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-email">Email</Label>
                        <Input id="register-email" type="email" placeholder="seu@email.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-phone">Telefone</Label>
                        <Input id="register-phone" type="tel" placeholder="(11) 99999-9999" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-password">Senha</Label>
                        <Input id="register-password" type="password" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-password-confirm">Confirmar Senha</Label>
                        <Input id="register-password-confirm" type="password" required />
                      </div>
                      <Button type="submit" className="w-full bg-clinic-primary hover:bg-clinic-primary/90">
                        Cadastrar
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            
            <CardFooter className="flex justify-center border-t p-4">
              <Link to="/" className="text-sm text-gray-600 hover:text-clinic-primary">
                Voltar para a página inicial
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
