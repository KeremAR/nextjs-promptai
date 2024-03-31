import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import {connectToDB} from '@utils/database'
import { Suspense } from 'react'

export const metadata = {

    title: "PromptAI",
    description : 'Discover & share ai prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang ="en">
        <body>
            <Provider>
                <Suspense>
            <div className='main'>
                <div className='gradient'/>

            </div>
            <main className='app'>
                <Nav />
                {children}
            </main>
            </Suspense>
            </Provider>
        </body>
    </html>
    )
}

export default RootLayout