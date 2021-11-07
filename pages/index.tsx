import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

//por ser typescrip necesito definir el tipo de variable, en este caso home es tipo NextPage
const Home: NextPage = () => {
  return (
    <div className='bg-blue-500'>pagina de index
      
      
      <Link href= 'admin/user'/*asi podemos crear las rutas en nextjs */>
      <p className='cursor-pointer'>ir a pagina admin user</p>
      </Link>

    </div>
  )
}

export default Home
