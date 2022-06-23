import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import imgHeader from '../public/images/headerpc.jpg'
import logo from '../public/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = ({ children }) => {
    return (
        <>
            <header>
                <div className='relative w-[100%] h-[60px]'>
                    <Link href='/'>
                        <a>
                            <Image src={imgHeader} layout='fill' />
                        </a>
                    </Link>
                </div>
                <nav>
                    <div className='bg-[#f5f5f5] h-[49px]'>
                        <ul className='pt-[8px] flex justify-evenly items-center text-[#8c8c8c] max-w-[1080px] mx-auto'>

                            <li className='grow'>
                                <div className='relative w-[140px] h-[31px]'>
                                    <Link href='/'>
                                        <a>
                                            <Image src={logo} layout='fill' />
                                        </a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a>English Page</a>
                                </Link>
                            </li>
                            <li className='px-3'>
                                /
                            </li>
                            <li className='grow-[2]'>
                                <Link href='/'>
                                    <a>中文导购说明</a>
                                </Link>
                            </li>
                            <li className='grow'>
                                <Link href='/'>
                                    <a>新規会員登録</a>
                                </Link>
                            </li>
                            <li className='grow'>
                                <Link href='/'>
                                    <a>マイページ</a>
                                </Link>
                            </li>
                            <li className='grow'>
                                <Link href='/'>
                                    <a>お知らせ</a>
                                </Link>
                            </li>
                            <li className='grow'>
                                <Link href='/'>
                                    <a>FAQ</a>
                                </Link>
                            </li>
                            <li className='grow'>
                                <Link href='/'>
                                    <a>Hambuger</a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className='h-[70px]'>
                        <ul className='flex justify-evenly items-center max-w-[1080px] py-[20px] max-h-full mx-auto'>
                            <li className='grow'>
                                <Link href='/'>
                                    <a>作品から探す</a>
                                </Link>
                            </li>
                            <li className='grow'>
                                <Link href='/'>
                                    <a>声優・アーティストから探す</a>
                                </Link>
                            </li>
                            <li className='grow'>
                                <Link href='/'>
                                    <a>作家から探す</a>
                                </Link>
                            </li>
                            <li className='grow'>
                                <Link href='/'>
                                    <a>ジャンルから探す</a>
                                </Link>
                            </li>
                            <li className='grow'>
                                <Link href='/'>
                                    <a>商品カテゴリから探す</a>
                                </Link>
                            </li>
                            <li className='grow-[3]'>
                                <form>
                                    <input type="text" placeholder='Search' className='input-header w-full py-2 pl-2' />
                                </form>
                            </li>
                        </ul>
                    </div>
                    <div className='h-[68px] bg-[#0079c7] flex text-[#fff]'>
                        <ul className='flex justify-evenly items-center max-w-[1080px] mx-auto grow'>
                            <li>
                                <Link href='/'>
                                    <a>新着商品</a>
                                </Link>
                            </li>
                            <li className="separar relative">
                                <Link href='/'>
                                    <a>限定版・特典</a>
                                </Link>
                            </li>
                            <li className="separar relative">
                                <Link href='/'>
                                    <a>フェア・イベント</a>
                                </Link>
                            </li>
                            <li className="separar relative">
                                <Link href='/'>
                                    <a>ランキング</a>
                                </Link>
                            </li>
                            <li className="separar relative">
                                <Link href='/'>
                                    <a>お買い得商品</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a>logo</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a>logo</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            {children}
        </>
    )
}

export default Header