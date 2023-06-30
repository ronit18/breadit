'use client'

import React, { useState } from 'react'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'
import { Icons } from './Icons'
import { signIn } from 'next-auth/react'
import { useToast } from '@/hooks/use-toast'

const UserAuthForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { toast } = useToast()

  const loginWithGoogle = async () => {
    setIsLoading(true)
    try {
      await signIn('google')
    } catch (err: any) {
      toast({
        title: 'There was a problem',
        description:
          'There was an Error logging in with google. Please try again later.',
        variant: 'destructive',
      })

      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('flex justify-center')}>
      <Button
        isLoading={isLoading}
        onClick={loginWithGoogle}
        size="sm"
        className="w-full"
      >
        {isLoading ? null : <Icons.google className="w-4 h-4 mr-2" />}
        Google
      </Button>
    </div>
  )
}

export default UserAuthForm
