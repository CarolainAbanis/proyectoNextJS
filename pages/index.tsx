import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

//por ser typescrip necesito definir el tipo de variable, en este caso home es tipo NextPage
const Home: NextPage = () => {
  return (
    <div className='bg-blue-500'>pagina de index
    <Head>
      <title>home | gestion de proyectos</title>
    </Head>
      
      
      <Link href= 'admin/user'/*asi podemos crear las rutas en nextjs */>
      <p className='cursor-pointer'>ir a pagina admin user</p>
      </Link>
      <div>
      <i className="fas fa-home"></i>
      </div>

    </div>
  )
}

export default Home
