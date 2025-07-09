'use client';

import { useState } from 'react';
import { Box, Button, Heading, Input, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import Loading from '@/components/ui/loading';
import cogoToast from '@successtar/cogo-toast';


const loginSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LoginFormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      loginSchema.parse(loginData);

      cogoToast.success('Login successful!');
      router.push('/students');
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof LoginFormData, string>> = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof LoginFormData;
          fieldErrors[field] = err.message;
        });
        setErrors(fieldErrors);
      } else {
        console.error(error);
        cogoToast.error('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  // 

  return (
    <Box p={8} maxW="lg" mx="auto">

      <Heading fontSize="2xl" marginTop={20}>Miva University</Heading>
      <Text>Login with any random information</Text>


      <form onSubmit={handleSubmit}>
        <Stack marginTop={10}>
          <div>
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={loginData.email}
              onChange={handleInputChange}
            />
            {errors.email && <Text color="red.500" fontSize="sm">{errors.email}</Text>}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              name="password"
              type="password"
              value={loginData.password}
              onChange={handleInputChange}
            />
            {errors.password && <Text color="red.500" fontSize="sm">{errors.password}</Text>}
          </div>

          <Button
            type="submit"
            colorScheme="blue"
            background="blue"
            color="white"
            fontWeight="bold"
            padding={6}
            mt={4}
            disabled={loading}
          >
            Login {loading && <Loading />}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginPage;
