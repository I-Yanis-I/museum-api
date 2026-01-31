'use client'

import { useState, type FormEvent } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Button from '@/components/ui/Button'  // ← Ajoute
import Input from '@/components/ui/Input'    // ← Ajoute

export default function LoginForm() {
  const { login } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      await login(formData)
      router.push('/profile')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de connexion')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
    if (error) setError('')
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Connexion</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          required
          disabled={isLoading}
        />

        <Input
          label="Mot de passe"
          type="password"
          value={formData.password}
          onChange={handleChange('password')}
          required
          disabled={isLoading}
        />

        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full"
        >
          Se connecter
        </Button>
      </form>

      <p className="text-center mt-4 text-gray-600">
        Pas encore de compte ?{' '}
        <Link href="/register" className="text-blue-600 hover:underline">
          S&#39;inscrire
        </Link>
      </p>
    </div>
  )
}