import { Roboto, Montserrat, Lato } from 'next/font/google'
 
export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['900'],
  display: 'swap',
})
 
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const lato = Lato({ 
    subsets: ['latin'],
    weight: ['300'],
    display: 'swap'
})